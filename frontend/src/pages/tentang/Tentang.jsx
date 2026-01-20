import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { useEffect, useState } from "react";
import axios from "../../api/axios";

export default function Tentang() {
  const [perangkat, setPerangkat] = useState([]);

  useEffect(() => {
    axios
      .get("/perangkat-desa")
      .then((res) => setPerangkat(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-full font-sans bg-neutral-50">
      {/* NAVBAR */}
      <Navbar />

      {/* ------------------ VISI & MISI ------------------ */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-white rounded-full mb-4 shadow-sm">
            <span className="text-neutral-600 text-sm tracking-wider uppercase font-light">Arah dan Tujuan</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 tracking-tight">Visi & Misi Desa</h2>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 lg:p-16 border border-neutral-100">
          {/* VISI */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-light text-neutral-900">Visi</h3>
            </div>

            <div className="w-20 h-1 bg-gradient-to-r from-neutral-800 to-neutral-400 mb-8"></div>

            <p className="text-neutral-600 leading-relaxed mb-6 text-base font-light">
              Visi merupakan pandangan jauh ke depan, kemana dan bagaimana Desa Pilangkenceng harus dibawa dan berkarya agar konsisten dan dapat eksis, antisipatif, inovatif serta produktif. Visi adalah suatu gambaran yang menantang tentang
              keadaan masa depan, berisikan cita-cita dan tujuan yang ingin diwujudkan, dibangun melalui proses refleksi dan proyeksi yang digali dari nilai-nilai luhur yang dianut oleh seluruh komponen pemerintahan desa.
            </p>

            <p className="text-neutral-600 leading-relaxed mb-6 text-base font-light">Pernyataan Visi Desa Pilangkenceng adalah:</p>

            <div className="bg-neutral-50 border-l-4 border-neutral-900 p-6 md:p-8 rounded-r-2xl mb-6">
              <p className="text-neutral-900 text-lg md:text-xl font-normal italic leading-relaxed">“TERWUJUDNYA DESA PILANGKENCENG YANG AMAN, MANDIRI, SEJAHTERA DAN BERAKHLAK MENUJU DESA PILANGKENCENG LEBIH MAJU”</p>
            </div>

            <p className="text-neutral-600 leading-relaxed mb-8 text-base font-light">
              Pemahaman atas pernyataan visi tersebut mengandung makna terjalinnya sinergi yang dinamis antara masyarakat, pemerintah Desa Pilangkenceng dan seluruh lembaga desa dalam merealisasi pembangunan Desa Pilangkenceng secara
              terpadu. Secara filosofi visi tersebut dapat dijelaskan melalui makna yang terkandung di dalamnya, yaitu:
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "AMAN",
                  desc: "Mewujudkan rasa aman pemerintah desa dan masyarakat Desa Pilangkenceng dalam menjalankan aktivitas sehari-hari sehingga tercipta kehidupan bermasyarakat yang guyub, rukun, kondusif serta harmonis.",
                },
                {
                  title: "MANDIRI",
                  desc: "Terwujudnya aparatur pemerintahan yang profesional untuk meningkatkan pelayanan publik dan meningkatkan ekonomi yang mandiri dan berkelanjutan.",
                },
                {
                  title: "SEJAHTERA",
                  desc: "Meningkatkan kesejahteraan masyarakat yang berdasarkan keadilan.",
                },
                {
                  title: "BERAKHLAK",
                  desc: "Mewujudkan masyarakat yang berakhlak mulia dengan meningkatkan kehidupan beragama, budaya dan mengedepankan kearifan lokal.",
                },
                {
                  title: "LEBIH MAJU",
                  desc: "Dengan tercapainya empat visi misi di atas diharapkan akan berdampak pada tatanan kehidupan bermasyarakat warga, masyarakat Desa Pilangkenceng akan lebih maju dalam segala bidang.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-2 h-2 bg-neutral-900 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <h4 className="text-neutral-900 font-medium mb-2">{item.title}</h4>
                    <p className="text-neutral-600 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MISI */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-3xl font-light text-neutral-900">Misi</h3>
            </div>

            <div className="w-20 h-1 bg-gradient-to-r from-neutral-800 to-neutral-400 mb-8"></div>

            <p className="text-neutral-600 leading-relaxed mb-6 text-base font-light">
              Misi adalah rumusan umum mengenai upaya-upaya yang akan dilaksanakan untuk mewujudkan visi. Misi berfungsi sebagai pemersatu gerak, langkah dan tindakan nyata bagi segenap komponen penyelenggara pemerintahan tanpa mengabaikan
              mandat yang dibebankannya.
            </p>

            <p className="text-neutral-600 leading-relaxed mb-6 text-base font-light">Adapun Misi Pemerintah Pilangkenceng adalah sebagai berikut:</p>

            <div className="space-y-4">
              {[
                "Mewujudkan dan mengembangkan kegiatan keagamaan untuk menambah keimanan dan ketakwaan kepada Tuhan Yang Maha Esa.",

                "Mewujudkan dan mendorong terjadinya usaha-usaha kerukunan antar dan intern warga masyarakat yang disebabkan karena adanya perbedaan agama, keyakinan, organisasi, dan lainnya dalam suasana saling menghargai dan menghormati.",

                "Membangun dan meningkatkan hasil pertanian dengan jalan penataan pengairan, perbaikan jalan sawah/jalan usaha tani, pemupukan, dan pola tanam yang baik.",

                "Menata Pemerintahan Desa Pilangkenceng yang kompak dan bertanggung jawab dalam mengemban amanat masyarakat.",

                "Meningkatkan pelayanan masyarakat secara terpadu dan serius.",

                "Mencari dan menambah debit air untuk mencukupi kebutuhan pertanian.",

                "Menumbuhkembangkan Kelompok Tani dan Gabungan Kelompok Tani serta bekerja sama dengan HIPPA untuk memfasilitasi kebutuhan petani.",

                "Menumbuhkembangkan usaha kecil dan menengah.",

                "Membangun dan mendorong majunya bidang pendidikan baik formal maupun informal yang mudah diakses dan dinikmati seluruh warga masyarakat tanpa terkecuali yang mampu menghasilkan insan intelektual, inovatif dan entrepreneur (wirausahawan).",

                "Membangun dan mendorong usaha-usaha untuk pengembangan dan optimalisasi sektor pertanian, perkebunan, peternakan, dan perikanan, baik tahap produksi maupun tahap pengolahan hasilnya.",
              ].map((misi, i) => (
                <div key={i} className="flex gap-4 items-start group hover:bg-neutral-50 p-4 rounded-xl transition-colors duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-neutral-100 group-hover:bg-neutral-900 rounded-full flex items-center justify-center transition-colors duration-300">
                    <span className="text-neutral-900 group-hover:text-white text-sm font-light transition-colors duration-300">{i + 1}</span>
                  </div>
                  <p className="text-neutral-600 font-light leading-relaxed pt-1">{misi}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ PELAYANAN DESA ------------------ */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-neutral-100 rounded-full mb-4">
              <span className="text-neutral-600 text-sm tracking-wider uppercase font-light">Layanan Kami</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 tracking-tight">Pelayanan Desa</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Pembuatan Surat Keterangan",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                title: "Pelayanan Administrasi Kependudukan",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Pengajuan Bantuan Sosial",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Pelayanan UMKM",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
              {
                title: "Informasi Kesehatan Desa",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
              {
                title: "Layanan Pengaduan Masyarakat",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                ),
              },
            ].map((layanan, i) => (
              <div key={i} className="group bg-neutral-50 hover:bg-white p-8 rounded-2xl border border-neutral-200 hover:border-neutral-900 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-white group-hover:bg-neutral-900 rounded-xl flex items-center justify-center mb-5 shadow-sm transition-colors duration-300">
                  <div className="text-neutral-900 group-hover:text-white transition-colors duration-300">{layanan.icon}</div>
                </div>

                <h4 className="text-lg font-normal text-neutral-900 mb-3 leading-snug">{layanan.title}</h4>

                <p className="text-neutral-600 text-sm font-light leading-relaxed">Informasi dan layanan terkait {layanan.title.toLowerCase()} dapat diurus langsung di kantor desa.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------ PROFIL PERANGKAT DESA ------------------ */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-white rounded-full mb-4 shadow-sm">
            <span className="text-neutral-600 text-sm tracking-wider uppercase font-light">Tim Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 tracking-tight">Profil Perangkat Desa</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {perangkat.map((p) => (
            <div key={p.id} className="group text-center bg-white hover:bg-neutral-50 p-8 rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-all duration-300 hover:shadow-lg">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-neutral-900 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <img src={`http://localhost:8000/storage/${p.foto}`} alt={p.nama} className="relative w-32 h-32 mx-auto rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300" />
              </div>

              <h4 className="text-lg font-normal text-neutral-900 mb-1">{p.nama}</h4>

              <p className="text-neutral-600 text-sm font-light tracking-wide">{p.jabatan}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
