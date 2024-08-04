const router = require("express").Router();
const OrderService = require("../services/orderService");

class OrderController {
// Get all orders
  async getAllOrders(req, res) {
    try {
      console.log("entrou controller");
      const orders = await OrderService.getAllOrders();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

// Get order by id
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

//create new orders
  async createOrder(req, res) {
    try {
        console.log("entrou controller create");
        const newOrder = await OrderService.createOrder(req.body);
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


// update orders
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


  //delete orders
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