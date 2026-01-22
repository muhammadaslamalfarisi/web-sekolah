import React from "react";
import { BookOpen, Laptop, Users, Award } from "lucide-react"; // Pastikan sudah install lucide-react

export default function PembelajaranPage() {
  const kurikulum = [
    {
      title: "Kurikulum Merdeka",
      desc: "Menekankan pada pengembangan karakter dan kompetensi siswa melalui pembelajaran intrakurikuler dan proyek penguatan profil pelajar Pancasila.",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Pembelajaran Digital",
      desc: "Pemanfaatan platform digital dan media interaktif untuk mendukung pemahaman materi secara modern dan menyenangkan.",
      icon: <Laptop className="w-8 h-8 text-blue-600" />,
    },
  ];

  const mapel = [
    "Pendidikan Agama & Budi Pekerti",
    "Pendidikan Pancasila",
    "Bahasa Indonesia",
    "Matematika",
    "IPAS (IPA & IPS)",
    "Seni & Budaya",
    "PJOK",
    "Bahasa Inggris",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-slate-50 py-16 px-4 border-b">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Sistem Pembelajaran
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Kami berkomitmen menyelenggarakan proses belajar mengajar yang
            bermutu, inklusif, dan inovatif untuk menggali potensi setiap
            peserta didik.
          </p>
        </div>
      </section>

      {/* Kurikulum Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {kurikulum.map((item, idx) => (
            <div
              key={idx}
              className="p-8 border rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mata Pelajaran Section */}
      <section className="py-16 bg-slate-900 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Mata Pelajaran
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mapel.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800 p-4 rounded-lg text-center border border-slate-700"
              >
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metode Pembelajaran Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">
          Metode Pembelajaran
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-2xl">
              1
            </div>
            <h4 className="font-bold text-xl mb-2">Inquiry Based</h4>
            <p className="text-slate-600 text-sm">
              Siswa diajak aktif bertanya dan bereksplorasi untuk memecahkan
              masalah.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-2xl">
              2
            </div>
            <h4 className="font-bold text-xl mb-2">Project Based</h4>
            <p className="text-slate-600 text-sm">
              Pembelajaran melalui proyek nyata untuk menghasilkan karya
              kreatif.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-2xl">
              3
            </div>
            <h4 className="font-bold text-xl mb-2">Collaborative</h4>
            <p className="text-slate-600 text-sm">
              Membangun kerjasama antar siswa dalam kelompok belajar.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
