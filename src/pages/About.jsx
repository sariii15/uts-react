import { Link } from "react-router-dom";

export default function About() {
  return (
    <main>
      <h1>Tentang IphoneStore</h1>
      <p>IntegerStore adalah marketplace yang menjual produk-produk Apple.</p>
      <Link to="/">Kembali ke Beranda</Link>
    </main>
  );
}

