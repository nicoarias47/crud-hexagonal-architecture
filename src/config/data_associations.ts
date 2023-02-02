import { IDIContainer } from "rsdi";
import { TaskModel } from "../modules/task/infrastructure/task_model";
import { ProjectModel } from "../modules/project/infrastructure/project_model";

function SetDataAssociations(container: IDIContainer): void {
  const project: typeof ProjectModel = container.get("ProjectModel");
  const task: typeof TaskModel = container.get("TaskModel");

  project.hasMany(task, {
    foreignKey: "projectId",
    sourceKey: "id",
  });

  task.belongsTo(project, {
    foreignKey: "projectId",
  });
}

export default SetDataAssociations;
