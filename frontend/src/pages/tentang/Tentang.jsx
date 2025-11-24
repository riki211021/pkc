import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Tentang() {
  const perangkat = [
    {
      id: 1,
      nama: "Slamet Widodo",
      jabatan: "Kepala Desa",
      foto: "https://source.unsplash.com/300x300/?man,portrait",
    },
    {
      id: 2,
      nama: "Siti Aminah",
      jabatan: "Sekretaris Desa",
      foto: "https://source.unsplash.com/300x300/?woman,portrait",
    },
    {
      id: 3,
      nama: "Budi Santoso",
      jabatan: "Kaur Keuangan",
      foto: "https://source.unsplash.com/300x300/?man,face",
    },
    {
      id: 4,
      nama: "Rina Kartika",
      jabatan: "Kaur Perencanaan",
      foto: "https://source.unsplash.com/300x300/?woman,face",
    },
  ];

  return (
    <div className="w-full font-sans">
      {/* NAVBAR */}
      <Navbar />

      {/* ------------------ VISI & MISI ------------------ */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <h2 className="text-4xl font-bold text-green-700 text-center mb-10">Visi & Misi Desa</h2>

        <div className="bg-white rounded-2xl shadow-xl p-10">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Visi</h3>

          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Visi merupakan pandangan jauh ke depan mengenai arah dan bagaimana Desa Purworejo harus dibangun agar tetap konsisten, eksis, antisipatif, inovatif, dan produktif. Visi adalah gambaran menantang tentang keadaan masa depan yang
            berisi cita-cita dan harapan yang ingin diwujudkan, dibangun melalui proses refleksi serta proyeksi berdasarkan nilai-nilai luhur yang dianut oleh seluruh komponen pemerintahan desa.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Pernyataan Visi Desa Purworejo adalah:
            <br />
            <span className="font-semibold italic">“Gotong Royong Membangun Desa Mandiri Yang Jujur, Adil, Sejahtera, Berbudaya dan Berakhlak Mulia”</span>
          </p>

          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Pemahaman atas visi tersebut mengandung makna terjalinnya sinergi yang dinamis antara masyarakat, pemerintah Desa Purworejo, dan seluruh lembaga desa dalam merealisasikan pembangunan desa secara terpadu. Secara filosofi, visi
            tersebut dijelaskan melalui makna berikut:
          </p>

          <ul className="list-disc ml-6 space-y-2 text-gray-700 text-lg">
            <li>
              <strong>Gotong Royong</strong> – Upaya dan peran pemerintah desa dalam menjalin silaturahmi, hubungan harmonis, dan kekompakan antara pemerintahan desa, lembaga desa (BPD, LKD, LAD), mitra pemerintah desa, dan masyarakat untuk
              bekerja sama dalam pengambilan keputusan membangun Desa Purworejo.
            </li>

            <li>
              <strong>Jujur</strong> – Menjadikan Desa Purworejo sebagai desa yang mengedepankan keterbukaan dan transparansi dalam semua bidang.
            </li>

            <li>
              <strong>Adil</strong> – Berupaya mensejahterakan masyarakat secara adil, yaitu bukan menerima porsi yang sama, melainkan sesuai kebutuhan dan kemampuan masing-masing.
            </li>

            <li>
              <strong>Sejahtera</strong> – Upaya menjalankan roda pemerintahan desa dengan cita-cita mewujudkan kesejahteraan yang dapat dirasakan seluruh masyarakat.
            </li>

            <li>
              <strong>Berbudaya dan Berakhlak Mulia</strong> – Upaya melestarikan budaya masyarakat serta mengedepankan nilai-nilai keagamaan agar Desa Purworejo menjadi desa yang berakhlak mulia.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-green-700 mb-4">Misi</h3>

          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Misi adalah rumusan umum mengenai upaya-upaya yang akan dilaksanakan untuk mewujudkan visi. Misi berfungsi sebagai pemersatu gerak, langkah, dan tindakan nyata bagi seluruh komponen penyelenggara pemerintahan tanpa mengabaikan
            mandat yang diberikan.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4 text-lg">Adapun Misi Pemerintah Desa Purworejo adalah sebagai berikut:</p>

          <ul className="list-disc ml-6 text-gray-700 leading-relaxed space-y-3 text-lg">
            <li>Mewujudkan pemerintahan desa yang jujur dan berwibawa dengan pengambilan keputusan yang cepat dan tepat.</li>
            <li>Mengedepankan kejujuran dan musyawarah mufakat dalam kehidupan sehari-hari baik dalam pemerintahan maupun masyarakat desa.</li>
            <li>Meningkatkan profesionalitas dan mengaktifkan seluruh perangkat desa.</li>
            <li>Mewujudkan sarana dan prasarana desa yang memadai.</li>
            <li>Mewujudkan perekonomian dan kesejahteraan warga desa.</li>
            <li>Meningkatkan fasilitas dan layanan kesehatan di masa pandemi Covid-19 secara terpadu kepada masyarakat.</li>
            <li>Meningkatkan kehidupan desa secara dinamis dalam segi keagamaan dan kebudayaan.</li>
          </ul>
        </div>
      </section>

      {/* ------------------ PELAYANAN DESA ------------------ */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-green-700 text-center mb-12">Pelayanan Desa</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {["Pembuatan Surat Keterangan", "Pelayanan Administrasi Kependudukan", "Pengajuan Bantuan Sosial", "Pelayanan UMKM", "Informasi Kesehatan Desa", "Layanan Pengaduan Masyarakat"].map((layanan, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                <h4 className="text-xl font-semibold text-green-700 mb-3">{layanan}</h4>
                <p className="text-gray-600">Informasi dan layanan terkait {layanan.toLowerCase()} dapat diurus langsung di kantor desa.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------ PROFIL PERANGKAT DESA ------------------ */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-green-700 text-center mb-14">Profil Perangkat Desa</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {perangkat.map((p) => (
            <div key={p.id} className="text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <img src={p.foto} alt={p.nama} className="w-32 h-32 mx-auto rounded-full object-cover shadow-md" />
              <h4 className="text-xl font-semibold mt-4">{p.nama}</h4>
              <p className="text-green-700 font-medium">{p.jabatan}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
