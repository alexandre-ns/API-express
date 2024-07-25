const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cartController')

// Definindo rotas e associando controladores
router.get('/', CartController.getAllCarts);
router.get('/:id', CartController.getCartById);
router.post('/', CartController.createCart);
router.put('/:id', CartController.updateCart);
router.delete('/:id', CartController.deleteCart);

module.exports = router; // Exporta o roteador