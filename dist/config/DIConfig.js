"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rsdi_1 = __importStar(require("rsdi"));
const sequelize_1 = require("sequelize");
const project_module_1 = require("../modules/project/project_module");
const project_model_1 = require("../modules/project/infrastructure/project_model");
const dbConfig = () => {
    if (process.env.PROJECT_STATUS === "development") {
        const sequelize = new sequelize_1.Sequelize({
            dialect: "sqlite",
            storage: "./data/development_database.db",
        });
        return sequelize;
    }
    if (process.env.PROJECT_STATUS === "test") {
        const sequelize = new sequelize_1.Sequelize("sqlite::memory:");
        return sequelize;
    }
    if (process.env.PROJECT_STATUS === "production") {
        const sequelize = new sequelize_1.Sequelize({
            dialect: "sqlite",
            storage: "./data/production_database.db",
        });
        return sequelize;
    }
    throw Error("PROJECT_STATUS env variable not found");
};
const configureProjectModel = (container) => {
    return project_model_1.ProjectModel.setup(container.get("sequelize"));
};
const AddCommonDefinitions = (container) => {
    container.add({
        sequelize: (0, rsdi_1.factory)(dbConfig),
    });
};
const addProjectDefinitions = (container) => {
    container.add({
        ProjectController: (0, rsdi_1.object)(project_module_1.ProjectController).construct((0, rsdi_1.use)(project_module_1.ProjectService), (0, rsdi_1.use)(project_module_1.ProjectRepository)),
        ProjectService: (0, rsdi_1.object)(project_module_1.ProjectService).construct((0, rsdi_1.use)(project_module_1.ProjectRepository)),
        ProjectModel: (0, rsdi_1.factory)(configureProjectModel),
        ProjectRepository: (0, rsdi_1.object)(project_module_1.ProjectRepository).construct((0, rsdi_1.use)(project_model_1.ProjectModel)),
    });
};
function ConfigDIC() {
    const container = new rsdi_1.default();
    AddCommonDefinitions(container);
    addProjectDefinitions(container);
    container.get("sequelize").sync();
    return container;
}
exports.default = ConfigDIC;
//# sourceMappingURL=DIConfig.js.map