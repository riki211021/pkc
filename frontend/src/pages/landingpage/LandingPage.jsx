import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import bgBeranda from "../../assets/img/beranda.jpeg";
import bgProfil from "../../assets/img/profil1.jpeg";
import bgProfil1 from "../../assets/img/profil.jpeg";

export default function LandingPage() {
  const [berita, setBerita] = useState([]);
  const [selectedBerita, setSelectedBerita] = useState(null);
  const [kades, setKades] = useState([]);

  useEffect(() => {
    api
      .get("/kepala-desa")
      .then((res) => setKades(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .get("/berita")
      .then((res) => setBerita(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="font-sans bg-neutral-50">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section id="beranda" className="h-screen bg-cover bg-center flex items-center justify-center relative overflow-hidden">
        {/* Background Blur Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url(${bgBeranda})`,
            filter: "blur(2px)",
          }}
        />

        {/* Overlay gelap (opsional, biar teks jelas) */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4">
              <span className="text-white/90 text-sm tracking-wider uppercase font-light">Desa Pilangkenceng</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight tracking-tight">
              Selamat Datang di
              <br />
              <span className="font-semibold bg-gradient-to-r from-white to-neutral-200 bg-clip-text text-transparent">Desa Pilangkenceng</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">Kecamatan Pilangkenceng, Kabupaten Madiun</p>

            <div className="pt-4">
              <p className="text-base text-white/70 font-light italic">Desa yang maju, nyaman, dan penuh gotong royong</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* PROFIL DESA */}
      <section id="profil" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-neutral-100 rounded-full mb-4">
              <span className="text-neutral-600 text-sm tracking-wider uppercase font-light">Tentang Kami</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 tracking-tight">Profil Desa</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-neutral-200 to-neutral-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img src={bgProfil} alt="Profil Desa" className="relative rounded-2xl shadow-2xl w-full h-auto object-cover transform group-hover:scale-[0.98] transition-transform duration-500" />
              <img src={bgProfil1} alt="Profil Desa" className="relative rounded-2xl shadow-2xl w-full h-auto object-cover transform group-hover:scale-[0.98] transition-transform duration-500" />
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-light text-neutral-900 mb-6">Sejarah</h3>

              <div className="w-16 h-1 bg-gradient-to-r from-neutral-800 to-neutral-400"></div>

              <p className="text-neutral-600 leading-relaxed text-lg font-light">
                Menurut sumber cerita dan dari para sesepuh Desa Pilangkenceng masa kini, bahwa terjadinya Desa Pilangkenceng dimulai sejak zaman Belanda. Pada tahun 1879, adalah sebuah Desa Pilangkenceng yang berada di Kecamatan
                Pilangkenceng, Kabupaten Madiun. Desa Pilangkenceng mayoritas mata pencaharian penduduknya adalah petani. Desa Pilangkenceng dibagi menjadi tiga dusun, yakni Dusun Bagasem, Dusun Pilangkenceng, dan Dusun Wungu, masing-masing
                dusun memiliki sejarah masing-masing dengan segala kearifan lokalnya. Ketiga dusun tersebut dijadikan satu dengan nama Desa Pilangkenceng. Menurut para tetua desa, dahulu kala Desa Pilangkenceng merupakan daerah yang belum
                berpenghuni, yang lingkungannya banyak ditumbuhi pepohonan yang lebat dan besar. Dari sinilah pengungsi peperangan Kerajaan Mataram yang saat itu melawan pemerintah kolonial Belanda membuka lahan untuk dijadikan tempat
                persembunyian yang akhirnya berkembang menjadi suatu kumpulan masyarakat. Daerah pemukiman ini banyak ditumbuhi pepohonan yang kemudian dijadikan sumber mata pencaharian kumpulan masyarakat tersebut, yang selanjutnya
                dikembangkan menjadi tanaman produktif. Oleh karena itu, tanaman pisang, singkong, dan padi tersebut merupakan sumber kehidupan bagi masyarakat. Maka sejak saat itu untuk menandai hal tersebut diabadikan menjadi tetenger
                (penanda) untuk menjadi nama desa, yaitu Desa Pilangkenceng. Dalam masa perkembangannya, Desa Pilangkenceng terpecah menjadi 3 (tiga) dusun. Hal ini sejak tahun 1918, tiga dusun itu adalah:
              </p>

              <p className="text-neutral-600 leading-relaxed text-lg font-light">
                Pada zaman dahulu sesepuh mengadakan syiar dan perjalanan singgah di sebuah sungai yang tidak ada airnya dan dinamakan Bag, dan di sekitar situ ada pohon asem yang sangat rindang dan besar, maka sebagai tanda (tetenger)
                dinamakan Dusun Bagasem. Di ujung barat yang saat itu masih hutan belantara terdapat pohon pilang yang tinggi dan lurus, di sebelahnya ada sendang yang kemudian dijadikan tempat pemukiman warga, maka sebagai tanda (tetenger)
                dinamakan Dusun Pilangkenceng. Menurut para tetua desa, dahulu kala para pengungsi peperangan Kerajaan Mataram yang melawan Belanda dipimpin oleh Ki Rono Yudho yang bersembunyi dan membuka lahan pemukiman. Seiring
                berjalannya waktu, di daerah tersebut tumbuh pohon wungu. Maka sebagai pertanda (tetenger), daerah tersebut dinamakan Dusun Wungu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DATA KEPALA DESA */}
      <section id="kepala-desa" className="py-24 bg-neutral-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-white rounded-full mb-4 shadow-sm">
              <span className="text-neutral-600 text-sm tracking-wider uppercase font-light">Pemerintahan Desa</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 tracking-tight">Kepala Desa Pilangkenceng</h2>
          </div>

          {kades.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {kades.map((item) => (
                <div key={item.id} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-10 text-center border border-neutral-200">
                  {/* FOTO KADES */}
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <img src={`http://localhost:8000/storage/${item.foto}`} alt={item.nama} className="w-full h-full object-cover rounded-full shadow-lg group-hover:scale-105 transition-transform duration-500" />
                  </div>

                  {/* DATA */}
                  <h3 className="text-2xl font-light text-neutral-900 mb-2">{item.nama}</h3>
                  <p className="text-neutral-600 text-sm mb-1 tracking-wide uppercase">{item.jabatan}</p>
                  <p className="text-neutral-500 font-light text-base">Periode: {item.periode}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* BERITA TERBARU */}
      <section id="berita" className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-white rounded-full mb-4 shadow-sm">
              <span className="text-neutral-600 text-sm tracking-wider uppercase font-light">Informasi Terkini</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 tracking-tight">Berita Terbaru</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {berita.map((item) => (
              <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img src={`http://localhost:8000/storage/${item.gambar}`} alt={item.judul} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs text-neutral-400 tracking-wider uppercase font-light">{item.tanggal}</p>

                  <h3 className="text-xl font-normal text-neutral-900 leading-snug line-clamp-2">{item.judul}</h3>

                  <button className="inline-flex items-center text-neutral-900 hover:text-neutral-600 font-light text-sm tracking-wide group/btn transition-colors duration-300" onClick={() => setSelectedBerita(item)}>
                    <span>Baca Selengkapnya</span>
                    <svg className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL BERITA */}
      {selectedBerita && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white max-w-3xl w-full rounded-3xl shadow-2xl overflow-hidden transform animate-slide-up">
            {/* TOMBOL TUTUP */}
            <button
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => setSelectedBerita(null)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {console.log("GAMBAR URL:", selectedBerita.gambar_url)}

            <div className="relative">
              <img src={selectedBerita.gambar_url} alt={selectedBerita.judul} className="w-full h-80 object-cover" /> <img src={selectedBerita.gambar_url} alt={selectedBerita.judul} className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="p-8 md:p-10 space-y-4">
              <p className="text-xs text-neutral-400 tracking-wider uppercase font-light">{selectedBerita.tanggal}</p>

              <h3 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight">{selectedBerita.judul}</h3>

              <div className="w-16 h-1 bg-gradient-to-r from-neutral-800 to-neutral-400"></div>

              <div className="max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                <p className="text-neutral-600 leading-relaxed text-lg font-light whitespace-pre-line">{selectedBerita.isi}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <Footer />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f5f5f5;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d4d4d4;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a3a3a3;
        }
      `}</style>
    </div>
  );
}
