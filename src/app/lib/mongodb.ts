// app/lib/mongodb.ts
import { MongoClient, Db } from "mongodb"

let client: MongoClient | null = null

export interface DatabaseConnection {
  db: Db
  client: MongoClient
}

export async function connectToMongodbVisitors(): Promise<DatabaseConnection> {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error("MONGODB_URI is not set")
  }

  if (!client) {
    client = new MongoClient(uri)
  }

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
