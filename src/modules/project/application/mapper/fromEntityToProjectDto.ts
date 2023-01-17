import { Project } from "../../domain/project_entity";
import { ProjectDto } from "../dto/project_dto";

export const fromEntityToProjectDto = ({
  id,
  name,
  priority,
  description,
}: Project): ProjectDto => {
  const projectDto = new ProjectDto({
    id: Number(id),
    name,
    priority,
    description,
  });
  return projectDto;
};
