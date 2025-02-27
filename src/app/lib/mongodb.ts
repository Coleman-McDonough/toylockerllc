// app/lib/mongodb.ts
import { MongoClient, Db } from "mongodb"

const uri = process.env.MONGODB_URI || ""
const client = new MongoClient(uri)

export interface DatabaseConnection {
  db: Db
  client: MongoClient
}

export async function connectToMongodbVisitors(): Promise<DatabaseConnection> {
  try {
    await client.connect()
    console.log("Connected to MongoDB - QR Visitors")
  } catch (error) {
    console.error("Error connecting to MongoDB:", error)
    throw error
  }

  const db = client.db("toylockerVisitors")
  return { db, client }
}
