import React, { useState } from 'react';
import MovieCard from './movieCard';

export default function SearchMovies() {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [present, setPresent] = useState("");

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=8db0e12bdf479f17ac2154b6a7de1caa&language=en-US&query=${query}&page=1&include_adult=false`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        } catch (err) {
            setError('Failed to fetch movies');
            setMovies([]);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <form onSubmit={(e)=>{ if(query!==""){ setPresent("");handleSubmit(e)} else { e.preventDefault();setPresent("data")}}} className="form">
                <label htmlFor="query" className="label">
                    Movie name
                </label>
                <input
                    type="text"
                    name="query"
                    value={query}
                    className="input"
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="i.e. Drishyam"
                />
                <button className="button" type="submit">
                    Search!
                </button>
            </form>
                {present && <p className="flash info">Provide Data...</p>}
            {loading && <p className="flash info">Loading...</p>}
            {error && <p className="flash error">{error}</p>}
            {!loading && !error && (
                <div className="card-list">
                    {movies &&
                        movies
                            .filter((movie) => movie.poster_path)
                            .map((movie) => (
                                <MovieCard movie={movie} key={movie.id} />
                            ))}
                </div>
            )}
        </div>
    );
}
