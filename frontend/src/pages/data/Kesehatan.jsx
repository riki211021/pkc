import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Kesehatan() {
  const fasilitasKesehatan = [
    {
      id: 1,
      nama: "Puskesmas Pembantu Desa",
      alamat: "RT 02 / RW 01, Desa Sukamaju",
      layanan: ["Pemeriksaan Umum", "Imunisasi", "Pengobatan Ringan"],
      foto: "https://source.unsplash.com/400x300/?clinic",
    },
    {
      id: 2,
      nama: "Posyandu Melati",
      alamat: "RT 03 / RW 02, Desa Sukamaju",
      layanan: ["Penimbangan Balita", "Pemberian Vitamin", "Penyuluhan Kesehatan"],
      foto: "https://source.unsplash.com/400x300/?healthcare",
    },
    {
      id: 3,
      nama: "Klinik Bidan Rahayu",
      alamat: "RT 05 / RW 03, Desa Sukamaju",
      layanan: ["Pemeriksaan Ibu Hamil", "Persalinan", "KB"],
      foto: "https://source.unsplash.com/400x300/?midwife,clinic",
    },
  ];

  const tenagaMedis = [
    {
      id: 1,
      nama: "dr. Andika Pratama",
      jabatan: "Dokter Umum",
      foto: "https://source.unsplash.com/300x300/?doctor",
    },
    {
      id: 2,
      nama: "Rina Suryani, Amd.Keb",
      jabatan: "Bidan Desa",
      foto: "https://source.unsplash.com/300x300/?nurse",
    },
    {
      id: 3,
      nama: "Slamet Hadi",
      jabatan: "Perawat",
      foto: "https://source.unsplash.com/300x300/?male-nurse",
    },
  ];

  return (
    <div className="pt-20 pb-10 bg-gray-50 min-h-screen font-sans">
      <Navbar />

      {/* ================== JUDUL ================== */}
      <div className="text-center mb-12 px-6">
        <h1 className="text-4xl font-bold text-green-700">Kesehatan Desa</h1>
        <p className="text-gray-700 text-lg mt-2">
          Informasi fasilitas kesehatan dan tenaga medis yang tersedia di Desa Sukamaju.
        </p>
      </div>

      {/* ================== FASILITAS KESEHATAN ================== */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Fasilitas Kesehatan</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fasilitasKesehatan.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={item.foto} alt={item.nama} className="h-48 w-full object-cover" />

              <div className="p-6">
                <h3 className="text-xl font-bold">{item.nama}</h3>
                <p className="text-gray-600 mb-3">{item.alamat}</p>

                <h4 className="font-semibold text-green-700 mb-2">Layanan:</h4>
                <ul className="list-disc ml-5 text-gray-700 space-y-1">
                  {item.layanan.map((lay, index) => (
                    <li key={index}>{lay}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================== TENAGA MEDIS ================== */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
          Tenaga Medis Desa
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {tenagaMedis.map((tm) => (
            <div
              key={tm.id}
              className="bg-white p-6 rounded-xl shadow text-center hover:shadow-xl transition"
            >
              <img
                src={tm.foto}
                alt={tm.nama}
                className="w-32 h-32 rounded-full mx-auto object-cover shadow-md"
              />
              <h4 className="text-xl font-semibold mt-4">{tm.nama}</h4>
              <p className="text-green-700 font-medium">{tm.jabatan}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
