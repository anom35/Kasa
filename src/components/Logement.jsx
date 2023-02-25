import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import Navbar from "./Navbar"
import Banner from './Banner';
import "../styles/Logement.css"

function Logement() {
    const [searchParams] = useSearchParams();
    const [query] = useState(searchParams.get('_id'));
    
    return (
        <div className='logement'>
            <Navbar />
            <Banner />
            <Dropdown />
        </div>
    )
}

export default Logement