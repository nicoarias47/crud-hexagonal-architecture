import { Application, NextFunction, Request, Response } from "express";
import { NewProjectDto } from "../application/dto/newProject_dto";
import { ProjectService } from "../application/service/project_service";
import { ProjectRepository } from "../infrastructure/project_repository";
import { fromNewProjectDtoToEntity } from "../application/mapper/fromNewProjectDtoToEntity";
import { fromEntityToProjectDto } from "../application/mapper/fromEntityToProjectDto";

export class ProjectController {
  baseRoute = "/project";

  constructor(
    private readonly projectService: ProjectService,
    private readonly projectRepository: ProjectRepository
  ) {}

  configureRoutes(app: Application): void {
    app.get(`${this.baseRoute}`, this.getAllProjects.bind(this));
    app.post(`${this.baseRoute}`, this.addProject.bind(this));
  }

  async getAllProjects(req: Request, res: Response, next: NextFunction) {
    const projects = await this.projectRepository.getAllProjects();

    const result = projects?.map((project) => fromEntityToProjectDto(project));

    res.json({ projects: result });
  }

  async addProject(req: Request, res: Response, next: NextFunction) {
    const { body } = req;

    try {
      const projectDto = new NewProjectDto(body);
      projectDto.validate();

      const savedProject = await this.projectService.addProject(
        fromNewProjectDtoToEntity(projectDto)
      );

      res.json({ createdProject: fromEntityToProjectDto(savedProject) });
    } catch (error) {
      next(error);
    }
  }
}
