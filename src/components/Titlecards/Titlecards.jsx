import React, { useEffect, useRef, useState } from 'react'
import './titlecard.css'
import card_data from '../../asset/cards/Cards_data'


function Titlecards({ title, catogery }) {
  const [apiData,setapiData] =useState([])
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzM2YTUzYzI3MmZmMzZjZWQyYzMyM2JhODk3MTk0NSIsIm5iZiI6MTcyNTQ0NTg2NS42ODEsInN1YiI6IjY2ZDgzNDk2MjNiZDk2NWIwNTFhYjgzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xagy3kBErflJNGMHFOXDGCA8bl93YBAWSKZpdQ4ATFA'
    }
  };
  

  const handlewheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${catogery?catogery:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setapiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handlewheel);
    
  }, [])

  return (
    <>
      <div className="title-card">
        <h2>{title ? title : "Popular in Netflix"}</h2>
        <div className="card-list" ref={cardsRef}>
          {apiData.map((card, index) => {
            return <div className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default Titlecards
