import React from 'react';
import "./CellPhone.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from 'antd';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Rasm_4 from "../images/rasm4.png";
import Rasm_5 from "../images/rasm5.png";


const CellPhone = ({ showModal }) => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {[...Array(2)].map((_, index) => (
        <React.Fragment key={index}>
          <SwiperSlide>
            <div className='CellPhone-mendle'>
              <h1 className='CellPhone-title'>Cell Phone</h1>
              <ul className='navbar-list'>
                <img className='navbar-img' src={Rasm_4} alt="" />
                <p className='CellPhone-text'>IPhone 12 Pro Max 128GB (Gray)</p>
              </ul>
              <ul className='navbar-list'>
                <li>
                  <h1 className='navbar-title'>Color your days with small joy</h1>
                </li>
                <li>
                  <Button className='navbar-btn' onClick={showModal}>SHOP NOW</Button>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='navbar-mendle'>
              <ul className='navbar-list'>
                <img className='navbar-img' src={Rasm_5} alt="" />
              </ul>
              <ul className='navbar-list'>
                <li>
                  <h1 className='navbar-title'>Color your days with a little joy watch</h1>
                </li>
                <li>
                  <Button className='navbar-btn' onClick={showModal}>SHOP NOW</Button>
                </li>
              </ul>
            </div>
          </SwiperSlide>
        </React.Fragment>
      ))}
    </Swiper>
  );
};

export default CellPhone;
