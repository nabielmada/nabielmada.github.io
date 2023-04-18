<template>
  <div>
    <h1>Jogja Airport Resto</h1>

    <div class = "d-flex flex-column my-4">
        <div>Tahun: 2019</div>
        <div>Kategori: Tim</div>
    </div>

    <article>
        <p>
            Dalam rangka memulai tahapan penelitian dengan metode waterfall, kami akan berkunjung langsung ke lokasi yang terletak di kawasan Sleman untuk merencanakan pembuatan serta kebutuhan pada sistem POS (Point of Sale) berbasis website aplikasi yang berjalan secara offline dengan menggunakan server sendiri. 
        </p>
        <p>
            Klien memberikan waktu satu bulan termasuk (Server, Program, CCTV, Animasi Boarding, Edukasi) agar semua kebutuhan dapat digunakan pada saat soft-opening.
            Proses pembuatan sistem memerlukan waktu 3 minggu (2 minggu on-site) untuk memenuhi persyaratan dengan fitur-fitur yang telah disepakati bersama.
        </p>
        <p>
            Sistem POS (Point of Sale) yang kami buat ini cukup sederhana karena memiliki 2 Hak Aksess yaitu, Admin dan Kasir. Admin memiliki fitur seperti Manajemen Akun, Manajemen Inventory, Profil Bisnis, Laporan Transaksi Penjualan. Sedangkan untuk Kasir hanya Transaksi Penjualan dan Integrasi dengan peralatan kasir (Print Struk).
        </p>
        <p>
            Sistem ini dapat melakukan multiple print struk, ketika di setiap kasir cetak struk maka printer struk yang ada di dapur juga akan tercetak sesuai dengan item pesanan customer atau print struk yang ada di kasir.
        </p>

        <section id = "tech-stack" class = "mb-4">
            <div class = "fw-bold mb-2">Tech Stack</div>
            <div class="d-inline-block">
                <small>
                    <div class="badge bg-light-primary me-2">PHP 7</div>
                    <div class="badge bg-light-primary me-2">Mysql</div>
                    <div class="badge bg-light-primary me-2">Javascript</div>
                    <div class="badge bg-light-primary me-2">jQuery</div>
                    <div class="badge bg-light-primary me-2">Ajax</div>
                    <div class="badge bg-light-primary me-2">Bootstrap 4</div>
                    <div class="badge bg-light-primary me-2">AdminLTE</div>
                </small>
            </div>
        </section>
        
        <section id = "personil" class = "mb-4">
            <div class = "fw-bold mb-2">Personil (Sulungsoft Team)</div>
            <ol>
                <li>Adi Kurniawan: Project Manager</li>
                <li>Irvan Hidayat: System Analyst & QA</li>
                <li>Nabiel Mada: Software Engineering</li>
                <li>Fahrezi Bayu: Software Developer</li>
                <li>Rega: Infrastruktur Jaringan</li>
                <li>Muhammad Fariz: Teknisi CCTV</li>
                <li>Yanto: Teknisi CCTV</li>
                <li>Dimas Dwi: Designer</li>
                <li>Jeany Yuandra: Animation</li>
            </ol>
        </section>

        <section id = "dokumentasi" class = "mb-4">
            <div class = "fw-bold mb-2">Dokumentasi</div>
            <div class = "d-flex">
                <div class="frame-dokumentasi">
                    <!-- <img src = "..." class = "img-fluid img-dokumentasi" alt = "gallery-dokumentasi"> -->
                </div>
                <div class="frame-dokumentasi">
                    <!-- <img src = "..." class = "img-fluid img-dokumentasi" alt = "gallery-dokumentasi"> -->
                </div>
            </div>
        </section>

    </article>

  </div>
</template>

<script>
export default {
    name: "JogjaAirportResto"
}
</script>

<style>

</style>