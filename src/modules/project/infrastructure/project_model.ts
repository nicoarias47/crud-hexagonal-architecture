import { Model, Sequelize, DataTypes } from "sequelize";

export class ProjectModel extends Model<any> {
  static setup(sequelizeInstance: Sequelize): typeof ProjectModel {
    ProjectModel.init(
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
        priority: {
          type: DataTypes.NUMBER,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize: sequelizeInstance,
        modelName: "Project",
        tableName: "projects",
        underscored: true,
        paranoid: true,
      }
    );

    return ProjectModel;
  }
}
