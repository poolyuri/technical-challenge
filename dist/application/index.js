"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const app_routes_1 = __importDefault(require("../application/routes/app.routes"));
const swagger_1 = __importDefault(require("../application/swagger/swagger"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// middleware
app.use((0, morgan_1.default)("dev"));
// swagger
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
// routes
app.use('/', app_routes_1.default);
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/api-docs/`);
});
//# sourceMappingURL=index.js.map