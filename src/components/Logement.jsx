import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import Navbar from "./Navbar"
import Footer from "./Footer"
import Stars from "./Stars"
import "../styles/Navbar.css"
import "../styles/Logement.css"
import records from "../datas/logements.json"

function Logement() {
    const [searchParams] = useSearchParams();
    const [query] = useState(searchParams.get('_id'));
    const record = records.find(element => element.id === query)
    
    let cpt = 0;
    if (record !== undefined) {
        return (
            <div>
                <div className='logement'>
                    <Navbar />
                    <img src={record.cover} alt={record.title} />
                    <div className='ficheLogement'>
                        <div className='div-description'>
                            <h1>{record.title}</h1>
                            <h4>{record.location}</h4>
                            <div className='div-tags'>
                                {
                                    record.tags.map(element => {
                                        cpt += 1;
                                        return(<p className='tags' key={cpt}>{element}</p>)
                                    })
                                }
                            </div>
                        </div>
                        <div className='div-etoiles'>
                                <p>{record.host.name}</p>
                                <img src={record.host.picture} alt={record.title} />
                        </div>
                    </div>
                    <Stars rating={record.rating} />
                    <Dropdown options={record.description}>Description</Dropdown>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Logement