const OrderRepository = require("../repositories/orderRepository");

class OrderService {
  async getAllOrders() {
    const orders = await OrderRepository.findAll();
    return orders.map((order) => ({
      id: order._id,
      user: order.user,
      products: order.products,
      totalAmount: order.totalAmount,
      status: order.status,
      createdAt: order.createdAt,
    }));
  }

  async getOrderById(id) {
    const order = await OrderRepository.findById(id);
    return order
      ? {
          id: order._id,
          user: order.user,
          products: order.products,
          totalAmount: order.totalAmount,
          status: order.status,
          createdAt: order.createdAt,
        }
      : null;
  }

  async createOrder(order) {
    const newOrder = await OrderRepository.create(order);
    return {
      id: newOrder._id,
      user: newOrder.user,
      products: newOrder.products,
      totalAmount: newOrder.totalAmount,
      status: newOrder.status,
      createdAt: newOrder.createdAt,
    };
  }

  async updateOrder(id, order) {
    const updatedOrder = await OrderRepository.update(id, order);
    return updatedProduct
      ? {
          id: updatedOrder._id,
          user: updatedOrder.user,
          products: updatedOrder.products,
          totalAmount: updatedOrder.totalAmount,
          status: updatedOrder.status,
          createdAt: updatedOrder.createdAt
        }
      : null;
  }

  async deleteOrder(id) {
    const deletedProduct = await OrderRepository.delete(id);
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

module.exports = new OrderService();

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
