import BookmarkIcon from "../../icons/bookmark/Bookmark";
import BookmarkFilledIcon from "../../icons/bookmark-filled/Bookmark-filled";

import { Link } from 'react-router-dom';

export function Movie(props) {
  const { movie, bookmark } = props;
  const { id, title, yearOfRelease, pg, genre, image, bookmarked } = movie;

  return (
    <article className="movie">
      <div className="movie__image-container">
        <Link to={`movie/${id}`}>
          <img src={image} alt="Movie"></img>
        </Link>
        <span
          className="movie__bookmark"
          onClick={() => bookmark(movie, bookmarked)}
        >
          {bookmarked ? (
            <BookmarkFilledIcon></BookmarkFilledIcon>
          ) : (
            <BookmarkIcon></BookmarkIcon>
          )}
        </span>
      </div>
      <p className="movie__footer">
        <span className="movie__year">{yearOfRelease}</span>
        <span className="movie__genre">{genre}</span>
        <span className="movie__pg">{pg}</span>
      </p>
      <h5 className="movie__title">{title}</h5>
    </article>
  );
}
