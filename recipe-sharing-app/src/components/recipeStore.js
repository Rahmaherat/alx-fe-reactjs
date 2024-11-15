// src/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Store for all recipes
  searchTerm: '', // Store for the search term

  // Action to set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Action to filter recipes based on the search term
  filteredRecipes: [], // Store for filtered recipes
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
      ) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),

  // Optionally, reset filtered recipes when search term is cleared
  resetFilteredRecipes: () => set({ filteredRecipes: [] }),

  // Action to initialize recipes (useful for fetching or setting all recipes at once)
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };



