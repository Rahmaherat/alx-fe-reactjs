// src/components/HomePage.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import recipesData from '../data.json'; // Importing the mock data

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // Load recipes data when the component mounts
  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe Sharing Platform</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
              <p className="text-gray-600 mt-2">{recipe.summary}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                View Recipe
              </button>
            </div>
          </div>
        </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

