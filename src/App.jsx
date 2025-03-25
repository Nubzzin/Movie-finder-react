import "./css/App.css";
import { Routes, Route } from "react-router-dom";

import { MovieProvider } from "./contexts/MovieContext.jsx";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

import MovieCard from "./components/MovieCard";
import NavBar from "./components/NavBar";

function App() {
    return (
        <MovieProvider>
            <NavBar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Favorites" element={<Favorites />} />
                </Routes>
            </main>
        </MovieProvider>
    );
}

export default App;
