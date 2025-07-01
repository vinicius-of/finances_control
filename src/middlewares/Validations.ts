import { Request, Response, NextFunction } from 'express';
import BadRequestError from '../errors/BadRequestError';

export const params = (dto: Record<string, string>) => (req: Request, res: Response, next: NextFunction): void => {
    const params = req.params as Record<string, unknown>;

    for (const [key, value] of Object.entries(dto)) {
        const badRequestMessage = {
            type: value,
            field: key
        }

        if (!params) {
            throw new BadRequestError({...badRequestMessage, exists: false});
        }

        if (!(key in params)) {
            throw new BadRequestError({...badRequestMessage, exists: false});
        }

        if (!(typeof params[key] === value)) {
            throw new BadRequestError({...badRequestMessage, exists: true});
        }
    }

    next();
}

export const query = (dto: Record<string, string>) => (req: Request, res: Response, next: NextFunction): void => {
    const query = req.query as Record<string, unknown>;

    for (const [key, value] of Object.entries(dto)) {
        const badRequestMessage = {
            type: value,
            field: key
        }

        if (!query) {
            throw new BadRequestError({...badRequestMessage, exists: false});
        }

        if (!(key in query)) {
            throw new BadRequestError({...badRequestMessage, exists: false});
        }

        if (!(typeof query[key] === value)) {
            throw new BadRequestError({...badRequestMessage, exists: true});
        }
    }

    next();
}

export const body = (dto: Record<string, string>) => (req: Request, res: Response, next: NextFunction): void => {
    const body = req.body as Record<string, unknown>;

    for (const [key, value] of Object.entries(dto)) {
        const badRequestMessage = {
            type: value,
            field: key
        }

        if (!body) {
            throw new BadRequestError({...badRequestMessage, exists: false});
        }

        if (!(key in body)) {
            throw new BadRequestError({...badRequestMessage, exists: false});
        }

        if (!(typeof body[key] === value)) {
            throw new BadRequestError({...badRequestMessage, exists: true});
        }
    }

    next();
}