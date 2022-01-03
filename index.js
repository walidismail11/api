const express = require("express")
const app = express(); 
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const { MongoClient } = require("mongodb");
const userRoute = require("./rootes/user")
const authRoute = require("./rootes/auth")
const productRoute = require("./rootes/product");
const cartRoute = require("./rootes/cart");
const orderRoute = require("./rootes/order");
const stripeRoute = require("./rootes/stripe");
const uri = process.env.MONGODB_URI;
const cors = require("cors");
const client = new MongoClient(uri, { useUnifiedTopology: true });

dotenv.config()

client.connect();

app.use(cors());
app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT, () => {
    console.log("Backend server is runnning")
})

