import React from 'react'
import ficheLogement from '../components/Fiche-logement'
import "../styles/Logements.css"
import "../styles/Fiche-logement.css"

function Logements() {
  return (
    <div className='logements'>
        <ficheLogement />
    </div>
  )
}

export default Logements