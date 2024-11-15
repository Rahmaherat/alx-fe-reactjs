// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from '../recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const { deleteRecipe } = useRecipeStore();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
    }
  };

  return <button onClick={useNavigate}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
