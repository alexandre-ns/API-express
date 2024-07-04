// services/userService.js
const Product = require('../models/product');

exports.getAllProducts = async () => {
  console.log("entrou service");
  return await Product.find();
  console.log("saiu service");
};

exports.getProductById = async (id) => {
  return await Product.findById(id);
};

exports.createProduct = async (ProductData) => {
  const product = new Product(ProductData);
  return await product.save();
};

exports.updateProduct = async (id, updateData) => {
  const product = await Product.findById(id);
  if (!product) {
    return null;
  }
  Object.assign(product, updateData);
  return await product.save();
};

exports.deleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  console.log(product)
  return product;
};