const { Schema, model } = require("mongoose");

const ProductSchema = Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  img: {
    type: String,
  },
});

ProductSchema.index(
  { name: "text", description: "text" },
  { caseInsensitive: true }
);

module.exports = model("Product", ProductSchema);
