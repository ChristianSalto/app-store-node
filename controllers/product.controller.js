const { response, request } = require("express");

const getProduct = (req, res = response) => {
  res.json({
    msj: "Get API - getProduct controller",
  });
};

const getProductByName = (req = request, res = response) => {
  console.log(req.query.name);

  res.json({
    msj: "Get API - getProductByName controller",
  });
};

module.exports = { getProduct, getProductByName };
