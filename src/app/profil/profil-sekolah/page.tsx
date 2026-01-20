import React from "react";

export default function ProfilSekolahPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* Judul */}
      <header className="text-center mb-14">
        <h1 className="text-4xl font-bold mb-4">Profil Sekolah</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          SD Negeri 1 Batu Rakit adalah sekolah dasar negeri yang berkomitmen
          memberikan pendidikan berkualitas untuk membentuk generasi yang
          berkarakter, berprestasi, dan berakhlak mulia.
        </p>
      </header>

      {/* Konten Utama */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Identitas Sekolah */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Identitas Sekolah</h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Nama Sekolah:</span> SD Negeri 1
              Batu Rakit
            </li>
            <li>
              <span className="font-medium">Status:</span> Negeri
            </li>
            <li>
              <span className="font-medium">Jenjang:</span> Sekolah Dasar (SD)
            </li>
            <li>
              <span className="font-medium">Alamat:</span> Dusun Lendang Beriri,
              Desa Batu Rakit, Kec. Bayan, KLU.
            </li>
            <li>
              <span className="font-medium">Tahun Berdiri:</span> 1976
            </li>
          </ul>
        </div>

        {/* Sejarah Sekolah */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Sejarah Singkat</h2>
          <p className="text-gray-700 leading-relaxed">
            SD Negeri 1 Batu Rakit didirikan sebagai upaya untuk meningkatkan
            akses pendidikan dasar bagi masyarakat sekitar. Seiring
            perkembangannya, sekolah ini terus berbenah dalam meningkatkan mutu
            pembelajaran, sarana prasarana, serta kualitas pendidik.
          </p>
        </div>
      </section>

      {/* Visi dan Misi */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Visi dan Misi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-medium mb-3">Visi</h3>
            <p className="text-gray-700">
              “Terwujudnya Peserta Didik yang Beriman, Bertaqwa, dan Berakhlak
              Mulia, Peduli, Kreatif, Inovatif, dan Berprestasi”.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">Misi</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Merancang dan melaksanakan pembelajaran yang agamis untuk
                menumbuhkan penghayatan, pengamalan serta penerapan terhadap
                ajaran agama yang dianut pesrta didik;
              </li>
              <li>
                Melaksanakan kegiatan keagamaan secara rutin, pembiasaan
                positif, dan keteladanan dalam berinteraksi di lingkungan
                sekolah untuk membentuk peserta didik memiliki akhlak mulia;
              </li>
              <li>
                Menumbuhkan kepekaan peserta didik pada dirinya sendiri, sesama,
                dan lingkungannya sehingga memiliki rasa peduli terhadap setiap
                permasalahan yang terjadi;
              </li>
              <li>
                Mengembangkan kegiatan ekstra kurikuluer, ko-kurikuler secara
                rutin dan terprogram untuk menumbuhkembangkan minat, bakat, dan
                kreatifitas peserta didik;
              </li>
              <li>
                Merancang dan melaksankanan program sekolah yang membentuk ide
                dan gagasan cepat tanggap terhadap perubahan yang terjadi untuk
                menumbuhkan inovasi peserta didik;
              </li>
              <li>
                Mengembangkan proses pembelajaran yang aktif, kolaboratif,
                inovatif, reflektif, menantang, dan menyenangkan, untuk
                menumbuhkan prestasi peserta didik secara maksimal.
              </li>
              <li>
                Mengembangkan kegiatan ekstrakurikuler yang dapat menumbuhkan
                prestasi peserta didik
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
