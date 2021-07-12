<template>

    <nav class="navbar navbar-expand-lg navbar-light p-5 resize-nav">
        <!-- <div class="container-fluid"> -->
        <a class="navbar-brand fs-3" href="#">
            <div class="text-primary-m fw-bold">NM.</div>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mx-auto order-0">
                <li class="nav-item  ">
                    <a class="nav-link active" aria-current="page" href="#home" >Home</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" v-scroll-to="'#specialize'" href="#specialize">Specialize</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" v-scroll-to="'#portofolio'" href="#portofolio">Portofolio</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" v-scroll-to="'#aboutme'" href="#aboutme">About Me</a>
                </li>
            </ul>
            <div class="d-flex text-muted ">
                <a href="https://www.instagram.com/nabielmada/" target="_blank" class="brand">
                    <ion-icon name="logo-instagram" class="me-3" size="large"></ion-icon>
                </a>
                <a href="https://github.com/nabielmada" target="_blank" class="brand">
                    <ion-icon name="logo-github" class="me-3" size="large"></ion-icon>
                </a>
                <a href="#" class="brand" @click="modal_mail.show()">
                    <ion-icon name="mail-outline" class="me-3" size="large"></ion-icon>
                </a>
            </div>
            <!-- </div> -->

            <!-- Modal -->
            <div class="modal fade" ref="mailModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header" style="border:none">
                            <button type="button" class="btn-close" @click="modal_mail.hide()"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body pb-5">
                            <div class="row">
                                <div class="col-lg-6 col-6 text-center">

                                    <img src="/asset/icon/mail.svg" class="img-fluid img-mail" alt="" srcset="">
                                </div>

                                <div class="col-lg-6 col-12 pt-3 text-mail">
                                    <h4>Hi!</h4>
                                    <label for="mail">
                                        you can reach me on gmail :
                                        <b>nabielmada@gmail.com</b>
                                    </label>
                                    <p></p>
                                    Nice to meet you soon.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </nav>

</template>

<script>
    import {
        Modal
    } from 'bootstrap'

    export default {
        name: "Navbar",
        data: () => ({
            modal_mail: null,
        }),
        mounted() {
            this.modal_mail = new Modal(this.$refs.mailModal)
        }
    };
</script>