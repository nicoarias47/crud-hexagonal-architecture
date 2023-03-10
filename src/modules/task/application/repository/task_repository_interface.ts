import { Task } from "../../domain/task_entity";

export interface ITaskRepository {
  createTask(task: Task): Promise<Task>;
  getAllTasks(offset: number, limit: number): Promise<Task[] | null>;
  getTaskById(id: number): Promise<Task | null>;
  taskUpdated(id: number, task: Task): Promise<Task | null>;
  deleteTask(id: number): Promise<Task | null>;
  countTasks(): Promise<number>;
}
