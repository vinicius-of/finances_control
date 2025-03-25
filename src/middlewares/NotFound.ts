import { Request, Response, NextFunction } from 'express';

export function notFoundResponse(req: Request, res: Response, next: NextFunction) {
    throw new Error();
}