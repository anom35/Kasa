import React from 'react'

function ficheLogement({ cover, title }) {
    return (
        <div className='fiche-logement'>
            <img src={cover} alt={title} />
            <h3>{title}</h3>
        </div>
    )
}

export default ficheLogement