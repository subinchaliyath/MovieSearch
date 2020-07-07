import React from 'react';
import './App.css';
import SearchMovies from './components/searchMovies';

function App() {
    return (
        <div className="App">
            <div className="container ">
                <h1 className="text-center mt-1">REACT MOVIE SEARCH</h1>
                <SearchMovies />
            </div>
        </div>
    );
}

export default App;
