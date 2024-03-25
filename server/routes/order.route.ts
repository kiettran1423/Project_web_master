import express from "express";
import { isAuthenticated, authorizeRoles } from "../middleware/auth";
import { createOrder, getAllOrder, newPayment, sendStripePublishableKey } from "../controllers/order.controller";
const orderRouter = express.Router();

orderRouter.post("/create-order", isAuthenticated, createOrder);

orderRouter.get("/get-orders", isAuthenticated, authorizeRoles("admin"), getAllOrder);

orderRouter.get("/payment/stripepublishablekey", sendStripePublishableKey);

orderRouter.post("/payment", isAuthenticated, newPayment);

export default orderRouter;