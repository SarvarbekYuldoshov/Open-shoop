import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Rasm_4 from "../images/rasm4.png"
import 'swiper/css/pagination';
import './Navbar.css';
import { Pagination } from 'swiper/modules';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='Navbar-container'>
        <div className='Navbar-mindle'>
          <ul className='Navbar-list'>
            <li className='Navbar-item'>
              <a className='Navbar-link' href="">
                Cell Phones
              </a>
            </li>
            <li className='Navbar-item'>
              <a className='Navbar-link' href="">
                Computers & Laptop
              </a>
            </li>
            <li className='Navbar-item'>
              <a className='Navbar-link' href="">
                TV & Video
              </a>
            </li>
            <li className='Navbar-item'>
              <a className='Navbar-link' href="">
                Accessories
              </a>
            </li>
            <li className='Navbar-item'>
              <a className='Navbar-link' href="">
                Home Appliance
              </a>
            </li>
            <li className='Navbar-item'>
              <a className='Navbar-link' href="">
                Video Games & Consoles
              </a>
            </li>
          </ul>
        </div>
        <div className='Navbar-degree'>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
                <ul className='navbar-list'>
                    <li className=''>
                       <img className='navbar-img' src={Rasm_4} alt="" />
                    </li>
                    <li className=''>
                        <h1 className='navbar-title'>Color your days with small joy</h1>
                        <button className='navbar-btn'>SHOP NOW</button>
                    </li>
                </ul>
            </SwiperSlide>
            <SwiperSlide>
            <ul className=''>
                    <li className=''>
                       <img className='navbar-img' src={Rasm_4} alt="" />
                    </li>
                    <li className=''>
                        <h1 className='navbar-title'>Color your days with small joy</h1>
                        <button className='navbar-btn'>SHOP NOW</button>
                    </li>
                </ul>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
