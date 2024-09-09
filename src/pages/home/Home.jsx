import React from 'react'
import Titlecards from '../../components/Titlecards/Titlecards'
import Navbar from '../../components/Navbar/Navbar'
import herop from '../../asset/hero_banner.jpg'
import heros from '../../asset/hero_title.png'
import info from '../../asset/info_icon.png'
import play from '../../asset/play_icon.png'
import "./home.css"
function Home() {
  return (
   <>
   <div className="home">
    <Navbar />

    <div className="hero">
      <img src={herop} alt="" className='banner-image'/>
      <div className="hero-caption">
        <img src={heros} alt=""  className='caption-image'/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum aspernatur enim sint iusto error ipsam molestiae maiores veniam recusandae itaque odit eos amet dolorem, aliquam cum quo nulla! Veritatis, sit!hero </p>
        <div className="hero-btn">
          <button className='btn'>
            <img src={play} alt="" />Play
          </button>
          <button className='btn dark-btn'>
            <img src={info} alt="" />More Info
          </button>
        </div>
          <Titlecards />
      </div>
    </div>
    <div className="more-cards">
      <Titlecards title={"Blockbaster"} catogery={"top_rated"}/>
      <Titlecards titel={"Recomended"}  catogery={"popular"}/>
      <Titlecards  catogery={"upcoming"} />
      <Titlecards title={"Blockbaster"}  catogery={"now_playing"}/>
    </div>

    

    </div>
   </>
  )
}

export default Home
