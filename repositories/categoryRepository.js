const Category = require('../models/category');

class CategoryRepository {
  async findAll() {
    return Category.find();
  }

  async findById(id) {
    return Category.findById(id);
  }

  async create(category) {
    const newCategory = new Category(category);
    return newCategory.save();
  }

  async update(id, category) {
    return Category.findByIdAndUpdate(id, category, { new: true });
  }

  async delete(id) {
    return Category.findByIdAndDelete(id);
  }
}

module.exports = new CategoryRepository();
