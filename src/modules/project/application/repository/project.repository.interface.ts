import { Project } from "../../domain/project_entity";

export interface IProjectRepository {
  getAllProjects(): Promise<Project[] | null>;
  saveProject(project: Project): Promise<Project>;
  //addProject(): Promise<Project>;
}
