import { useState } from 'react'
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />  {/* Display the form to add recipes */}
      <RecipeList />     {/* Display the list of recipes */}
    </div>
  );
}

export default App;


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
       <h1>Recipe Sharing App</h1>
      <AddRecipeForm />  {/* Display the form to add recipes */}
      <RecipeList />     {/* Display the list of recipes */}
        <a href="https://vite.dev" target="_blank">
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App



