export class ProjectDoesNotExist extends Error {
  code: number;

  constructor(message?: string) {
    super();
    this.name = this.constructor.name;
    this.message = message || "This project does not exist";
    this.code = 400;
  }
}
