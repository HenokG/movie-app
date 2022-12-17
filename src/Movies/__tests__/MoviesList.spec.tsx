import { render, screen } from '@testing-library/react';
import React from 'react';
import { MoviesList } from '../MoviesList';
import { moviesSampleData } from '../../sampleData';

describe('Test of MoviesList', () => {
  it('should render all movies', function () {
    render(<MoviesList movies={moviesSampleData} />);
    for (const movie of moviesSampleData) {
      const titleElements = screen.getAllByText(new RegExp(movie.title, 'i'));
      titleElements.every((titleElement) => expect(titleElement).toBeInTheDocument());
    }
  });
});
