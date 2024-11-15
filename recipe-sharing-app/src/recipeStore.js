// src/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],  // Initial empty array for storing recipes

  // Action to add a new recipe
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
  })),

  // Action to set the list of recipes (e.g., for initial loading or resetting)
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };


