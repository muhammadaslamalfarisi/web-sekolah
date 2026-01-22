"use client";

import Link from "next/link";

import React from "react";
import {
  User,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  Download,
  MessageCircle,
} from "lucide-react";

export default function DashboardPendaftaran() {
  // Data dummy untuk contoh status pendaftaran
  const dataSiswa = {
    nama: "Budi Santoso",
    noPendaftaran: "REG-2026-00123",
    jalur: "Zonasi",
    status: "Diproses", // Bisa: "Pending", "Diproses", "Diterima", "Ditolak"
    updateTerakhir: "20 Januari 2026, 14:20",
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar Sederhana (Opsional) */}
      <aside className="w-64 bg-white border-r hidden md:block p-6">
        <div className="font-bold text-blue-700 text-xl mb-10">
          SPMB Dashboard
        </div>
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 p-3 bg-blue-50 text-blue-700 rounded-lg font-medium"
          >
            <User size={18} /> Profil Siswa
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg"
          >
            <FileText size={18} /> Dokumen
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg"
          >
            <MessageCircle size={18} /> Bantuan
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Halo, Orang Tua Budi
            </h1>
            <p className="text-gray-500">
              Pantau perkembangan pendaftaran putra/putri Anda di sini.
            </p>
          </div>

          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl flex justify-between items-center">
            <p className="text-yellow-700 text-sm font-medium">
              Anda belum melengkapi formulir pendaftaran.
            </p>
            <Link href="/program/spmb/daftar">
              <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-yellow-700">
                Lengkapi Data Sekarang
              </button>
            </Link>
          </div>

          <div className="flex items-center gap-2 bg-white p-2 px-4 rounded-full shadow-sm border">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700 italic">
              Sistem Online
            </span>
          </div>
        </header>

        {/* Status Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  Status Pendaftaran
                </span>
                <h2 className="text-3xl font-bold text-gray-800 mt-3">
                  {dataSiswa.nama}
                </h2>
                <p className="text-gray-500 uppercase text-sm tracking-widest mt-1 italic font-semibold">
                  {dataSiswa.noPendaftaran}
                </p>
              </div>
              <div className="text-right">
                <StatusBadge status={dataSiswa.status} />
                <p className="text-xs text-gray-400 mt-2 italic">
                  Update: {dataSiswa.updateTerakhir}
                </p>
              </div>
            </div>

            {/* Stepper Status */}
            <div className="relative flex justify-between mt-12">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
              <Step item="1" label="Registrasi" active />
              <Step item="2" label="Verifikasi Berkas" active loading />
              <Step item="3" label="Seleksi" />
              <Step item="4" label="Hasil Akhir" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl text-white shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg mb-2 italic underline underline-offset-4">
                Informasi Jalur
              </h3>
              <p className="text-blue-100 text-sm">
                Anda terdaftar melalui jalur:
              </p>
              <div className="text-2xl font-black mt-2">{dataSiswa.jalur}</div>
            </div>
            <button className="mt-6 flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md p-3 rounded-xl transition-all text-sm font-bold">
              <Download size={18} /> Unduh Bukti Daftar
            </button>
          </div>
        </div>

        {/* Detail Dokumen */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-50">
            <h3 className="font-bold text-gray-800 italic">
              Kelengkapan Dokumen Berkas
            </h3>
          </div>
          <div className="divide-y divide-gray-50">
            <DocumentRow name="Akta Kelahiran" status="Valid" />
            <DocumentRow name="Kartu Keluarga (KK)" status="Valid" />
            <DocumentRow name="Ijazah TK / Surat Keterangan" status="Pending" />
            <DocumentRow name="Pas Foto 3x4" status="Valid" />
          </div>
        </div>
      </main>
    </div>
  );
}

// Sub-komponen Step
function Step({ item, label, active = false, loading = false }: any) {
  return (
    <div className="relative z-10 flex flex-col items-center gap-2">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
          active
            ? "bg-blue-600 text-white shadow-lg ring-4 ring-blue-100"
            : "bg-white border-2 border-gray-200 text-gray-400"
        } ${loading ? "animate-bounce" : ""}`}
      >
        {active && !loading ? <CheckCircle2 size={20} /> : item}
      </div>
      <span
        className={`text-xs font-bold italic ${active ? "text-blue-700" : "text-gray-400"}`}
      >
        {label}
      </span>
    </div>
  );
}

// Sub-komponen Status Badge
function StatusBadge({ status }: { status: string }) {
  const styles: any = {
    Diproses: "bg-yellow-100 text-yellow-700 border-yellow-200",
    Diterima: "bg-green-100 text-green-700 border-green-200",
    Ditolak: "bg-red-100 text-red-700 border-red-200",
  };
  return (
    <span
      className={`px-4 py-2 rounded-lg border font-bold text-sm ${styles[status]}`}
    >
      {status}
    </span> // Pastikan ditutup dengan </span>, bukan </div>
  );
}

// Sub-komponen Baris Dokumen
function DocumentRow({ name, status }: { name: string; status: string }) {
  return (
    <div className="p-4 px-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gray-100 rounded-lg text-gray-500">
          <FileText size={18} />
        </div>
        <span className="text-gray-700 font-medium">{name}</span>
      </div>
      <div className="flex items-center gap-2">
        {status === "Valid" ? (
          <span className="text-green-600 flex items-center gap-1 text-sm font-bold italic">
            <CheckCircle2 size={16} /> Terverifikasi
          </span>
        ) : (
          <span className="text-yellow-600 flex items-center gap-1 text-sm font-bold italic">
            <Clock size={16} /> Menunggu
          </span>
        )}
      </div>
    </div>
  );
}
