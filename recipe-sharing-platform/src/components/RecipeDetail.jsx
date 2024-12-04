// src/components/RecipeDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../data.json'; // Importing the mock recipe data

function RecipeDetail() {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  // Fetch the recipe details when the component mounts
  useEffect(() => {
    const foundRecipe = recipesData.find(recipe => recipe.id === parseInt(id)); 
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      {/* Recipe Detail Layout: Flexbox (responsive) */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Recipe Image */}
        <div className="w-full lg:w-1/3">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-72 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Recipe Information */}
        <div className="w-full lg:w-2/3">
          {/* Recipe Title */}
          <h1 className="text-4xl font-bold text-gray-800">{recipe.title}</h1>
          <p className="text-gray-600 mt-4">{recipe.summary}</p>

          {/* Ingredients Section */}
          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Ingredients</h2>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {recipe.ingredients?.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </section>

          {/* Cooking Instructions Section */}
          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Cooking Instructions</h2>
            <ol className="list-decimal list-inside mt-2 text-gray-700">
              {recipe.instructions?.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;

