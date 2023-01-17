"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModel = void 0;
const sequelize_1 = require("sequelize");
class ProjectModel extends sequelize_1.Model {
    static setup(sequelizeInstance) {
        ProjectModel.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
                unique: true,
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            priority: {
                type: sequelize_1.DataTypes.NUMBER,
                allowNull: false,
            },
            description: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
        }, {
            sequelize: sequelizeInstance,
            modelName: "Project",
            tableName: "Projects",
            underscored: true,
            paranoid: true,
        });
        return ProjectModel;
    }
}
exports.ProjectModel = ProjectModel;
//# sourceMappingURL=project_model.js.map