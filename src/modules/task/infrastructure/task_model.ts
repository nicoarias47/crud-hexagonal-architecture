import { Model, Sequelize, DataTypes } from "sequelize";

export class TaskModel extends Model<any> {
  static setup(sequelizeInstance: Sequelize): typeof TaskModel {
    TaskModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          unique: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        done: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        projectId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize: sequelizeInstance,
        modelName: "Task",
        tableName: "tasks",
        underscored: true,
        paranoid: true,
      }
    );

    return TaskModel;
  }
}
