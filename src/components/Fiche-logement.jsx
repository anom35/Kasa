import React from 'react'
import { Link } from "react-router-dom"

function ficheLogement({ key, cover, title }) {
    return (
        <div className='fiche-logement'>
            <Link to="/Logement" state={{ id: key }}>
                <img src={cover} alt={title} />
                <h3>{title}</h3>
            </Link>
        </div>
    )
}

export default ficheLogement