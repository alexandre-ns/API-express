const router = require("express").Router();
const CartService = require("../services/cartService");

class CartController {
  async getAllCarts(req, res) {
    try {
      const carts = await CartService.getAllCarts();
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getCartById(req, res) {
    try {
      const cart = await CartService.getCartById(req.params.id);
      if (!cart) {
        return res.status(404).json({ message: err.message });
      }
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async createCart(req, res) {
    try {
      const newCart = await CartService.createCart(req.body);
      res.status(201).json(newCart);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async updateCart(req, res) {
    try {
      const updatedCart = await CartService.updateCart(req.params.id, req.body);
      if (!updatedCart) {
        return res.status(404).json({ message: err.message });
      }
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async deleteCart(req, res) {
    try {
      const cart = await CartService.deleteCart(req.params.id);
      if (cart == null) {
        return res.status(404).json({ message: err.message });
      }
      res.status(200).json({ message: cart });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new CartController();