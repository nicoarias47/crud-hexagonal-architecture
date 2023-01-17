"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectDto = void 0;
class ProjectDto {
    constructor({ id, name, priority, description, }) {
        this.id = id;
        this.name = name;
        this.priority = priority;
        this.description = description;
    }
    validate() {
        if (this.id === undefined) {
            throw new Error("Validation Error");
        }
        if (this.name === undefined) {
            throw new Error("Validation Error");
        }
        if (this.priority === undefined) {
            throw new Error("Validation Error");
        }
        if (this.description === undefined) {
            throw new Error("Validation Error");
        }
    }
}
exports.ProjectDto = ProjectDto;
//# sourceMappingURL=project_dto.js.map