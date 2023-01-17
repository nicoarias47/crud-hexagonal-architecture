"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRepository = exports.ProjectController = exports.ProjectService = exports.initProjectModule = void 0;
const project_service_1 = require("./application/service/project_service");
Object.defineProperty(exports, "ProjectService", { enumerable: true, get: function () { return project_service_1.ProjectService; } });
const project_controller_1 = require("./interface/project_controller");
Object.defineProperty(exports, "ProjectController", { enumerable: true, get: function () { return project_controller_1.ProjectController; } });
const project_repository_1 = require("./infrastructure/project_repository");
Object.defineProperty(exports, "ProjectRepository", { enumerable: true, get: function () { return project_repository_1.ProjectRepository; } });
const initProjectModule = (app, container) => {
    const projectController = container.get(project_controller_1.ProjectController);
    projectController.configureRoutes(app);
};
exports.initProjectModule = initProjectModule;
//# sourceMappingURL=project_module.js.map