import React from 'react';
import ReactDOM from 'react-dom';

import {
  Header,
} from './components';

function App() {
  return (
    <section className="app">
      <Header />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))