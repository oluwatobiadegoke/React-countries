import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <Link className="where" to = "/">Visit a country</Link>
        </nav>
    )
}

export default Navbar