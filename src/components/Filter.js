import React from 'react'
import { useGlobalContext } from "../context";
import { useState, useEffect } from 'react';
import { FaChevronDown } from "react-icons/fa";
const url = "https://restcountries.eu/rest/v2/all";



const Filter = () => {
    const {countries, setCountries, displayRegion, setDisplayRegion, regionalDisplay} = useGlobalContext();
    const [regions, setRegions] = useState([]);
    const [allCountries, setAllCountries] = useState(null)
    
    const handleClick = (each) => {
        if(each === "All") {
            setCountries(allCountries);
            return;
        }
        const newCountries = allCountries.filter((country) => country.region === each);
        setCountries(newCountries);
    }

    const getTheCountries = async () => {
        const response = await fetch(url);
        const data = await response.json();
        if(data) {
            const categories = new Set(data.map((singleData) => singleData.region))
            setAllCountries(data);
            setRegions(["All",...categories])
        } else {
            setAllCountries(null)
        }
    }

    useEffect(() => {
        getTheCountries();
    }, [])

    return (
        <section className="filter">
            <p className="by-region" onClick={regionalDisplay}>Filter by Region
                <FaChevronDown/>
            </p>
            <div className={displayRegion ? "filters": "nondisplay"}>
                {regions.map((each, index) => {
                    return (each.length > 0 ?
                        <button 
                            type="button"
                            key={index}
                            onClick={() => handleClick(each)}
                            className="btn"
                        >
                            {each}
                        </button>:
                        null
                    )
                })}
            </div>
        </section>
    )
}

export default Filter
