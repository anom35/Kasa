import React from 'react'
import logo from "../assets/Logo_noir.jpg"
import "../styles/Footer.css"

function Footer() {
    return (
        <div className='footer'>
            <img src={logo} alt='Logo de bas de page' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer