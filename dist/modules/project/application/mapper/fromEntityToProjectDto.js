"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromEntityToProjectDto = void 0;
const project_dto_1 = require("../dto/project_dto");
const fromEntityToProjectDto = ({ id, name, priority, description, }) => {
    const projectDto = new project_dto_1.ProjectDto({
        id: Number(id),
        name,
        priority,
        description,
    });
    return projectDto;
};
exports.fromEntityToProjectDto = fromEntityToProjectDto;
//# sourceMappingURL=fromEntityToProjectDto.js.map