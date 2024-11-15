// src/components/RecipeDetails.jsx
import { useRecipeStore } from '../recipeStore';
import { Link, useParams } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams(); // Get the recipe ID from the URL params
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(recipeId))
  );

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div>
        <Link to={`/edit/${recipe.id}`}>
          <button>Edit Recipe</button>
        </Link>
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetails;

