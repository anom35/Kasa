import React from 'react'
import {Collapse} from 'react-collapse';
import "../styles/Collapse.css"

function CreateCollapse({ titre, description }) {
  return (
    <Collapse isOpened={true || false}>
        <div>
            {titre}
            {/* {description} */}
        </div>
    </Collapse>
  )
}

export default CreateCollapse