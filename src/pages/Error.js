import React from 'react'
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Error = () => {
    return (
        <section className='error'>
            <div className='error-container'>
                <h1>OOps! It's a dead end</h1>
                <Link to="/">
                    <BiArrowBack/>
                    Back
                </Link>
            </div>
        </section>
    )
}

export default Error
