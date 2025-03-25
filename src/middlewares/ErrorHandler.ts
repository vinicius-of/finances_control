import { Request, Response, NextFunction } from "express";
import CustomError from "../errors/CustomError";
import InternalServerError from "../errors/InternalServerError";

export function ErrorHandler(
    err: unknown,
    req: Request, 
    res: Response, 
    next: NextFunction
) {
    if (process.env.DEBUG === "true") {
        next(err);
        return;
    }

    if (err instanceof CustomError) {
        const { message, code } = err;
        res.status(err.status).json({
            error: {
                message,
                code
            }
        })
        return;
    }

    const internalServerError = new InternalServerError();
    res.status(internalServerError.status).json({
        error: {
            message: internalServerError.message,
        }
    })
    return;
}