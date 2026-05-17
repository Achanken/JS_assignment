import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Recipe title is required'],
      trim: true,
      minlength: 3
    },
    ingredients: {
      type: [String],
      required: [true, 'Ingredients are required'],
      validate: {
        validator: (value) => Array.isArray(value) && value.length > 0,
        message: 'Add at least one ingredient'
      }
    },
    instructions: {
      type: String,
      required: [true, 'Instructions are required'],
      trim: true,
      minlength: 10
    },
    cookingTime: {
      type: Number,
      required: [true, 'Cooking time is required'],
      min: [1, 'Cooking time must be at least 1 minute']
    },
    difficulty: {
      type: String,
      required: [true, 'Difficulty is required'],
      enum: ['Easy', 'Medium', 'Hard']
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
      enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert', 'Beverage', 'Side']
    }
  },
  {
    timestamps: true
  }
);

recipeSchema.index({ category: 1, difficulty: 1 });

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
