// src/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Store all recipes
  favorites: [], // Store IDs of favorite recipes
  recommendations: [], // Store recommended recipes

  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set((state) => {
    if (!state.favorites.includes(recipeId)) {
      return { favorites: [...state.favorites, recipeId] };
    }
    return state; // Prevent adding duplicates
  }),
   // Action to add a new recipe
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe], // Add new recipe to the list
  })),
   // Update an existing recipe
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe // Replace the old recipe with the updated one
    ),
  })),

  // Delete a recipe by its ID
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== recipeId), // Remove the recipe from the list
  })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId),
  })),

  // Action to generate recommendations based on favorites
  generateRecommendations: () => set((state) => {
    // Mock implementation for recommendations: Suggest recipes related to favorites
    const recommended = state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5 // Randomly select related recipes for demo
    );
    return { recommendations: recommended };
  }),
    // Set the search term for filtering recipes
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Filter recipes based on the search term
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) // Filter by title
    ),

  // Action to initialize recipes (useful for setting up initial data)
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };




