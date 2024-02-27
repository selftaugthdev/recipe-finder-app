import React from "react";

const RecipeCard = ({ recipe }) => {
    return (
    <div className="overflow-hidden transition-transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
        <div className="relative">
            <img className="object-cover object-center w-full h-48 rounded-t-lg"
            src="{recipe.name}" alt="{recipe.label}" />
            <div className="absolute px-2 py-1 text-white bg-indigo-500 rounded top-2 left-2">
                {recipe.dishtype[0]}
            </div>
        </div>
        <div className="p-4">
            <h1 className="mb-2 text-2xl font-semibold text-gray-800 capitalize">
                {recipe.label}
            </h1>
            <div className="mb-4 text-gray-600">
                <span className="block mb_1">
                    <b>Ingredients:</b>
                </span>
                {recipe.ingredientLines.map((ingredient, index) => (
                    <span key={index} className="block pl-4">
                        {ingredient}
                    </span>
                ))}
            </div>
            <div className="flex items-center justify-between">
                <a 
                href={"/"}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-indigo-500 hover:underline"
                >  
                View Recipe                
                </a>
                <p>-----------------------</p>
                <div className="flex items-center text-gray-600"> 
            <span className="flex items-center mr-4"> 
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              > 
                <path 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v14m0 0V5m0  
                                    0v14m0-14h14m-14 0H5"
                /> 
              </svg> 
              1.2K 
            </span> 
            <span className="flex items-center"> 
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              > 
                <path 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                /> 
              </svg> 
              6 
            </span> 
          </div>
            </div>
        </div>
    </div>
        );
}
export default RecipeCard;