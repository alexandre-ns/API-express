const router = require("express").Router();
const productService = require("../services/productService");

class ProductController {

  async getAllProducts(req, res) {
    try {
      const products = await productService.getAllProducts();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getProductById(req, res) {
    console.log("controller --->1");
    try {
      const product = await productService.getProductById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json(product);
    } catch (err) {
      res.status(404).json({ message: "Product not found" });
    }
  }

  async createProduct(req, res) {
    try {
      const newproduct = await productService.createProduct(req.body);
      res.status(201).json(newproduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async updateProduct(req, res) {
    try {
      const updatedproduct = await productService.updateProduct(
        req.params.id,
        req.body
      );
      if (!updatedproduct) {
        return res.status(404).json({ message: err.message });
      }
      res.status(200).json(updatedproduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async deleteProduct(req, res) {
    try {
      const product = await productService.deleteProduct(req.params.id);
      if (product == null) {
        return res.status(404).json({ message: err.message });
      }
      res.status(200).json({ message: product });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new ProductController();