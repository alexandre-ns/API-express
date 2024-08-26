const OrderRepository = require('../repositories/orderRepository');

class OrderService {
  async getAllOrders() {
    const orders = await OrderRepository.findAll();
    return orders.map((order) => ({
      id: order._id,
      user: order.user,
      products: order.products,
      totalAmount: order.totalAmount,
      status: order.status,
      createdAt: order.createdAt
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
          createdAt: order.createdAt
        }
      : null;
  }

  async createOrder(order) {
    const newOrder = await OrderRepository.create(order);
    console.log('order [SERVICE]', newOrder, '\n');
    return newOrder
      ? {
          id: newOrder._id,
          user: newOrder.user,
          products: newOrder.products,
          totalAmount: newOrder.totalAmount,
          status: newOrder.status,
          createdAt: newOrder.createdAt
        }
      : null;
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
          quantityStock: deletedProduct.quantityStock
        }
      : null;
  }
}

module.exports = new OrderService();
