import { Task } from "../../domain/task_entity";

export const fromModelToEntity = ({
  id,
  name,
  done,
  projectId,
  createdAt,
  updatedAt,
}: any): Task => {
  const TaskEntity = new Task(id, name, done, projectId, createdAt, updatedAt);
  return TaskEntity;
};
