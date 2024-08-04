const ProductRepository = require("../repositories/productRepository");

class UserService {
  async getAllProducts() {
    const products = await ProductRepository.findAll();
    return products.map((product) => ({
      id: product._id,
      name: product.name,
      price: product.email,
      category: product.category,
      quantityStock: product.quantityStock,
    }));
  }

  async getProductById(id) {
    const product = await ProductRepository.findById(id);
    return product
      ? {
          id: product._id,
          name: product.name,
          price: product.email,
          category: product.category,
          quantityStock: product.quantityStock,
        }
      : null;
  }

  async createProduct(product) {
    const newProduct = await ProductRepository.create(product);
    return {
      id: newProduct._id,
      name: newProduct.name,
      price: newProduct.email,
      category: newProduct.category,
      quantityStock: newProduct.quantityStock,
    };
  }

  async updateProduct(id, product) {
    const updatedProduct = await ProductRepository.update(id, product);
    return updatedProduct
      ? {
          id: updatedProduct._id,
          name: updatedProduct.name,
          price: updatedProduct.email,
          category: updatedProduct.category,
          quantityStock: updatedProduct.quantityStock,
        }
      : null;
  }

  async deleteProduct(id) {
    const deletedProduct = await ProductRepository.delete(id);
    return deletedProduct
      ? {
          id: deletedProduct._id,
          name: deletedProduct.name,
          price: deletedProduct.email,
          category: deletedProduct.category,
          quantityStock: deletedProduct.quantityStock,
        }
      : null;
  }
}

module.exports = new UserService();

/* services/userService.js
const category = require("../models/category");
const ProductRepository = require("../repository/productRepository");

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
};*/
