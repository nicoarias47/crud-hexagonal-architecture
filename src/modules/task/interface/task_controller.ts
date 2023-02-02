import { Application } from "express";
import { ITaskRepository } from "../application/repository/task_repository_interface";
import { TaskService } from "../application/service/task_service";
import { TaskRepository } from "../infrastructure/task_repository";

export class TaskController {
  baseRoute = "/task";
  constructor(
    private readonly taskService: TaskService,
    private readonly taskRepository: ITaskRepository
  ) {}

  configureRoutes(app: Application) {}
}
