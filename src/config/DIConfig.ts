import DIContainer, { factory, object, use } from "rsdi";
import { IDIContainer } from "rsdi/dist/types";
import { Sequelize } from "sequelize";
import {
  ProjectController,
  ProjectRepository,
  ProjectService,
} from "../modules/project/project_module";
import { ProjectModel } from "../modules/project/infrastructure/project_model";
import { TaskModel } from "../modules/task/infrastructure/task_model";
import { TaskController } from "../modules/task/interface/task_controller";
import { TaskService } from "../modules/task/application/service/task_service";
import { TaskRepository } from "../modules/task/infrastructure/task_repository";
import SetDataAssociations from "./data_associations";

const dbConfig = (): Sequelize => {
  if (process.env.PROJECT_STATUS === "development") {
    const sequelize = new Sequelize({
      dialect: "sqlite",
      storage: "./data/development_database.db",
    });
    return sequelize;
  }

  if (process.env.PROJECT_STATUS === "test") {
    const sequelize = new Sequelize("sqlite::memory:");
    return sequelize;
  }

  if (process.env.PROJECT_STATUS === "production") {
    const sequelize = new Sequelize({
      dialect: "sqlite",
      storage: "./data/production_database.db",
    });
    return sequelize;
  }

  throw Error("PROJECT_STATUS env variable not found");
};

const configureProjectModel = (
  container: IDIContainer
): typeof ProjectModel => {
  return ProjectModel.setup(container.get("sequelize"));
};

const configureTaskModel = (container: IDIContainer): typeof TaskModel => {
  return TaskModel.setup(container.get("sequelize"));
};

const AddCommonDefinitions = (container: DIContainer): void => {
  container.add({
    sequelize: factory(dbConfig),
  });
};

const addProjectDefinitions = (container: DIContainer): void => {
  container.add({
    ProjectController: object(ProjectController).construct(
      use(ProjectService),
      use(ProjectRepository)
    ),
    ProjectService: object(ProjectService).construct(use(ProjectRepository)),
    ProjectModel: factory(configureProjectModel),
    ProjectRepository: object(ProjectRepository).construct(use(ProjectModel)),
  });
};

const addTaskDefinitions = (container: DIContainer): void => {
  container.add({
    TaskController: object(TaskController).construct(
      use(TaskService),
      use(TaskRepository)
    ),
    TaskService: object(TaskService).construct(use(TaskRepository)),
    TaskModel: factory(configureTaskModel),
    TaskRepository: object(TaskRepository).construct(use(TaskModel)),
  });
};

export default function ConfigDIC(): DIContainer {
  const container = new DIContainer();
  AddCommonDefinitions(container);
  addProjectDefinitions(container);
  addTaskDefinitions(container);
  (container as IDIContainer).get("sequelize").sync();
  SetDataAssociations(container as IDIContainer);
  return container;
}
