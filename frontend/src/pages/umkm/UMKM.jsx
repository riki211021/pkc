import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React, { useState, useEffect } from "react";
import axios from "../../api/axios";

export default function Umkm() {
  const [selected, setSelected] = useState(null);
  const [dataUMKM, setDataUMKM] = useState([]);

  useEffect(() => {
    axios
      .get("/umkm")
      .then((res) => setDataUMKM(res.data))
      .catch((err) => console.error(err));
  }, []);

  const kategoriUMKM = [...new Set(dataUMKM.map((item) => item.kategori))];

  return (
    <div className="w-full bg-neutral-50">
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* TITLE SECTION */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 bg-white rounded-full mb-4 shadow-sm">
            <span className="text-neutral-600 text-sm tracking-wider uppercase font-light">
              Usaha Lokal
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-light text-neutral-900 tracking-tight mb-4">
            UMKM Desa
          </h1>
          <div className="flex items-center justify-center gap-2 text-neutral-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <p className="text-base font-light">
              Total UMKM Terdaftar: <span className="font-medium text-neutral-900">{dataUMKM.length}</span>
            </p>
          </div>
        </div>

        {/* KATEGORI */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <h2 className="text-3xl font-light text-neutral-900">Kategori UMKM</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {kategoriUMKM.map((kat, index) => (
              <span 
                key={index} 
                className="group bg-white hover:bg-neutral-900 text-neutral-900 hover:text-white border border-neutral-200 hover:border-neutral-900 px-6 py-2.5 rounded-full text-sm font-light tracking-wide transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {kat}
              </span>
            ))}
          </div>
        </div>

        {/* DAFTAR UMKM */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </div>
          <h2 className="text-3xl font-light text-neutral-900">Daftar UMKM</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataUMKM.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:border-neutral-200 transform hover:-translate-y-2"
              onClick={() => setSelected(item)}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={`http://localhost:8000/storage/${item.foto}`} 
                  alt={item.nama} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-neutral-900 text-xs font-light tracking-wide">{item.kategori}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-normal text-neutral-900 mb-2 line-clamp-1">
                  {item.nama}
                </h3>
                <p className="text-neutral-600 text-sm font-light tracking-wide">
                  {item.kategori}
                </p>
                
                <div className="mt-4 flex items-center text-neutral-900 group-hover:text-neutral-600 transition-colors duration-300">
                  <span className="text-sm font-light tracking-wide">Lihat Detail</span>
                  <svg 
                    className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL DETAIL */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-fade-in">
          <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden transform animate-slide-up max-h-[90vh] overflow-y-auto">
            {/* Header dengan Gambar */}
            <div className="relative h-72">
              <img 
                src={`http://localhost:8000/storage/${selected.foto}`} 
                alt={selected.nama} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              
              {/* Close Button */}
              <button 
                className="absolute top-6 right-6 w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center text-neutral-900 hover:text-neutral-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => setSelected(null)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Badge Kategori */}
              <div className="absolute bottom-6 left-6">
                <span className="bg-white/90 backdrop-blur-sm text-neutral-900 px-4 py-2 rounded-full text-sm font-light tracking-wide shadow-lg">
                  {selected.kategori}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-8 leading-tight">
                {selected.nama}
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider font-light mb-1">Kategori</p>
                    <p className="text-neutral-900 font-light">{selected.kategori}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider font-light mb-1">Alamat</p>
                    <p className="text-neutral-900 font-light">{selected.alamat}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider font-light mb-1">Kontak</p>
                    <p className="text-neutral-900 font-light">{selected.kontak}</p>
                  </div>
                </div>
              </div>

              {/* Katalog Dagangan */}
              <div className="border-t border-neutral-200 pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-neutral-900">Katalog Dagangan</h3>
                </div>

                <div className="space-y-2">
                  {Array.isArray(selected.katalog) && selected.katalog.length > 0 ? (
                    selected.katalog.map((item, i) => (
                      <div key={i} className="flex gap-3 items-start group">
                        <div className="w-2 h-2 bg-neutral-900 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                        <p className="text-neutral-600 font-light leading-relaxed">{item}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-neutral-500 font-light italic">Tidak ada katalog tersedia</p>
                  )}
                </div>
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
          }
          to {
            opacity: 1;
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
          animation: fade-in 0.3s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}