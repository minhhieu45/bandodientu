var express = require("express");
var router = express.Router();
const userController = require("../controllers/user");
const productController = require("../controllers/product");

/* GET home page. */
router.get("/", productController.getIndexProducts);

// Router product
router.get("/product/:productId", productController.getProduct);
router.get(
  "/products/:productType?/:productChild?",
  productController.getProducts
);
router.post("/products/:productType*?", productController.postNumItems);
router.post("/product/:productId", productController.postComment);
// Search
router.get("/search", productController.getSearch);

router.get("/shopping_cart", productController.getCart);

router.get("/add-to-cart/:productId", productController.addToCart);

router.get("/modify-cart", productController.modifyCart);

router.get("/add-order", productController.addOrder);

router.post("/add-order", productController.postAddOrder);

router.get("/delete-cart", productController.getDeleteCart);

router.get("/delete-item/:productId", productController.getDeleteItem);

router.get("/merge-cart", productController.mergeCart);

// User
router.get("/users",userController.getAllAcount);


module.exports = router;
