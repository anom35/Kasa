import React from 'react'
import Navbar from './Navbar'
// import { useRouteError } from "react-router-dom";
import "../styles/Error404.css"
import Footer from './Footer';

function Error404() {
    // const error = useRouteError();
    // console.log(error)
    return (
        <div className='error404'>
            <Navbar />   
            <p>404</p> 
            <Footer />    
        </div>
    )
}

export default Error404;