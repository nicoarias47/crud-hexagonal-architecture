export class Task {
  id: number;
  name: string;
  done: boolean;
  projectId: number;
  createdAt: string | undefined;
  updatedAt: string | undefined;

  constructor(
    id: number,
    name: string,
    done: boolean,
    projectId: number,
    createdAt?: string | undefined,
    updatedAt?: string | undefined
  ) {
    this.id = id;
    this.name = name;
    this.done = done;
    this.projectId = projectId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
