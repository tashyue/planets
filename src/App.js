import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PlanetsTable from './components/PlanetsTable';
import Pagination from './components/Pagination';
import PlanetInfo from './components/PlanetInfo';

function App() {

  const [planet, setPlanet] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://swapi.dev/api/planets/")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)


  const [status, setStatus] = useState({})


  useEffect(() => {
    setLoading(true)
    axios.get(currentPageUrl)
    .catch((e) => {
      setLoading(false)
      let fetchStatus = {
        message: "Data not Fetched",
        ok: false
      }
      setStatus(fetchStatus)
    })
    .then(res => {
    setLoading(false)
    setNextPageUrl(res.data.next)
    setPrevPageUrl(res.data.previous)
    setPlanet(res.data.results.sort((a, b)=>{return a.name > b.name ? 1 : -1})
    .map((p) => p))
    setStatus({
      message: "Data Successfuly Fetched",
      ok: true
    })
  })
  }, [currentPageUrl])

  

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  console.log(planet)

  if(loading) {
    return (
      <div className='centered'>
        <h1>Loading...</h1>
      </div>
    
    )
  }
  else if(status.ok === false) return (
    <div className='centered'>
        <h1>Data load failure</h1>
      </div>
  )
  return (
    <>
        <PlanetsTable planet={planet}/>
        <Pagination 
          goToNextPage={nextPageUrl ? goToNextPage : null}
          goToPrevPage={prevPageUrl ? goToPrevPage : null}
        />
        <PlanetInfo/>
    </>
  );
}

export default App;
