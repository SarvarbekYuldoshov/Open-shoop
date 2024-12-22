import React from 'react';
import './CellPhone.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

import Rasm_4 from '../images/rasm4.png';
import Rasm_5 from '../images/rasm5.png';

const CellPhone = ({ showModal }) => {
  return (
    <div>
      <div className='CellPhone'>
        <div className='CellPhone-container'>
          <h1 className='CellPhone-title'>Cell Phone</h1>
          <div className='navbar-item'>
            <img className='navbar-img' src={Rasm_4} alt='IPhone' />
            <p className='navbar-text'>IPhone 12 Pro Max 128GB (Gray) 1300$</p>
            <button className='navbar-btn' onClick={showModal}>
              SHOP NOW
            </button>
          </div>
        </div>
        <div className='navbar-container'>
          <div className='navbar-item'>
            <img className='navbar-img' src={Rasm_5} alt='Smartwatch' />
            <p className='navbar-text'>Color your days with a little joy watch</p>
            <button className='navbar-btn' onClick={showModal}>
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* New Swiper Section */}
      <div className='menu'>
        <div className='container menu-container'>
          <h1 className='menu-title'>Каталог товаров</h1>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className='menu-mySwiper'
          >
            <SwiperSlide className='menu-swiper'>
              <img
                className='menu-img'
                src='https://aka-phone.netlify.app/images/all_product.jpg'
                alt='All Products'
              />
              <p className='menu-text'>All Products</p>
            </SwiperSlide>
            <SwiperSlide className='menu-swiper'>
              <img
                className='menu-img'
                src='https://aka-phone.netlify.app/images/phone.png'
                alt='Phone'
              />
              <p className='menu-text'>Phone</p>
            </SwiperSlide>
            <SwiperSlide className='menu-swiper'>
              <img
                className='menu-img'
                src='https://aka-phone.netlify.app/images/laptop.png'
                alt='Computer'
              />
              <p className='menu-text'>Computer</p>
            </SwiperSlide>
            <SwiperSlide className='menu-swiper'>
              <img
                className='menu-img'
                src='https://aka-phone.netlify.app/images/pffice.png'
                alt='Office'
              />
              <p className='menu-text'>Office</p>
            </SwiperSlide>
            <SwiperSlide className='menu-swiper'>
              <img
                className='menu-img'
                src='https://aka-phone.netlify.app/images/book.png'
                alt='Book'
              />
              <p className='menu-text'>Book</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CellPhone;
 