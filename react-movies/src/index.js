import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Landing from "./landing/Landing";
import MovieDetails from "./movie-details/Movie-details";
import Navigation from "./Navigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navigation></Navigation>
        <Landing></Landing>
      </>
    ),
  },
  {
    path: "about",
    element: (
      <>
        <Navigation></Navigation>
        <div>About</div>
      </>
    ),
  },
  {
    path: "movie/:id",
    element: (
      <>
        <Navigation></Navigation>
        <MovieDetails></MovieDetails>
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/**
 *! How routing works
 *! 1. npm install react-router-dom
 *! 2. Create route configuration - List of objects with path and element
 *! 3. Add dynamic route params using ":param"
 *! 4. Read dynamic route param using: const { param } = useParams();
 *! 5. Navigate between pages using: Link component.
 */
