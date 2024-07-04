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







/* delete product
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product Deleted Success");
    } catch (error) {
        res.status(500).json(error);
    }
});

// get product
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get all products
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCat = req.params.category;
    try {
        let products;
        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(5);
        } else if (qCat) {
            products = await Product.find({
                categories: {
                    $in: [qCat],
                }
            });
        } else {
            products = await Product.find();
        }

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
});*/
