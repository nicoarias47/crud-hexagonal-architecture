export class LimitorOffsetNotANumber extends Error {
  code: number;

  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = "Limit or offset does not a number";
    this.code = 400;
  }
}
