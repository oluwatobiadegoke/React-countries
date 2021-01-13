import React from 'react'
import {useGlobalContext} from '../context'
import Loading from './Loading';
import Country from './Country'

const Countries = () => {
    const {loading, countries} = useGlobalContext();
    if(loading) {
        return (
            <Loading/>
        )
    }
    if(countries.length < 1) {
        return (
            <h2 className="no-result">
                No country matches your search input
            </h2>
        )
    }
    return (
        <section className="countries">
            {countries.map((item) => {
                return (
                    <Country key={item.id} {...item}/>
                )
            })}
        </section>
    )
}

export default Countries
