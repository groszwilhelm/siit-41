import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Dialog from "../dialog/Dialog";
import MovieForm from '../movie-form/Movie-form';
import { MoviesContext } from '../MoviesContext';

export default function MovieDetails() {
  let { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const { movies } = useContext(MoviesContext);

  const navigate = useNavigate();

  useEffect(() => {
    const selectedMovie = movies.find((storedMovie) => storedMovie.id === Number(id));

    if (selectedMovie) {
      setMovie(selectedMovie);
    } else {
      fetch(`http://localhost:3004/movies/${id}`)
        .then((response) => response.json())
        .then((movieFromServer) => setMovie(movieFromServer));
    }
  }, []);

  function onSubmit(updatedMovie) {
    fetch(`http://localhost:3004/movies/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((movieFromServer) => setMovie(movieFromServer));
  }

  function showDeleteDialog() {
    setShowDialog(true);
  }

  function deleteMovie() {
    fetch(`http://localhost:3004/movies/${id}`, {
      method: "DELETE",
    }).then(() => navigate("/"));
  }

  function hideDeleteDialog() {
    setShowDialog(false);
  }

  return (
    <section>
      {showDialog && (
        <Dialog
          yesCallback={deleteMovie}
          noCallback={hideDeleteDialog}
          title="Are you sure you want to remove the movie?"
        />
      )}
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

      <button onClick={showDeleteDialog}>Delete</button>
      
      <MovieForm onSubmit={onSubmit} movie={movie}></MovieForm>
    </section>
  );
}
