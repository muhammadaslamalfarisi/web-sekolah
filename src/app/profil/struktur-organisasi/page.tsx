import React from "react";
import Image from "next/image";

const StrukturOrganisasi = () => {
  // Data sesuai dengan gambar yang diunggah
  const kepalaSekolah = {
    nama: "RADEN IRAWANGSA, S.Pd",
    jabatan: "KEPALA SEKOLAH",
    foto: "/images/kepala-sekolah.jpg", // Ganti dengan path foto asli Anda
  };

  const stafGuru = [
    {
      nama: "BAIQ YULI ISDAENI, S.Pd",
      jabatan: "Guru Kelas I",
      foto: "/images/guru1.jpg",
    },
    {
      nama: "NURUL HIDAYAH, S.Pd",
      jabatan: "Guru Kelas II",
      foto: "/images/guru2.jpg",
    },
    {
      nama: "ARI HINDARTI M, S.Pd",
      jabatan: "Guru Kelas III",
      foto: "/images/guru3.jpg",
    },
    {
      nama: "SABARIAH, S.Pd",
      jabatan: "Guru Kelas IV.A",
      foto: "/images/guru4.jpg",
    },
    {
      nama: "RATNINGSIH, S.Pd",
      jabatan: "Guru Kelas IV.B",
      foto: "/images/guru5.jpg",
    },
    {
      nama: "AGUS FEBRIAWAN, S.Pd",
      jabatan: "Guru Kelas V.A",
      foto: "/images/guru6.jpg",
    },
    {
      nama: "RAMDAN, S.Pd",
      jabatan: "Guru Kelas V.B",
      foto: "/images/guru7.jpg",
    },
    {
      nama: "ISNAN SATRIAWAN, S.Pd",
      jabatan: "Guru Kelas VI",
      foto: "/images/guru8.jpg",
    },
    {
      nama: "FAIZUL WATHONI, S.Pd",
      jabatan: "Guru Agama Islam",
      foto: "/images/guru9.jpg",
    },
    {
      nama: "FITRIATUL KHAERANI, S.Pd",
      jabatan: "Guru Bahasa Inggris",
      foto: "/images/guru10.jpg",
    },
    {
      nama: "MUHAMMAD ASLAM ALFARISI",
      jabatan: "Operator Sekolah",
      foto: "/images/guru11.jpg",
    },
    {
      nama: "MERTANEP",
      jabatan: "Penjaga Sekolah",
      foto: "/images/guru12.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Bagian Atas: Kepala Sekolah dengan Background Awan */}
      <div
        className="relative py-16 px-4 flex flex-col items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/cloud-bg.jpg')" }} // Gunakan gambar awan sebagai background
      >
        <div className="flex flex-col items-center">
          <div className="w-48 h-64 relative border-4 border-white shadow-xl mb-4 overflow-hidden bg-blue-600">
            {/* Placeholder Image jika file belum ada */}
            <div className="flex items-center justify-center h-full text-white text-xs text-center p-2">
              Foto Kepala Sekolah
            </div>
            {/* Gunakan komponen Image Next.js jika foto sudah siap:
            <Image src={kepalaSekolah.foto} alt={kepalaSekolah.nama} fill className="object-cover" /> 
            */}
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm p-2 rounded shadow-sm">
            <h3 className="font-bold text-lg uppercase leading-tight">
              {kepalaSekolah.jabatan}
            </h3>
            <p className="text-md font-medium">{kepalaSekolah.nama}</p>
          </div>
        </div>
      </div>

      <hr className="border-t-2 border-gray-200 my-8 w-11/12 mx-auto" />

      {/* Bagian Bawah: Barisan Guru/Staf */}
      <div className="container mx-auto pb-20 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {stafGuru.map((guru, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <div className="w-full aspect-[3/4] max-w-[200px] relative border-4 border-white shadow-lg overflow-hidden bg-red-600 mb-3">
                <div className="flex items-center justify-center h-full text-white text-xs">
                  Foto {index + 1}
                </div>
                {/* <Image src={guru.foto} alt={guru.nama} fill className="object-cover" /> */}
              </div>
              <div className="text-center">
                <h4 className="font-bold text-sm uppercase">{guru.jabatan}</h4>
                <p className="text-xs">{guru.nama}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrukturOrganisasi;
