import { useState } from 'react';
import './App.css';

const movies = [
  { id: 1, title: "Dune: Part Two", year: 2024, rating: "8.5", genre: "Sci-Fi", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500" },
  { id: 2, title: "Oppenheimer", year: 2023, rating: "8.3", genre: "History", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500" },
  { id: 3, title: "The Batman", year: 2022, rating: "7.8", genre: "Action", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500" },
  { id: 4, title: "Spider-Verse", year: 2023, rating: "8.7", genre: "Animation", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500" },
  { id: 5, title: "John Wick 4", year: 2023, rating: "7.7", genre: "Action", image: "https://images.unsplash.com/photo-1594909771206-002d374b8d70?w=500" },
  { id: 6, title: "Avatar 2", year: 2022, rating: "7.6", genre: "Sci-Fi", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500" },
];

function App() {
  const [search, setSearch] = useState("");

  const filtered = movies.filter(m => 
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header className="navbar">
        <h1 className="logo">🎬 MovieBox</h1>
        <input 
          type="text"
          placeholder="Search movies..."
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <main className="container">
        <h2>Popular Movies</h2>
        <div className="movie-grid">
          {filtered.map(movie => (
            <div key={movie.id} className="movie-card">
              <img src={movie.image} alt={movie.title} />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.genre} • {movie.year}</p>
                <span className="rating">⭐ {movie.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;