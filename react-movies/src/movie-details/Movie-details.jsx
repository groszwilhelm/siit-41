import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetails() {
  let { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3004/movies/${id}`)
      .then((response) => response.json())
      .then((movieFromServer) => setMovie(movieFromServer));
  }, []);

  function onSubmit(event) {
    event.preventDefault();
    const { url, yearOfRelease, genre, pg, title } = event.target;

    const updatedMovie = {
      ...movie,
      image: url.value,
      yearOfRelease: yearOfRelease.value,
      genre: genre.value,
      pg: pg.value,
      title: title.value,
    };

    fetch(`http://localhost:3004/movies/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: {
        'content-type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((movieFromServer) => setMovie(movieFromServer));
  }

  return (
    <section>
      <article className="movie">
        <div className="movie__image-container">
          <img src={movie?.image} alt="Movie"></img>
        </div>
        <p className="movie__footer">
          <span className="movie__year">{movie?.yearOfRelease}</span>
          <span className="movie__genre">{movie?.genre}</span>
          <span className="movie__pg">{movie?.pg}</span>
        </p>
        <h5 className="movie__title">{movie?.title}</h5>
      </article>

      <form onSubmit={onSubmit}>
        <fieldset>
          <label htmlFor="url">URL:</label>
          <input
            id="url"
            type="text"
            name="url"
            defaultValue={movie?.image}
          ></input>
        </fieldset>

        <fieldset>
          <label htmlFor="yor">Year of release:</label>
          <input
            name="yearOfRelease"
            id="yor"
            type="number"
            min={1800}
            max={3000}
            defaultValue={movie?.yearOfRelease}
          ></input>
        </fieldset>

        <fieldset>
          <label htmlFor="genre">Genre:</label>
          <select id="genre" defaultValue={movie?.genre} name="genre">
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
        </fieldset>

        <fieldset>
          <label htmlFor="pg">PG:</label>
          <select id="pg" defaultValue={movie?.pg} name="pg">
            <option value="PG">PG</option>
            <option value="18+">18+</option>
            <option value="14+">14+</option>
          </select>
        </fieldset>

        <fieldset>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            defaultValue={movie?.title}
            name="title"
          ></input>
        </fieldset>

        <button>Submit</button>
      </form>
    </section>
  );
}
