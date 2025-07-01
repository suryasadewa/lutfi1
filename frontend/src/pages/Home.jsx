import React, { useEffect, useState } from 'react';
import './Home.css'; // Pastikan file CSS ini ada

function Home() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Selamat Datang di Portfolio Lutfi Hidayatul Latifah';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
  }, []);

  return (
    <div className="home-page">
      <header className="header">
        <h1>{typedText}</h1>
        <p className="subtitle">Mahasiswa S1 Teknik Informatika • Web Developer Enthusiast</p>
      </header>

      <main className="main-content">
        <section className="section">
          <h2>Tentang Saya</h2>
          <p>
            Saya adalah mahasiswa aktif S1 Teknik Informatika di STMIK Widya Utama Purwokerto
            yang memiliki minat besar dalam dunia teknologi digital, pengembangan aplikasi,
            serta eksplorasi kreativitas di bidang multimedia dan konten interaktif.
          </p>
          <p>
            Saya merupakan pribadi yang jujur, bertanggung jawab, kerja keras, dan antusias terhadap tantangan baru,
            serta memiliki semangat belajar yang tinggi untuk terus meningkatkan kemampuan teknis.
          </p>
        </section>

        <section className="section highlight">
          <h2>Tujuan Website Ini</h2>
          <p>
            Website ini dibuat untuk menampilkan portofolio pribadi saya, mulai dari proyek
            pengembangan web hingga pengalaman kerja dan keahlian saya di bidang teknologi.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Lutfi Hidayatul Latifah. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
