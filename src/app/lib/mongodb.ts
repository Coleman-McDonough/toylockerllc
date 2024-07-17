// app/lib/mongodb.ts
import { MongoClient, Db } from "mongodb";

const uri =
  "mongodb+srv://colemanpmcdonough:gf8pGAaddqylU2dj@cluster0.equt32p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

export interface DatabaseConnection {
  db: Db;
  client: MongoClient;
}

export async function connectToMongodbToyLocker(): Promise<DatabaseConnection> {
  try {
    // Attempt to connect to the database
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    // If there's an error, log it and throw it to be handled by the caller
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }

  const db = client.db("toy_locker");
  return { db, client };
}
