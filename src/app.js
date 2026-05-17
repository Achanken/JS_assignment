import express from 'express';
import recipeRouter from './routes/recipe.routes.js';
import notFoundHandler from './middlewares/notFound.middleware.js';
import errorHandler from './middlewares/error.middleware.js';

const app = express();

app.use(express.json());

app.use('/recipes', recipeRouter);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
