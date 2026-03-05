import React, { useState } from 'react';
import contact from "../assets/contact.svg";
import { Form, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Valid email is required';
    if (!formData.message) errors.message = 'Message is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs.sendForm('service_9c1nuhr', 'template_qdxb8d7', e.target, 'ZV1YP-HClo-vwv8og')
      .then((result) => {
        setSuccessMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        setSuccessMessage('Failed to send message.');
      });
  };

  return (
    <div className="relative w-screen h-screen font-roboto" id='contact'>
      <img src={contact} alt="Contact" className="w-full h-full object-cover brightness-75" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-6">
        <div className='text-5xl'>CONTACT 📧</div>
        <div className="p-6 rounded-lg w-2/6 min-w-96">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4" controlId="formBasicName">
              <Form.Control 
                type="text" 
                name="name"
                placeholder="Name" 
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control 
                type="email" 
                name="email"
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicMessage">
              <Form.Control 
                as="textarea" 
                name="message"
                rows={5} 
                placeholder="Message" 
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <Form.Text className="text-danger">{errors.message}</Form.Text>}
            </Form.Group>
            <div className="flex justify-center">
              <Button variant="primary" type="submit">
                SEND
              </Button>
            </div>
            {successMessage && <div className="text-center mt-4">{successMessage}</div>}
          </Form>
        </div>
        <div className='flex pt-16'>
            <a href="https://www.linkedin.com/in/hashmeet-singh-saini/" className='text-white' target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={50} className='mx-3 ease-in-out transition duration-300 hover:scale-125'/>
            </a>
            <a href="https://github.com/hashmeet02" className='text-white' target="_blank" rel="noopener noreferrer">
                <FaGithub size={50} className='mx-3 ease-in-out transition duration-300 hover:scale-125'/>
            </a>
            <a href="https://music.apple.com/profile/hashmeet_s" className='text-white' target="_blank" rel="noopener noreferrer">
                <SiApplemusic size={50} className='mx-3 ease-in-out transition duration-300 hover:scale-125'/>
            </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
