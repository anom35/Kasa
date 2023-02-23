import React from 'react'
import Navbar from "./Navbar"

function Logement({id}) {
  return (
    <div>
    <Navbar />
      Logement: {id}
      {console.log(id)}
    </div>
  )
}

export default Logement