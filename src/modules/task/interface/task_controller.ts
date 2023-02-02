import { Application, NextFunction, Request, Response } from "express";
import { TaskDto } from "../application/dto/task_dto";
import { fromDtoToEntity } from "../application/mapper/fromDtoToEntity";
import { ITaskRepository } from "../application/repository/task_repository_interface";
import { TaskService } from "../application/service/task_service";

export class TaskController {
  baseRoute = "/task";
  constructor(
    private readonly taskService: TaskService,
    private readonly taskRepository: ITaskRepository
  ) {}

  configureRoutes(app: Application) {
    app.post(`${this.baseRoute}`, this.createTask.bind(this));
  }

  async createTask(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { body } = req;

    const taskDto = new TaskDto(body);

    try {
      taskDto.validate();

      console.log(taskDto);

      const taskCreated = await this.taskService.createTask(
        fromDtoToEntity(taskDto)
      );

      res.json(taskCreated);
    } catch (error) {
      next(error);
    }
  }
}
