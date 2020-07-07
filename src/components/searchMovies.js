import React, { useState } from 'react';
import MovieCard from './movieCard';

export default function SearchMovies() {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

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
        <div className="container">
            <div>
            <form onSubmit={(e)=>{ if(query!==""){ setError("");handleSubmit(e)} else { e.preventDefault(); setError("You missed the movie name") ;}}} className="form-inline" >
                <label htmlFor="query" className="col-md-2 offset-md-1 p-0 mr-sm-3 mb-2 ">
                    Movie Name:
                </label>
                <input
                    type="text"
                    name="query"
                    value={query}
                    className="form-control col-md-5  mr-sm-3 mb-2"
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="i.e. Drishyam"
                />
                <button className="btn btn-dark  col-md-2 col-3 mb-2" type="submit">
                    Search!
                </button>
            </form>
            {error && <p className="alert alert-info col-md-3 offset-md-7">{error}</p>}
        
            {loading && <p className="alert alert-info ">Loading...</p>}
            <br/>
            {!loading && !error && (
                <div className="card-cust text-center">
                    {movies &&
                        movies
                            .filter((movie) => movie.poster_path)
                            .map((movie) => (
                                <MovieCard movie={movie} key={movie.id} />
                            ))}
                </div>
            )}
            </div>
            
        </div>
    );
}
