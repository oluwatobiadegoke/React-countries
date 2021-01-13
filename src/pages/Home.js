import React from 'react'
import Searchform from '../components/Searchform'
import Filter from '../components/Filter'
import Countries from '../components/Countries'

const Home = () => {
    return (
        <main className="Home">
            <Searchform/>
            <Filter />
            <Countries />
        </main>
    )
}

export default Home
