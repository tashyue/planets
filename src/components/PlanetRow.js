import React from 'react'

export default function PlanetRow({planet}) {

function calculateSurfaceArea(d, waterInt) {
    if(waterInt === "unknown") {
      return "?"
    }
    let diameter = parseInt(d)
    let radius = diameter/2
    let surfaceArea = Math.round(4*Math.PI*Math.pow(radius, 2))
    let surfaceAreaWater = surfaceArea*(waterInt/100);
    return surfaceAreaWater
  }
 
  function formatPopulation(pop) {
    let popInt = parseInt(pop)
    if(pop === "unknown" ) {
      return "?"
    }
    return popInt.toLocaleString("en-US")
  }
 
  function formatTerrain(terr) {
    if(terr === "unknown") {
      return "?"
    }
    return terr
  }
 
  function formatClimate(clim) {
    if(clim === "unknown") {
      return "?"
    }
    return clim
  }
 
  return (
      <>
    {planet.map(p => (
        <tr key={p.name}>
          <td><a href={p.url}>{p.name}</a></td>
          <td>{formatClimate(p.climate)}</td> 
          <td>{p.residents.length}</td>
          <td>{formatTerrain(p.terrain)}</td>
          <td>{formatPopulation(p.population)}</td>
          <td>{calculateSurfaceArea(p.diameter, p.surface_water)}</td>
        </tr>
      ))}
      </>
  )
}
