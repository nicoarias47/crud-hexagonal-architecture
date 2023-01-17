export class ProjectEntityNotDefined extends Error {
  code: number;

  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = "Project not defined";
    this.code = 400;
  }
}
