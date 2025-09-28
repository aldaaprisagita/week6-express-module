const express = require("express");
const app = express();
const math = require("./math");
const profileRouter = require("./profile");

const PORT = 3000;

// Route utama
app.get("/", (req, res) => {
  res.send("NIM: F1D022032<br>Nama: Alda Dwi Aprisagita");
});

// Route hitung
app.get("/hitung", (req, res) => {
  const a = parseInt(req.query.a) || 9;
  const b = parseInt(req.query.b) || 4;
  const hasil = math.tambah(a, b);
  res.send(`Hasil penjumlahan ${a} + ${b} = ${hasil}`);
});

app.use("/profile", profileRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
