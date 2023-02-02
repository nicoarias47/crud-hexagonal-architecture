export class TaskDto {
  id: number;
  name: string;
  done: boolean;
  projectId: number;

  constructor({
    id,
    name,
    done,
    projectId,
  }: {
    id: number;
    name: string;
    done: boolean;
    projectId: number;
  }) {
    this.id = id;
    this.name = name;
    this.done = done;
    this.projectId = projectId;
  }

  validate() {
    if (this.name === undefined) {
      throw new Error("Validation name Error");
    }
    if (this.projectId === undefined) {
      throw new Error("Validation projectId Error");
    }
  }
}
