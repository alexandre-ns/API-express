const router = require('express').Router();
const OrderService = require('../services/orderService');
const { RabbitmqQueue } = require('../../src/inf/rabbitmq/rabbitmq');

class OrderController {
  async getAllOrders(req, res) {
    try {
      const orders = await OrderService.getAllOrders();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getOrderById(req, res) {
    try {
      const order = await OrderService.getOrderById(req.params.id);
      if (!order) {
        return res.status(404).json({ message: err.message });
      }
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async createOrder(req, res) {
    console.log('##################> entrou createOrder');
    try {
      //const newOrder = await OrderService.createOrder(req.body);
      await sendMessage(JSON.stringify(req.body)); //NOTE - converte os dados em string por conta do funcionamento do rabbitmq
      console.log('##################> createOrder 2');

      res.status(201).json(newOrder);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async updateOrder(req, res) {
    try {
      const updatedOrder = await OrderService.updateOrder(
        req.params.id,
        req.body
      );
      if (!updatedOrder) {
        return res.status(404).json({ message: err.message });
      }
      res.status(200).json(updatedOrder);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async deleteOrder(req, res) {
    try {
      const order = await OrderService.deleteOrder(req.params.id);
      if (order == null) {
        return res.status(404).json({ message: err.message });
      }
      res.status(200).json({ message: order });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new OrderController();
