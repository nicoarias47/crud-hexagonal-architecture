"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectEntityNotDefined = void 0;
class ProjectEntityNotDefined extends Error {
    constructor() {
        super();
        this.name = this.constructor.name;
        this.message = "Project not defined";
        this.code = 400;
    }
}
exports.ProjectEntityNotDefined = ProjectEntityNotDefined;
//# sourceMappingURL=ProjectEntityNotDefined.js.map