import React, { FunctionComponent } from 'react';
import { Movie } from '../types';
import { CardMedia } from '@mui/material';

interface Props {
  movie: Movie;
}

const MoviePoster: FunctionComponent<Props> = ({ movie }) => {
  return (
    <CardMedia
      image={movie.posterUrl ?? 'https://via.placeholder.com/200x300'}
      sx={{
        minHeight: 100
      }}
    />
  );
};

export default MoviePoster;
