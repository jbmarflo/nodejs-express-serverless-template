import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../../common/error/http-exception';

export function errorMiddleware(err: HttpException, req: Request, res: Response, next: NextFunction) {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong';

    console.error(`Error: ${message}`);

    res.status(status).json({
        status,
        message
    });
}