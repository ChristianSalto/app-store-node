const mongoose = require("mongoose");

const cartItemSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
  });

const cartSchema = mongoose.Schema({
  username: String,
  products: [cartItemSchema],
});

const Carts = mongoose.model("Carts", cartSchema);

module.exports = Carts;