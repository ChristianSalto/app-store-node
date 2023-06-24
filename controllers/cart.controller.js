const { response, request } = require("express");

const addProductToCart = (req = request, res = response) => {
  console.log(req.body);
};

module.exports = { addProductToCart };
