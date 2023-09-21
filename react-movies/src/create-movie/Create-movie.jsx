import { useState } from 'react';
import MovieForm from '../movie-form/Movie-form';

export default function CreateMovie() {
  const [success, setSuccess] = useState(false);

  function submit(updatedMovie) {
    setSuccess(false);

    fetch("http://localhost:3004/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedMovie),
    })
    .then((response) => {
      setSuccess(response.ok);
    });
  }

  return (
    <section>
      { success && <p>Operation has been successful</p>}
      <MovieForm onSubmit={submit}></MovieForm>
    </section>
  );
}