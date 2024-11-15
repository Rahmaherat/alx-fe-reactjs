// src/components/RecipeList.jsx
// src/recipeStore.js

import { useRecipeStore } from '../recipeStore';
import create from 'zustand';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
  })),
  setRecipes: (recipes) => set({ recipes }),
}));

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet! Add some recipes.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ddd' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};
export { useRecipeStore };
export default RecipeList;


