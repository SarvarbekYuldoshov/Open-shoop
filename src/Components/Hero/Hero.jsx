import React from 'react'
import "./Hero.css"
import Rasm_6 from "../images/rasm6.png"
import Rasm_7 from "../images/rasm7.png"
import Rasm_8 from "../images/rasm8.png"
import Rasm_9 from "../images/rasm9.svg"
const Hero = () => {
  return (
    <div className='hero'>
       <div className='hero-container'>
           <ul className='hero-list'>
               <img className='hero-img' src={Rasm_6} alt="" />
           </ul>
           <div className='hero-mendle'>
                <ul className='hero-list'>
                    <img className='hero-img-1' src={Rasm_7} alt="" />
                </ul>
                <ul className='hero-list'>
                    <li className=''>
                        <img className='hero-img-2' src={Rasm_8} alt="" /> 
                    </li>
                    <li className=''>
                        <img className='hero-img-3' src={Rasm_9} alt="" />
                    </li>
                </ul>
           </div>
           <button className='hero-btn'></button>
       </div>
    </div>
  )
}

export default Hero