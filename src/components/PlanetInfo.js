import React from 'react'
import '../App.css'

export default function PlanetInfo({planetInfo}) {



  return (
    <>
    {planetInfo && 
      <div>
        <h1>{planetInfo}</h1> 
      </div>
    }
    </>
  )
}
