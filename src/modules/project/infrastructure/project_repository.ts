import { Project } from "../domain/project_entity";
import { ProjectModel } from "./project_model";
import { fromModelToEntity } from "../application/mapper/fromModelToEntity";

export class ProjectRepository {
  private readonly projectModel: typeof ProjectModel;

  constructor(projectModel: ProjectModel) {
    this.projectModel = projectModel as any;
  }

  async getAllProjects(): Promise<Project[] | null> {
    const projects = await this.projectModel.findAll();

    return projects === null
      ? null
      : projects.map((project) => fromModelToEntity(project));
  }

  async saveProject(project: Project): Promise<Project> {
    const savedProject = await this.projectModel.create(project as any, {
      isNewRecord: Number.isNaN(project),
    });

    return fromModelToEntity(savedProject);
  }
}
