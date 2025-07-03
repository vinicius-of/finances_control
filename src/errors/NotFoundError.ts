import CustomError from './CustomError';

export default class NotFoundError extends CustomError<string> {
  constructor() {
    super({
      message: 'Route not found',
      status: 404,
    });
  }
}
