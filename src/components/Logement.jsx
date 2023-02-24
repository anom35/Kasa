import React from 'react'
import Navbar from "./Navbar"
import "../styles/Logement.css"

function Logement({idLogement}) {
    return (
        <div>
            <Navbar />
            Logement: {idLogement}
            {console.log(idLogement)}
        </div>
    )
}

export default Logement