import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    // Provide state to any component
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites"); // Stored items

        if (storedFavs) setFavorites(JSON.parse(storedFavs)); // Pick stored items and transform into array
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (movie) => {
        // Add movie
        setFavorites((prev) => [...prev, movie]); // Prev stores the last value favorites had
    };

    const removeFromFavorites = (movieId) => {
        // Remove movie
        setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
    };

    const isFavorite = (movieId) => {
        // Verify if its Favorite
        return favorites.some((movie) => movie.id === movieId);
    };

    const value = {
        // Make it accessible for children
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
    };

    return (
        <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
    ); // Add value here
};
