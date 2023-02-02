import { Task } from "../../domain/task_entity";

export interface ITaskRepository {
  createTask(task: Task): Promise<Task>;
}
