import React from 'react';
import ReactDOM from 'react-dom';

import {
  Header,
  Info,
  SearchBar,
} from './components';

function App() {
  return (
    <section className="app">
      <Header />
      <SearchBar />
      <Info />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))