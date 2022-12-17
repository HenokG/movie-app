import React, { FunctionComponent } from 'react';
import { Movie } from '../types';

interface Props {
  movies: Movie[];
}

export const MoviesList: FunctionComponent<Props> = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </>
  );
};
