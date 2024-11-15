import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';
import './App.css' 


function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Recipe Sharing App</h1>

        {/* Search Bar */}
        <SearchBar />

        {/* Recipe Form */}
        <AddRecipeForm />

        {/* Recipe List */}
        <RecipeList />

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          <Route path="/edit/:recipeId" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



