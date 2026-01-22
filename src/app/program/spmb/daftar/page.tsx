"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  MapPin,
  FileUp,
  Users,
  Save,
  ArrowRight,
  ChevronLeft,
} from "lucide-react";

export default function FormulirPendaftaran() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Data berhasil disimpan! Mengalihkan ke Dashboard...");
    router.push("/program/spmb/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header Form */}
      <div className="bg-white border-b sticky top-0 z-20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <h1 className="text-xl font-bold text-gray-800 italic">
              Formulir Pendaftaran Siswa
            </h1>
          </div>
          <div className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-1 rounded-full">
            Langkah {step} dari 3
          </div>
        </div>
        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-100">
          <div
            className="h-full bg-blue-600 transition-all duration-500"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-10 max-w-4xl">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
        >
          {/* STEP 1: DATA DIRI SISWA */}
          {step === 1 && (
            <div className="p-8 space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-200">
                  <User size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Data Diri Calon Siswa
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Nama Lengkap Siswa (Sesuai Akta)
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Contoh: Budi Santoso"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    NIK Siswa
                  </label>
                  <input
                    type="number"
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="16 digit nomor induk kependudukan"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Tempat Lahir
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Kota/Kabupaten"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Tanggal Lahir
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: DATA ALAMAT & ORANG TUA */}
          {step === 2 && (
            <div className="p-8 space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-600 text-white rounded-2xl shadow-lg shadow-green-200">
                  <MapPin size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Alamat & Data Wali
                </h2>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">
                  Alamat Lengkap (Sesuai KK)
                </label>
                <textarea
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  rows={3}
                  placeholder="Nama jalan, RT/RW, Dusun..."
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Nama Ayah / Ibu / Wali
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Pekerjaan Wali
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: UNGGAH BERKAS */}
          {step === 3 && (
            <div className="p-8 space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-yellow-500 text-white rounded-2xl shadow-lg shadow-yellow-100">
                  <FileUp size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Unggah Berkas Pendukung
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <UploadBox
                  title="Scan Akta Kelahiran"
                  format="PDF/JPG, Max 2MB"
                />
                <UploadBox
                  title="Scan Kartu Keluarga (KK)"
                  format="PDF/JPG, Max 2MB"
                />
                <UploadBox title="Pas Foto Terbaru" format="JPG/PNG, Max 1MB" />
              </div>
            </div>
          )}

          {/* Navigasi Tombol */}
          <div className="p-8 bg-gray-50 border-t flex justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center gap-2 px-6 py-3 font-bold text-gray-600 hover:text-gray-900 transition-colors"
              >
                Kembali
              </button>
            ) : (
              <div></div>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all"
              >
                Lanjut <ArrowRight size={20} />
              </button>
            ) : (
              <button
                type="submit"
                className="flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 shadow-lg shadow-green-100 transition-all"
              >
                Simpan & Daftar <Save size={20} />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

// Sub-komponen Unggah
function UploadBox({ title, format }: { title: string; format: string }) {
  return (
    <div className="border-2 border-dashed border-gray-200 p-6 rounded-2xl hover:border-blue-400 transition-colors bg-gray-50/50 group">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-gray-700">{title}</h4>
          <p className="text-xs text-gray-400">{format}</p>
        </div>
        <input
          type="file"
          className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>
    </div>
  );
}
