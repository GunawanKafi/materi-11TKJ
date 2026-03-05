// 1. DATABASE MATERI
// Format: 'Tahun': { 'Semester': { ... } }
const databaseMateri = {
  "2024-2025": {
    1: {
      // Semester 1
      uts: [],
      kisiUts: "", // Kosongkan ("") jika belum ada

      uas: [],
      kisiUas: "1anwOms85xBoLL9ukPbX4p7cXt6rcXQcp",
    },
    2: {
      // Semester 2
      uts: [
        // {
        //   pertemuan: 1,
        //   judul: "VLAN (Virtual LAN)",
        //   deskripsi: "Konfigurasi dasar VLAN pada Switch Cisco Packet Tracer.",
        //   fileId: "GANTI_DENGAN_ID_GOOGLE_DRIVE_VLAN",
        // },
      ],
      kisiUts: "GANTI_DENGAN_ID_GOOGLE_DRIVE_VLAN",
      uas: [
        // {
        //   pertemuan: 8, // Lanjutan setelah UTS
        //   judul: "Konsep IP Address v4",
        //   deskripsi:
        //     "Memahami struktur IP Address, kelas IP, dan konversi biner ke desimal.",
        //   fileId: "GANTI_DENGAN_ID_GOOGLE_DRIVE_3",
        // },
      ],
      kisiUas: "GANTI_DENGAN_ID_GOOGLE_DRIVE_VLAN",
    },
  },

  // CONTOH UNTUK TAHUN DEPAN (Tinggal copy paste format di atas)
  "2025-2026": {
    1: {
      // Semester 1
      uts: [
        {
          pertemuan: 1,
          judul: "Penjelasan Dasar Ibis Paint X",
          deskripsi:
            "Modul ini berfungsi sebagai panduan awal pengenalan antarmuka aplikasi Ibis Paint X. Materi mencakup langkah-langkah dasar mulai dari cara mengakses menu 'Galeri Saya' untuk melihat karya, prosedur pembuatan kanvas baru melalui tombol tambah, hingga pemahaman vital mengenai pemilihan ukuran kanvas (SD/HD) dan pengenalan tata letak toolbar utama yang digunakan dalam proses menggambar digital.",
          fileId: "1s4aSmU5SK0e7FTyQq5aBW2_Bc2SXUW8N",
        },
        {
          pertemuan: 2,
          judul: "Penjelasan Kuas Ibis Paint X",
          deskripsi:
            "Materi ini membedah fitur terpenting dalam ilustrasi digital, yaitu pengaturan alat Kuas (Brush). Penjelasan difokuskan pada tata cara mengakses perpustakaan kuas, memilih jenis kuas yang tepat sesuai kebutuhan seperti Dip Pen (Hard) atau Felt Tip Pen (Soft), serta teknik kustomisasi ketebalan dan tingkat opasitas kuas untuk menciptakan variasi goresan yang dinamis dan berkarakter.",
          fileId: "1taRWds8Lb4n1TYa7XLN7wdRgHJV51bXY",
        },
        {
          pertemuan: 3,
          judul: "Penjelasan Stabilizer Ibis Paint X",
          deskripsi:
            "Modul teknis ini mengajarkan cara menghasilkan Line Art yang halus dan profesional menggunakan fitur Stabilizer. Siswa akan mempelajari cara mengaktifkan alat bantu ini melalui ikon jari untuk meredam getaran tangan saat menarik garis, serta memanfaatkan fitur 'Paksa Pudar' (Force Fade) untuk mengatur panjang awal dan akhir goresan agar menghasilkan ujung garis yang lancip dan tajam.",
          fileId: "18IVqbomi4SmGFlR_llRFwwlR3fZA1X0k",
        },
      ],
      kisiUts: "", // Kosongkan ("") jika belum ada

      uas: [
        {
          pertemuan: 4, // Lanjutan setelah UTS
          judul: "Topologi Jaringan",
          deskripsi:
            "Disusun oleh Kelompok 1 (Fani, Azizah, Ratna), presentasi ini membahas secara spesifik mengenai arsitektur Topologi Jaringan. Materi mencakup analisis mendalam tentang karakteristik, kelebihan, serta kekurangan dari Topologi Ring yang membentuk sirkuit data tertutup, dan Topologi Mesh yang menawarkan redundansi tinggi melalui koneksi langsung antar perangkat. Pemahaman ini krusial untuk merancang jaringan yang efisien dan minim risiko kegagalan.",
          fileId: "1K-n4zjMf1QrHl6hq7-XMQfiRns-M6Vcb",
        },
        {
          pertemuan: 5, // Lanjutan setelah UTS
          judul: "Pengenalan Hardware",
          deskripsi:
            "Kelompok 2 (Sopi, Emy, Rahma, Tasya) menyajikan materi fundamental mengenai Perangkat Keras (Hardware). Selain mendefinisikan hardware sebagai komponen fisik komputer yang dapat disentuh, modul ini secara khusus membedah fungsi vital dari Processor sebagai otak pemrosesan data instruksi, serta GPU (Graphics Processing Unit) yang bertugas khusus untuk merender grafik dan visual 2D/3D secara cepat dan efisien.",
          fileId: "1AohWQTkGGFJsJsAD1gtU4D7iDt4IxmJg",
        },
        {
          pertemuan: 6, // Lanjutan setelah UTS
          judul: "Pengenalan Software",
          deskripsi:
            "Materi yang disusun oleh Kelompok 3 (Aisah, Airin, Neni, Sintia) ini berfokus pada aspek Perangkat Lunak (Software). Modul ini tidak hanya menjelaskan definisi software sebagai jembatan non-fisik antara pengguna dan sistem, tetapi juga membandingkan secara teknis dua Sistem Operasi utama: Linux yang berbasis open-source dengan stabilitas tinggi untuk server, dan Windows yang menawarkan antarmuka grafis (GUI) komersial yang luas digunakan untuk produktivitas sehari-hari",
          fileId:
            "https://drive.google.com/file/d/17aP_Q5KD6CIyMg1cYY2gNzz2wqTMtfGm/view?usp=drive_link",
        },
      ],
      kisiUas: "14CY_EYlmnKEdcEJyq2SEWc8lsibTXSh-",
    },
    2: {
      uts: [
        {
          pertemuan: 1,
          judul: "Dasar Jaringan",
          deskripsi:
            "Materi ini adalah fondasi awal. Dokumen ini menjelaskan definisi dasar jaringan komputer dan perbedaannya dengan jaringan secara umum. Fokus utamanya adalah pengenalan Media Transmisi, baik jalur fisik/kabel (Twisted Pair, Coaxial, Fiber Optic) maupun nirkabel (Gelombang Radio, Mikro, Inframerah). Selain itu, materi ini juga memberikan pengantar visual mengenai berbagai jenis Topologi Jaringan seperti Bus, Ring, Star, Mesh, dan Tree.",
          fileId: "1NclSyzmz-1o79wXXASSZTASubg4BhH0r",
        },
        {
          pertemuan: 2,
          judul: "Topologi Dasar & IP Address",
          deskripsi:
            "Materi ini lebih mendalam mengenai arsitektur dan pengalamatan. Isinya mencakup perbedaan model jaringan Peer-to-Peer (setara) dengan Client-Server (terpusat). Bagian terbesarnya membahas IP Address, termasuk struktur IPv4, perbandingannya dengan IPv6, serta perbedaan antara IP Public dan Private. Di akhir, terdapat panduan untuk praktikum pembuatan berbagai jenis topologi jaringan.",
          fileId: "1UTr1cFEQr7MquSdB7l_xYhvre2l95R-Z",
        },
        {
          pertemuan: 3,
          judul: "Perangkat Jaringan dan Perangkat Akhir",
          deskripsi:
            "Materi ini membahas perangkat keras (hardware) yang membuat jaringan bekerja. Penjelasan dibagi menjadi End Device (perangkat pengguna seperti Laptop, PC, Printer) dan Network Device (perangkat penghubung). Secara spesifik, materi ini mengupas fungsi dan perbedaan antara Switch (penghubung LAN), Router (penghubung antar jaringan/internet), dan Access Point (penghubung nirkabel), serta tabel perbandingan fitur ketiganya.",
          fileId: "1PQbgddSPaeSpzW9BejaB6inAYQDQgEZm",
        },
      ],
      kisiUts: "11qMW3ApH5mSJ8V-NbfAsmVKWmhoRTSX3",
      uas: [
        // {
        //   pertemuan: 8, // Lanjutan setelah UTS
        //   judul: "Konsep IP Address v4",
        //   deskripsi:
        //     "Memahami struktur IP Address, kelas IP, dan konversi biner ke desimal.",
        //   fileId: "GANTI_DENGAN_ID_GOOGLE_DRIVE_3",
        // },
      ],
      kisiUas: "",
    },
  },
};

// 2. LOGIKA RENDER (JANGAN DIUBAH KECUALI PAHAM JS)
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const year = urlParams.get("year");
  const sem = urlParams.get("sem");

  // Set Judul
  if (year && sem) {
    document.getElementById("page-title").innerText =
      `Materi T.A. ${year} | Semester ${sem}`;
    loadMateri(year, sem);
  } else {
    document.getElementById("page-title").innerText =
      "Silakan pilih Tahun Ajaran di Halaman Depan";
  }
});

function loadMateri(year, sem) {
  const dataTahun = databaseMateri[year];
  const dataSemester = dataTahun ? dataTahun[sem] : null;

  if (!dataSemester) {
    document.getElementById("error-message").classList.remove("hidden");
    return;
  }

  // Render Bagian UTS
  renderList(dataSemester.uts, "container-uts", "blue");
  renderKisi(dataSemester.kisiUts, "kisi-uts-wrapper", "yellow");

  // Render Bagian UAS
  renderList(dataSemester.uas, "container-uas", "purple");
  renderKisi(dataSemester.kisiUas, "kisi-uas-wrapper", "yellow");
}

function renderList(dataArray, containerId, colorTheme) {
  const container = document.getElementById(containerId);

  if (dataArray.length === 0) {
    container.innerHTML = `<p class="text-gray-500 italic text-center py-4 bg-gray-100 rounded-lg">Materi belum diunggah.</p>`;
    return;
  }

  let htmlContent = "";
  dataArray.forEach((item) => {
    htmlContent += `
                <div class="flex flex-col md:flex-row bg-white rounded-xl shadow-md border border-${colorTheme}-200 overflow-hidden hover:shadow-lg transition">
                    <div class="w-full md:w-4/12 p-6 bg-${colorTheme}-50 border-r border-${colorTheme}-100">
                        <span class="inline-block bg-yellow-400 text-yellow-900 font-bold px-3 py-1 rounded-full text-xs mb-3 shadow-sm">Pertemuan ${item.pertemuan}</span>
                        <h3 class="text-xl font-bold text-blue-900 mb-3">${item.judul}</h3>
                        <p class="text-gray-700 text-sm leading-relaxed text-justify">${item.deskripsi}</p>
                    </div>
                    <div class="w-full md:w-8/12 p-2 bg-gray-200">
                        <div class="pdf-container w-full rounded-lg overflow-hidden border border-gray-300 bg-white">
                             <iframe src="https://drive.google.com/file/d/${item.fileId}/preview" width="100%" height="100%" allow="autoplay"></iframe>
                        </div>
                    </div>
                </div>`;
  });
  container.innerHTML = htmlContent;
}

function renderKisi(fileId, wrapperId, theme) {
  const wrapper = document.getElementById(wrapperId);
  if (!fileId) return; // Jika tidak ada ID, jangan tampilkan

  wrapper.classList.remove("hidden");
  wrapper.innerHTML = `
                <div class="bg-gradient-to-r from-${theme}-100 to-white border-l-8 border-${theme}-500 p-6 rounded-r-xl shadow-sm">
                    <h3 class="text-xl font-bold text-${theme}-800 mb-2 flex items-center gap-2">
                        <span>📝</span> Kisi-Kisi Ujian
                    </h3>
                    <p class="text-sm text-gray-600 mb-4">Pelajari dokumen berikut untuk persiapan ujian.</p>
                    <div class="w-full h-80 rounded-lg overflow-hidden border border-${theme}-300 bg-white">
                        <iframe src="https://drive.google.com/file/d/${fileId}/preview" width="100%" height="100%" allow="autoplay"></iframe>
                    </div>
                </div>
            `;
}
