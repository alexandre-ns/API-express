const Cart = require('../models/cart');


exports.getAllCarts = async () => {
    console.log("entrou service");
    return await Cart.find();
    console.log("saiu service");
};

exports.getCartById = async (id) => {
    return await Cart.findById(id);
};

exports.createCart = async (CartData) => {
    const cart = new Cart(CartData);
    return await cart.save();
};

exports.updateCart = async (id, updateData) => {
    const cart = await Cart.findById(id);
    if (!cart) {
        return null;
    }
    Object.assign(cart, updateData);
    return await cart.save();
};

exports.deleteCart = async (id) => {
    const cart = await Cart.findByIdAndDelete(id);
    
    if(!cart){
        throw new Error('CategoryNotFound');
    }
    return cart;
};