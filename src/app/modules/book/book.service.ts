import { LBook } from "./book.interface";
import { BookModel } from "./book.model";



// Create Book API
export const createBook = async (payload: LBook)=>await BookModel.create(payload);