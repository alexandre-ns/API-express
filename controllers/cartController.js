const router = require("express").Router();
const cartService = require("../services/cartService");


// Get all orders
exports.getAllCarts = async (req, res) => {
    try {
      console.log("entrou controller");
      const carts = await cartService.getAllCarts();
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

// Get order by id
exports.getCartById = async (req, res) => {
    try {
      const cart = await cartService.getCartById(req.params.id);
      if (!cart) {
        return res.status(404).json({ message: err.message });
      }
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

//create new orders
exports.createCart = async (req, res) => {
    try {
        console.log("entrou controller create");
        const newCart = await cartService.createCart(req.body);
        res.status(201).json(newCart);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


// update orders
exports.updateCart = async (req, res) => {
    try {
      const updatedCart = await cartService.updateCart(req.params.id, req.body);
      if (!updatedCart) {
        return res.status(404).json({ message: err.message });
      }
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };


  //delete orders
exports.deleteCart = async (req, res) => {
    try {
        const cart = await cartService.deleteCart(req.params.id);
        if (cart == null) {
        return res.status(404).json({ message: err.message });
        }
        res.status(200).json({ message: cart });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
