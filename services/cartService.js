const CartRepository = require("../repositories/productRepository");

class CartService {

  async getAllCarts() {
    return await Cart.find();
  }

  async getCartById() {
    return await Cart.findById(id);
  }

  async createCart() {
    const cart = new Cart(CartData);
    return await cart.save();
  }

  async updateCart() {
    const cart = await Cart.findById(id);
    if (!cart) {
      return null;
    }
    Object.assign(cart, updateData);
    return await cart.save();
  }

  async deleteCart() {
    const cart = await Cart.findByIdAndDelete(id);

    if (!cart) {
      throw new Error("CategoryNotFound");
    }
    return cart;
  }
}

module.exports = new CartService();