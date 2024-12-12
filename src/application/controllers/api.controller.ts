import { Request, Response } from 'express';
import { 
  getPeoples, 
  getPlanets, 
  getFusion 
} from "../services/swapi.services";

export const getAllPeoples = async (req: Request, res: Response) => {
  try {    
    const page = typeof req.query.page === 'string' ? req.query.page : '1';
    debugger
    res.status(200).json(await getPeoples(page));
  } catch (error: any) {
    res.status(500).json({
      status: error,
      message: error.message
    });
  }
};

export const getAllPlanets = async (req: Request, res: Response) => {
  try {
    const page = typeof req.query.page === 'string' ? req.query.page : '1';

    res.status(200).json(await getPlanets(page));
  } catch (error: any) {
    res.status(500).json({
      status: error,
      message: error.message
    });
  }
};

export const getAllFusions = async (req: Request, res: Response) => {
  try {
    const page = typeof req.query.page === 'string' ? req.query.page : '1';
    debugger
    res.status(200).json(await getFusion(page));
  } catch (error: any) {
    res.status(500).json({
      status: error,
      message: error.message
    });
  }
}