import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../recipe.json';
import { FavoritesContext } from './FavouriteContext'; // Import context

function RecipeDetails() {
    const { id } = useParams();
    const recipe = recipesData.find(r => r.id === parseInt(id));
    const { favorites, toggleFavorite } = useContext(FavoritesContext);

    if (!recipe) {
        return <h2 className="text-center text-xl">Recipe not found!</h2>;
    }

    const isFavorite = favorites.some(fav => fav.id === recipe.id);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl flex justify-center font-bold mb-4">{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} className="w-full h-[600px] rounded-lg mb-4" />
            <p className="text-gray-700 mb-4">{recipe.description}</p>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
                <ul className="list-disc pl-5 text-gray-700">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="mb-1">{ingredient}</li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Cooking Steps</h3>
                <ol className="list-decimal pl-5 text-gray-700">
                    {recipe.steps.map((step, index) => (
                        <li key={index} className="mb-1">{step}</li>
                    ))}
                </ol>
            </div>

            <p className="text-gray-700"><strong>Category:</strong> {recipe.category}</p>
            <p className="text-gray-700 mb-4"><strong>Preparation Time:</strong> {recipe.time}</p>

            <button
                onClick={() => toggleFavorite(recipe)}
                className={`px-4 py-2 font-semibold text-white rounded-lg ${
                    isFavorite ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
                }`}
            >
                {isFavorite ? 'Remove from Favorites' : 'Set as Favorite'}
            </button>
        </div>
    );
}

export default RecipeDetails;
