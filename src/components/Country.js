import React from 'react'
import { Link } from "react-router-dom";

const Country = ({id, name, population, region, capital, flag}) => {
    return (
      <section key={id} className="each-country">
        <img src={flag} alt={name} />
        <div className="country-info">
          <h2>{name}</h2>
          <p><span>Population: </span>{population}</p>
          <p><span>Region: </span>{region}</p>
          <p><span>Capital: </span>{capital}</p>
        </div>
        <Link className="link" to={`/country/${name}`}>More info</Link>
      </section>
    );
}

export default Country
