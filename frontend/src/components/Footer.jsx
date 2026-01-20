import React from "react";
import pesilatIcon from "../assets/img/kampung-pesilat.png";

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-sky-800 text-white">

      {/* ORNAMEN BATIK KAMPUNG PESILAT */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url(${pesilatIcon})`,
          backgroundRepeat: "repeat",
          backgroundSize: "140px 140px",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-14">

        {/* LEFT */}
        <div className="space-y-9">

          {/* JAM PELAYANAN */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wide">
              Jam Pelayanan
            </h3>
            <p className="text-sm text-white/90">
              Senin – Kamis : 08.00 – 14.00 WIB
            </p>
            <p className="text-sm text-white/70">
              Istirahat : 12.00 – 13.00 WIB
            </p>
            <p className="text-sm text-white/90 mt-2">
              Jum&apos;at : 08.00 – 14.00 WIB
            </p>
            <p className="text-sm text-white/70">
              Istirahat : 12.00 – 13.00 WIB
            </p>
            <p className="text-sm text-white/80 mt-2">
              Sabtu, Minggu & Tanggal Merah : Libur
            </p>
          </div>

          {/* ALAMAT */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wide">
              Alamat Desa
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Desa Pilangkenceng, Kecamatan Pilangkenceng  
              Kabupaten Madiun, Jawa Timur 63154
            </p>
          </div>

          {/* KONTAK */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wide">
              Kontak Desa
            </h3>
            <p className="text-sm text-white/80">Telepon: -</p>
            <p className="text-sm text-white/80">
              Email: pilangkenceng@gmail.com
            </p>
          </div>
        </div>

        {/* RIGHT - MAP */}
        <div>
          <h3 className="text-lg font-semibold mb-5 tracking-wide">
            Lokasi Desa
          </h3>

          <a
            href="https://www.google.com/maps?q=Kantor+Desa+Purworejo+Pilangkenceng"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              title="maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63290.964139525684!2d111.5704322216797!3d-7.499957399999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79c6134a0e1b59%3A0x65424643cf03ef79!2sKantor%20Desa%20Pilangkenceng!5e0!3m2!1sen!2sid!4v1768378579546!5m2!1sen!2sid"
              width="100%"
              height="360"
              loading="lazy"
              allowFullScreen
              className="rounded-2xl shadow-2xl border border-white/20 hover:scale-[1.01] transition"
            />
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="relative text-center text-sm text-white/70 border-t border-white/20 py-6">
        © {new Date().getFullYear()} Desa Pilangkenceng. All Rights Reserved.
      </div>
    </footer>
  );
}
