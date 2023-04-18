<template>
  <div>
    <h1>Vingarage18</h1>

    <div class = "d-flex flex-column my-4">
        <div>Tahun: 2021</div>
        <div>Kategori: Individu</div>
    </div>

    <article>
        <p>
          Project ini memiliki dua kategori yaitu, website dan backoffice. Website digunakan untuk user dapat melakukan pengecekan kendaarannya sudah sampai tahap mana reparasi itu dilakukan. Sedangkan backoffice digunakan untuk melakukan pengolahan data pada pemesanan reparasi. 
        </p>
        <p>
          Pada backoffice memiliki menu diantaranya adalah Dashboard, Customer, Reparasi, Laporan Reparasi dan Profile Bisnis. di dalam menu Reparasi cukup kompleks karena didalamnya dapat melakukan validasi berbagai macam kategori reparasi seperti "Apakah kendaaraan pada nopol ini sudah melakukan reparasi A jika belum maka masih dalam tahap proses", "Jika semua pemesanan reparasi sudah selesai semua makan dapat melukan tahap berikutnya yaitu invoice"
        </p>
        <p>
         Pada Menu Laporan Reparasi difungsikan untuk melihat data customer yang melakukan pemesanan reparasi serta datap mencetak invoice untuk dikirimkan kepada customer
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
                    <div class="badge bg-light-primary me-2">Bootstrap 5</div>
                    <div class="badge bg-light-primary me-2">Mazer</div>
                </small>
            </div>
        </section>

    </article>

  </div>
</template>

<script>
export default {
    name: "Vingarage"
}
</script>

<style>

</style>