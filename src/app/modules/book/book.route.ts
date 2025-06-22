import { Router } from "express";
import * as CBook from './book.controller';
import validateRequest from "../../../validation/validateRequest";
import { createBookZodSchema } from "./book.validation";


const bookRouter = Router();

bookRouter.post("/", validateRequest(createBookZodSchema), CBook.createBook);
bookRouter.get('/', CBook.getBooks);
bookRouter.get('/:bookId', CBook.getBookById);



export const bookRoutes = bookRouter;