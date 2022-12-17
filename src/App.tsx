import React, { FunctionComponent } from 'react';
import './App.css';
import { MoviesList } from './Movies/MoviesList';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <MoviesList
          movies={[
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
          ]}
        />
      </header>
    </div>
  );
};

export default App;
