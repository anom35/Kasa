import React from 'react'
import Navbar from './Navbar'
import '../styles/Navbar.css'
import { useRouteError } from "react-router-dom";
import "../styles/Error404.css"

function Error404() {
    const error = useRouteError();
    console.log(error)
    return (
        <div className='error404'>
            <Navbar />   
            <p>404</p>     
        </div>
    )
}

export default Error404;