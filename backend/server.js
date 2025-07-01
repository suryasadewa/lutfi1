const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact Form Received:', { name, email, message });

  const data = {
    name,
    email,
    message,
    timestamp: new Date().toISOString()
  };

  const filePath = path.join(__dirname, 'messages.json');

  let existing = [];
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, 'utf8');
    existing = JSON.parse(fileData || '[]');
  }

  existing.push(data);

  try {
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));
    res.json({ success: true, msg: 'Pesan berhasil disimpan.' });
  } catch (err) {
    console.error('Gagal menyimpan pesan:', err);
    res.status(500).json({ success: false, msg: 'Gagal menyimpan pesan.' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});
