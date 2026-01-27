import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function APBDes() {
  const formatRupiah = (angka) =>
    Number(angka).toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
    });

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* ================= JUDUL ================= */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700">Anggaran Pendapatan dan Belanja Desa (APBDes)</h1>
          <p className="mt-2 text-lg font-semibold">Desa Pilangkenceng, Kec. Pilangkenceng</p>
          <p className="text-gray-600">Tahun Anggaran 2025</p>
        </div>

        {/* ================= PENDAPATAN ================= */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-700 mb-6">Pendapatan Desa</h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Pendapatan Asli Desa (PAD)</span>
              <span className="font-semibold">{formatRupiah(374575000)}</span>
            </div>

            <div className="flex justify-between font-semibold">
              <span>Pendapatan Transfer</span>
              <span>{formatRupiah(2050507489)}</span>
            </div>

            <div className="ml-6 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>• Dana Desa (DD)</span>
                <span>{formatRupiah(788814000)}</span>
              </div>
              <div className="flex justify-between">
                <span>• Bagi Hasil Pajak & Retribusi Kab/Kota</span>
                <span>{formatRupiah(52184489)}</span>
              </div>
              <div className="flex justify-between">
                <span>• Alokasi Dana Desa</span>
                <span>{formatRupiah(909509000)}</span>
              </div>
              <div className="flex justify-between">
                <span>• Bantuan Keuangan Kab/Kota (BKK)</span>
                <span>{formatRupiah(300000000)}</span>
              </div>
            </div>

            <div className="flex justify-between">
              <span>Pendapatan Lain-lain</span>
              <span className="font-semibold">{formatRupiah(15501153)}</span>
            </div>

            <hr />

            <div className="flex justify-between font-bold text-green-700 text-lg">
              <span>Jumlah Pendapatan</span>
              <span>{formatRupiah(2440583642)}</span>
            </div>
          </div>
        </div>

        {/* ================= BELANJA ================= */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-10">
          <h2 className="text-2xl font-bold text-green-700 mb-6">Belanja Desa</h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Bidang Penyelenggaraan Pemerintah Desa</span>
              <span className="font-semibold">{formatRupiah(1499199787.14)}</span>
            </div>

            <div className="flex justify-between">
              <span>Bidang Pelaksanaan Pembangunan Desa</span>
              <span className="font-semibold">{formatRupiah(516058800)}</span>
            </div>

            <div className="flex justify-between">
              <span>Bidang Pembinaan Kemasyarakatan</span>
              <span className="font-semibold">{formatRupiah(113109416)}</span>
            </div>

            <div className="flex justify-between">
              <span>Bidang Pemberdayaan Masyarakat</span>
              <span className="font-semibold">{formatRupiah(261837500)}</span>
            </div>

            <div className="flex justify-between">
              <span>Bidang Penanggulangan Bencana, Darurat & Mendesak</span>
              <span className="font-semibold">{formatRupiah(64560150)}</span>
            </div>

            <hr />

            <div className="flex justify-between font-bold text-green-700 text-lg">
              <span>Jumlah Belanja</span>
              <span>{formatRupiah(2454765653.14)}</span>
            </div>

            <div className="flex justify-between font-bold text-red-600">
              <span>Surplus / Defisit</span>
              <span>{formatRupiah(-14182011.14)}</span>
            </div>
          </div>
        </div>

        {/* ================= PEMBIAYAAN ================= */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-14">
          <h2 className="text-2xl font-bold text-green-700 mb-6">Pembiayaan</h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Penerimaan Pembiayaan</span>
              <span className="font-semibold">{formatRupiah(14182011.14)}</span>
            </div>

            <div className="flex justify-between">
              <span>Pengeluaran Pembiayaan</span>
              <span className="font-semibold">{formatRupiah(0)}</span>
            </div>

            <hr />

            <div className="flex justify-between font-bold text-green-700">
              <span>Pembiayaan Netto</span>
              <span>{formatRupiah(14182011.14)}</span>
            </div>

            <div className="flex justify-between font-bold">
              <span>Sisa Lebih / (Kurang) Pembiayaan Anggaran</span>
              <span>{formatRupiah(0)}</span>
            </div>
          </div>
        </div>

        {/* ================= REALISASI APBDES 2024 ================= */}
        {/* ================= LAPORAN REALISASI APBDES 2024 ================= */}
        <div className="bg-white shadow-md rounded-xl p-6 mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-green-700">LAPORAN REALISASI APBDes TAHUN ANGGARAN 2025</h2>
            <p className="font-semibold">DESA Pilangkenceng KEC. PILANGKENCENG</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-green-700 text-white">
                  <th className="border p-3">URAIAN</th>
                  <th className="border p-3">ANGGARAN</th>
                  <th className="border p-3">REALISASI</th>
                  <th className="border p-3">LEBIH / (KURANG)</th>
                </tr>
              </thead>

              <tbody>
                {/* ================= PENDAPATAN ================= */}
                <tr className="bg-gray-100 font-bold">
                  <td className="border p-3">PENDAPATAN</td>
                  <td className="border"></td>
                  <td className="border"></td>
                  <td className="border"></td>
                </tr>

                <tr>
                  <td className="border p-3">Pendapatan Asli Desa</td>
                  <td className="border p-3 text-right">{formatRupiah(374575000)}</td>
                  <td className="border p-3 text-right">{formatRupiah(374575000)}</td>
                  <td className="border p-3 text-center">-</td>
                </tr>

                <tr className="font-semibold">
                  <td className="border p-3">Pendapatan Transfer</td>
                  <td className="border"></td>
                  <td className="border"></td>
                  <td className="border"></td>
                </tr>

                <tr>
                  <td className="border p-3 pl-6">● Dana Desa (DD)</td>
                  <td className="border p-3 text-right">{formatRupiah(775761000)}</td>
                  <td className="border p-3 text-right">{formatRupiah(775761000)}</td>
                  <td className="border p-3 text-right">{formatRupiah(0)}</td>
                </tr>

                <tr>
                  <td className="border p-3 pl-6">● Bagi Hasil Pajak dan Retribusi Daerah</td>
                  <td className="border p-3 text-right">{formatRupiah(79026089)}</td>
                  <td className="border p-3 text-right">{formatRupiah(79026089)}</td>
                  <td className="border p-3 text-right">{formatRupiah(0)}</td>
                </tr>

                <tr>
                  <td className="border p-3 pl-6">● Alokasi Dana Desa (ADD)</td>
                  <td className="border p-3 text-right">{formatRupiah(733986000)}</td>
                  <td className="border p-3 text-right">{formatRupiah(733986000)}</td>
                  <td className="border p-3 text-right">{formatRupiah(0)}</td>
                </tr>

                <tr>
                  <td className="border p-3 pl-6">● Bantuan Keuangan Khusus (BKK)</td>
                  <td className="border p-3 text-right">{formatRupiah(285000000)}</td>
                  <td className="border p-3 text-right">{formatRupiah(285000000)}</td>
                  <td className="border p-3 text-right">{formatRupiah(0)}</td>
                </tr>

                <tr>
                  <td className="border p-3">Pendapatan Lain-Lain</td>
                  <td className="border p-3 text-right">{formatRupiah(17679687.23)}</td>
                  <td className="border p-3 text-right">{formatRupiah(18121955.54)}</td>
                  <td className="border p-3 text-right">{formatRupiah(442268.31)}</td>
                </tr>

                <tr className="font-bold bg-green-50">
                  <td className="border p-3">JUMLAH PENDAPATAN</td>
                  <td className="border p-3 text-right">{formatRupiah(2266027776.23)}</td>
                  <td className="border p-3 text-right">{formatRupiah(2266470044.54)}</td>
                  <td className="border p-3 text-right">{formatRupiah(442268.31)}</td>
                </tr>

                {/* ================= BELANJA ================= */}
                <tr className="bg-gray-100 font-bold">
                  <td className="border p-3">BELANJA</td>
                  <td className="border"></td>
                  <td className="border"></td>
                  <td className="border"></td>
                </tr>

                <tr>
                  <td className="border p-3">Bidang Penyelenggaraan Pemerintah Desa</td>
                  <td className="border p-3 text-right">{formatRupiah(1152116263.6)}</td>
                  <td className="border p-3 text-right">{formatRupiah(1149860090)}</td>
                  <td className="border p-3 text-right">{formatRupiah(2256173.6)}</td>
                </tr>

                <tr>
                  <td className="border p-3">Bidang Pelaksanaan Pembangunan Desa</td>
                  <td className="border p-3 text-right">{formatRupiah(877056100)}</td>
                  <td className="border p-3 text-right">{formatRupiah(874778600)}</td>
                  <td className="border p-3 text-right">{formatRupiah(2277500)}</td>
                </tr>

                <tr>
                  <td className="border p-3">Bidang Pembinaan Kemasyarakatan</td>
                  <td className="border p-3 text-right">{formatRupiah(81787869.23)}</td>
                  <td className="border p-3 text-right">{formatRupiah(81787800)}</td>
                  <td className="border p-3 text-right">{formatRupiah(69.23)}</td>
                </tr>

                <tr>
                  <td className="border p-3">Bidang Pemberdayaan Masyarakat</td>
                  <td className="border p-3 text-right">{formatRupiah(56739500)}</td>
                  <td className="border p-3 text-right">{formatRupiah(55269500)}</td>
                  <td className="border p-3 text-right">{formatRupiah(1470000)}</td>
                </tr>

                <tr>
                  <td className="border p-3">Bidang Penanggulangan Bencana, Darurat dan Mendesak Desa</td>
                  <td className="border p-3 text-right">{formatRupiah(113161000)}</td>
                  <td className="border p-3 text-right">{formatRupiah(105425000)}</td>
                  <td className="border p-3 text-right">{formatRupiah(7736000)}</td>
                </tr>

                <tr className="font-bold bg-green-50">
                  <td className="border p-3">JUMLAH BELANJA</td>
                  <td className="border p-3 text-right">{formatRupiah(2280860732.83)}</td>
                  <td className="border p-3 text-right">{formatRupiah(2267120990)}</td>
                  <td className="border p-3 text-right">{formatRupiah(13739742.83)}</td>
                </tr>

                <tr className="font-bold text-red-600">
                  <td className="border p-3">SURPLUS / (DEFISIT)</td>
                  <td className="border p-3 text-right">{formatRupiah(-14832956.6)}</td>
                  <td className="border p-3 text-right">{formatRupiah(-650945.46)}</td>
                  <td className="border p-3 text-right">{formatRupiah(-14182011.14)}</td>
                </tr>

                {/* ================= PEMBIAYAAN ================= */}
                <tr className="bg-gray-100 font-bold">
                  <td className="border p-3">PEMBIAYAAN</td>
                  <td className="border"></td>
                  <td className="border"></td>
                  <td className="border"></td>
                </tr>

                <tr>
                  <td className="border p-3">Penerimaan Pembiayaan</td>
                  <td className="border p-3 text-right">{formatRupiah(14832956.6)}</td>
                  <td className="border p-3 text-right">{formatRupiah(14832956.6)}</td>
                  <td className="border p-3 text-right">{formatRupiah(0)}</td>
                </tr>

                <tr className="font-bold bg-green-50">
                  <td className="border p-3">SILPA / SILPA TAHUN BERJALAN</td>
                  <td className="border p-3 text-right">{formatRupiah(0)}</td>
                  <td className="border p-3 text-right">{formatRupiah(14182011.14)}</td>
                  <td className="border p-3 text-right">{formatRupiah(-14182011.14)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
