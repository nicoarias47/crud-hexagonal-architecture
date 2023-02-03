import { Task } from "../../domain/task_entity";
import { TaskDto } from "../dto/task_dto";

export const fromEntityToDto = ({
  id,
  name,
  done,
  projectId,
}: Task): TaskDto => {
  const taskEntity = new TaskDto({
    id: Number(id),
    name,
    done,
    projectId,
  });
  return taskEntity;
};
