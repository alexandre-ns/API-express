const Order = require('../models/order');

class OrderRepository {
  async findAll() {
    return Order.find();
  }

  async findById(id) {
    return Order.findById(id);
  }

  async create(order) {
    console.log('##################> antes createOrder');
    const newOrder = new Order(order);
    console.log('##################> depois createOrder');
    return newOrder.save();
  }

  async update(id, order) {
    return Order.findByIdAndUpdate(id, order, { new: true });
  }

  async delete(id) {
    return Order.findByIdAndDelete(id);
  }
}

module.exports = new OrderRepository();
