import { Project } from "../../domain/project_entity";

export interface IProjectRepository {
  getAllProjects(): Promise<Project[] | null>;
  saveProject(project: Project): Promise<Project>;
  getOneProject(id: number): Promise<Project | null>;
  updateProject(id: number, body: Object): Promise<Project | null>;
  deleteProject(id: number): Promise<Project>;
}
