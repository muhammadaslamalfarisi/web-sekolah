"use client";

import React, { useState } from "react";
import {
  Users,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  Search,
  Filter,
  Download,
} from "lucide-react";

export default function AdminSPMB() {
  // Data dummy pendaftar
  const [pendaftar, setPendaftar] = useState([
    {
      id: 1,
      nama: "Budi Santoso",
      jalur: "Zonasi",
      status: "Pending",
      tgl: "20 Jan 2026",
    },
    {
      id: 2,
      nama: "Siti Aminah",
      jalur: "Afirmasi",
      status: "Diterima",
      tgl: "19 Jan 2026",
    },
    {
      id: 3,
      nama: "Andi Wijaya",
      jalur: "Zonasi",
      status: "Ditolak",
      tgl: "18 Jan 2026",
    },
  ]);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Admin */}
      <aside className="w-64 bg-slate-900 text-white p-6 hidden lg:block">
        <div className="text-xl font-bold mb-10 text-blue-400 italic">
          Panel Panitia
        </div>
        <nav className="space-y-4">
          <div className="text-xs uppercase text-slate-500 font-bold tracking-widest">
            Menu Utama
          </div>
          <a
            href="#"
            className="flex items-center gap-3 p-3 bg-blue-600 rounded-xl"
          >
            <Users size={18} /> Data Pendaftar
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-3 text-slate-400 hover:text-white transition-colors"
          >
            <CheckCircle size={18} /> Verifikasi Berkas
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-3 text-slate-400 hover:text-white transition-colors"
          >
            <Download size={18} /> Laporan Akhir
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Verifikasi Siswa Baru
            </h1>
            <p className="text-slate-500">
              Manajemen pendaftaran SD Negeri 1 Batu Rakit
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-white border px-4 py-2 rounded-lg text-sm font-semibold shadow-sm hover:bg-slate-50 transition-colors">
              <Filter size={16} /> Filter
            </button>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm hover:bg-blue-700 transition-colors">
              <Download size={16} /> Export Data
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            icon={<Clock className="text-yellow-600" />}
            label="Menunggu Verifikasi"
            value="12"
            color="bg-yellow-50"
          />
          <StatCard
            icon={<CheckCircle className="text-green-600" />}
            label="Sudah Diterima"
            value="45"
            color="bg-green-50"
          />
          <StatCard
            icon={<XCircle className="text-red-600" />}
            label="Berkas Ditolak"
            value="3"
            color="bg-red-50"
          />
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-slate-800 italic">
              Daftar Antrian Verifikasi
            </h3>
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Cari nama siswa..."
                className="pl-10 pr-4 py-2 bg-slate-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
                <tr>
                  <th className="px-6 py-4">Nama Siswa</th>
                  <th className="px-6 py-4">Jalur</th>
                  <th className="px-6 py-4">Tanggal Daftar</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pendaftar.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-bold text-slate-700">
                      {item.nama}
                    </td>
                    <td className="px-6 py-4 text-slate-600 text-sm">
                      {item.jalur}
                    </td>
                    <td className="px-6 py-4 text-slate-500 text-sm">
                      {item.tgl}
                    </td>
                    <td className="px-6 py-4">
                      <AdminStatusBadge status={item.status} />
                    </td>
                    <td className="px-6 py-4">
                      <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-bold text-sm">
                        <Eye size={16} /> Detail Berkas
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

// Sub-komponen Stat Card
function StatCard({ icon, label, value, color }: any) {
  return (
    <div
      className={`${color} p-6 rounded-2xl border border-white shadow-sm flex items-center gap-4`}
    >
      <div className="p-3 bg-white rounded-xl shadow-sm">{icon}</div>
      <div>
        <p className="text-slate-500 text-xs font-bold uppercase">{label}</p>
        <p className="text-2xl font-black text-slate-800">{value}</p>
      </div>
    </div>
  );
}

// Sub-komponen Badge Status Admin
function AdminStatusBadge({ status }: { status: string }) {
  const styles: any = {
    Pending: "bg-yellow-100 text-yellow-700",
    Diterima: "bg-green-100 text-green-700",
    Ditolak: "bg-red-100 text-red-700",
  };
  return (
    <span
      className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${styles[status]}`}
    >
      {status}
    </span>
  );
}
