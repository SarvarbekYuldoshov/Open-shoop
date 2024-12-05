import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Navbar.css';
import { Pagination } from 'swiper/modules';
import { Button, Form, Input, Modal, message } from 'antd';
import Rasm_4 from "../images/rasm4.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [form] = Form.useForm();

  const sendMessage = () => {
    form
      .validateFields()
      .then((values) => {
        const { name, surname, number } = values;
        message.success(
        );
        setOpen(false);
        form.resetFields();
      })
      .catch(() => {
        message.error('Iltimos, barcha maydonlarni to\'ldiring!');
      });
  };

  const showModal = () => {
    setSelectedItem({ name: 'Sample Product', price: '100,000 UZS' }); // Sample product
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className='Navbar'>
      <div className='Navbar-container'>
        <div className='Navbar-mindle'>
          <ul className='Navbar-list'>
            {['Cell Phones', 'Computers & Laptop', 'TV & Video', 'Accessories', 'Home Appliance', 'Video Games & Consoles'].map((category, index) => (
              <li key={index} className='Navbar-item'>
                <a className='Navbar-link' href="#">{category}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='Navbar-degree'>
          <Swiper
            pagination={{ dynamicBullets: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='navbar-mendle'>
                <ul className='navbar-list'>
                  <img className='navbar-img' src={Rasm_4} alt="Product" />
                </ul>
                <ul className='navbar-list'>
                  <li>
                    <h1 className='navbar-title'>Color your days with small joy</h1>
                  </li>
                  <li>
                    <Button className='mt-4 w-[150px] bg-blue-500 text-white hover:bg-blue-600' onClick={showModal}>
                      SHOP NOW
                    </Button>
                    <Modal open={open} footer={null} onCancel={closeModal}>
                      <h2>Mahsulot: {selectedItem?.name}</h2>
                      <h3>Narxi: {selectedItem?.price}</h3>
                      <Form form={form} layout="vertical">
                        <Form.Item
                          name="name"
                          rules={[
                            { required: true, message: 'Ismingizni kiriting' },
                            { min: 5, message: 'Ism 5 tadan kam bo\'lmasligi kerak' },
                          ]}
                        >
                          <Input placeholder='Ismingizni kiriting' />
                        </Form.Item>
                        <Form.Item
                          name="surname"
                          rules={[
                            { required: true, message: 'Familiyangizni kiriting' },
                            { min: 5, message: 'Familiya 5 tadan kam bo\'lmasligi kerak' },
                          ]}
                        >
                          <Input placeholder='Familiyangizni kiriting' />
                        </Form.Item>
                        <Form.Item
                          name="number"
                          rules={[
                            { required: true, message: 'Raqamingizni kiriting' },
                            {
                              pattern: /^\+998\d{9}$/,
                              message: 'Telefon raqam +998 bilan boshlanib, 9 ta raqam bilan davom etishi kerak',
                            },
                          ]}
                        >
                          <Input placeholder='+998XXXXXXXXX' />
                        </Form.Item>
                        <Button onClick={sendMessage} type="primary">
                          Yuborish
                        </Button>
                      </Form>
                    </Modal>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
