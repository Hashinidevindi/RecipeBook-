import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import recipesData from '../recipe.json';

function Home() {
    const [searchQuery, setSearchQuery] = useState('');

    // Filter recipes based on search query
    const filteredRecipes = recipesData.filter(recipe =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <div className="flex w-full h-[50px] items-center gap-5 justify-end bg-red-400 p-2">
                <Link to="/" className="cursor-pointer text-white text-xl mr-[40px]">Home</Link>
                <Link to="/RecipeForm" className="cursor-pointer text-xl mr-[40px] text-white">Form</Link>
                <Link to="/Favorites" className="cursor-pointer text-xl mr-[40px] text-white">Favorites</Link>
            </div>
            <h1 className="text-3xl font-bold text-center my-4">Recipe List</h1>
            <input
                type="text"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block mx-auto mb-4 p-2 border border-gray-300 rounded"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {filteredRecipes.map(recipe => (
                    <div key={recipe.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                        <img 
                            src={recipe.image} 
                            alt={recipe.title} 
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{recipe.title}</h2>
                            <p className="text-gray-600">{recipe.description}</p>
                            <Link 
                                to={`/RecipeDetails/${recipe.id}`} 
                                className="text-blue-500 hover:text-blue-700"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
