import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db("collegeDB");
    const collection = db.collection("students");

    await collection.insertOne({
      name: "Kartik",
      age: 21,
      branch: "CSE"
    });

    console.log("✅ Data Inserted");
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
  }
}

run();