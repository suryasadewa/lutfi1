import React, { useState } from 'react';
import './styles.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      setResponseMessage(result.success ? 'Pesan berhasil dikirim!' : 'Gagal mengirim pesan!');
      if (result.success) setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setResponseMessage('Terjadi kesalahan!');
    }
  };

  return (
    <div className="page">
      <h1>Kontak Saya</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Nama" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Pesan" value={formData.message} onChange={handleChange} required />
        <button type="submit">Kirim</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

export default Contact;
