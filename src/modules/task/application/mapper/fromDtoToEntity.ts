import { Task } from "../../domain/task_entity";
import { TaskDto } from "../dto/task_dto";

export const fromDtoToEntity = ({
  id,
  name,
  done,
  projectId,
}: TaskDto): Task => {
  const TaskEntity = new Task(id, name, (done = false), projectId);
  return TaskEntity;
};
