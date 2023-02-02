export class IdIsNotANumber extends Error {
  code: number;

  constructor(id: string) {
    super();
    this.name = this.constructor.name;
    this.message = `Id: ${id} Is not a number`;
    this.code = 400;
  }
}
