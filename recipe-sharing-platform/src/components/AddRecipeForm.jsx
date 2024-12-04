// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';

function AddRecipeForm() {
  // Define state variables for each form field
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState(''); // Renaming to 'steps' to match the error message
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation: check if all fields are filled out
    if (!title || !ingredients || !steps) {
      setError('All fields are required.');
      return;
    }

    // Further validation (e.g., at least two ingredients)
    const ingredientList = ingredients.split('\n').map((ingredient) => ingredient.trim());
    if (ingredientList.length < 2) {
      setError('Please provide at least two ingredients.');
      return;
    }

    // Clear error message
    setError('');

    // Submit form data (you can handle this as per your app's requirement, e.g., sending to an API or updating the state)
    console.log({
      title,
      ingredients: ingredientList,
      steps: steps.split('\n').map((step) => step.trim()), // Renaming to 'steps'
    });

    // Reset form fields after submission
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Add a New Recipe</h1>

      {/* Error message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Recipe Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the recipe title"
          />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">Ingredients</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter ingredients, each on a new line"
            rows="5"
          />
        </div>

        {/* Cooking Steps */}
        <div className="mb-4">
          <label htmlFor="steps" className="block text-gray-700 font-semibold mb-2">Cooking Instructions</label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter cooking instructions, each step on a new line"
            rows="5"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipeForm;


