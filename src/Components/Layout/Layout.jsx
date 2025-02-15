import React from 'react';
import { useTranslation } from 'react-i18next';
import Rasm_1 from "../images/rasm1.png";
import Rasm_2 from "../images/rasm2.png";
import Rasm_3 from "../images/rasm3.png";
import "./Layout.css";

const Layout = () => {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className='Layout'>
      <div className='Layout-container'>
        <div className='Layout-middle'>
           <ul className='Layout-list'>
              <select className="Layout-select"onChange={handleLanguageChange} value={i18n.language}>
                  <option className='Layout-option' value="uz">Uzbek</option>
                  <option className='Layout-option' value="en">English</option>
                  <option className='Layout-option' value="ru">Russian</option>
              </select>
           </ul>

{/* ------------------------------------------------------------------------------------------------------------------------------- */}

           <ul className='Layout-list'>
              <img className='Layout-img' src={Rasm_1} alt="Contact" />
              <p className='Layout-text'>(907) 555-0101</p>
           </ul>
           
      </div>
           <div className='Layout-middle'>
                <ul className='Layout-list'>
                    <li>
                      <img className='Layout-img' src={Rasm_2} alt="Description" />
                    </li>
                    <li>
                      <p className='Layout-text'>Sing in</p>
                    </li>
                </ul>

 {/* ---------------------------------------------------------------------------------------------------------- */}

                <ul className='Layout-list'>
                    <li>
                      <img className='Layout-img' src={Rasm_3} alt="Description" />
                    </li>
                    <li>
                      <p className='Layout-text'>Cart</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Layout;
