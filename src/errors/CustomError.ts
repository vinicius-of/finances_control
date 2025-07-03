/**
 * @description
 * @constructor
 */

export default class CustomError<C extends string> extends Error {
  public status: number;
  public code?: C;

  constructor({
    message,
    status,
    code,
  }: {
    message: string;
    status: number;
    code?: C;
  }) {
    super();
    this.message = message;
    this.status = status;
    this.code = code;
  }
}
