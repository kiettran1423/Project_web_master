import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { get } from "http";
import { getNotifications, updateNotification } from "../controllers/notification.controller";

const notificationsRoute = express.Router();

notificationsRoute.get("/get-all-notifications", isAuthenticated, authorizeRoles("admin"), getNotifications);

notificationsRoute.put("/update-notification/:id", isAuthenticated, authorizeRoles("admin"), updateNotification);


export default notificationsRoute;