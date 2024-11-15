// src/components/EditRecipeForm.jsx
import { useState, useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';
import { useNavigate, useParams } from 'react-router-dom';

const EditRecipeForm = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(recipeId))
  );
  const { updateRecipe } = useRecipeStore();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (recipe) {
      updateRecipe({ id: recipe.id, title, description });
      navigate(`/recipe/${recipe.id}`);
    }
  };

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
