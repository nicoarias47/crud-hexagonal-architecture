import { Application, NextFunction, Request, Response } from "express";
import { TaskDto } from "../application/dto/task_dto";
import { IdIsNotANumber } from "../application/error/IdIsNotANumber";
import { TaskNotFound } from "../application/error/TaskNotFound";
import { fromDtoToEntity } from "../application/mapper/fromDtoToEntity";
import { fromEntityToDto } from "../application/mapper/fromEntityToDto";
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
    app.get(`${this.baseRoute}`, this.getAllTasks.bind(this));
    app.get(`${this.baseRoute}/:id`, this.getTaskById.bind(this));
    app.put(`${this.baseRoute}/:id`, this.updateTask.bind(this));
    app.delete(`${this.baseRoute}/:id`, this.deleteTask.bind(this));
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

      res.json(fromEntityToDto(taskCreated));
    } catch (error) {
      next(error);
    }
  }

  async getAllTasks(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const allTasks = await this.taskRepository.getAllTasks();

      const tasksEntity = allTasks?.map((task) => fromEntityToDto(task));

      res.json(tasksEntity);
    } catch (error) {
      next(error);
    }
  }

  async getTaskById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;

    try {
      if (isNaN(Number(id))) {
        throw new IdIsNotANumber(id);
      }
      const task = await this.taskService.getTaskById(Number(id));

      if (!task) {
        throw new TaskNotFound();
      }

      res.json(fromEntityToDto(task));
    } catch (error) {
      next(error);
    }
  }

  async deleteTask(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;

    if (isNaN(Number(id))) {
      throw new IdIsNotANumber(id);
    }

    try {
      const taskDeleted = await this.taskService.deleteTask(Number(id));

      if (!taskDeleted) {
        throw new TaskNotFound();
      }

      res.status(201).json({ message: "Task deleted" });
    } catch (error) {
      next(error);
    }
  }

  async updateTask(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    const { body } = req;

    if (isNaN(Number(id))) {
      throw new IdIsNotANumber(id);
    }

    const taskUpdated = await this.taskService.taskUpdated(Number(id), body);

    if (!taskUpdated) {
      throw new TaskNotFound();
    }

    res.json(fromEntityToDto(taskUpdated));

    try {
    } catch (error) {
      next(error);
    }
  }
}
