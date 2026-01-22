import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Asumsi menggunakan Shadcn UI

// Data Ekstrakurikuler (Bisa dipindah ke file konstanta nantinya)
const ekskulData = [
  {
    nama: "Pramuka",
    deskripsi:
      "Melatih kemandirian, kedisiplinan, dan jiwa kepemimpinan siswa melalui kegiatan alam terbuka.",
    jadwal: "Sabtu, 14.00 - 16.00",
    ikon: "⛺",
  },
  {
    nama: "Seni Tari",
    deskripsi:
      "Mengembangkan bakat seni dan melestarikan budaya tradisional melalui gerak tari daerah.",
    jadwal: "Selasa, 15.00 - 17.00",
    ikon: "💃",
  },
  {
    nama: "Olahraga (Sepak Bola)",
    deskripsi:
      "Membangun kesehatan fisik dan kerjasama tim melalui teknik dasar sepak bola.",
    jadwal: "Jumat, 15.30 - 17.30",
    ikon: "⚽",
  },
  {
    nama: "Paduan Suara",
    deskripsi:
      "Mengasah kemampuan olah vokal dan harmonisasi dalam berkelompok.",
    jadwal: "Rabu, 14.00 - 15.30",
    ikon: "🎶",
  },
  {
    nama: "UKS / PMR",
    deskripsi:
      "Edukasi kesehatan dasar dan pertolongan pertama pada kecelakaan di lingkungan sekolah.",
    jadwal: "Kamis, 15.00 - 16.30",
    ikon: "🏥",
  },
];

export default function EkstrakurikulerPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Program Ekstrakurikuler
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Wadah pengembangan bakat, minat, dan kreativitas siswa SD Negeri 1
          Batu Rakit di luar jam pelajaran formal.
        </p>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ekskulData.map((ekskul, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="text-4xl">{ekskul.ikon}</div>
              <CardTitle className="text-xl font-semibold">
                {ekskul.nama}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">{ekskul.deskripsi}</p>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-sm font-medium text-slate-500">
                  <span className="font-bold text-blue-600">Jadwal:</span>{" "}
                  {ekskul.jadwal}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Info Tambahan */}
      <div className="mt-16 bg-blue-50 p-8 rounded-2xl text-center border border-blue-100">
        <h2 className="text-2xl font-bold text-blue-900 mb-2">
          Tertarik Bergabung?
        </h2>
        <p className="text-blue-700">
          Pendaftaran dibuka setiap awal semester. Silakan hubungi wali kelas
          atau pembina masing-masing ekstrakurikuler.
        </p>
      </div>
    </div>
  );
}
