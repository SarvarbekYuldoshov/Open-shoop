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
                <img src={Rasm_4} alt="" />
                asdsvdsbdfada\s
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
