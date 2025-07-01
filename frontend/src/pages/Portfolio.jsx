// frontend/src/pages/Portfolio.jsx
import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <h1>Portofolio Pengalaman Kerja</h1>
      <p className="portfolio-intro">
        Berikut adalah beberapa pengalaman kerja yang pernah saya jalani, yang menunjukkan keahlian saya dalam lingkungan kerja nyata.
      </p>

      <div className="portfolio-card-container">
        <div className="portfolio-card">
          <h3>Focus Fotocopy UNSOED</h3>
          <p>Bekerja selama 9 bulan sebagai staf di bagian fotokopi dan administrasi dokumen untuk kebutuhan mahasiswa dan umum.</p>
        </div>
        <div className="portfolio-card">
          <h3>Wijaya ACC</h3>
          <p>Selama 4 bulan terlibat dalam aktivitas administrasi keuangan, data entry, serta pelayanan pelanggan.</p>
        </div>
        <div className="portfolio-card">
          <h3>Wedrink</h3>
          <p>Pengalaman kerja selama 1 bulan di bagian pelayanan dan operasional penjualan minuman ringan.</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
