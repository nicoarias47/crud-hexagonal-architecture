"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
const project_entity_1 = require("../../domain/project_entity");
const ProjectEntityNotDefined_1 = require("../error/ProjectEntityNotDefined");
class ProjectService {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    addProject(project) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(project instanceof project_entity_1.Project)) {
                throw new ProjectEntityNotDefined_1.ProjectEntityNotDefined();
            }
            const savedProject = yield this.projectRepository.saveProject(project);
            return savedProject;
        });
    }
    getOneProject(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield this.projectRepository.getOneProject(id);
            return project;
        });
    }
    updateProject(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield this.projectRepository.updateProject(id, body);
            return project;
        });
    }
}
exports.ProjectService = ProjectService;
//# sourceMappingURL=project_service.js.map