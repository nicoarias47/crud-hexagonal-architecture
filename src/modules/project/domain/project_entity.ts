export class Project {
  id: number | undefined;
  name: string;
  priority: number;
  description: string;
  createdAt: string | undefined;
  updatedAt: string | undefined;

  constructor(
    id: number | undefined,
    name: string,
    priority: number,
    description: string,
    createdAt?: string | undefined,
    updatedAt?: string | undefined
  ) {
    this.id = id;
    this.name = name;
    this.priority = priority;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
