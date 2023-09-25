import "./App.css";
import Landing from "./landing/Landing";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import CreateMovie from "./create-movie/Create-movie";
import MovieDetails from "./movie-details/Movie-details";
import Navigation from "./Navigation";
import React from "react";
import MoviesContextProvider from './MoviesContext';
import Register from './auth/register/Register';

function App() {
  return (
    <MoviesContextProvider>
      <Router>
        <Navigation />

        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/about" element={<div>About</div>}></Route>
          <Route path="/movie/:id" element={<MovieDetails />}></Route>
          <Route path="/create-movie" element={<CreateMovie />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="*" element={<div>Page not found 404</div>}></Route>
        </Routes>
      </Router>
    </MoviesContextProvider>
  );
}

export default App;
