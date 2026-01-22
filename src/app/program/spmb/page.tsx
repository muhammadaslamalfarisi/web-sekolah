"use client";

import React from "react";
import Link from "next/link";
import {
  ClipboardCheck,
  UserPlus,
  Search,
  FileText,
  Calendar,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function SPMBPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 py-20 px-6 text-white overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Sistem Penerimaan Murid Baru (SPMB)
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Selamat datang di layanan pendaftaran peserta didik baru SD Negeri 1
            Batu Rakit. Proses transparan, akuntabel, dan terintegrasi.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/program/spmb/login">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-bold shadow-lg flex items-center gap-2">
                <UserPlus size={20} /> Daftar / Login
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Alur Pendaftaran */}
      <section className="py-16 container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Alur Pendaftaran Online
          </h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {alurData.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-300 transition-all hover:shadow-md text-center">
                <div className="w-16 h-16 bg-blue-50 mx-auto rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {step.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
                {/* Connector for desktop */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Informasi Utama */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Persyaratan */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <FileText className="text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Syarat & Ketentuan
                </h2>
              </div>
              <div className="space-y-4">
                {syaratData.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 border-l-4 border-blue-500"
                  >
                    <CheckCircle2
                      className="text-blue-500 shrink-0 mt-1"
                      size={18}
                    />
                    <p className="text-gray-700 text-sm md:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Jadwal & Kuota */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Calendar className="text-yellow-500" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Jadwal Pelaksanaan
                </h2>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                        Kegiatan
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                        Tanggal
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {jadwalData.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-blue-50/30 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {row.event}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-blue-700">
                          {row.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Info Kuota Card */}
              <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-gray-800">
                      Kuota Siswa Baru
                    </h4>
                    <p className="text-sm text-gray-600">
                      Total Daya Tampung 2026/2027
                    </p>
                  </div>
                  <div className="text-3xl font-black text-yellow-600">
                    96{" "}
                    <span className="text-sm font-normal text-gray-500">
                      Siswa
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer SPMB */}
      <footer className="py-12 bg-gray-50 text-center">
        <p className="text-gray-500 mb-4 font-medium">
          Butuh Bantuan Pendaftaran?
        </p>
        <Link
          href="/kontak"
          className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
        >
          Hubungi Helpdesk Panitia <ArrowRight size={16} />
        </Link>
      </footer>
    </div>
  );
}

// Data Pendukung
const alurData = [
  {
    icon: <ClipboardCheck />,
    title: "Buat Akun",
    desc: "Mendaftar menggunakan NIK wali dan alamat email aktif.",
  },
  {
    icon: <UserPlus />,
    title: "Isi Data",
    desc: "Melengkapi biodata calon siswa dan data orang tua/wali.",
  },
  {
    icon: <FileText />,
    title: "Unggah Berkas",
    desc: "Upload Akte Kelahiran, KK, dan dokumen pendukung lainnya.",
  },
  {
    icon: <Search />,
    title: "Pantau Hasil",
    desc: "Melihat status verifikasi dan pengumuman akhir secara real-time.",
  },
];

const syaratData = [
  "Calon peserta didik baru kelas 1 SD harus memenuhi usia 7 (tujuh) tahun atau paling rendah 6 (enam) tahun pada tanggal 1 Juli tahun berjalan.",
  "Memiliki Akta Kelahiran asli atau Surat Keterangan Lahir.",
  "Kartu Keluarga (KK) yang diterbitkan paling singkat 1 (satu) tahun sebelum pendaftaran.",
  "Bagi jalur afirmasi, wajib menyertakan bukti keikutsertaan program penanganan keluarga tidak mampu (KIP/PKH).",
];

const jadwalData = [
  { event: "Pendaftaran Jalur Zonasi", date: "16 - 20 Juni 2026" },
  { event: "Pendaftaran Jalur Afirmasi & Mutasi", date: "22 - 24 Juni 2026" },
  { event: "Pengumuman Hasil Seleksi", date: "27 Juni 2026" },
  { event: "Daftar Ulang Siswa", date: "29 Juni - 2 Juli 2026" },
];
