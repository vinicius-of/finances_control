import CustomError from "./CustomError";

export default class BadRequestError extends CustomError<string> {
    constructor({field, correctType}: {field: string, correctType: string}) {
        super({
            message: `Error: Bad request - ${field} does not meet the requirements. It should follow the type: ${correctType}`,
            status: 400
        });
    }
}