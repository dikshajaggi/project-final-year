const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("api working successfully");
});

app.get("/menu", (req, res) => {
  res.json(menu);
});

app.use("/users", userRoutes);
app.use("/products", productRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`server started on port ${PORT}`));
