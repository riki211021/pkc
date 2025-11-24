import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function LandingPage() {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    setBerita([
      { id: 1, judul: "Pembangunan Jalan Baru Telah Dimulai", tanggal: "12 November 2025", gambar: "https://source.unsplash.com/800x400/?village" },
      { id: 2, judul: "Pelatihan UMKM Desa Berhasil Dilaksanakan", tanggal: "10 November 2025", gambar: "https://source.unsplash.com/800x400/?community" },
      { id: 3, judul: "Gotong Royong Bersih Desa Mingguan", tanggal: "8 November 2025", gambar: "https://source.unsplash.com/800x400/?clean" },
    ]);
  }, []);

  return (
    <div className="font-sans">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="beranda"
        className="h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?village,indonesia')",
        }}
      >
        <div className="bg-black/40 p-8 rounded-xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Selamat Datang di Desa Purworejo kec.Pilangkenceng Kab.Madiun</h1>
          <p className="text-lg md:text-xl">Desa yang maju, nyaman, dan penuh gotong royong.</p>
        </div>
      </section>

      {/* PROFIL DESA */}
      <section id="profil" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Profil Desa</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img src="https://source.unsplash.com/800x500/?nature,village" alt="Profil Desa" className="rounded-2xl shadow-lg" />

            <div>
              <h3 className="text-2xl font-semibold mb-4">Tentang Desa</h3>
              <p className="text-gray-700 leading-relaxed">
                Pada pertengahan abad ke-17, masyarakat di wilayah yang kini menjadi Desa Purworejo hidup secara sederhana dan berpindah-pindah mencari lahan subur untuk bercocok tanam. Suatu waktu datang sekelompok orang dipimpin Ki Ageng
                Redjo Prawiro dari Grobogan Purwodadi. Mereka menetap, bekerja keras, dan perlahan meningkatkan taraf hidup bersama warga setempat hingga kehidupan menjadi lebih baik dan teratur.
              </p>

              <p className="mt-4 text-gray-700 leading-relaxed">
                Pada tahun 1747, meningkatnya gotong royong dan kemakmuran masyarakat mendorong diadakannya syukuran berupa selamatan dan pagelaran wayang kulit. Ketika dalang menanyakan nama desa tempat pagelaran berlangsung, para sesepuh
                bermusyawarah dan menetapkan nama “Purworejo”, dari kata Purwo (awal) dan Rejo (ramai). Pada kesempatan itu pula Ki Ageng Redjo Prawiro ditetapkan sebagai pemimpin (Dekel/Demang). Hingga kini, masyarakat Purworejo tetap
                menghargai jasanya dengan melestarikan tradisi selamatan dan pagelaran wayang kulit setiap nyadranan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BERITA TERBARU */}
      <section id="berita" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Berita Terbaru</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {berita.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src={item.gambar} alt={item.judul} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <p className="text-sm text-gray-500">{item.tanggal}</p>
                  <h3 className="text-lg font-semibold mt-2 mb-3">{item.judul}</h3>
                  <button className="text-green-700 hover:underline font-medium">Baca Selengkapnya →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
