import React from "react";

const BOSP = () => {
  const danaInfo = [
    {
      judul: "BOSP Reguler",
      deskripsi:
        "Dana yang digunakan untuk membiayai operasional rutin sekolah seperti gaji honorer, pemeliharaan sarana, dan pengadaan alat tulis kantor.",
      tag: "Tahunan",
    },
    {
      judul: "BOSP Kinerja",
      deskripsi:
        "Dana apresiasi yang diberikan kepada sekolah yang dinilai berkinerja baik dalam rapor pendidikan atau kemajuan hasil belajar.",
      tag: "Prestasi",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Program BOSP</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Bantuan Operasional Satuan Pendidikan (BOSP) adalah program pemerintah
          untuk membantu biaya operasional sekolah guna meningkatkan
          aksesibilitas dan kualitas pembelajaran.
        </p>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card Loop - Mengikuti Style di Gambar */}
        {danaInfo.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="bg-blue-100 p-3 rounded-xl text-blue-600 font-bold">
                Rp
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                {item.tag}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {item.judul}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              {item.deskripsi}
            </p>
            <div className="h-1 w-12 bg-blue-500 rounded"></div>
          </div>
        ))}

        {/* Section Penggunaan Dana */}
        <div className="md:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm mt-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Prioritas Penggunaan Dana
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Penerimaan Peserta Didik Baru
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Pengembangan Perpustakaan
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Kegiatan Pembelajaran
              </li>
            </ul>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Administrasi Kegiatan Sekolah
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Pemeliharaan Sarana & Prasarana
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Penyediaan Alat Multi Media
              </li>
            </ul>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <p className="text-sm text-blue-800 italic">
                "Pengelolaan dana BOSP di SD Negeri 1 Batu Rakit dilakukan
                secara transparan, akuntabel, dan partisipatif."
              </p>
            </div>
          </div>
        </div>

        {/* Section Tabel Transparansi */}
        <div className="md:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                Laporan Realisasi Dana BOSP
              </h3>
              <p className="text-gray-500 text-sm">Tahun Anggaran 2024/2025</p>
            </div>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Unduh Laporan Lengkap (PDF)
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="p-4 font-semibold text-gray-700">
                    Komponen Penggunaan
                  </th>
                  <th className="p-4 font-semibold text-gray-700 text-right">
                    Tahap I (40%)
                  </th>
                  <th className="p-4 font-semibold text-gray-700 text-right">
                    Tahap II (60%)
                  </th>
                  <th className="p-4 font-semibold text-gray-700 text-right">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-gray-600">
                <tr className="hover:bg-blue-50/30 transition-colors">
                  <td className="p-4">Pengembangan Perpustakaan</td>
                  <td className="p-4 text-right">Rp 12.000.000</td>
                  <td className="p-4 text-right">Rp 8.500.000</td>
                  <td className="p-4 text-right font-medium text-gray-800">
                    Rp 20.500.000
                  </td>
                </tr>
                <tr className="hover:bg-blue-50/30 transition-colors">
                  <td className="p-4">
                    Kegiatan Pembelajaran & Ekstrakurikuler
                  </td>
                  <td className="p-4 text-right">Rp 15.000.000</td>
                  <td className="p-4 text-right">Rp 22.000.000</td>
                  <td className="p-4 text-right font-medium text-gray-800">
                    Rp 37.000.000
                  </td>
                </tr>
                <tr className="hover:bg-blue-50/30 transition-colors">
                  <td className="p-4">Pemeliharaan Sarana dan Prasarana</td>
                  <td className="p-4 text-right">Rp 25.000.000</td>
                  <td className="p-4 text-right">Rp 30.000.000</td>
                  <td className="p-4 text-right font-medium text-gray-800">
                    Rp 55.000.000
                  </td>
                </tr>
                <tr className="hover:bg-blue-50/30 transition-colors">
                  <td className="p-4">
                    Pembayaran Honor Guru & Tenaga Kependidikan
                  </td>
                  <td className="p-4 text-right">Rp 40.000.000</td>
                  <td className="p-4 text-right">Rp 40.000.000</td>
                  <td className="p-4 text-right font-medium text-gray-800">
                    Rp 80.000.000
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-blue-50 font-bold text-blue-900 border-t-2 border-blue-100">
                  <td className="p-4 uppercase">Total Keseluruhan</td>
                  <td className="p-4 text-right text-blue-600">
                    Rp 92.000.000
                  </td>
                  <td className="p-4 text-right text-blue-600">
                    Rp 100.500.000
                  </td>
                  <td className="p-4 text-right text-blue-700 bg-blue-100/50">
                    Rp 192.500.000
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <p className="mt-4 text-xs text-gray-400 italic">
            * Data diperbarui secara berkala sesuai dengan sinkronisasi Aplikasi
            ARKAS Kemdikbudristek.
          </p>
        </div>

        {/* Link Cek Status */}
        <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-gray-200 text-center">
          <p className="text-gray-600 mb-4">
            Ingin cek status pencairan Anda secara mandiri?
          </p>
          <a
            href="https://bosp.kemendikdasmen.go.id/portal/welcome"
            target="_blank"
            className="flex items-center justify-center w-full md:max-w-md mx-auto px-6 py-3 bg-gray-800 hover:bg-black text-white rounded-xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg"
          >
            <span className="font-medium">Cek di BOSP (Link Resmi)</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BOSP;
