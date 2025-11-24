import React, { useState } from "react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleDropdown = () => setOpenDropdown(!openDropdown);

  return (
    <nav className="bg-green-700 text-white p-4 fixed top-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Logo Desa" 
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-xl font-bold">Desa Purworejo</h1>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="hover:text-yellow-300">Beranda</a>
          <a href="#berita" className="hover:text-yellow-300">Berita</a>

          {/* DROPDOWN DATA */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-yellow-300 flex items-center gap-1"
            >
              Data
              <span>▼</span>
            </button>

            {openDropdown && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg w-48">
                <a href="/penduduk" className="block px-4 py-2 hover:bg-gray-200">Penduduk</a>
                <a href="/luas" className="block px-4 py-2 hover:bg-gray-200">Luas Wilayah</a>
                <a href="/pekerjaan" className="block px-4 py-2 hover:bg-gray-200">Mata Pencaharian</a>
                <a href="/pendidikan" className="block px-4 py-2 hover:bg-gray-200">Pendidikan</a>
                <a href="/kesehatan" className="block px-4 py-2 hover:bg-gray-200">Kesehatan</a>
                <a href="/batas" className="block px-4 py-2 hover:bg-gray-200">Batas Wilayah</a>
                <a href="/orbitasi" className="block px-4 py-2 hover:bg-gray-200">Orbitasi</a>
               
              </div>
            )}
          </div>

          <a href="/tentang" className="hover:text-yellow-300">Tentang</a>
          <a href="/umkm" className="hover:text-yellow-300">UMKM</a>

          {/* BUTTON LAYANAN ONLINE */}
          <a
            href="/layanan"
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Layanan Online
          </a>
        </div>
      </div>
    </nav>
  );
}
