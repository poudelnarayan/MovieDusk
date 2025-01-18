import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

const WatchList = ({ movies, watchlist, toggleWatchlist }) => {
  return (
    <div>
      <h2 className="title">Your Watchlist</h2>
      <div className="watchlist">
        {watchlist.map((movieId) => {
          const movie = movies.find((m) => m.id === movieId);
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              isWatchListed={true}
              toggleWatchlist={toggleWatchlist}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WatchList;
