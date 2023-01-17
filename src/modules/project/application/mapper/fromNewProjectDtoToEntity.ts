import { Project } from "../../domain/project_entity";
import { NewProjectDto } from "../dto/newProject_dto";

export const fromNewProjectDtoToEntity = ({
  name,
  priority,
  description,
}: NewProjectDto): Project => {
  const projectEntity = new Project(undefined, name, priority, description);

  return projectEntity;
};
