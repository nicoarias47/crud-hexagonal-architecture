import { Project } from "../../domain/project_entity";
import { ProjectDto } from "../dto/project_dto";

export const fromDtoToEntity = ({
  id,
  name,
  priority,
  description,
}: ProjectDto): Project => {
  const projectEntity = new Project(id, name, priority, description);

  return projectEntity;
};
