const Product = require('../models/product');

class ProductRepository {
  async findAll() {
    return Product.find();
  }

  async findById(id) {
    return Product.findById(id);
  }

  async create(product) {
    const newProduct = new Product(product);
    return newProduct.save();
  }

  async update(id, product) {
    return Product.findByIdAndUpdate(id, product, { new: true });
  }

  async delete(id) {
    return Product.findByIdAndDelete(id);
  }
}

module.exports = new ProductRepository();
