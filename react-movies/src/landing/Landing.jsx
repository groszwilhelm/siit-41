import "./Landing.css";

import { useState } from "react";

import BookmarkIcon from "../icons/Bookmark";
import { initialMovies } from './data';

export default function Landing() {
  const [movies, setMovies] = useState(initialMovies);

  function bookmark(movie, bookmarked) {
    movie.bookmarked = !bookmarked;
    // !TODO: Explain mutability
    setMovies(movies.slice());
  }

  return (
    <main className="main">
      <header>
        <h3>Recommended for you</h3>
      </header>

      <section className="movie-container">
        {movies.map((movie) => {
          const { title, yearOfRelease, pg, genre, image, bookmarked } = movie;

          return (
            <article className="movie">
              <div className="movie__image-container">
                <img src={image} alt="Movie"></img>
                <span
                  className="movie__bookmark"
                  onClick={() => bookmark(movie, bookmarked)}
                >
                  <BookmarkIcon></BookmarkIcon>
                </span>
              </div>
              <p className="movie__footer">
                <span className="movie__year">{yearOfRelease}</span>
                <span className="movie__genre">{genre}</span>
                <span className="movie__pg">{pg}</span>
              </p>
              <h5 className="movie__title">
                Bookmarked: {JSON.stringify(bookmarked)}
                {title}
              </h5>
            </article>
          );
        })}
      </section>
    </main>
  );
}

/**
 *! BEM - Block Element Modifier
 *!       movie __ year -- active
 */
