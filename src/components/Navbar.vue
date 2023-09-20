<template>

<div class="container">
    <nav class="navbar nav-underline navbar-expand-lg navbar-light pb-5 pt-4 resize-nav">
        <a class="navbar-brand fs-3" href="#">
            <div class="fw-bold"><i class="em em-wave" aria-role="presentation" aria-label="WAVING HAND SIGN"></i></div>
        </a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mx-auto order-0">
                <li class="nav-item  me-4">
                    <a class="nav-link" aria-current="page" href="" >Home</a>
                </li>
                <li class="nav-item me-4">
                    <a class="nav-link" v-scroll-to="'#specialize'" href="#specialize">Specialize</a>
                </li>
                <li class="nav-item me-4">
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
                <a href="#" class="brand" @click="mail_modal.show()">
                    <ion-icon name="mail-outline" class="me-3" size="large"></ion-icon>
                </a>
            </div>

            <!-- Modal -->
            <div class="modal fade" ref="mailModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header" style="border:none">
                            <button type="button" class="btn-close" @click="mail_modal.hide()"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body mb-5">
                            <div class="row">
                                <div class="col-lg-6 col-6 text-center">

                                    <img src="/asset/icon/mail.svg" class="img-fluid img-mail" alt="" srcset="">
                                </div>

                                <div class="col-lg-6 col-12 pt-3 text-mail">
                                    <h4>Hi!</h4>
                                    <label for="mail">
                                        <p>you can reach me on gmail :</p>
                                        <p>
                                            <b>nabielmada@gmail.com</b>
                                        </p>
                                    </label>
                                    Nice to meet you soon.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </nav>
</div>

</template>

<script>
    import {
        Modal
    } from 'bootstrap'

    export default {
        name: "Navbar",
        data: () => ({
            mail_modal: null,
        }),
        mounted() {
            this.mail_modal = new Modal(this.$refs.mailModal)
        }
    };
</script>