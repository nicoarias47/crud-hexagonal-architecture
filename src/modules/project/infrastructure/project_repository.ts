import { Project } from "../domain/project_entity";
import { ProjectModel } from "./project_model";
import { fromModelToEntity } from "../application/mapper/fromModelToEntity";
import { IProjectRepository } from "../application/repository/project.repository.interface";

export class ProjectRepository implements IProjectRepository {
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

  async getOneProject(id: number): Promise<Project | null> {
    const project = await this.projectModel.findByPk(id);

    return project === null ? null : fromModelToEntity(project);
  }

  async updateProject(id: number, body: Object): Promise<Project | null> {
    const project = await this.projectModel.findOne({ where: { id } });

    project?.set(body);

    await project?.save();

    return project === null ? null : fromModelToEntity(project);
  }

  async deleteProject(id: number): Promise<Project> {
    const projectDeleted = await this.projectModel.destroy({ where: { id } });

    return fromModelToEntity(projectDeleted);
  }
}
