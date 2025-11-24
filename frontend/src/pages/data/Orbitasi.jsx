import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Orbitasi() {
  const dataOrbitasi = [
    { tempat: "Kantor Kecamatan", jarak: "7 km", waktu: "10 menit" },
    { tempat: "Kantor Kabupaten", jarak: "4 km", waktu: "5 menit" },
    { tempat: "Kota Terdekat", jarak: "26 km", waktu: "40 menit" },
    { tempat: "Pusat Pemerintahan Provinsi", jarak: "186 km", waktu: "7 jam" },
    
  ];

  return (
    <div className="pt-20">
      <Navbar />

      {/* ===================== HEADER ===================== */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <h1 className="text-4xl font-bold text-green-800 text-center mb-4">
          Orbitasi Desa
        </h1>
        <p className="text-center text-gray-600 text-lg">
          Informasi jarak tempuh dari Desa menuju pusat pelayanan publik dan fasilitas penting.
        </p>
      </div>

      {/* ===================== CARD LIST ===================== */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {dataOrbitasi.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              {item.tempat}
            </h3>
            <p className="text-gray-700">
              <strong>Jarak:</strong> {item.jarak}
            </p>
            <p className="text-gray-700">
              <strong>Waktu Tempuh:</strong> {item.waktu}
            </p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
