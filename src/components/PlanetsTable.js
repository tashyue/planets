import React from 'react'
import '../App.css'
import PlanetRow from './PlanetRow'


export default function PlanetsTable({planet}) {

  return (
  <div className='table-responsive'>
  <table className='table'>
    <thead>
      <tr key="name">
        <th>Name</th>
        <th>Climate</th>
        <th>No. of Residents</th>
        <th>Terrain(s)</th>
        <th>Population</th>
        <th>Water Surface Area (km^2)</th>
      </tr>
    </thead>
    <tbody>
    <PlanetRow planet={planet}/>
    </tbody>
  </table>
    </div>
  )
}




