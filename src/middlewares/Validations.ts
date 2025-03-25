import { Request, Response, NextFunction } from 'express';
import BadRequestError from '../errors/BadRequestError';

export const params = (dto: Record<string, string>) => (req: Request, res: Response, next: NextFunction): void => {
    const params = req.params as Record<string, unknown>;

    for (const [key, value] of Object.entries(dto)) {
        const badRequestMessage = {
            correctType: value,
            field: key
        }

        if (!params) {
            throw new BadRequestError(badRequestMessage);
        }

        if (!(key in params)) {
            throw new BadRequestError(badRequestMessage);
        }

        if (!(typeof params[key] === value)) {
            throw new BadRequestError(badRequestMessage);
        }
    }

    next();
}

export const query = (req: Request, _: any, next: NextFunction) => (dto: Record<string, string>): void => {
    const query = req.query as Record<string, unknown>;

    for (const [key, value] of Object.entries(dto)) {
        const badRequestMessage = {
            correctType: value,
            field: key
        }

        if (!query) {
            throw new BadRequestError(badRequestMessage);
        }

        if (!(key in query)) {
            throw new BadRequestError(badRequestMessage);
        }

        if (!(typeof query[key] === value)) {
            throw new BadRequestError(badRequestMessage);
        }
    }

    next();
}

export const body = (req: Request, _: any, next: NextFunction) => (dto: Record<string, string>): void => {
    const body = req.params as Record<string, unknown>;

    for (const [key, value] of Object.entries(dto)) {
        const badRequestMessage = {
            correctType: value,
            field: key
        }

        if (!body) {
            throw new BadRequestError(badRequestMessage);
        }

        if (!(key in body)) {
            throw new BadRequestError(badRequestMessage);
        }

        if (!(typeof body[key] === value)) {
            throw new BadRequestError(badRequestMessage);
        }
    }

    next();
}