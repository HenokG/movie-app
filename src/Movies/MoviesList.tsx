import React, { FunctionComponent } from 'react';
import { Movie } from '../types';
import MovieOverview from './MovieOverview/MovieOverview';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';

interface Props {
  movies: Movie[];
}

const StyledContainer = styled(Container)`
  padding-top: 2rem;
`;

export const MoviesList: FunctionComponent<Props> = ({ movies }) => {
  return (
    <StyledContainer maxWidth={'xl'}>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <MovieOverview key={movie.id} movie={movie} />
        ))}
      </Grid>
    </StyledContainer>
  );
};
