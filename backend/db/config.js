const mongoose = require("mongoose");

const connectToDatabase = async()=> {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/e-commerce");
    console.log("Connected to the database.");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
}

connectToDatabase();

module.exports = mongoose;
