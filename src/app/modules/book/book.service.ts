import { LBook } from "./book.interface";
import { BookModel } from "./book.model";



// Create Book API
export const createBook = async (payload: LBook)=>{ return await BookModel.create(payload);
}

// GET Book by filter, sort, limit
export const getBooks = async(filter:any) => {
    // filter
    const query:any={};
    if(filter.filter){
        query.genre = filter.filter;
    }
    
    //sorting
    const sortQuery: any = {};
    if(filter.sortBy && filter.sort){
         sortQuery[filter.sortBy] = filter.sort === 'asc'? 1: -1;
    }else{
        sortQuery.createAt = -1;
    }
    
    //limit
    const limit = parseInt(filter.limit) || 10;

    return await BookModel.find(query).sort(sortQuery).limit(limit);
}


//GET Book by ID
export const getBookById = async(id:string) => {
    return await BookModel.findById(id);
}