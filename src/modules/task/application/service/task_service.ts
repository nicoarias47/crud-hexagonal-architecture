import { Task } from "../../domain/task_entity";
import { TaskRepository } from "../../infrastructure/task_repository";
import { ITaskRepository } from "../repository/task_repository_interface";

export class TaskService {
  constructor(private readonly taskRepository: ITaskRepository) {}

  async createTask(task: Task): Promise<Task> {
    const taskCreated = await this.taskRepository.createTask(task);

    return taskCreated;
  }

  async getTaskById(id: number): Promise<Task | null> {
    const task = await this.taskRepository.getTaskById(id);

    return task;
  }

  async taskUpdated(id: number, task: Task): Promise<Task | null> {
    const taskUpdated = await this.taskRepository.taskUpdated(id, task);

    return taskUpdated;
  }

  async deleteTask(id: number): Promise<Task | null> {
    const taskDeleted = await this.taskRepository.deleteTask(id);

    return taskDeleted;
  }
}
