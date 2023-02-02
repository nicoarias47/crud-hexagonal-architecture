import { Task } from "../../domain/task_entity";
import { TaskRepository } from "../../infrastructure/task_repository";
import { ITaskRepository } from "../repository/task_repository_interface";

export class TaskService {
  constructor(private readonly taskRepository: ITaskRepository) {}

  async createTask(task: Task): Promise<Task> {
    const taskCreated = await this.taskRepository.createTask(task);

    return taskCreated;
  }
}
