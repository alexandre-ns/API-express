const CartRepository = require('../repositories/cartRepository');

class CartService {
  async getAllCarts() {
    const carts = await CartRepository.findAll();
    return carts.map((cart) => ({
      id: cart._id,
      user: cart.user,
      products: cart.products
    }));
  }

  async getCartById(id) {
    const cart = await CartRepository.findById(id);
    return cart
      ? {
          id: cart._id,
          user: cart.user,
          products: cart.products
        }
      : null;
  }

  async createCart(cart) {
    const newCart = await CartRepository.create(cart);
    return newCart
      ? {
          id: newCart._id,
          user: newCart.user,
          products: newCart.products
        }
      : null;
  }

  async updateCart(id, cart) {
    const updatedCart = await CartRepository.update(id, cart);
    return updatedCart
      ? {
          id: updatedCart._id,
          user: updatedCart.user,
          products: updatedCart.products
        }
      : null;
  }

  async deleteCart(id) {
    const deletedCart = await CartRepository.delete(id);
    return deletedCart
      ? {
          id: deletedCart._id,
          user: deletedCart.user,
          products: deletedCart.products
        }
      : null;
  }
}

module.exports = new CartService();
