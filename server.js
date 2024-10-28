const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/info", (req, res) => {
  res.json({
    data: {
      fullName: "Le Phuoc Thang",
      studentCode: "QE170122",
    },
  });
});

app.use("/auth", authRoutes);
app.use("/users", userRoutes);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
