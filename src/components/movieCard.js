import React from 'react';

export default function movieCard({ movie, history }) {
    const title =
        movie.title.substring(0, 30) + (movie.title.length > 30 ? '...' : '');
    const description =
        movie.overview.substring(0, 150) +
        (movie.overview.length > 150 ? '...' : '');

    const showMovieDetails = () => {
        console.log('show moviee details');
    };
    return (
        <div  onClick={showMovieDetails}>
            <img
                className="card-header"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster image'}
            />
            <div className="card-body">
                <h3 className="card-content">{title}</h3>
                <small className="text-important">RELEASE DATE: {movie.release_date}</small> |{" "}
                <small className="text-important">RATING: {movie.vote_average}</small>
                <p className="card-content">{description}</p>
            </div>
        </div>
    );
}
