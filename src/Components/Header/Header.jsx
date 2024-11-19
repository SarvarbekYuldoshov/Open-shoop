import React from 'react'
import "./Header.css"
import Rasm_1 from "../images/Logo.png"
const Header = () => {
  return (
    <div className='header'>
      <div className='header-container'>
       <img src={Rasm_1} alt="Logo qismi bu qism" />
           <ul className='header-list'>
              <li className=''><input className='header-input-a' type="text" placeholder='What are you looking for?' /></li>
              <li className=''><input className='' type="text" /></li>
           </ul>
           </div>
    </div>
  )
}

export default Header