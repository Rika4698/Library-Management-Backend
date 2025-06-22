import { Router } from "express";
import * as CBook from './book.controller';


const bookRouter = Router();

bookRouter.post("/", CBook.createBook);



export const bookRoutes = bookRouter;