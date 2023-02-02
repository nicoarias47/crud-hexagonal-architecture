import { ITaskRepository } from "../application/repository/task_repository_interface";
import { TaskModel } from "./task_model";

export class TaskRepository implements ITaskRepository {
  private readonly taskModel: typeof TaskModel;

  constructor(taskModel: TaskModel) {
    this.taskModel = taskModel as any;
  }
}
