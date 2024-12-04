// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';

function AddRecipeForm() {
  // Define state variables for each form field
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState(''); // Renamed to 'steps' to match error message
  const [errors, setErrors] = useState({}); // State for validation errors

  // Validation logic
  const validate = () => {
    const newErrors = {}; // Object to hold any errors

    // Check if title is empty
    if (!title.trim()) {
      newErrors.title = 'Recipe title is required.';
    }

    // Check if ingredients is empty or doesn't have at least 2 ingredients
    const ingredientList = ingredients.split('\n').map((ingredient) => ingredient.trim());
    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    } else if (ingredientList.length < 2) {
      newErrors.ingredients = 'Please provide at least two ingredients.';
    }

    // Check if steps are empty
    if (!steps.trim()) {
      newErrors.steps = 'Cooking steps are required.';
    }

    setErrors(newErrors); // Set the errors state
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const isValid = validate();
    if (!isValid) return; // If validation fails, do not submit

    // Clear errors if validation passes
    setErrors({});

    // Submit form data (handle as per your app's requirement, e.g., sending to an API)
    console.log({
      title,
      ingredients: ingredients.split('\n').map((ingredient) => ingredient.trim()),
      steps: steps.split('\n').map((step) => step.trim()),
    });

    // Reset form fields after submission
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Add a New Recipe</h1>

      {/* Error message display */}
      {Object.keys(errors).length > 0 && (
        <div className="mb-4 text-red-500">
          {Object.values(errors).map((error, index) => (
            <p key={index} className="mb-2">{error}</p>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Recipe Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-3 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter the recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-2">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">Ingredients</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full p-3 border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter ingredients, each on a new line"
            rows="5"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-2">{errors.ingredients}</p>}
        </div>

        {/* Cooking Steps */}
        <div className="mb-4">
          <label htmlFor="steps" className="block text-gray-700 font-semibold mb-2">Cooking Instructions</label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full p-3 border ${errors.steps ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter cooking instructions, each step on a new line"
            rows="5"
          />
          {errors.steps && <p className="text-red-500 text-sm mt-2">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-auto"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipeForm;




