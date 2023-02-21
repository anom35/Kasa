import React from 'react'
import Fiche from '../components/Fiche-logement'
import "../styles/Logements.css"
import "../styles/Fiche-logement.css"

function Logements() {
  return (
    <div className='logements'>
        <Fiche />
        <Fiche />
        <Fiche />
        <Fiche />
        <Fiche />
        <Fiche />
    </div>
  )
}

export default Logements