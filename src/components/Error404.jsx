import React from 'react'
import Banner from './Banner'
import '../styles/Banner.css'
import { useRouteError } from "react-router-dom";
import "../styles/Error404.css"

function Error404() {
    const error = useRouteError();
    console.log(error)
    return (
        <div className='error404'>
            <Banner />   
            <p>404</p>     
        </div>
    )
}

export default Error404;