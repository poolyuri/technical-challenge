import express from "express";
import { 
  getAllPeoples,
  getAllPlanets,
  getAllFusions
 } from "../controllers/api.controller";

const app = express();

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
app.get('/swapis/peoples', getAllPeoples);

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
app.get('/swapis/planets', getAllPlanets);

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
app.get('/swapis/fusions', getAllFusions);

export default app;
