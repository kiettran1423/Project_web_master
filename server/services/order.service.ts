import { NextFunction, Response } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import OrderModel from "../models/orderModel";


// create new order
export const newOrder = CatchAsyncError(async(data:any,next:NextFunction,res:Response) => {
    const order = await OrderModel.create(data);
    next(order);

    res.status(201).json({
        success: true,
        order,
    })

})

// Get All Orders
export const getAllOrdersService = async (res: Response) => {
    const orders = await OrderModel.find().sort({ createAt: -1});

    res.status(201).json({
        success: true,
        orders,
    });
}