import React, { useEffect ,useState } from 'react';
import './App.css';

const App = () => {
  const APP_ID = "6d7d58f8";
  const APP_KEY = "e393fd156855df5c74058a433e342bd4	";
  const [food_recipes, setFood_recipes] = useState([]);
  const [search_recipe, setSearch_recipe] = useState('');
  const [search_query, setSearch_query] = useState('chicken');

  useEffect(() => {
    getRecipesFunction();
  }, [search_query]);

  const getRecipesFunction = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${search_query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setFood_recipes(data.hits);
  };

  const updateSearchFunction = (e) => {
    setSearch_recipe(e.target.value);
  };

  const getSearchFunction = (e) => {
    e.preventDefault();
    setSearch_query(search_recipe);
    setSearch_recipe('');
  };

  return (
    <div className="min-h-screen font-sans bg-green-50">
      <header className="py-4 text-white bg-green-500"> 
                <div className="container mx-auto text-center"> 
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"> 
                        <span className="block"> Recipe Finder App
                        </span> 
                    </h1> 
                </div> 
            </header>
    </div>
  );
}

export default App;
