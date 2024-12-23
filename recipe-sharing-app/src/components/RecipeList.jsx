// src/components/RecipeList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes); // Use filtered recipes
  const filterRecipes = useRecipeStore((state) => state.filterRecipes); // Action to filter recipes
  const searchTerm = useRecipeStore((state) => state.searchTerm); // Get the search term

  useEffect(() => {
    // Trigger filtering when the component mounts or when the search term changes
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes found for "{searchTerm}"</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;



