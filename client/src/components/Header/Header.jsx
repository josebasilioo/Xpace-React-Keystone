import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Header.css';
import '../General.css';

function Header(){
    const [header, setHeader] = useState([]);

    const loadHeader = async () => {
        const result = await axios.get('http://localhost:3001/api/header');
        setHeader(result.data);
    };

    useEffect(() => {
        loadHeader();
    }, []);

    return(
        <header className="header">
            {header?.map(( { _id, LogoName, image} ) => (
                <nav key={_id} className="nav">
                    <img src={image[0]?.url} alt={LogoName} className="Logo"/>
                </nav>
            ))}
        </header>
    );
}

export default Header;