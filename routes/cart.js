const { Router } = require("express");
const { addProductToCart } = require("../controllers/cart.controller");

const router = Router();

router.post("/", addProductToCart);


module.exports = router;