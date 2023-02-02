import { fromModelToEntity } from "../application/mapper/fromModelToEntity";
import { ITaskRepository } from "../application/repository/task_repository_interface";
import { Task } from "../domain/task_entity";
import { TaskModel } from "./task_model";

export class TaskRepository implements ITaskRepository {
  private readonly taskModel: typeof TaskModel;

  constructor(taskModel: TaskModel) {
    this.taskModel = taskModel as any;
  }

  async createTask(task: Task): Promise<Task> {
    const taskCreated = await this.taskModel.create(task as any);

    return fromModelToEntity(taskCreated);
  }
}
