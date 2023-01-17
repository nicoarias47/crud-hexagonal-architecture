"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const DIConfig_1 = __importDefault(require("./config/DIConfig"));
const project_module_1 = require("./modules/project/project_module");
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
const container = (0, DIConfig_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, project_module_1.initProjectModule)(app, container);
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.code);
    res.json(err);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=app.js.map