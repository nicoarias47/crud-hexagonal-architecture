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

  async getAllTasks(): Promise<Task[] | null> {
    const tasks = await this.taskModel.findAll();

    return tasks === null ? null : tasks.map((task) => fromModelToEntity(task));
  }

  async getTaskById(id: number): Promise<Task | null> {
    const task = await this.taskModel.findByPk(id);

    return task === null ? null : fromModelToEntity(task);
  }

  async taskUpdated(id: number, task: Task): Promise<Task | null> {
    const taskUpdated = await this.taskModel.findByPk(id);

    if (taskUpdated === null) {
      return null;
    }

    taskUpdated.set(task);
    await taskUpdated.save();

    return fromModelToEntity(taskUpdated);
  }

  async deleteTask(id: number): Promise<Task | null> {
    const taskDeleted = await this.taskModel.destroy({ where: { id } });

    return taskDeleted === null ? null : fromModelToEntity(taskDeleted);
  }
}
