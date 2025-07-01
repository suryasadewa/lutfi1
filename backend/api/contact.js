const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, msg: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  const data = {
    name,
    email,
    message,
    timestamp: new Date().toISOString()
  };

  const filePath = path.join('/tmp', 'messages.json');

  let existing = [];
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, 'utf8');
    existing = JSON.parse(fileData || '[]');
  }

  existing.push(data);

  try {
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));
    res.status(200).json({ success: true, msg: 'Pesan berhasil disimpan.' });
  } catch (err) {
    console.error('Gagal menyimpan pesan:', err);
    res.status(500).json({ success: false, msg: 'Gagal menyimpan pesan.' });
  }
};
