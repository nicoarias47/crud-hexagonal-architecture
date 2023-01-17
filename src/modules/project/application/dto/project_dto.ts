export class ProjectDto {
  id: number;
  name: string;
  priority: number;
  description: string;

  constructor({
    id,
    name,
    priority,
    description,
  }: {
    id: number;
    name: string;
    priority: number;
    description: string;
  }) {
    this.id = id;
    this.name = name;
    this.priority = priority;
    this.description = description;
  }

  validate(): void {
    if (this.id === undefined) {
      throw new Error("Validation Error");
    }
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
