import React from 'react'
import Fiche from '../components/Fiche-logement'
import "../styles/Logements.css"
import "../styles/Fiche-logement.css"
import records from "../datas/logements.json"

function Logements() {

    return (
      <div className='logements'>
            {
                records.map( record => {
                    return (
                        <Fiche key={record.id} cover={record.cover} title={record.title} />
                    )
                })
            }
      </div>
    )
}

export default Logements