import { NextRequest, NextResponse } from "next/server";
import { connectToMongodbToyLocker } from "../../lib/mongodb";
import { ToyLockerUnit } from "../../models/ToyLockerUnit";

// Handles GET requests to /api
export async function GET(request: Request): Promise<NextResponse> {
  try {
    // Connect to MongoDB
    const { db } = await connectToMongodbToyLocker();

    // Fetch data from the toy_locker collection
    const cursor = db.collection<ToyLockerUnit>("toy_locker").find({});
    const allDocuments: ToyLockerUnit[] = await cursor.toArray(); // Type the array of documents

    // Map over the array of documents to select only the unitNumber and renterName fields
    const selectedFields = allDocuments.map((doc) => ({
      unitNumber: doc.unitNumber,
      renterName: doc.renterName,
      isRented: doc.isRented,
      needsCleaning: doc.needsCleaning,
      isVip: doc.isVip,
      dimensions: doc.dimensions,
      leaseEndDate: doc.leaseEndDate,
      hasSigned: doc.hasSigned,
      hasPaid: doc.hasPaid,
      givenThirtyDays: doc.givenThirtyDays,
      isReserved: doc.isReserved,
      moveInDate: doc.moveInDate,
      phoneNumber: doc.phoneNumber,
    }));

    // Return the selected fields as JSON
    return NextResponse.json(selectedFields);
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);

    // Return an error response
    return NextResponse.json(
      { message: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
// Define allowed origins
const allowedOrigins = [
  "http://localhost:3000",
  "http://www.toylocker.llc",
  "http://toylocker.llc",
  "https://toylockerllc.vercel.app/",
];

// Function to get CORS headers based on request origin
function getCorsHeaders(request: NextRequest) {
  const origin = request.headers.get("origin");
  const corsHeaders: Record<string, string> = {
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  if (allowedOrigins.includes(origin || "")) {
    corsHeaders["Access-Control-Allow-Origin"] = origin || "";
  }

  return corsHeaders;
}
// Handle OPTIONS method for CORS preflight
export async function OPTIONS(request: NextRequest): Promise<NextResponse> {
  const corsHeaders = getCorsHeaders(request);
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function PUT(request: NextRequest): Promise<NextResponse> {
  const corsHeaders = getCorsHeaders(request);
  try {
    const requestBody = await request.json();
    const { unitNumber, ...updateData } = requestBody;

    if (!unitNumber) {
      return NextResponse.json(
        { message: "unitNumber is required" },
        { status: 400, headers: corsHeaders },
      ); // Use 400 for bad request
    }

    const { db } = await connectToMongodbToyLocker();

    // Manually set default values for fields that should have them
    const updateObject = {
      $set: {
        ...updateData, // Spread updateData to include all fields to be updated
        renterName: updateData.renterName || "Vacant", // Default to 'Vacant' if not provided
        isRented: updateData.isRented || false,
        needsCleaning: updateData.needsCleaning || false,
        isVip: updateData.isVip || false,
        dimensions: updateData.dimensions || "0x0x0",
        leaseEndDate: updateData.leaseEndDate || "1/1/75",
        hasSigned: updateData.hasSigned || false,
        hasPaid: updateData.hasPaid || false,
        givenThirtyDays: updateData.givenThirtyDays || false,
        lockCode: updateData.lockCode || "0000",
        isReserved: updateData.isReserved || false,
        moveInDate: updateData.moveInDate || "----",
        phoneNumber: updateData.phoneNumber || "--",
      },
    };

    const result = await db
      .collection<ToyLockerUnit>("toy_locker")
      .updateOne({ unitNumber }, updateObject, { upsert: true });

    if (result.matchedCount === 0 && result.upsertedCount > 0) {
      return NextResponse.json(
        { message: "New unit created" },
        { status: 201 },
      ); // Use 201 for Created
    } else if (result.modifiedCount > 0) {
      return NextResponse.json(
        { message: "Unit updated successfully" },
        { status: 200, headers: corsHeaders },
      ); // Use 200 for OK
    } else if (result.modifiedCount > 0) {
      return NextResponse.json(
        { message: "Unit updated successfully" },
        { status: 200, headers: corsHeaders },
      );
    } else {
      // If the update didn't change anything, it's unusual but not necessarily an error.
      // You might want to log this situation or handle it differently.
      console.log("Update did not change anything");
      return NextResponse.json({ message: "No changes made" }, { status: 200 }); // Use 200 OK for consistency
    }
  } catch (error: any) {
    console.error("Error handling PUT request:", error);
    return NextResponse.json(
      { message: `Failed to update or create unit: ${error.message}` },
      { status: 500, headers: corsHeaders },
    ); // Use 500 for Internal Server Error
  }
}
