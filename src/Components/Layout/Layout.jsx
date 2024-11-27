import React from 'react'
import { useTranslation } from 'react-i18next';
import "./Layout.css"
const Layout = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div className='Layout'>
       <div className='Layout-container'>
          <ul className='Layout-list'>
             <select className="select" onChange={handleLanguageChange} value={i18n.language}>
                <option className='Layout-option' value="uz">Uzbek</option>
                <option className='Layout-option' value="en">English</option>
                <option className='Layout-option' value="ru">Russian</option>
              </select>
          </ul>
          <ul className='Layout-list'>
              <li className=''>
                <img className='' src="" alt="" />
              </li>
              <li className=''>
                <p className='Layout-text'>(907) 555-0101</p>
              </li>
          </ul>
          <ul className='Layout-list'>

          </ul>
          <ul className='Layout-list'>
            
          </ul>
       </div>
    </div>
  )
}

export default Layout