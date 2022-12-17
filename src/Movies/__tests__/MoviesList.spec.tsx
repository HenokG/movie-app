import { render, screen } from '@testing-library/react';
import React from 'react';
import { MoviesList } from '../MoviesList';
import { Movie } from '../../types';

describe('Test of MoviesList', () => {
  it('should render all movies', function () {
    render(<MoviesList movies={moviesListTestData} />);
    for (const movie of moviesListTestData) {
      const titleElements = screen.getAllByText(new RegExp(movie.title, 'i'));
      titleElements.every((titleElement) => expect(titleElement).toBeInTheDocument());
    }
  });
});

const moviesListTestData: Movie[] = [
  {
    title: 'Avengers',
    description: 'Avenging the world from thanos',
    year: 2019,
    id: 'avengers_endgame'
  },
  {
    title: 'Avengers Infinity War',
    year: 2018,
    description: 'Defeated in Glory',
    id: 'avengers_infinity_war'
  }
];
