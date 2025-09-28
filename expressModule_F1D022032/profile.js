const express = require("express");
const router = express.Router();

const profiles = [
  { nim: "F1D022032", nama: "Alda Dwi Aprisagita", prodi: "Teknik Informatika" },
  { nim: "F1D022888", nama: "Merah Putih", prodi: "Teknik Informatika" },
  { nim: "F1D022999", nama: "Putih Merah", prodi: "Teknik Informatika" },
];

router.get("/", (req, res) => {
  res.json(profiles);
});

router.get("/:nim", (req, res) => {
  const nim = req.params.nim;
  const profile = profiles.find((p) => p.nim === nim);

  if (profile) {
    res.json(profile);
  } else {
    res.status(404).json({ message: `Profile dengan NIM=${nim} tidak ditemukan.` });
  }
});

module.exports = router;
