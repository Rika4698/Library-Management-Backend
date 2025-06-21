

import { ErrorRequestHandler } from 'express';


const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
   if(err.name === 'ValidationError'){
    res.status(404).json({
        message:'Validation failed',
        success:false,
        error:err,
    });
   }else{
    res.status(err.statusCode || 500).json({
        message:err.message || 'Something went wrong',
        success:false,
        error:err,
    });
   }
};

export default globalErrorHandler;