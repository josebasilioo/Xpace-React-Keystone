import React from 'react';
import ReactDOM from 'react-dom';

import {
  Header,
  Info,
} from './components';

function App() {
  return (
    <section className="app">
      <Header />
      <Info />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))