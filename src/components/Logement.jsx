import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import Dropdown from 'react-dropdown';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as etoilePleine } from '@fortawesome/free-solid-svg-icons'
import { faStar as etoileVide } from '@fortawesome/free-regular-svg-icons'

import Navbar from "./Navbar"
import Footer from "./Footer"

import "../styles/Navbar.css"
import "../styles/Logement.css"
import records from "../datas/logements.json"
library.add(etoilePleine, etoileVide)

function Logement() {
    const [searchParams] = useSearchParams();
    const [query] = useState(searchParams.get('_id'));
    const record = records.find(element => element.id === query)
    const arrayStars = [1, 2, 3, 4, 5]
   
    if (record !== undefined) {
        return (
            <div>
                <div className='logement'>
                    <Navbar />
                    <div className='carrousel-logement'>
                        <img src={record.cover} alt={record.title} />
                    </div>
                    <div className='ficheLogement'>
                        <div className='div-description'>
                            <h1>{record.title}</h1>
                            <h4>{record.location}</h4>
                            <div className='div-tags'>
                                {
                                    record.tags.map((element, index) => {
                                        return(<p className='tags' key={"tags-"+index.toString()}>{element}</p>)
                                    })
                                }
                            </div>
                        </div>
                        <div>
                            <div className='div-etoiles'>
                                <p>{record.host.name}</p>
                                <img src={record.host.picture} alt={record.title} />
                            </div>
                            
                            <div className='stars'>
                                {
                                    
                                    arrayStars.map(element => {
                                        const nbreEtoiles = parseInt(record.rating)
                                        if (element <= nbreEtoiles) {
                                            return(
                                                    <FontAwesomeIcon 
                                                        key={"fa_"+Math.random().toString()} 
                                                        icon={etoilePleine} 
                                                        className="span1"
                                                    />
                                            )
                                        } else {
                                            return(
                                                    <FontAwesomeIcon 
                                                        key={"fa_"+Math.random().toString()} 
                                                        icon={etoilePleine}
                                                        className="span2"
                                                    />
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <Dropdown options={record.description}>Description</Dropdown>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Logement