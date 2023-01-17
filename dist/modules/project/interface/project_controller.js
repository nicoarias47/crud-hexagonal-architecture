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
exports.ProjectController = void 0;
const newProject_dto_1 = require("../application/dto/newProject_dto");
const fromNewProjectDtoToEntity_1 = require("../application/mapper/fromNewProjectDtoToEntity");
const fromEntityToProjectDto_1 = require("../application/mapper/fromEntityToProjectDto");
class ProjectController {
    constructor(projectService, projectRepository) {
        this.projectService = projectService;
        this.projectRepository = projectRepository;
        this.baseRoute = "/project";
    }
    configureRoutes(app) {
        app.get(`${this.baseRoute}`, this.getAllProjects.bind(this));
        app.post(`${this.baseRoute}`, this.addProject.bind(this));
    }
    getAllProjects(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const projects = yield this.projectRepository.getAllProjects();
            const result = projects === null || projects === void 0 ? void 0 : projects.map((project) => (0, fromEntityToProjectDto_1.fromEntityToProjectDto)(project));
            res.json({ projects: result });
        });
    }
    addProject(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            try {
                const projectDto = new newProject_dto_1.NewProjectDto(body);
                projectDto.validate();
                const savedProject = yield this.projectService.addProject((0, fromNewProjectDtoToEntity_1.fromNewProjectDtoToEntity)(projectDto));
                res.json({ createdProject: (0, fromEntityToProjectDto_1.fromEntityToProjectDto)(savedProject) });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.ProjectController = ProjectController;
//# sourceMappingURL=project_controller.js.map