const CategoryRepository = require("../repositories/categoryRepository");

class CategoryService {
  async getAllCategories() {
    const categories = await CategoryRepository.findAll();
    return categories.map((category) => ({
      id: category._id,
      name: category.name,
    }));
  }

  async getCategoryById(id) {
    const category = await CategoryRepository.findById(id);
    return category
      ? {
          id: category._id,
          name: category.name,
        }
      : null;
  }

  async createCategory(category) {
    const newCategory = await CategoryRepository.create(category);
    return {
      id: newCategory._id,
      name: newCategory.name,
    };
  }

  async updateCategory(id, category) {
    const updatedCategory = await CategoryRepository.update(id, category);
    return updatedCategory
      ? {
          id: updatedCategory._id,
          name: updatedCategory.name,
        }
      : null;
  }

  async deleteCategory(id) {
    const deletedCategory = await CategoryRepository.delete(id);
    return deletedCategory
      ? {
          id: deletedCategory._id,
          name: deletedCategory.name,
        }
      : null;
  }
}

module.exports = new CategoryService();