import React from 'react';
import './styles.css';
import profilePic from '../assets/profile.jpeg'; // Ganti jika nama file berbeda

const About = () => (
  <div className="about-container">
    <div className="about-card">
      <img src={profilePic} alt="Foto Profil" className="profile-pic" />

      <div className="about-text">
        <h1>LUTFI HIDAYATUL LATIFAH</h1>
        <p><strong>📞:</strong> 0878-6515-2588</p>
        <p><strong>📧:</strong> lutfihidayatul1212@gmail.com</p>

        <hr />

        <h2>🧍‍♀️ Data Pribadi</h2>
        <ul>
          <li><strong>Nama:</strong> Lutfi Hidayatul Latifah</li>
          <li><strong>Tempat, Tanggal Lahir:</strong> Banyumas, 05 Februari 2004</li>
          <li><strong>Alamat:</strong> Desa Ledug RT 05/02 Kec. Kembaran</li>
          <li><strong>Jenis Kelamin:</strong> Perempuan</li>
          <li><strong>Kewarganegaraan:</strong> Indonesia</li>
          <li><strong>Status:</strong> Belum Menikah</li>
        </ul>

        <h2>🎓 Pendidikan</h2>
        <ul>
          <li>2016–2019: MTs Negeri 1 Banyumas</li>
          <li>2019–2022: MA Negeri 2 Banyumas</li>
        </ul>

        <h2>💼 Pengalaman</h2>
        <ul>
          <li>Focus Fotocopy Unsoed (9 bulan)</li>
          <li>Wijaya ACC (4 bulan)</li>
          <li>Wedrink (1 bulan)</li>
        </ul>

        <h2>🛠️ Keahlian</h2>
        <ul>
          <li>Jujur</li>
          <li>Cekatan</li>
          <li>Bertanggung jawab</li>
          <li>Kerja sama tim</li>
        </ul>

        <hr />

        <h2>📖 Deskripsi Diri</h2>
        <p>
          Saya adalah mahasiswa aktif S1 Teknik Informatika di STMIK Widya Utama Purwokerto yang memiliki minat besar dalam dunia teknologi digital, pengembangan aplikasi, serta eksplorasi kreativitas di bidang multimedia dan konten interaktif.
        </p>
        <p>
          Saya merupakan pribadi yang jujur, bertanggung jawab, kerja keras, dan antusias terhadap tantangan baru, serta memiliki semangat belajar yang tinggi untuk terus meningkatkan kemampuan teknis. Saya siap berkontribusi dalam dunia teknologi yang terus berkembang.
        </p>
      </div>
    </div>
  </div>
);

export default About;
