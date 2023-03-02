import React from 'react'
import Navbar from '../components/Navbar'
import "../styles/Error404.css"

function Error404() {

    return (
        <div className='error404'>
            <Navbar />   
            <p>404</p> 
        </div>
    )
}

export default Error404;