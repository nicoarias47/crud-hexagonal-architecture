import { Project } from "../../domain/project_entity";
import { ProjectRepository } from "../../infrastructure/project_repository";
import { ProjectEntityNotDefined } from "../error/ProjectEntityNotDefined";

export class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async addProject(project: Project): Promise<Project> {
    if (!(project instanceof Project)) {
      throw new ProjectEntityNotDefined();
    }

    const savedProject = await this.projectRepository.saveProject(project);

    return savedProject;
  }
}
