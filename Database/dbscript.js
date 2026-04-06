// import { MongoClient } from "mongodb";

// const url = "mongodb://127.0.0.1:27017";
// const client = new MongoClient(url);

// async function run() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB");

//     const db = client.db("collegeDB");
//     const collection = db.collection("students");

//     await collection.insertOne({
//       name: "Kartik",
//       age: 21,
//       branch: "CSE"
//     });

//     console.log("Data Inserted");
//   } catch (err) {
//     console.error(" Error:", err);
//   } finally {
//     await client.close();
//   }
// }

// run();


// Q1. Employee Management System

//  Collection: employees

// {
//   "name": "Rahul",
//   "age": 25,
//   "department": "IT",
//   "salary": 50000,
//   "status": "active"
// }

//  Tasks:

// 1. Insert a new employee


// 2. Find all employees in IT department


// 3. Find employees with salary > 60000


// 4. Update Rahul’s salary to 55000


// 5. Change status to "inactive"


// 6. Increase salary of all employees by 5000


// 7. Delete employees with age > 60

// dbscript.js
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => console.log("Connected"))
  .catch(err => console.log(err));



  






























// ---

//  Q2. Library System

//  Collection: books

// {
//   "title": "DBMS",
//   "author": "Kumar",
//   "price": 500,
//   "available": true
// }

//  Tasks:

// 1. Insert a book


// 2. Find all available books


// 3. Find books with price < 300


// 4. Update price of a book


// 5. Mark a book as unavailable


// 6. Increase price by 50


// 7. Delete books with price > 1000





//  Q3. User Login System

//  Collection: users

// {
//   "username": "ayush",
//   "email": "ayush@gmail.com",
//   "age": 22,
//   "isActive": true
// }

//  Tasks:

// 1. Insert a user


// 2. Find user by email


// 3. Find active users


// 4. Update email


// 5. Deactivate user


// 6. Increase age by 1


// 7. Delete inactive users





//  Q4. Product Inventory

//  Collection: products

// {
//   "name": "Laptop",
//   "price": 60000,
//   "stock": 10,
//   "category": "Electronics"
// }

//  Tasks:

// 1. Insert product


// 2. Find products with stock < 5


// 3. Find products in Electronics


// 4. Update price


// 5. Increase stock by 5


// 6. Decrease stock after purchase


// 7. Delete out-of-stock products




// Q5. Hospital Records

//  Collection: patients

// {
//   "name": "Amit",
//   "age": 45,
//   "disease": "Diabetes",
//   "admitted": true
// }

//  Tasks:

// 1. Insert patient


// 2. Find patients with Diabetes


// 3. Find patients age > 60


// 4. Update disease


// 5. Discharge patient (admitted = false)


// 6. Increase age by 1


// 7. Delete discharged patients