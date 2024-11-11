const mongoose = require("mongoose");
const express = require("express");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  // '/' is a default page
  res.send("Hello Node API and Servers");
});

// connect to the database

mongoose
  .connect(
    "mongodb+srv://testAdmin:testAdmin@cluster0.o9cfx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch((e) => {
    console.log("Connection failed", e.message);
  });
