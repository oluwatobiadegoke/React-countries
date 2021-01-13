import React from 'react'
import { BsSearch } from "react-icons/bs";
import { useGlobalContext } from "../context";
import { useRef, useEffect } from 'react'


const Searchform = () => {
    const { setInput } = useGlobalContext();
    const search = useRef('')

    useEffect(() => {
        search.current.focus();
    },[])

    const searchCountry = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <main className="search-cont">
            <form id='form' onSubmit={handleSubmit}>
                <BsSearch className="search-icon"/>
                <input 
                    type="text"
                    id="country-name"
                    placeholder="Search for a country..."
                    ref={search}
                    onChange={searchCountry}
                />
            </form>
        </main>
        
    )
}

export default Searchform
