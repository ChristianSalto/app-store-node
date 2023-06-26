const { response, request } = require("express");
const Cart = require("../models/cart");

const addProductToCart = async (req = request, res = response) => {
  try {
    const { name, price, description, img } = req.body;

    const existingProduct = await Cart.findOne({
      username: "admin",
      "products.name": name,
    });

    if (existingProduct) {
      return res
        .status(400)
        .json({ error: "Product already exists in the cart" });
    }

    const product = {
      name,
      price,
      description,
      img,
    };

    const cart = await Cart.findOneAndUpdate(
      { username: "admin" },
      { $push: { products: product } },
      { new: true, upsert: true }
    );

    res.json({ message: "Product added to cart successfully", cart });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error adding product to cart" });
  }
};

const getCartProducts = async (req = request, res = response) => {
  try {
    const products = await Cart.find();

    res.json( products[0] );
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error retrieving cart products" });
  }
};

module.exports = { addProductToCart, getCartProducts };
