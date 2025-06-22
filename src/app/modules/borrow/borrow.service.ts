import { BookModel } from "../book/book.model";
import { LBorrow } from "./borrow.interface";
import { BorrowModel } from "./borrow.model";





export const createBorrow = async(payload: LBorrow) =>{
    const bookId = await BookModel.findById(payload.book);
    if(!bookId)
        throw new Error ('Book not found');

    if(bookId.copies < payload.quantity)
        throw new Error('Not enough copies available');

    bookId.copies -= payload.quantity;

    await bookId.save();

    const borrow = await BorrowModel.create(payload);

    return borrow;
};