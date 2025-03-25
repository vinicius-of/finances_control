import { Request, Response, NextFunction } from "express";
import CustomError from "../errors/CustomError";

export function errorHandler(
    err: unknown,
    req: Request, 
    res: Response, 
    next: NextFunction
) {
    if (process.env.DEBUG) {
        next(err);
        return;
    }

    if (err instanceof CustomError) {
        const { message, code } = err;

        res.status(err.status);
        res.json({
            error: {
                message,
                code
            }
        })
    }
}
  