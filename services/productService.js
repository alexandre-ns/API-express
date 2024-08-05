const productRepository = require("../repositories/productRepository");

class ProductService {
  async getAllProducts() {
    const products = await productRepository.findAll();
    return products.map((product) => ({
      id: product._id,
      name: product.name,
      price: product.price,
      category: product.category,
      quantityStock: product.quantityStock,
      description: product.description,
      createdAt: product.createdAt
    }));
  }

  async getProductById(id) {
    const product = await productRepository.findById(id);
    return product
      ? {
          id: product._id,
          name: product.name,
          price: product.price,
          category: product.category,
          quantityStock: product.quantityStock,
          description: product.description,
          createdAt: product.createdAt
        }
      : null;
  }

  async createProduct(product) {
    const newProduct = await productRepository.create(product);
    return {
      id: newProduct._id,
      name: newProduct.name,
      price: newProduct.price,
      category: newProduct.category,
      quantityStock: newProduct.quantityStock,
      description: product.description,
      createdAt: product.createdAt
    };
  }

  async updateProduct(id, product) {
    const updatedProduct = await productRepository.update(id, product);
    return updatedProduct
      ? {
          id: updatedProduct._id,
          name: updatedProduct.name,
          price: updatedProduct.price,
          category: updatedProduct.category,
          quantityStock: updatedProduct.quantityStock,
          description: product.description,
          createdAt: product.createdAt
        }
      : null;
  }

  async deleteProduct(id) {
    const deletedProduct = await productRepository.delete(id);
    return deletedProduct
      ? {
          id: deletedProduct._id,
          name: deletedProduct.name,
          price: deletedProduct.email,
          category: deletedProduct.category,
          quantityStock: deletedProduct.quantityStock,
          description: product.description,
          createdAt: product.createdAt,
        }
      : null;
  }
}

module.exports = new ProductService();

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
