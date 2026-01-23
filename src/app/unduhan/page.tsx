"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import {
  Plus,
  X,
  Save,
  Trash2,
  Download,
  Loader2,
  Lock,
  Inbox,
  Send,
  FileText,
  Search,
  UploadCloud,
} from "lucide-react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export default function UnduhanPage() {
  const [activeTab, setActiveTab] = useState<"masuk" | "keluar" | "umum">(
    "masuk",
  );
  const [dataSurat, setDataSurat] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    no: "",
    perihal: "",
    entitas: "",
    tgl: "",
  });

  const isInternal = !!session;

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => setSession(session));
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("arsip_surat")
      .select("*")
      .eq("kategori", activeTab)
      .order("tanggal", { ascending: false });
    if (!error) setDataSurat(data);
    setLoading(false);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    let fileUrl = "";

    if (fileToUpload) {
      const fileExt = fileToUpload.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${activeTab}/${fileName}`;
      const { error: uploadError } = await supabase.storage
        .from("dokumen-sekolah")
        .upload(filePath, fileToUpload);
      if (!uploadError) {
        const { data } = supabase.storage
          .from("dokumen-sekolah")
          .getPublicUrl(filePath);
        fileUrl = data.publicUrl;
      }
    }

    const { error } = await supabase.from("arsip_surat").insert([
      {
        nomor_surat: formData.no,
        perihal: formData.perihal,
        entitas: formData.entitas,
        tanggal: formData.tgl,
        kategori: activeTab,
        file_url: fileUrl,
      },
    ]);

    if (!error) {
      setShowModal(false);
      fetchData();
      setFileToUpload(null);
      setFormData({ no: "", perihal: "", entitas: "", tgl: "" });
    }
    setIsUploading(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-24 pb-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-slate-900">
            Arsip Digital & Unduhan
          </h1>
          {isInternal && (
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-xl flex items-center shadow-lg hover:bg-blue-700 transition w-full md:w-auto justify-center"
            >
              <Plus size={20} className="mr-2" /> Tambah Data
            </button>
          )}
        </div>

        {/* Tab Selector */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {["masuk", "keluar", "umum"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-2 rounded-full font-bold capitalize transition-all whitespace-nowrap ${activeTab === tab ? "bg-slate-900 text-white" : "bg-white text-slate-500 border"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tabel Responsive */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b">
                <tr className="text-slate-500 text-xs uppercase tracking-wider">
                  <th className="p-4">Info Surat</th>
                  <th className="p-4 hidden md:table-cell">
                    {activeTab === "masuk" ? "Asal" : "Tujuan"}
                  </th>
                  <th className="p-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr>
                    <td colSpan={3} className="p-10 text-center text-slate-400">
                      Memuat data...
                    </td>
                  </tr>
                ) : (
                  dataSurat.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 transition">
                      <td className="p-4">
                        <div className="font-mono text-xs text-blue-600 mb-1">
                          {item.nomor_surat}
                        </div>
                        <div className="font-bold text-slate-800">
                          {item.perihal}
                        </div>
                        <div className="text-xs text-slate-400 md:hidden">
                          {item.entitas} • {item.tanggal}
                        </div>
                      </td>
                      <td className="p-4 hidden md:table-cell text-slate-600">
                        {item.entitas}
                      </td>
                      <td className="p-4 flex justify-center gap-2">
                        {item.file_url ? (
                          <a
                            href={item.file_url}
                            target="_blank"
                            className="p-2 bg-blue-50 text-blue-600 rounded-lg"
                          >
                            <Download size={18} />
                          </a>
                        ) : (
                          <span className="text-xs text-slate-300 italic">
                            No File
                          </span>
                        )}
                        {isInternal && (
                          <button
                            onClick={() => {
                              /* fungsi hapus */
                            }}
                            className="p-2 bg-red-50 text-red-500 rounded-lg"
                          >
                            <Trash2 size={18} />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Arsip Baru ({activeTab})</h2>
              <button onClick={() => setShowModal(false)}>
                <X size={24} className="text-slate-400" />
              </button>
            </div>
            <form onSubmit={handleSave} className="space-y-4">
              <input
                required
                placeholder="Nomor Surat"
                className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.no}
                onChange={(e) =>
                  setFormData({ ...formData, no: e.target.value })
                }
              />
              <input
                required
                placeholder="Perihal"
                className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.perihal}
                onChange={(e) =>
                  setFormData({ ...formData, perihal: e.target.value })
                }
              />
              <input
                required
                placeholder={activeTab === "masuk" ? "Asal" : "Tujuan"}
                className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.entitas}
                onChange={(e) =>
                  setFormData({ ...formData, entitas: e.target.value })
                }
              />
              <input
                required
                type="date"
                className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.tgl}
                onChange={(e) =>
                  setFormData({ ...formData, tgl: e.target.value })
                }
              />

              <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 text-center hover:bg-slate-50 relative">
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => setFileToUpload(e.target.files?.[0] || null)}
                />
                <UploadCloud
                  className="mx-auto text-slate-400 mb-2"
                  size={32}
                />
                <p className="text-xs text-slate-500">
                  {fileToUpload
                    ? fileToUpload.name
                    : "Klik untuk upload PDF/Gambar"}
                </p>
              </div>

              <button
                type="submit"
                disabled={isUploading}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold flex items-center justify-center disabled:opacity-50"
              >
                {isUploading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Simpan Data"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
