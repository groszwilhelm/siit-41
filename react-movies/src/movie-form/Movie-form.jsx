
// Uncontrolled React inputs
export default function MovieForm(props) {
  const { onSubmit, movie = {} } = props;

  function handleSubmit(event) {
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

    onSubmit(updatedMovie);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
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
  );
}
