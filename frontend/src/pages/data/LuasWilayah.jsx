import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function LuasWilayah() {
  const dataLuas = {
    total: 277.791 , // dalam hektar (contoh)
  };

  return (
    <>
      <Navbar />

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-10">
          Informasi Luas Wilayah Desa
        </h1>

        {/* --- Kartu Utama Total Luas --- */}
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-700">Total Luas Wilayah</h2>
          <p className="text-5xl font-bold text-green-700 mt-3">
            {dataLuas.total} <span className="text-xl font-medium">Ha</span>
          </p>
        </div>

        {/* --- Detail Tabel --- */}


        {/* --- Google Maps --- */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-green-700 mb-4">Peta Wilayah Desa</h3>

          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Map Desa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.482120431289!2d111.63818549999999!3d-7.522273799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79c64bdb9ebe4b%3A0xc423aa893c1cad73!2sKantor%20Kepala%20Desa%20Purworejo!5e0!3m2!1sid!2sid!4v1763524693103!5m2!1sid!2sid"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
