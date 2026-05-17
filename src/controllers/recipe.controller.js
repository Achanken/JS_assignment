import * as recipeService from '../services/recipe.service.js';
import ApiError from '../utils/apiError.js';

export const getRecipes = async (req, res, next) => {
  try {
    const filters = {};

    if (req.query.category) {
      filters.category = req.query.category;
    }

    const recipes = await recipeService.getRecipes(filters);

    res.json({ status: 'success', count: recipes.length, data: recipes });
  } catch (error) {
    next(error);
  }
};

export const createRecipe = async (req, res, next) => {
  try {
    const recipe = await recipeService.createRecipe(req.body);
    res.status(201).json({ status: 'success', data: recipe });
  } catch (error) {
    next(error);
  }
};

export const updateRecipe = async (req, res, next) => {
  try {
    const recipe = await recipeService.updateRecipeById(req.params.id, req.body);

    if (!recipe) {
      return next(new ApiError(404, 'Recipe not found'));
    }

    res.json({ status: 'success', data: recipe });
  } catch (error) {
    next(error);
  }
};

export const deleteRecipe = async (req, res, next) => {
  try {
    const recipe = await recipeService.deleteRecipeById(req.params.id);

    if (!recipe) {
      return next(new ApiError(404, 'Recipe not found'));
    }

    res.json({ status: 'success', message: 'Recipe deleted successfully' });
  } catch (error) {
    next(error);
  }
};
