import React, { useEffect, useState, useCallback } from 'react';
import RecipeCard from './RecipeCard';
import './App.css';

const App = () => {
  const APP_ID = "6d7d58f8";
  const APP_KEY = "e393fd156855df5c74058a433e342bd4";
  const [food_recipes, setFood_recipes] = useState([]);
  const [search_recipe, setSearch_recipe] = useState('');
  const [search_query, setSearch_query] = useState('chicken');

  const getRecipesFunction = useCallback(async () => {
    const from = 0;
    const to = 12;
    const response = await fetch(`https://api.edamam.com/search?q=${search_query}&app_id=${APP_ID}&app_key=${APP_KEY.trim()}&from=${from}&to=${to}`);
      const data = await response.json();
      setFood_recipes(data.hits);
  }, [search_query]); 

  useEffect(() => {
    getRecipesFunction();
  }, [getRecipesFunction]);


  const updateSearchFunction = (e) => {
    setSearch_recipe(e.target.value);
  };

  const getSearchFunction = (e) => {
    e.preventDefault();
    setSearch_query(search_recipe);
    setSearch_recipe('');
  };

  return (
    <div className="min-h-screen font-sans bg-lime-100">
      <header className="py-8 text-white bg-lime-500 py-"> 
                <div className="container mx-auto text-center"> 
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"> 
                        <span className="block"> Recipe Finder App
                        </span> 
                    </h1> 
                </div> 
            </header>
            <div className="container p-4 mx-auto mt-8 sm:px-6 lg:px-8"> 
                <form 
                    onSubmit={getSearchFunction} 
                    className="flex flex-col items-center justify-center p-4 space-y-4 bg-white rounded-lg shadow-md sm:p-6 lg:p-8 sm:flex-row sm:space-y-0 sm:space-x-4"
                > 
                    <div className="relative justify-center flex-grow w-full sm:w-1/2"> 
                        <input 
                            type="text"
                            name="search"
                            value={search_recipe} 
                            onChange={updateSearchFunction} 
                            placeholder="Search for recipes..."
                            className="w-full px-4 py-3 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-blue-300 rounded-full outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 focus:bg-transparent focus:shadow-md"
                        /> 
                    </div> 
                    <button 
                        type="submit"
                        className="px-6 py-3 font-semibold text-white transition-transform transform bg-blue-500 rounded-full hover:bg-blue-600 focus:ring-2 focus:ring-blue-900 hover:scale-105 focus:outline-none focus:ring-offset-2 focus:ring-offset-blue-700"
                    > 
                        Search Recipe 
                    </button> 
                </form> 
            </div> 
  
            <div className="container p-4 mx-auto mt-8 sm:px-6 lg:px-8"> 
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> 
                    {food_recipes.map((recipe) => ( 
                        <RecipeCard key={recipe.recipe.label} recipe={recipe.recipe} /> 
                    ))} 
                </div> 
            </div>
    </div>
  );
}

export default App;
