import DIContainer, { factory, object, use } from "rsdi";
import { IDIContainer } from "rsdi/dist/types";
import { Sequelize } from "sequelize";
import {
  ProjectController,
  ProjectRepository,
  ProjectService,
} from "../modules/project/project_module";
import { ProjectModel } from "../modules/project/infrastructure/project_model";

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

export default function ConfigDIC(): DIContainer {
  const container = new DIContainer();
  AddCommonDefinitions(container);
  addProjectDefinitions(container);
  (container as IDIContainer).get("sequelize").sync();
  return container;
}
