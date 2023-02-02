import { TaskRepository } from "../../infrastructure/task_repository";
import { ITaskRepository } from "../repository/task_repository_interface";

export class TaskService {
  constructor(private readonly taskRepository: ITaskRepository) {}
}
