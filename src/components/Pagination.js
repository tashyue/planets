import React from 'react'
import '../App.css'

export default function Pagination({goToNextPage, goToPrevPage}) {
  return (
    <>
        {goToPrevPage && <button className="btn btn-primary" onClick={goToPrevPage}>Prev</button>}
        {goToNextPage && <button className="btn btn-primary" onClick={goToNextPage}>Next</button>}
    </>
  )
}
