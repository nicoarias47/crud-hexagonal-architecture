export class TaskNotFound extends Error {
  code: number;

  constructor(message?: string) {
    super();
    this.name = this.constructor.name;
    this.message = message || "This task does not exist";
    this.code = 400;
  }
}
