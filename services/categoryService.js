const User = require('../models/category');


exports.getAllCategories = async () => {
    console.log("entrou service");
    return await Category.find();
    console.log("saiu service");
};  

exports.registerCategory = async (CategoryData) => {
    const category = new Category(CategoryData);
    return await category.save();
};

exports.createCategory = async (CategoryData) => {
    const category = new Category(CategoryData);
    return await category.save();
  };
  
exports.updateCategory = async (id, updateData) => {
    const category = await Category.findById(id);
    if (!category) {
        return null;
    }
    Object.assign(category, updateData);
    return await category.save();
};


exports.deleteCategory = async (id) => {
    const category = await Category.findByIdAndDelete(id);
    
    if(!category){
        throw new Error('CategoryNotFound');
    }
    return category;
};