const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 5174;
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173', //port front end
  }));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'biodata',
});

connection.connect((err) => {
  if (err) {
    console.error('Error saat hendak menghubungkan ke server MySQL:', err);
  } else {
    console.log('Terhubung dengan server MySQL');
  }
});
app.use(express.json());

app.post('/post', (req, res) => {
  const { nama, email, notelepon } = req.body;

  if (!nama || !email || !notelepon) {
    return res.status(400).json({ error: 'Nama, email, dan notelepon harus di isi' });
  }

  const query = 'INSERT INTO biodata (nama, email, no) VALUES (?, ?, ?)';
  connection.query(query, [nama, email, notelepon], (err, results) => {
    if (err) {
      // console.error(err);
      return res.status(500).json({ error: 'Error saat memasukkan data ke MySQL' });
    }

    return res.status(200).json({ message: 'Data berhasil disimpan', data: results });
  });
});

app.get('/biodata', (req, res) => {
    const query = 'SELECT * FROM biodata';
  
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error:', err);
        return res.status(500).json({ error: 'Error fetching data' });
      }
  
      return res.status(200).json({ data: results });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});