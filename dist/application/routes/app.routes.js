"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_controller_1 = require("../controllers/api.controller");
const app = (0, express_1.default)();
/**
 * @swagger
 * /swapis/peoples:
 *   get:
 *     summary: Returns the list of all the Peoples
 *     tags: [Swapis]
 *     responses:
 *       200:
 *         description: The list of the Peoples
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
app.get('/swapis/peoples', api_controller_1.getAllPeoples);
/**
 * @swagger
 * /swapis/planets:
 *   get:
 *     summary: Returns the list of all the Planets
 *     tags: [Swapis]
 *     responses:
 *       200:
 *         description: The list of the Planets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
app.get('/swapis/planets', api_controller_1.getAllPlanets);
/**
 * @swagger
 * /swapis/fusions:
 *   get:
 *     summary: Returns the list of all the Fusions
 *     tags: [Swapis]
 *     responses:
 *       200:
 *         description: The list of the Fusions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
app.get('/swapis/fusions', api_controller_1.getAllFusions);
exports.default = app;
//# sourceMappingURL=app.routes.js.map