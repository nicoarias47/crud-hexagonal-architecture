import { Application } from "express";
import DIContainer, { IDIContainer } from "rsdi";
import { ProjectService } from "./application/service/project_service";
import { ProjectController } from "./interface/project_controller";
import { ProjectRepository } from "./infrastructure/project_repository";

const initProjectModule = (app: Application, container: DIContainer): void => {
  const projectController: ProjectController = (container as IDIContainer).get(
    ProjectController
  );
  projectController.configureRoutes(app);
};

export {
  initProjectModule,
  ProjectService,
  ProjectController,
  ProjectRepository,
};
