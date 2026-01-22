import React from "react";

const PIP = () => {
  const kriteriaPenerima = [
    {
      kategori: "Siswa Pemegang KIP",
      detail:
        "Peserta didik yang memiliki Kartu Indonesia Pintar (KIP) hasil pemutakhiran Dapodik.",
    },
    {
      kategori: "Keluarga Kurang Mampu",
      detail:
        "Siswa dari keluarga peserta Program Keluarga Harapan (PKH) atau pemegang Kartu Keluarga Sejahtera (KKS).",
    },
    {
      kategori: "Kondisi Khusus",
      detail:
        "Siswa yatim piatu, terdampak bencana alam, atau memiliki kelainan fisik (disabilitas).",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-6 text-center">
        <div className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-100 rounded-full">
          Kementerian Pendidikan & Kebudayaan
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Program Indonesia Pintar (PIP)
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Bantuan berupa uang tunai dari pemerintah yang diberikan kepada
          peserta didik yang berasal dari keluarga miskin atau rentan miskin
          untuk membiayai pendidikan.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 space-y-8">
        {/* Besaran Bantuan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            <h4 className="text-gray-500 font-medium mb-2">SD/SDLB/Paket A</h4>
            <p className="text-3xl font-bold text-blue-600">Rp 450.000</p>
            <p className="text-xs text-gray-400 mt-2">Per Tahun Pelajaran</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            <h4 className="text-gray-500 font-medium mb-2">
              SMP/SMPLB/Paket B
            </h4>
            <p className="text-3xl font-bold text-blue-600">Rp 750.000</p>
            <p className="text-xs text-gray-400 mt-2">Per Tahun Pelajaran</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            <h4 className="text-gray-500 font-medium mb-2">SMA/SMK/Paket C</h4>
            <p className="text-3xl font-bold text-blue-600">Rp 1.800.000</p>
            <p className="text-xs text-gray-400 mt-2">Per Tahun Pelajaran</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Kriteria Section */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-yellow-400 rounded-lg mr-3 flex items-center justify-center text-white text-sm">
                ★
              </span>
              Kriteria Penerima
            </h3>
            <div className="space-y-6">
              {kriteriaPenerima.map((item, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-bold text-gray-800">{item.kategori}</h5>
                  <p className="text-gray-600 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Alur Aktivasi Section */}
          <div className="bg-blue-600 p-8 rounded-2xl text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Cara Aktivasi Rekening</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold border border-blue-400">
                  1
                </div>
                <p className="text-blue-50">
                  Siswa menerima Surat Keterangan Aktivasi dari Sekolah.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold border border-blue-400">
                  2
                </div>
                <p className="text-blue-50">
                  Membawa KTP/KK orang tua dan Surat Keterangan ke Bank Penyalur
                  (BRI/BNI/BSI).
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold border border-blue-400">
                  3
                </div>
                <p className="text-blue-50">
                  Mengisi formulir pembukaan/aktivasi rekening SimPel (Simpanan
                  Pelajar).
                </p>
              </div>
              <div className="mt-8 p-4 bg-blue-700 rounded-xl text-sm">
                <p className="font-semibold text-yellow-300">Penting:</p>
                <p>
                  Proses aktivasi harus dilakukan sesuai tenggat waktu yang
                  ditetapkan agar dana tidak kembali ke Kas Negara.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Link Cek Status */}
        <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-gray-200 text-center">
          <p className="text-gray-600 mb-4">
            Ingin cek status pencairan Anda secara mandiri?
          </p>
          <a
            href="https://pip.kemendikdasmen.go.id"
            target="_blank"
            className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-black text-white rounded-full font-medium transition-all"
          >
            Cek di SIPINTAR (Link Resmi)
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

export default PIP;
