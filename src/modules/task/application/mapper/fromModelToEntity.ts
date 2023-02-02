import { Task } from "../../domain/task_entity";

export const fromModelToEntity = ({ id, name, done, projectId }: any): Task => {
  const TaskEntity = new Task(id, name, done, projectId);
  return TaskEntity;
};
