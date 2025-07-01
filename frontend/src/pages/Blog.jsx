// frontend/src/pages/Blog.jsx
import React from 'react';
import './Blog.css';

const Blog = () => (
  <div className="blog-page">
    <h1>Blog & Pengalaman Kerja</h1>
    <p className="blog-intro">
      Berikut adalah beberapa pengalaman kerja saya yang memperkuat keterampilan di dunia kerja nyata, sekaligus pembelajaran yang berharga.
    </p>

    <div className="blog-card-container">
      <div className="blog-card">
        <h3>Focus Fotocopy UNSOED</h3>
        <p>Saya bekerja selama 9 bulan di Focus Fotocopy UNSOED sebagai staf dokumentasi dan layanan fotokopi untuk kebutuhan mahasiswa.</p>
      </div>

      <div className="blog-card">
        <h3>Wijaya ACC</h3>
        <p>Selama 4 bulan, saya membantu dalam proses administrasi data pelanggan, entri data, dan pengarsipan dokumen penting.</p>
      </div>

      <div className="blog-card">
        <h3>Wedrink</h3>
        <p>Pengalaman kerja selama 1 bulan sebagai pelayan dan kasir, melatih saya dalam hal kecepatan kerja dan keramahan terhadap pelanggan.</p>
      </div>
    </div>
  </div>
);

export default Blog;
