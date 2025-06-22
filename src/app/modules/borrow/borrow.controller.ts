import { NextFunction, Request, Response } from "express";
import * as borrowService from './borrow.service';
import catchAsync from "../../../utils/catchAsync";




export const createBorrow = catchAsync( async (req: Request, res: Response, next: NextFunction) => {
    try {
        const row = req.body;
        const borrow = await borrowService.createBorrow(row);
        return res.status(201).json({
            success: true,
            message: "Book borrowed successfully",
            data: borrow,
        });
    } catch (error) {
        next(error);
    }
});