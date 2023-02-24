import React from 'react'
import Fiche from './FicheLogement'
import "../styles/Logements.css"
import "../styles/FicheLogement.css"
import records from "../datas/logements.json"

function Logements() {

    return (
      <div className='logements'>
            {
                records.map( record => {
                    return (
                        <Fiche key={record.id} id={record.id} cover={record.cover} title={record.title} />
                    )
                })
            }
      </div>
    )
}

export default Logements