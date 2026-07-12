require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");

connectDB();
app.get("/", (req, res) => {
  res.send(" I am from server");
});
const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
  console.log("server is runing port 8000");
});
