import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Modal, message, Input, Form } from 'antd';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Rasm_4 from "../images/rasm4.png";
import './Navbar.css';

// Modal Component
const CustomModal = ({ visible, onClose, form, sendMessage }) => {
  return (
    <Modal open={visible} footer={null} onCancel={onClose}>
      <h1 className='flex items-center justify-center text-2xl md:text-3xl'>Malumotlarni tuldiring</h1>
      <p className='text-center text-lg md:text-xl text-blue-600'>
        Biz siz bilan imkon qadar tez bog`lanamiz va sizning mahsulotingizni yetkazib beramiz. Xizmatimiz bepul!
      </p>
      <Form form={form} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[
            { required: true, message: 'Ismingizni kiriting' },
            { min: 5, message: "Ism 5 ta belgidan kam bo'lmasligi kerak" }
          ]}
        >
          <Input className='w-full h-[50px] md:w-[480px]' placeholder='Ismingizni kiriting' />
        </Form.Item>
        <Form.Item
          label="Surname"
          name="surname"
          rules={[
            { required: true, message: 'Familiyangizni kiriting' },
            { min: 5, message: "Familiya 5 ta belgidan kam bo'lmasligi kerak" }
          ]}
        >
          <Input className='w-full h-[50px] md:w-[480px]' placeholder='Familiyangizni kiriting' />
        </Form.Item>
        <Form.Item
          label="Number"
          name="number"
          rules={[
            { required: true, message: 'Raqamingizni kiriting' },
            {
              pattern: /^\+998\d{9}$/,
              message: 'Telefon raqam +998 bilan boshlanib, 9 ta raqam bilan davom etishi kerak'
            }
          ]}
        >
          <Input className='w-full h-[50px] md:w-[480px]' placeholder='+998' />
        </Form.Item>
        <Button className='w-full md:w-[480px] h-[50px]' onClick={sendMessage} type="primary">
          Yuborish
        </Button>
      </Form>
    </Modal>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const sendMessage = () => {
    form.validateFields()
      .then(values => {
        const { name, surname, number } = values;
        const token = "7288526920:AAH-vd_HYqMjr_qE5zG6idFBNxfFeMi9aFo";
        const chat_id = "6801549705";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const messageText = `Ism: ${name}\nFamiliya: ${surname}\nNumber: ${number}`;

        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id, text: messageText })
        })
          .then(res => res.json())
          .then(() => {
            message.success("Yuborildi");
            setOpen(false);
            form.resetFields();
          })
          .catch(err => {
            console.error(err);
            message.error("Yuborishda xatolik yuz berdi");
          });
      })
      .catch(() => {
        message.error("Iltimos, barcha maydonlarni to'ldiring!");
      });
  };

  const showModal = () => setOpen(true);
  const closeModal = () => {
    setOpen(false);
    form.resetFields(); // Reset the form fields when the modal is closed
  };

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
              <div className='navbar-mendle'>   
                <ul className='navbar-list'>
                  <img className='navbar-img' src={Rasm_4} alt="" />
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
                  <img className='navbar-img' src={Rasm_4} alt="" />
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
                  <img className='navbar-img' src={Rasm_4} alt="" />
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
                  <img className='navbar-img' src={Rasm_4} alt="" />
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
          </Swiper>
        </div>
      </div>

      {/* Modal Integration */}
      <CustomModal visible={open} onClose={closeModal} form={form} sendMessage={sendMessage} />
    </div>
  );
};

export default Navbar;
