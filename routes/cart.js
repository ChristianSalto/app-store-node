const { Router } = require("express");
const { addProductToCart, getCartProducts } = require("../controllers/cart.controller");

const router = Router();

router.post("/", addProductToCart);

router.get("/", getCartProducts);


module.exports = router;