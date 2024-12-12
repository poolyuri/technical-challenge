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
exports.getAllFusions = exports.getAllPlanets = exports.getAllPeoples = void 0;
const swapi_services_1 = require("../services/swapi.services");
const getAllPeoples = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = typeof req.query.page === 'string' ? req.query.page : '1';
        debugger;
        res.status(200).json(yield (0, swapi_services_1.getPeoples)(page));
    }
    catch (error) {
        res.status(500).json({
            status: error,
            message: error.message
        });
    }
});
exports.getAllPeoples = getAllPeoples;
const getAllPlanets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = typeof req.query.page === 'string' ? req.query.page : '1';
        res.status(200).json(yield (0, swapi_services_1.getPlanets)(page));
    }
    catch (error) {
        res.status(500).json({
            status: error,
            message: error.message
        });
    }
});
exports.getAllPlanets = getAllPlanets;
const getAllFusions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = typeof req.query.page === 'string' ? req.query.page : '1';
        debugger;
        res.status(200).json(yield (0, swapi_services_1.getFusion)(page));
    }
    catch (error) {
        res.status(500).json({
            status: error,
            message: error.message
        });
    }
});
exports.getAllFusions = getAllFusions;
//# sourceMappingURL=api.controller.js.map