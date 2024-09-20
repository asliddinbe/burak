import express, { Request, Response } from "express";
const routerAdmin = express.Router();
import restaurantController from "./controollers/restaurant.controller";
import productController from "./controollers/product.controller";
import makeUploader  from "./libs/utils/uploader";

/** Restaurant */
routerAdmin.get("/", restaurantController.goHome );

routerAdmin
.get("/login", restaurantController.getLogin )
.post("/login", restaurantController.processLogin );

routerAdmin
.get("/signup", restaurantController.getSignup )
.post("/signup", 
    makeUploader("members").array("memberImage"),
    restaurantController.processSignup );

routerAdmin.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);
/** Product */
routerAdmin.get("/product/all",
    restaurantController.verifyRestaurant,
    productController.getAllProducts
);
routerAdmin.post("/product/create",
    restaurantController.verifyRestaurant,
    makeUploader("products").array("productImage", 5),
    productController.createNewProduct
);
routerAdmin.post("/product/:id",
    restaurantController.verifyRestaurant,
    productController.updateChosenProduct
);
/** User */

export default routerAdmin;

