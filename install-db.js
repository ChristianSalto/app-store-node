require("dotenv").config();
const { dbConnection } = require("./database/config");

const Products = require("./models/product");
const Cart = require("./models/cart");
const productsJson = require("./products.json");

(async () => {
  try {
    console.log("Connecting to the database...");
    const conn = await dbConnection();

    await Products.deleteMany();
    await Cart.deleteMany();
    const insertionPromise = Products.insertMany(productsJson);
    await Promise.all([insertionPromise]);

    console.log("All operations completed, closing the connection...");
    conn.close();

    console.log("Connection closed.");
  } catch (error) {
    console.log("Error:", error);
    process.exit(1);
  }
})();
