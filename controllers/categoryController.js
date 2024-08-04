const router = require("express").Router();
const categoryService = require("../services/categoryService");

class CategoryController {
  // Get all orders
  async getAllCategories(req, res) {
      try {
        console.log("entrou controller");
        const categories = await categoryService.getAllCategories();
        res.status(200).json(categories);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    }

  // Get order by id
  async getCategoryById(req, res) {
      try {
        const category = await categoryService.getCategoryById(req.params.id);
        if (!category) {
          return res.status(404).json({ message: err.message });
        }
        res.status(200).json(category);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    }

  //create new orders
  async createCategory(req, res) {
      try {
          console.log("entrou controller create");
          const newCategory = await categoryService.createCategory(req.body);
          res.status(201).json(newCategory);
      } catch (err) {
          res.status(400).json({ message: err.message });
      }
  }


  // update orders
  async updateCategory(req, res) {
      try {
        const updatedCategory = await categoryService.updateCategory(req.params.id, req.body);
        if (!updatedCategory) {
          return res.status(404).json({ message: err.message });
        }
        res.status(200).json(updatedCategory);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }


    //delete orders
  async deleteCategory(req, res) {
      try {
          const category = await categoryService.deleteCategory(req.params.id);
          if (category == null) {
          return res.status(404).json({ message: err.message });
          }
          res.status(200).json({ message: category });
      } catch (err) {
          res.status(500).json({ message: err.message });
      }
  }
}

module.exports = new CategoryController();