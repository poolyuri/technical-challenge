import express from 'express';
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";
import routes from '../application/routes/app.routes';
import specs from "../application/swagger/swagger";

const app = express();
const port = 3000;

app.use(express.json());

// middleware
app.use(morgan("dev"));

// swagger
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

// routes
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/api-docs/`);
});