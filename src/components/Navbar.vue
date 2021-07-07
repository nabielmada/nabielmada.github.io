<template>

    <nav class="navbar navbar-expand-lg navbar-light p-5">
        <!-- <div class="container-fluid"> -->
            <a class="navbar-brand fs-3" href="#"><div class="text-primary-m fw-bold">NM.</div></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mx-auto order-0">
                    <li class="nav-item  ">
                        <a class="nav-link active" aria-current="page" href="#home">Home</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="#specialize">Specialize</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="#portofolio">Portofolio</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="#aboutme">About Me</a>
                    </li>
                </ul>
                <div class="d-flex text-muted ">
                   <a href = "https://www.instagram.com/nabielmada/" target="_blank" class = "brand"><ion-icon name="logo-instagram" class="me-3" size = "large"></ion-icon></a>
                   <a href = "https://github.com/nabielmada" target="_blank" class = "brand"><ion-icon name="logo-github" class = "me-3" size = "large"></ion-icon></a>
                   <a href = "#" class = "brand"><ion-icon name="mail-outline" class = "me-3" size = "large"></ion-icon></a>
                </div>
            <!-- </div> -->
            
        </div>
    </nav>

</template>

<script>
    export default {
        name: "Navbar"
    }
</script>