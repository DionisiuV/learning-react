import { checkPropTypes } from "prop-types";
import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 2331,
    },
    {
      name: "Game of Thrones",
      price: "$15",
      id: 5513,
    },
    {
      name: "Inception",
      price: "$17",
      id: 8952,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
