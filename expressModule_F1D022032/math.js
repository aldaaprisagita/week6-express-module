function tambah(a, b) {
  return a + b;
}

function kali(a, b) {
  return a * b;
}

function kurang(a, b) {
  return a - b;
}

function bagi(a, b) {
  if (b === 0) {
    return "Error: tidak bisa dibagi 0";
  }
  return a / b;
}

module.exports = { tambah, kali, kurang, bagi };
