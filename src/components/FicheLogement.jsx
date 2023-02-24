import React from 'react'
import { Link } from "react-router-dom"
import "../styles/FicheLogement.css"

function ficheLogement({ id, cover, title }) {
    return (
        <div className='fiche-logement'>
            <Link to="/Logement" id={id}>
                <img src={cover} alt={title} />
                <h3>{title}</h3>
            </Link>
        </div>
    )
}

export default ficheLogement