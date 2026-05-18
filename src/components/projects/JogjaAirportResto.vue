<template>
  <div>
    <h1>Web App Restaurant and Point of Sale (Offline)</h1>

    <div class = "d-flex flex-column my-4">
        <div>Jogja Airport Resto</div>
        <div>Year: 2019</div>
        <div>Category: Team</div>
    </div>

    <article>
        <p>
            To initiate the research phase using the waterfall method, we conducted an on-site visit in the Sleman area to plan and gather requirements for an offline, web-based Point of Sale (POS) application running on a local server.
        </p>
        <p>
            The client provided a one-month timeline (covering Server, Application, CCTV, Boarding Animation, and Training) to ensure all components were fully operational for the soft opening. The system development took 3 weeks (including 2 weeks on-site) to meet all the agreed-upon feature requirements.
        </p>
        <p>
            This Point of Sale (POS) system is relatively straightforward, featuring two access roles: Admin and Cashier. The Admin has access to Account Management, Inventory Management, Business Profile, and Sales Transaction Reports. The Cashier role is restricted to Sales Transactions and hardware integration (Receipt Printing).
        </p>
        <p>
            The system supports multiple receipt printing. When a cashier prints a receipt at the front desk, the kitchen printer simultaneously generates a ticket corresponding to the customer's order.
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
            <div class = "fw-bold mb-2">Personnel (Sulungsoft Team)</div>
            <ol>
                <li>Adi Kurniawan: Project Manager</li>
                <li>Irvan Hidayat: System Analyst & QA</li>
                <li>Nabiel Mada: Software Developer</li>
                <li>Fahrezi Bayu: Software Developer</li>
                <li>Rega: Network Infrastructure</li>
                <li>Muhammad Fariz: CCTV Technician</li>
                <li>Yanto: CCTV Technician</li>
                <li>Dimas Dwi: Designer</li>
                <li>Jeany Yuandra: Animation</li>
            </ol>
        </section>

        <section id = "dokumentasi" class = "mb-4">
            <div class = "fw-bold mb-2">Documentation</div>
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