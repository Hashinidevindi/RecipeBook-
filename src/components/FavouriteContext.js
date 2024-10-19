import React, { createContext, useState, useEffect } from 'react';
import initialRecipes from '../recipe.json'; // Adjust the import based on where your JSON is located

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const storedFavorites = localStorage.getItem('favorites');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    const [recipes, setRecipes] = useState(initialRecipes);

    const toggleFavorite = (recipe) => {
        setFavorites(prevFavorites => {
            const isFavorited = prevFavorites.some(fav => fav.id === recipe.id);
            const updatedFavorites = isFavorited 
                ? prevFavorites.filter(fav => fav.id !== recipe.id) // Remove from favorites
                : [...prevFavorites, recipe]; // Add to favorites

            // Store updated favorites in localStorage
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    };

    const addRecipe = (newRecipe) => {
        setRecipes(prevRecipes => [...prevRecipes, { ...newRecipe, id: prevRecipes.length + 1 }]);
    };

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, recipes, addRecipe }}>
            {children}
        </FavoritesContext.Provider>
    );
};
