import axios from "axios";
import { People } from "../models/People.model";
import { Planet } from "../models/Planet.model";
import { Fusion } from "../models/Fusion.model";

export const getPeoples = async (page: string) => {
  try {    
    const peoples: People[] = [];
    const { results } = (await axios.get(`https://swapi.py4e.com/api/people/?page=${page}`)).data;

    peoples.push(
      results.map((x: People) => ({ 
        name: x.name, 
        gender: x.gender,
        homeworld: x.homeworld,
        birth_year: x.birth_year 
      }))
    );
    
    return peoples;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPlanets = async (page: string) => {
  try {
    const planets: Planet[] = [];
    const { results } = (await axios.get(`https://swapi.py4e.com/api/planets/?page=${page}`)).data;

    planets.push(
      results.map((x: Planet) => ({ 
        name: x.name, 
        climate: x.climate,
        rotation_period: parseInt(x.rotation_period.toString()),
        orbital_period: parseInt(x.orbital_period.toString())
      }))
    );
    
    return planets;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getFusion = async (page: string) => {
  try {
    const { results } = (await axios.get(`https://swapi.py4e.com/api/people/?page=${page}`)).data;

    const fusion: Fusion[] = await Promise.all(results.map(async (people: People) => {
      const planet = (await axios.get(people.homeworld)).data;
      return {
        name: people.name, 
        gender: people.gender,
        birth_year: people.birth_year,
        homeworld: people.homeworld,
        name_planet: planet.name, 
        climate: planet.climate,
        rotation_period: planet.rotation_period === "unknown" ? null : parseInt(planet.rotation_period.toString()),
        orbital_period: planet.orbital_period === "unknown" ? null : parseInt(planet.orbital_period.toString())
      }
    }));

    return fusion;
  } catch (error) {
    console.log(error);
    throw error;
  }
}