import { useState } from "react";
import RestaurantCard from "./components/RestaurantCard";
import MovieCard from "./components/MovieCard";
import { fetchRandomRestaurant, fetchRandomMovie } from "./api";
import "./App.css";

function App() {
  const [restaurant, setRestaurant] = useState(null);
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleRandomize() {
    setLoading(true);
    setError("");
    try {
      const [r, m] = await Promise.all([
        fetchRandomRestaurant(),
        fetchRandomMovie(),
      ]);
      setRestaurant(r);
      setMovie(m);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <h1>Dinner and a Movie</h1>
      <p>Can’t decide? Let randomness choose for you.</p>
      <button onClick={handleRandomize} disabled={loading}>
        {loading ? "Finding your match..." : "Randomize Match"}
      </button>

      {error && <p className="error">{error}</p>}

      <div className="cards-container">
        <RestaurantCard restaurant={restaurant} />
        <MovieCard movie={movie} />
      </div>
    </div>
  );
}

export default App;
