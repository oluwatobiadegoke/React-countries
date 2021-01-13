import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";
const url = "https://restcountries.eu/rest/v2/name/";

const OneCountry = () => {
    const {name} = useParams();
    const [loading, setLoading] = React.useState(false);
    const [country, setCountry] = React.useState(null)

    const getCountry = React.useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${url}${name}`);
            const data = await response.json();
            if(data) {
                const {
                    name:info,  
                    nativeName,
                    population, 
                    region, 
                    subregion, 
                    capital, 
                    topLevelDomain, 
                    currencies,
                    borders,
                    flag,
                    languages
                } = data[0]
                const newData = {
                  info,
                  nativeName,
                  population,
                  region,
                  subregion,
                  capital,
                  topLevelDomain,
                  currencies,
                  borders,
                  flag,
                  languages
                };
                setCountry(newData)
            } else {
                setCountry(null)
                setLoading(false)
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false);
        }
    },[name])

    React.useEffect(() => {
        getCountry();
    }, [name, getCountry])

    if(loading) {
        return(
            <Loading/>
        )
    }

    if(!country) {
        return(
            <div className="no-country">
                <h1>No country to display</h1>
            </div>
        )
    }

    const {
        info, 
        borders, 
        nativeName, 
        population, 
        region, 
        subregion, 
        capital, 
        topLevelDomain, 
        currencies,
        flag,
        languages
    } = country
    console.log(languages)
    return (
      <main className="one-country">
        <section className="single">
            <Link to="/" className="back">
            <BiArrowBack className="back-icon"/>
            Back
            </Link>
            <section className="content">
                <img src={flag} alt={info} />
                <h2 className="info">{info}</h2>
                <div className="more-info1">
                    <p><span>Native Name: </span>{nativeName}</p>
                    <p><span>Population: </span>{population}</p>
                    <p><span>Region: </span>{region}</p>
                    <p><span>Sub Region: </span>{subregion}</p>
                    <p><span>Capital: </span>{capital}</p>
                </div>
                <div className="more-info2">
                    <p><span>Top Level Domain: </span>{topLevelDomain}</p>
                    <p><span>Currencies: </span>{currencies[0].name}</p>
                    <div className="lanuguages"><span>Languages: </span>
                        {languages.map((language) => {
                        const {name} = language;
                        return(
                            <p className="languages">{name}</p>
                        )
                    })}
                    </div>
                </div>
                <div className="borders">
                    <h3>Border Countries:</h3>
                    <ul className="border-countries">
                        {borders.length > 0 ?
                        borders.map((border, index) => {
                        return (
                            <li className="list" key={index}>
                            {border}
                            </li>
                        );
                        }):
                        <p>No border country on record</p>
                    }
                    </ul>
                </div>
            </section>
        </section>
      </main>
    );
}

export default OneCountry
