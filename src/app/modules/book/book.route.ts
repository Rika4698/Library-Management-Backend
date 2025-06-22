import { Router } from "express";
import * as CBook from './book.controller';


const bookRouter = Router();

bookRouter.post("/", CBook.createBook);
bookRouter.get('/', CBook.getBooks);



export const bookRoutes = bookRouter;