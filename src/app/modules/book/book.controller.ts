import { NextFunction, Request, Response } from "express";
import * as serviceBook from './book.service';



//create Book
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

//get all book
export const getBooks = async (req: Request, res:Response, next:NextFunction ) =>{
    try{
        const book = await serviceBook.getBooks(req.query);
        return res.status(201).json({
            success:true,
            message:'Books retrieved successfully',
            data:book,
        });
    }catch(err){
        next(err);
    }
};