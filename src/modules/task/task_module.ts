import { Application } from "express";
import DIContainer, { IDIContainer } from "rsdi";
import { TaskController } from "./interface/task_controller";

const initTaskModule = (app: Application, container: DIContainer): void => {
  const taskController: TaskController = (container as IDIContainer).get(
    TaskController
  );
  taskController.configureRoutes(app);
};

export { initTaskModule };
