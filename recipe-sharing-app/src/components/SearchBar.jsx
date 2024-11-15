// src/components/SearchBar.jsx
import React from 'react';
import { useRecipeStore } from '../recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term); // Update search term in Zustand store
    filterRecipes(); // Filter recipes based on the new search term
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search recipes by title, ingredients, or description..."
        onChange={handleSearchChange}
        style={{ padding: '10px', width: '300px' }}
      />
    </div>
  );
};

export default SearchBar;
