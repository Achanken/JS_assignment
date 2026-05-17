import Recipe from '../models/recipe.model.js';

export const getRecipes = async (filters = {}) => {
  return Recipe.find(filters).sort({ createdAt: -1 });
};

export const createRecipe = async (recipeData) => {
  const recipe = new Recipe(recipeData);
  return recipe.save();
};

export const getRecipeById = async (id) => {
  return Recipe.findById(id);
};

export const updateRecipeById = async (id, updates) => {
  return Recipe.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true
  });
};

export const deleteRecipeById = async (id) => {
  return Recipe.findByIdAndDelete(id);
};
