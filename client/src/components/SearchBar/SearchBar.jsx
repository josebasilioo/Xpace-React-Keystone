import React from 'react';

import './SearchBar.css';
import '../General.css';

function SearchBar() {
    return(
        <section className="search">
            <h2>Cardápio</h2>
            <input type="text" className="searchInput"></input>
        </section>
    );
};

export default SearchBar;