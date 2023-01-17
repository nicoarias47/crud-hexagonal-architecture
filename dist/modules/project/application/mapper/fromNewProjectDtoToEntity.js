"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromNewProjectDtoToEntity = void 0;
const project_entity_1 = require("../../domain/project_entity");
const fromNewProjectDtoToEntity = ({ name, priority, description, }) => {
    const projectEntity = new project_entity_1.Project(undefined, name, priority, description);
    return projectEntity;
};
exports.fromNewProjectDtoToEntity = fromNewProjectDtoToEntity;
//# sourceMappingURL=fromNewProjectDtoToEntity.js.map