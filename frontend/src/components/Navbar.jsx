import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import logoDesa from "../assets/img/madiun.png";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setOpenDropdown(!openDropdown);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] h-20 flex items-center text-white bg-gradient-to-r from-blue-700 via-indigo-700 to-sky-800 shadow-lg">
      {/* ORNAMEN BATIK HALUS */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 200 200'%3E%3Cg fill='none' stroke='white' stroke-width='2'%3E%3Cellipse cx='100' cy='40' rx='28' ry='36'/%3E%3Cellipse cx='100' cy='160' rx='28' ry='36'/%3E%3Cellipse cx='40' cy='100' rx='36' ry='28'/%3E%3Cellipse cx='160' cy='100' rx='36' ry='28'/%3E%3Ccircle cx='100' cy='100' r='10' fill='white'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full px-6 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src={logoDesa} alt="Logo Desa" className="w-10 h-10 object-contain drop-shadow" />
          <h1 className="text-lg md:text-xl font-semibold tracking-wide">Desa Pilangkenceng</h1>
        </div>

        {/* HAMBURGER (MOBILE) */}
        <button onClick={toggleMobileMenu} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
          <span className={`w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center space-x-7 text-sm font-medium">
          <a href="/" className="hover:text-sky-200 transition">
            Beranda
          </a>
          <HashLink smooth to="/#berita" className="hover:text-sky-200 transition">
            Berita
          </HashLink>

          {/* DROPDOWN */}
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center gap-1 hover:text-sky-200 transition">
              Data
              <span className={`text-xs transition-transform ${openDropdown ? "rotate-180" : ""}`}>▼</span>
            </button>

            {openDropdown && (
              <div className="absolute right-0 mt-3 w-52 rounded-xl bg-white/95 backdrop-blur text-gray-800 shadow-xl overflow-hidden">
                {[
                  ["Penduduk", "/penduduk"],
                  ["Luas Wilayah", "/luas"],
                  ["Mata Pencaharian", "/pekerjaan"],
                  ["Pendidikan", "/pendidikan"],
                  ["Kesehatan", "/kesehatan"],
                  ["Batas Wilayah", "/batas"],
                  ["Orbitasi", "/orbitasi"],
                ].map(([label, link]) => (
                  <a key={label} href={link} className="block px-4 py-2 text-sm hover:bg-blue-50 transition">
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/tentang" className="hover:text-sky-200 transition">
            Tentang
          </a>
          <a href="/apbdes" className="hover:text-yellow-300 transition">
            APBDes
          </a>
          <a href="/umkm" className="hover:text-sky-200 transition">
            UMKM
          </a>

          <a href="/layanan" className="bg-sky-400 text-blue-900 px-4 py-2 rounded-xl font-semibold hover:bg-sky-300 transition shadow">
            Layanan Online
          </a>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div className={`md:hidden fixed left-0 w-full top-20 bg-gradient-to-b from-blue-700 to-indigo-800 transition-all duration-300 ${mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="flex flex-col p-5 space-y-3 text-sm">
          <a href="/" onClick={closeMobileMenu} className="hover:text-sky-200">
            Beranda
          </a>
          <HashLink smooth to="/#berita" onClick={closeMobileMenu} className="hover:text-sky-200">
            Berita
          </HashLink>

          <button onClick={toggleDropdown} className="flex items-center justify-between hover:text-sky-200">
            Data
            <span className={`text-xs transition-transform ${openDropdown ? "rotate-180" : ""}`}>▼</span>
          </button>

          {openDropdown && (
            <div className="ml-4 space-y-2">
              {[
                ["Penduduk", "/penduduk"],
                ["Luas Wilayah", "/luas"],
                ["Mata Pencaharian", "/pekerjaan"],
                ["Pendidikan", "/pendidikan"],
                ["Kesehatan", "/kesehatan"],
                ["Batas Wilayah", "/batas"],
                ["Orbitasi", "/orbitasi"],
              ].map(([label, link]) => (
                <a key={label} href={link} onClick={closeMobileMenu} className="block hover:text-sky-200">
                  {label}
                </a>
              ))}
            </div>
          )}

          <a href="/tentang" onClick={closeMobileMenu} className="hover:text-sky-200">
            Tentang
          </a>
                    <a href="/apbdes" className="hover:text-yellow-300 transition">
            APBDes
          </a>
          <a href="/umkm" onClick={closeMobileMenu} className="hover:text-sky-200">
            UMKM
          </a>

          <a href="/layanan" onClick={closeMobileMenu} className="bg-sky-400 text-blue-900 px-4 py-3 rounded-xl font-semibold text-center hover:bg-sky-300 mt-3">
            Layanan Online
          </a>
        </div>
      </div>
    </nav>
  );
}
