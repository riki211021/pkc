import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BatasWilayah() {
  return (
    <div className="pt-20 pb-16 font-sans bg-gray-50">
      <Navbar />

      <section className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-10">Batas Wilayah Desa</h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div className="border-l-4 border-green-700 pl-4">
            <h2 className="text-2xl font-semibold text-green-700">Batas Wilayah</h2>
            <p className="text-gray-700 mt-2">Berikut adalah batas-batas wilayah administratif Desa Sukamaju:</p>
          </div>

          {/* DATA BATAS WILAYAH */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-5 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-green-700">Sebelah Utara</h3>
              <p className="text-gray-700">
                Berbatasan dengan: <b>DESA PILANGKENCENG, KEC. PILANGKENCENG</b>
              </p>
            </div>

            <div className="bg-gray-100 p-5 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-green-700">Sebelah Selatan</h3>
              <p className="text-gray-700">
                Berbatasan dengan: <b>DESA BUDURAN, KEC. WONOASRI</b>
              </p>
            </div>

            <div className="bg-gray-100 p-5 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-green-700">Sebelah Timur</h3>
              <p className="text-gray-700">
                Berbatasan dengan: <b>DESA KEDUNGREJO, KEC. PILANGKENCENG</b>
              </p>
            </div>

            <div className="bg-gray-100 p-5 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-green-700">Sebelah Barat</h3>
              <p className="text-gray-700">
                Berbatasan dengan: <b>DESA KUWU, KEC. BALEREJO</b>
              </p>
            </div>
          </div>

          {/* PETA */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Peta Wilayah</h3>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.482120431289!2d111.63818549999999!3d-7.522273799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79c64bdb9ebe4b%3A0xc423aa893c1cad73!2sKantor%20Kepala%20Desa%20Purworejo!5e0!3m2!1sid!2sid!4v1763524693103!5m2!1sid!2sid"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Desa"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
