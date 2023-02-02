export class Task {
  id: number;
  name: string;
  done: boolean;
  projectId: number;

  constructor(id: number, name: string, done: boolean, projectId: number) {
    this.id = id;
    this.name = name;
    this.done = done;
    this.projectId = projectId;
  }
}
