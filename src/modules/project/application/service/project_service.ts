import { Project } from "../../domain/project_entity";
import { ProjectEntityNotDefined } from "../error/ProjectEntityNotDefined";
import { IProjectRepository } from "../repository/project.repository.interface";
export class ProjectService {
  constructor(private readonly projectRepository: IProjectRepository) {}

  async addProject(project: Project): Promise<Project> {
    if (!(project instanceof Project)) {
      throw new ProjectEntityNotDefined();
    }

    const savedProject = await this.projectRepository.saveProject(project);

    return savedProject;
  }

  async getOneProject(id: number): Promise<Project | null> {
    const project = await this.projectRepository.getOneProject(id);

    return project;
  }

  async updateProject(id: number, body: Object): Promise<Project | null> {
    const project = await this.projectRepository.updateProject(id, body);

    return project;
  }
}
