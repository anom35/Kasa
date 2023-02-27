import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as etoilePleine } from '@fortawesome/free-solid-svg-icons'
import { faStar as etoileVide } from '@fortawesome/free-regular-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

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
                    <div className='collapses'>

                        <div className='description'>
                            <div className='description-header'>
                                <div>Description</div>
                                <div className='description-chevron'>
                                    <FontAwesomeIcon 
                                        key={"fa_"+Math.random().toString()} 
                                        icon={faChevronUp}
                                        className="fa-chevron-up"
                                    />
                                </div>
                            </div>
                            <div className='fond-description'>
                                <p className='description-content'>{record.description}</p>
                            </div>
                        </div>

                        <div className='equipements'>
                            <div className='equipements-header'>
                                <div>Équipements</div>
                                <div className='description-chevron'>
                                    <FontAwesomeIcon 
                                        key={"fa_"+Math.random().toString()} 
                                        icon={faChevronUp}
                                        className="fa-chevron-up"
                                    />
                                </div>
                            </div>
                            <div className='fond-description'>
                                {
                                    record.equipments.map((element, index) => {
                                        return(<p className='equipement-content' key={"equip-"+index.toString()}>{element}</p>)
                                    })
                                }
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Logement