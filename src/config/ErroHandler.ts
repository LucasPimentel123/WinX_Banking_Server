import { Request, Response, NextFunction } from 'express';
import ErrorResponse from './ErrorResponse';

const errorHandler = (err: ErrorResponse, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || "Erro Interno."
  res.status(status).send({ 
    message: message
  });
  
}

export default errorHandler;