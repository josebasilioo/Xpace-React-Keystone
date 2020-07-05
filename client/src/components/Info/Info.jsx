import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Info.css';
import '../General.css';

function Info() {
    const [info, setInfo] = useState([]);

    const loadInfo = async () => {
        const result = await axios.get('http://localhost:3001/api/foods');
        setInfo(result.data);
    };

    useEffect(() => {
        loadInfo();
    }, []);

    return(
        <section className="foodInfo">
            {info?.map(({ name, description, price, image}) => (
            <section>
                <img className="food-img" src={image[0]?.url} alt={name}></img>
                <div className="foodDetails">
                    <h5>{name}</h5>
                    <p>{description}</p>
                    <h4>R${price}</h4>
                </div>
                <button className="food-button">
                    <a href="#" alt="Adicionar">Adicionar</a>
                </button>
            </section>   
            ))}
        </section>
    );
};

export default Info;
