import React, { FunctionComponent } from 'react';
import { Movie } from '../../types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

interface Props {
  movie: Movie;
}

const MovieOverview: FunctionComponent<Props> = ({ movie }) => {
  return (
    <Grid item xs={3}>
      <Card title={movie.title} draggable={true}>
        <CardContent>
          <Typography variant={'h6'}>{movie.title}</Typography>
          <Typography variant={'body2'}>Year: {movie.year}</Typography>
          <Typography>{movie.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MovieOverview;
