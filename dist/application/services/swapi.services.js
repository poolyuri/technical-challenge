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
exports.getFusion = exports.getPlanets = exports.getPeoples = void 0;
const axios_1 = __importDefault(require("axios"));
const getPeoples = (page) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const peoples = [];
        const { results } = (yield axios_1.default.get(`https://swapi.py4e.com/api/people/?page=${page}`)).data;
        peoples.push(results.map((x) => ({
            name: x.name,
            gender: x.gender,
            homeworld: x.homeworld,
            birth_year: x.birth_year
        })));
        return peoples;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.getPeoples = getPeoples;
const getPlanets = (page) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const planets = [];
        const { results } = (yield axios_1.default.get(`https://swapi.py4e.com/api/planets/?page=${page}`)).data;
        planets.push(results.map((x) => ({
            name: x.name,
            climate: x.climate,
            rotation_period: parseInt(x.rotation_period.toString()),
            orbital_period: parseInt(x.orbital_period.toString())
        })));
        return planets;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.getPlanets = getPlanets;
const getFusion = (page) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { results } = (yield axios_1.default.get(`https://swapi.py4e.com/api/people/?page=${page}`)).data;
        const fusion = yield Promise.all(results.map((people) => __awaiter(void 0, void 0, void 0, function* () {
            const planet = (yield axios_1.default.get(people.homeworld)).data;
            return {
                name: people.name,
                gender: people.gender,
                birth_year: people.birth_year,
                homeworld: people.homeworld,
                name_planet: planet.name,
                climate: planet.climate,
                rotation_period: planet.rotation_period === "unknown" ? null : parseInt(planet.rotation_period.toString()),
                orbital_period: planet.orbital_period === "unknown" ? null : parseInt(planet.orbital_period.toString())
            };
        })));
        return fusion;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.getFusion = getFusion;
//# sourceMappingURL=swapi.services.js.map