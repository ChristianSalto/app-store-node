const { Router } = require("express");
const { getProduct, getProductByName } = require("../controllers/product.controller");


const router = Router();

router.get("/", getProduct);

router.get("/search", getProductByName);

module.exports = router;
