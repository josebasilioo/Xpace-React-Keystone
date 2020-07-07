import React, { useState } from 'react';

import './SearchBar.css';
import '../General.css';

function SearchBar() {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
      };

    return(
        <section className="search">
            <h2>Cardápio</h2>
            <input placeholder="Pesquisar..." type="text" className="searchInput" id="input" value={value} onChange={(e) => handleChange(e)}></input>
        </section>
    );
};

export default SearchBar;