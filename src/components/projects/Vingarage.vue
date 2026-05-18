<template>
  <div>
    <h1>Website Car Reparation</h1>

    <div class = "d-flex flex-column my-4">
        <div>Vingarage18</div>
        <div>Year: 2021</div>
        <div>Category: Individual</div>
    </div>

    <article>
        <p>
          This project is divided into two main components: a customer-facing website and a backoffice dashboard. The website allows users to track the real-time progress of their vehicle repairs. Meanwhile, the backoffice is designed to process and manage repair orders and data.
        </p>
        <p>
          The backoffice features multiple modules, including Dashboard, Customers, Repairs, Repair Reports, and Business Profile. The Repair module is particularly complex, as it handles various repair stage validations. For instance, it checks "Has the vehicle with this license plate completed Repair Stage A? If not, it remains in progress." Once all repair orders for a vehicle are marked as complete, the system advances to the invoicing stage.
        </p>
        <p>
         The Repair Reports module is utilized to review customer repair histories and print professional invoices to be delivered to the customers.
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