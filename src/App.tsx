import React, { FunctionComponent } from 'react';
import { MoviesList } from './Movies/MoviesList';
import MainBar from './Toolbar/Toolbar';
import { moviesSampleData } from './sampleData';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <MainBar />
      <MoviesList movies={moviesSampleData} />
    </div>
  );
};

export default App;
