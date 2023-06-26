const { response, request } = require("express");
const Product = require("../models/product");

const getProduct = async (req, res = response) => {
  try {
    const products = await Product.find();

    res.json({
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error al obtener los productos",
    });
  }
};

const getProductByName = async (req = request, res = response) => {
  try {
    const keyword = req.query.keyword;

    const products = await Product.find({
      $or: [
        { name: { $regex: `^${keyword}`, $options: "i" } },
        { description: { $regex: `^${keyword}`, $options: "i" } },
      ],
    });

    res.json({
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error al buscar productos",
    });
  }
};

module.exports = { getProduct, getProductByName };
