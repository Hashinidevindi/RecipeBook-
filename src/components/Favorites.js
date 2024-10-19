import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from './FavouriteContext'; // Import context

function Favorites() {
    const { favorites } = useContext(FavoritesContext); // Use context

    return (
        <div className="p-4">
            <h1 className="text-2xl flex justify-center font-bold mb-4">Your Favorite Recipes</h1>
            {favorites.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {favorites.map((recipe) => (
                        <div key={recipe.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold">{recipe.title}</h2>
                                <p className="text-gray-600">{recipe.description}</p>
                                <Link to={`/RecipeDetails/${recipe.id}`} className="text-blue-500 hover:text-blue-700">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No favorites added yet!</p>
            )}
        </div>
    );
}

export default Favorites;
