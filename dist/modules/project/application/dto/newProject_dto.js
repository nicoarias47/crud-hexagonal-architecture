"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewProjectDto = void 0;
class NewProjectDto {
    constructor({ name, priority, description, }) {
        this.name = name;
        this.priority = priority;
        this.description = description;
    }
    validate() {
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
exports.NewProjectDto = NewProjectDto;
//# sourceMappingURL=newProject_dto.js.map