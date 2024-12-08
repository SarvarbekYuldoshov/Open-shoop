import React, { useState } from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
import './Hero.css';
import Rasm_6 from '../images/rasm6.png';
import Rasm_7 from '../images/rasm7.png';
import Rasm_8 from '../images/rasm8.png';
import Rasm_9 from '../images/rasm9.svg';

// Modal Component
const CustomModal = ({ visible, onClose, form, sendMessage }) => (
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
          { min: 5, message: "Ism 5 ta belgidan kam bo'lmasligi kerak" },
        ]}
      >
        <Input className='w-full h-[50px] md:w-[480px]' placeholder='Ismingizni kiriting' />
      </Form.Item>
      <Form.Item
        label="Surname"
        name="surname"
        rules={[
          { required: true, message: 'Familiyangizni kiriting' },
          { min: 5, message: "Familiya 5 ta belgidan kam bo'lmasligi kerak" },
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
            message: 'Telefon raqam +998 bilan boshlanib, 9 ta raqam bilan davom etishi kerak',
          },
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

const Hero = () => {
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
          body: JSON.stringify({ chat_id, text: messageText }),
        })
          .then(res => res.json())
          .then(() => {
            message.success('Yuborildi');
            setOpen(false);
            form.resetFields();
          })
          .catch(err => {
            console.error(err);
            message.error('Yuborishda xatolik yuz berdi');
          });
      })
      .catch(() => {
        message.error("Iltimos, barcha maydonlarni to'ldiring!");
      });
  };

  const showModal = () => setOpen(true);
  const closeModal = () => {
    setOpen(false);
    form.resetFields(); // Reset form fields when the modal is closed
  };

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
            <li>
              <img className='hero-img-2' src={Rasm_8} alt="" />
            </li>
            <li>
              <img className='hero-img-3' src={Rasm_9} alt="" />
            </li>
          </ul>
          <button className='hero-btn' onClick={showModal}>LEARN MORE</button>
        </div>
      </div>

      {/* Modal Integration */}
      <CustomModal visible={open} onClose={closeModal} form={form} sendMessage={sendMessage} />
    </div>
  );
};

export default Hero;
