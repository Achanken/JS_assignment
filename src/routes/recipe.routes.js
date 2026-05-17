import { Router } from 'express';
import {
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe
} from '../controllers/recipe.controller.js';

const router = Router();

router.get('/', getRecipes);
router.post('/', createRecipe);
router.patch('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);

export default router;
