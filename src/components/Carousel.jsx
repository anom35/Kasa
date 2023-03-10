import React from 'react'
import records from "../datas/logements.json"

function Carousel({ id, position }) {

    // const [position, setCount] = useState(0);



    const fiche = records.find(element => element.id === id)
    if (fiche !== undefined) {
        let max = fiche.pictures.length
        if (position > max) position = 1
        if (position === 0) position = max

        return (
            <div className='carrousel-logement'>
                <img src={fiche.pictures[position]} alt={fiche.title} />
            </div>
        )
    }
}

export default Carousel