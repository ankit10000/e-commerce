import React from 'react'
import photo1 from "../img/11.jpg";
import photo2 from "../img/22.jpg";
import photo3 from "../img/33.jpg";
import photo4 from "../img/44.jpg";
import photo5 from "../img/55.jpg";
import photo6 from "../img/66.jpg";


export default function Home() {
  return (
    <>
    <div className="h1">
      <h1>Welcome on MYwebsite.....</h1>
    </div>
    <div className="main">
      <div className="box">
        <img className='img' src={photo1} alt="" />
      </div>
      <div className="box">
        <img className='img' src={photo2} alt="" />
      </div>
      <div className="box">
        <img className='img' src={photo3} alt="" />
      </div>
      <div className="box">
        <img className='img' src={photo4} alt="" />
      </div>
      <div className="box">
        <img className='img' src={photo5} alt="" />
      </div>
      <div className="box">
        <img className='img' src={photo6} alt="" />
      </div>
    </div>
    </>
  )
}
