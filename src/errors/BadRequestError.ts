import CustomError from './CustomError';

export default class BadRequestError extends CustomError<string> {
  private field: string;
  private type: string;

  constructor({
    field,
    type,
    exists,
  }: {
    field: string;
    type: string;
    exists: boolean;
  }) {
    super({
      message: !exists
        ? `Field '${field}' does not exists. Please, insert into the body.`
        : `Field '${field}' does not meet the requirements. It should follow the type: '${type}'.`,
      status: 400,
    });

    this.field = field;
    this.type = type;
  }
}
