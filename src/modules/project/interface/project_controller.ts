import { Application, NextFunction, Request, Response } from "express";
import { NewProjectDto } from "../application/dto/newProject_dto";
import { ProjectService } from "../application/service/project_service";
import { fromNewProjectDtoToEntity } from "../application/mapper/fromNewProjectDtoToEntity";
import { fromEntityToProjectDto } from "../application/mapper/fromEntityToProjectDto";
import { IProjectRepository } from "../application/repository/project.repository.interface";

export class ProjectController {
  baseRoute = "/project";

  constructor(
    private readonly projectService: ProjectService,
    private readonly projectRepository: IProjectRepository
  ) {}

  configureRoutes(app: Application): void {
    app.get(`${this.baseRoute}`, this.getAllProjects.bind(this));
    app.post(`${this.baseRoute}`, this.addProject.bind(this));
    app.get(`${this.baseRoute}/:id`, this.getOneProject.bind(this));
    app.put(`${this.baseRoute}/:id`, this.updateProject.bind(this));
  }

  async getAllProjects(req: Request, res: Response, next: NextFunction) {
    try {
      const projects = await this.projectRepository.getAllProjects();

      const result = projects?.map((project) =>
        fromEntityToProjectDto(project)
      );

      res.json({ projects: result });
    } catch (error) {
      next(error);
    }
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

  async getOneProject(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    try {
      const project = await this.projectService.getOneProject(Number(id));

      res.json(project);
    } catch (error) {
      next(error);
    }
  }

  async updateProject(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { body } = req;

    try {
      const project = await this.projectService.updateProject(Number(id), body);

      if (project === null) {
        return res
          .status(400)
          .json({ message: `Project ${id} does not exist` });
      }

      res.json(fromEntityToProjectDto(project));
    } catch (error) {
      next(error);
    }
  }
}
