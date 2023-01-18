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
exports.ProjectRepository = void 0;
const fromModelToEntity_1 = require("../application/mapper/fromModelToEntity");
class ProjectRepository {
    constructor(projectModel) {
        this.projectModel = projectModel;
    }
    getAllProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            const projects = yield this.projectModel.findAll();
            return projects === null
                ? null
                : projects.map((project) => (0, fromModelToEntity_1.fromModelToEntity)(project));
        });
    }
    saveProject(project) {
        return __awaiter(this, void 0, void 0, function* () {
            const savedProject = yield this.projectModel.create(project, {
                isNewRecord: Number.isNaN(project),
            });
            return (0, fromModelToEntity_1.fromModelToEntity)(savedProject);
        });
    }
    getOneProject(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield this.projectModel.findByPk(id);
            return project === null ? null : (0, fromModelToEntity_1.fromModelToEntity)(project);
        });
    }
    updateProject(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield this.projectModel.findOne({ where: { id } });
            project === null || project === void 0 ? void 0 : project.set(body);
            yield (project === null || project === void 0 ? void 0 : project.save());
            return project === null ? null : (0, fromModelToEntity_1.fromModelToEntity)(project);
        });
    }
}
exports.ProjectRepository = ProjectRepository;
//# sourceMappingURL=project_repository.js.map