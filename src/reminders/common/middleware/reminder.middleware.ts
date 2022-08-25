import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ErrorMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.method === 'PATCH' || req.method === 'DELETE' || req.method === 'PUT')  { 
      res.status(405).send({
        statusCode: 405,
        message: 'Method not allowed'
      });
    }
    next();
  }
}