const router = require("express").Router();
const productService = require("../services/productService");


// Get all Products
exports.getAllProducts = async (req, res) => {
    try {
      console.log("entrou controller");
      const products = await productService.getAllProducts();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

// get product id
exports.getProductById = async (req, res) => {
    try {
      const product = await productService.getProductById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: err.message });
      }
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

//create new product
exports.createProduct = async (req, res) => {
    try {
        console.log("entrou controller create");
        const newproduct = await productService.createProduct(req.body);
        res.status(201).json(newproduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


// update product
exports.updateProduct = async (req, res) => {
    try {
      const updatedproduct = await productService.updateProduct(req.params.id, req.body);
      if (!updatedproduct) {
        return res.status(404).json({ message: err.message });
      }
      res.status(200).json(updatedproduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };


  //delete product
exports.deleteProduct = async (req, res) => {
    try {
        const product = await productService.deleteProduct(req.params.id);
        if (product == null) {
        return res.status(404).json({ message: err.message });
        }
        res.status(200).json({ message: product });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
