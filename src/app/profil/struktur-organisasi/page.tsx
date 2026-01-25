import React from "react";
import Image from "next/image";

const StrukturOrganisasi = () => {
  // 1. Data sesuai dengan file di folder public/images
  const kepalaSekolah = {
    nama: "RADEN IRAWANGSA, S.Pd",
    jabatan: "KEPALA SEKOLAH",
    foto: "/images/kepala-sekolah.png", // Pastikan file ini ada di public/images/
  };

  const stafGuru = [
    {
      nama: "BAIQ YULI ISDAENI, S.Pd",
      jabatan: "Guru Kelas I",
      foto: "/images/guru1.png",
    },
    {
      nama: "NURUL HIDAYAH, S.Pd",
      jabatan: "Guru Kelas II",
      foto: "/images/guru2.png",
    },
    {
      nama: "ARI HINDARTI M, S.Pd",
      jabatan: "Guru Kelas III",
      foto: "/images/guru3.png",
    },
    {
      nama: "SABARIAH, S.Pd",
      jabatan: "Guru Kelas IV.A",
      foto: "/images/guru4.png",
    },
    {
      nama: "RATNINGSIH, S.Pd",
      jabatan: "Guru Kelas IV.B",
      foto: "/images/guru5.png",
    },
    {
      nama: "AGUS FEBRIAWAN, S.Pd",
      jabatan: "Guru Kelas V.A",
      foto: "/images/guru6.png",
    },
    {
      nama: "RAMDAN, S.Pd",
      jabatan: "Guru Kelas V.B",
      foto: "/images/guru7.png",
    },
    {
      nama: "ISNAN SATRIAWAN, S.Pd",
      jabatan: "Guru Kelas VI",
      foto: "/images/guru8.png",
    },
    {
      nama: "FAIZUL WATHONI, S.Pd",
      jabatan: "Guru Agama Islam",
      foto: "/images/guru9.png",
    },
    {
      nama: "FITRIATUL KHAERANI, S.Pd",
      jabatan: "Guru Bahasa Inggris",
      foto: "/images/guru10.png",
    },
  ];

  const stafTendik = [
    {
      nama: "MUHAMMAD ASLAM ALFARISI",
      jabatan: "Operator Sekolah",
      foto: "/images/guru11.png",
    },
    {
      nama: "MERTANEP",
      jabatan: "Penjaga Sekolah",
      foto: "/images/guru12.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* --- BAGIAN ATAS: KEPALA SEKOLAH --- */}
      <div
        className="relative py-16 px-4 flex flex-col items-center bg-gray-100"
        style={{
          backgroundImage: "url('/images/cloud-bg.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center">
          <div className="w-48 h-64 relative border-4 border-white shadow-xl mb-4 overflow-hidden bg-blue-600">
            {/* Foto Kepala Sekolah Aktif */}
            <Image
              src={kepalaSekolah.foto}
              alt={kepalaSekolah.nama}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-xl uppercase leading-tight text-blue-900">
              {kepalaSekolah.jabatan}
            </h3>
            <p className="text-lg font-semibold">{kepalaSekolah.nama}</p>
          </div>
        </div>
      </div>

      <hr className="border-t-2 border-gray-200 my-10 w-11/12 mx-auto" />

      {/* --- BAGIAN BAWAH: STAF GURU --- */}
      <div className="container mx-auto pb-20 px-4">
        <h2 className="text-center text-2xl font-bold mb-10 uppercase italic underline">
          PENDIDIK
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {stafGuru.map((guru, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full group"
            >
              {/* Container Foto */}
              <div className="w-full aspect-[3/4] max-w-[180px] relative border-4 border-white shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={guru.foto}
                  alt={guru.nama}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>

              {/* Keterangan Nama & Jabatan */}
              <div className="text-center mt-4">
                <h4 className="font-bold text-sm uppercase text-blue-800">
                  {guru.jabatan}
                </h4>
                <p className="text-xs font-medium text-gray-700">{guru.nama}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Staf Tendik */}
      <hr className="border-t-2 border-gray-200 my-10 w-11/12 mx-auto" />
      <div className="container mx-auto pb-20 px-4">
        <h2 className="text-center text-2xl font-bold mb-10 uppercase italic underline">
          TENAGA KEPENDIDIKAN
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {stafTendik.map((tendik, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full group"
            >
              {/* Container Foto */}
              <div className="w-full aspect-[3/4] max-w-[180px] relative border-4 border-white shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={tendik.foto}
                  alt={tendik.nama}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>

              {/* Keterangan Nama & Jabatan */}
              <div className="text-center mt-4">
                <h4 className="font-bold text-sm uppercase text-blue-800">
                  {tendik.jabatan}
                </h4>
                <p className="text-xs font-medium text-gray-700">
                  {tendik.nama}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrukturOrganisasi;
