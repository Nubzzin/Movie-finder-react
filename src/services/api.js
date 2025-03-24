const API_KEY = import.meta.env.VITE_api_key;
const BASE_URL = "https://api.themoviedb.org/3";
console.log(import.meta.env);

export const getPopularMovies = async () => {
    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
    );
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
    );
    const data = await response.json();
    return data.results;
};
