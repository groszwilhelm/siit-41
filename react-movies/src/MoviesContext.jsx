import React, { useState } from "react";

// React Context API
export const MoviesContext = React.createContext();

export default function MoviesContextProvider(props) {
  const [movies, setMovies] = useState([]);
  const { children } = props;

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
}

// REST -> Representational State Transfer
// entity -> resource
// users/12/cars/2

// calculate the sum of the following elemnts [1, 2, 4, 5, 6];

