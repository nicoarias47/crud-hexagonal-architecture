"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromModelToEntity = void 0;
const project_entity_1 = require("../../domain/project_entity");
const fromModelToEntity = ({ id, name, priority, description, createdAt, updatedAt, }) => {
    const productEntity = new project_entity_1.Project(id, name, priority, description, createdAt, updatedAt);
    return productEntity;
};
exports.fromModelToEntity = fromModelToEntity;
//# sourceMappingURL=fromModelToEntity.js.map