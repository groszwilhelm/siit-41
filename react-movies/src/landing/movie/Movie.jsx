import BookmarkIcon from "../../icons/bookmark/Bookmark";
import BookmarkFilledIcon from "../../icons/bookmark-filled/Bookmark-filled";

export function Movie(props) {
  const { movie, bookmark } = props;
  const { title, yearOfRelease, pg, genre, image, bookmarked } = movie;

  return (
    <article className="movie">
      <div className="movie__image-container">
        <img src={image} alt="Movie"></img>
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
