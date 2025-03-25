import CustomError from "./CustomError";

export default class InternalServerError extends CustomError<string> {
    constructor() {
        super({
            message: "Internal Server Error",
            status: 500
        });
    }
}