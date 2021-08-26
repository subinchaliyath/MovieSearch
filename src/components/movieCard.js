import React from 'react';
import TextTruncate from "react-text-truncate";
import Rating from "@material-ui/lab/Rating";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import './MovieCard.css'

export default function movieCard({ movies, history }) {
    const handleClick = (movie) => {
        console.log("clicked");
      }
    
      const getReleaseYear = (date) => {
        let year = new Date(date);
        return year.getFullYear();
      }
    return (
        <div className="results">
                <div class="results__list">
                    { movies?.map((movie) => movie.media_type !== 'person' &&
                        (<div class="list__item" onClick={() => handleClick(movie)}>
                            <img  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path || movie.backdrop_path}`} alt="movie" />
                            <h5 className="list__itemType">{movie.media_type|| 'movie'}</h5>
                            <div className="list__itemInfo">
                                <h5 className="list__itemTitle">{movie.title || movie.original_title || movie.name || movie.original_name}<span className="list__itemYear">({getReleaseYear(movie.release_date || movie.first_air_date)})</span></h5>
                                <TextTruncate
                                    line={2}
                                    element="p"
                                    containerClassName="list__itemOverview"
                                    truncateText="…"
                                    text={movie.overview}
                                />
                                <div className="list__rating">
                                    <Rating name="movie-rating" className="movieRating" value={(movie.vote_average / 2) || 0} precision={0.5} icon={<StarRoundedIcon fontSize="inherit" readOnly />}/>
                                    <small className="list__likes">{movie.vote_average / 2}</small>
                                </div>
                            </div>
                        </div> )
                    )}
                </div>
            </div>
      );
}
