import { NextFunction, Request, Response } from "express";
import * as serviceBook from './book.service';




export const createBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const book = await serviceBook.createBook(req.body);
       return res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: book,
        });
    } catch (error) {


        next(error);

    }
};