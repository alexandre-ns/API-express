const router = require("express").Router();
const orderService = require("../services/orderService");


// Get all orders
exports.getAllOrders = async (req, res) => {
    try {
      console.log("entrou controller");
      const orders = await orderService.getAllOrders();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

// Get order by id
exports.getOrderById = async (req, res) => {
    try {
      const order = await orderService.getOrderById(req.params.id);
      if (!order) {
        return res.status(404).json({ message: err.message });
      }
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

//create new orders
exports.createOrder = async (req, res) => {
    try {
        console.log("entrou controller create");
        const newOrder = await orderService.createOrder(req.body);
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


// update orders
exports.updateOrder = async (req, res) => {
    try {
      const updatedOrder = await orderService.updateOrder(req.params.id, req.body);
      if (!updatedOrder) {
        return res.status(404).json({ message: err.message });
      }
      res.status(200).json(updatedOrder);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };


  //delete orders
exports.deleteOrder = async (req, res) => {
    try {
        const order = await orderService.deleteOrder(req.params.id);
        if (order == null) {
        return res.status(404).json({ message: err.message });
        }
        res.status(200).json({ message: order });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
