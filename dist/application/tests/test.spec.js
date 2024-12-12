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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_routes_1 = __importDefault(require("../routes/app.routes"));
const supertest_1 = __importDefault(require("supertest"));
describe('GET /swapis/peoples', () => {
    test('should respond with a 200 status code', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_routes_1.default).get('/swapis/peoples').send();
        expect(response.status).toBe(200);
    }));
    test('should respond with an array', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_routes_1.default).get('/swapis/peoples').send();
        expect(response.body).toBeInstanceOf(Array);
    }));
});
describe('GET /swapis/planets', () => {
    test('should respond with a 200 status code', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_routes_1.default).get('/swapis/planets').send();
        expect(response.status).toBe(200);
    }));
    test('should respond with an array', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_routes_1.default).get('/swapis/planets').send();
        expect(response.body).toBeInstanceOf(Array);
    }));
});
describe('GET /swapis/fusions', () => {
    test('should respond with a 200 status code', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_routes_1.default).get('/swapis/fusions').send();
        expect(response.status).toBe(200);
    }));
    test('should respond with an array', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_routes_1.default).get('/swapis/fusions').send();
        expect(response.body).toBeInstanceOf(Array);
    }));
});
//# sourceMappingURL=test.spec.js.map