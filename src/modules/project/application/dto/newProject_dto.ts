export class NewProjectDto {
  name: string;
  priority: number;
  description: string;

  constructor({
    name,
    priority,
    description,
  }: {
    name: string;
    priority: number;
    description: string;
  }) {
    this.name = name;
    this.priority = priority;
    this.description = description;
  }

  validate(): void {
    if (this.name === undefined) {
      throw new Error("Validation Error");
    }
    if (this.priority === undefined) {
      throw new Error("Validation Error");
    }
    if (this.description === undefined) {
      throw new Error("Validation Error");
    }
  }
}
