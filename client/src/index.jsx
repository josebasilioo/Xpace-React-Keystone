import React from 'react';
import ReactDOM from 'react-dom';

import {
  Header,
  Info,
  SearchBar,
  Footer,
} from './components';

function App() {
  return (
    <section className="app">
      <Header />
      <SearchBar />
      <Info />
      <Footer />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))