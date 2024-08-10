const Cart = require('../models/cart');

class CartRepository {
  async findAll() {
    return Cart.find();
  }

  async findById(id) {
    return Cart.findById(id);
  }

  async create(cart) {
    const newCart = new Cart(cart);
    return newCart.save();
  }

  async update(id, cart) {
    return Cart.findByIdAndUpdate(id, cart, { new: true });
  }

  async delete(id) {
    return Cart.findByIdAndDelete(id);
  }
}

module.exports = new CartRepository();
