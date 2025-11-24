import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white pt-10 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SECTION */}
        <div className="space-y-6">

          {/* JAM PELAYANAN */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Jam Pelayanan</h3>
            <p>Senin - Jumat : 08.00 - 15.00 WIB</p>
            <p>Sabtu : 08.00 - 12.00 WIB</p>
            <p>Minggu / Tanggal Merah : Libur</p>
          </div>


          {/* ALAMAT DESA */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Alamat Desa</h3>
            <p>Jl. Raya Ngawi - Caruban No.288,Krapyak Purworejo, Kec. Pilangkenceng, Kab Madiun 63154</p>
            <p>Desa Purworejo, Kec. Pilangkenceng</p>
            <p>Kabupaten Madiun, Indonesia</p>
          </div>

          {/* KONTAK DESA */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Kontak Desa</h3>
            <p>Telepon: +62 823-3047-7947</p>
            <p>Email: purworejo404@gmail.com</p>
          </div>
        </div>

        {/* RIGHT SECTION - MAPS */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Lokasi Desa (Maps)</h3>

          {/* Klik buka Google Maps */}
          <a
            href="https://www.google.com/maps?q=Kantor+Desa+Purworejo+Pilangkenceng"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              title="maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.482120431289!2d111.63818549999999!3d-7.522273799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79c64bdb9ebe4b%3A0xc423aa893c1cad73!2sKantor%20Kepala%20Desa%20Purworejo!5e0!3m2!1sid!2sid!4v1763453833203!5m2!1sid!2sid"
              width="100%"
              height="490"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition"
            ></iframe>
          </a>
        </div>
      </div>

      <div className="text-center mt-10 border-t border-white/20 pt-4">
        <p>© {new Date().getFullYear()} Desa Purworejo. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
