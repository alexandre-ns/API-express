const productRepository = require('../repositories/productRepository');

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
    return newProduct
      ? {
          id: newProduct._id,
          name: newProduct.name,
          price: newProduct.price,
          category: newProduct.category,
          quantityStock: newProduct.quantityStock,
          description: product.description,
          createdAt: product.createdAt
        }
      : null;
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
          createdAt: product.createdAt
        }
      : null;
  }
}

module.exports = new ProductService();
