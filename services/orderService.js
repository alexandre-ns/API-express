// services/userService.js
const Order = require('../models/order');

exports.getAllOrders = async () => {
  return await Order.find();
};

exports.getOrderById = async (id) => {
  return await Order.findById(id);
};

exports.createOrder = async (OrderData) => {
  const order = new Order(OrderData);
  return await order.save();
};

exports.updateOrder = async (id, updateData) => {
  const order = await Order.findById(id);
  if (!order) {
    return null;
  }
  Object.assign(order, updateData);
  return await order.save();
};

exports.deleteOrder = async (id) => {
  const order = await Order.findByIdAndDelete(id);
  return order;
};