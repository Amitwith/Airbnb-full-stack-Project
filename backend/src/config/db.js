const mongoose = require("mongoose");

async function connectDB(req, res) {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database is connected");
  } catch (error) {
    console.log(error);
    console.log("DataBase Error");
  }
}
module.exports = connectDB;
