import { Project } from "../../domain/project_entity";

export const fromModelToEntity = ({
  id,
  name,
  priority,
  description,
  createdAt,
  updatedAt,
}: any): Project => {
  const productEntity = new Project(
    id,
    name,
    priority,
    description,
    createdAt,
    updatedAt
  );
  return productEntity;
};
