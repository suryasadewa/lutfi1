// frontend/src/Contact.jsx
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();
      if (result.success) {
        setResponseMessage('Pesan berhasil dikirim!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponseMessage('Gagal mengirim pesan!');
      }
    } catch (error) {
      console.error(error);
      setResponseMessage('Terjadi kesalahan!');
    }
  };

  return (
    <div>
      <h2>Kontak Saya</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nama" value={formData.name} onChange={handleChange} required />
        <br />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <br />
        <textarea name="message" placeholder="Pesan" value={formData.message} onChange={handleChange} required />
        <br />
        <button type="submit">Kirim</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

export default Contact;
