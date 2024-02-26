import React, { useEffect ,useState } from 'react';
import './App.css';

const App = () => {
  const APP_ID = "6d7d58f8";
  const APP_KEY = "e393fd156855df5c74058a433e342bd4	";
  const {food_recipes, setfood_recipes} = useState([]);
  const {search_recipes, setSearch_recipes} = useState('');
  const {search_query, setSearch_query} = useState('chicken');

  useEffect(() => {
    getRecipesFunction();
  }, [search_query]);

  const getRecipesFunction = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${search_query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setfood_recipes(data.hits);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Recipe Finder App
        </h1>
        <p>
          Amazing Recipes!
        </p>
      </header>
    </div>
  );
}

export default App;
