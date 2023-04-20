<template>
    <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="200">
        <p><i class="em em-woozy_face" aria-role="presentation" aria-label="FACE WITH UNEVEN EYES AND WAVY MOUTH"></i></p>
        <h1 class="title">My Recent <mark>Portofolio</mark></h1>
        <p class="text-muted mt-3 sub-title">
            <small>
                Several portofolio projects that I have completed as freelancer
                <br /> from varoius cities in Indonesia.
            </small>
        </p>
    </div>


    <div class="row row-cols-1 row-cols-md-3 g-4 card-porto">
        <div class="col" data-aos="flip-up" data-aos-delay="250">
            <div class="card hover-card border-none h-100" @click="project_modal('alunam')" role = "button">
                <div class="text-center mt-3">
                </div>
                <div class="card-body">
                    <div class="card-title text-center mb-3 text-secondary">Alunam</div>
                    <div class="text-center">
                        <img src="/portofolio/bg-portofolio-9.png" draggable="false" class="card-img-top bg-portofolio" loading = "lazy" alt="bg-por-alunam">
                    </div>
                    <div class="row g-0 mt-4">
                        <div class="col-lg-3 col-2 mt-4 mx-2 frame text-center">
                            <img src="/avatar/alunam.png" class="img-fluid frame-logo" draggable="false" alt="logo-bisnis">
                        </div>
                        <div class="col">
                            <div class="card-text mb-2">
                                Wedding Website Invitation
                            </div>
                            <div class="text-muted mb-2 lh-sm">
                                <small>Alunam</small><br />
                                <small>Indonesia, 2023</small>
                            </div>

                            <div class="d-inline-block">
                                <small>
                                    <div class="badge bg-light-primary me-2">Mysql</div>
                                    <div class="badge bg-light-primary me-2">Express JS</div>
                                    <div class="badge bg-light-primary me-2">Vue 3</div>
                                    <div class="badge bg-light-primary me-2">Vuex</div>
                                    <div class="badge bg-light-primary me-2">Node JS</div>
                                    <div class="badge bg-light-primary me-2">Bootstrap 5</div>
                                    <div class="badge bg-light-primary me-2">Cloudflare</div>
                                    <div class="badge bg-light-primary me-2">Cypress</div>
                                </small>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col" data-aos="flip-up" data-aos-delay="250">
            <div class="card hover-card border-none h-100" @click="project_modal('tmj_wb')" role = "button">
                <div class="text-center">
                    <div class="badge bg-primary w-25 text-white"><small>Team</small></div>
                </div>
                <div class="card-body">
                    <div class="card-title text-center mb-3 text-secondary">Trans Marga Jateng</div>
                    <div class="text-center">
                        <img src="/portofolio/bg-portofolio-8.png" draggable="false" class="card-img-top bg-portofolio" loading = "lazy" alt="bg-por-wb">
                    </div>
                    <div class="row g-0 mt-4">
                        <div class="col-lg-3 col-2 mt-4 mx-2 frame text-center">
                            <img src="/avatar/tmj.png" class="img-fluid frame-logo" draggable="false" alt="logo-bisnis">
                        </div>
                        <div class="col">
                            <div class="card-text mb-2">
                                Web App Monitoring Disposition and Assignment
                            </div>
                            <div class="text-muted mb-2 lh-sm">
                                <small>Trans Marga Jateng</small><br />
                                <small>Semarang-Solo, 2022</small>
                            </div>

                            <div class="d-inline-block">
                                <small>
                                    <div class="badge bg-light-primary me-2">PHP 8</div>
                                    <div class="badge bg-light-primary me-2">Mysql</div>
                                    <div class="badge bg-light-primary me-2">AJAX</div>
                                    <div class="badge bg-light-primary me-2">Mazer</div>
                                </small>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col" data-aos="flip-up" data-aos-delay="250">
            <div class="card hover-card border-none h-100" @click="project_modal('tmj_om')" role = "button">
                <div class="text-center mt-3">
                </div>
                <div class="card-body">
                    <div class="card-title text-center mb-3 text-secondary">Trans Marga Jateng</div>
                    <div class="text-center">
                        <img src="/portofolio/bg-portofolio-7.png" draggable="false" class="card-img-top bg-portofolio" loading = "lazy" alt="bg-por-wpr">
                    </div>
                    <div class="row g-0 mt-4">
                        <div class="col-lg-3 col-2 mt-4 mx-2 frame text-center">
                            <img src="/avatar/tmj.png" class="img-fluid frame-logo" draggable="false" alt="logo-bisnis">
                        </div>
                        <div class="col">
                            <div class="card-text mb-2">
                                Web App Performance Reporting
                            </div>
                            <div class="text-muted mb-2 lh-sm">
                                <small>Trans Marga Jateng</small><br />
                                <small>Semarang-Solo, 2022</small>
                            </div>

                            <div class="d-inline-block">
                                <small>
                                    <div class="badge bg-light-primary me-2">PHP 8</div>
                                    <div class="badge bg-light-primary me-2">Mysql</div>
                                    <div class="badge bg-light-primary me-2">AJAX</div>
                                    <div class="badge bg-light-primary me-2">Stisla</div>
                                </small>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col" data-aos="flip-up" data-aos-delay="250">
            <div class="card hover-card border-none h-100" @click="project_modal('nicoles')" role = "button">
                <div class="text-center">
                    <div class="badge bg-primary w-25 text-white"><small>Team</small></div>
                </div>
                <div class="card-body">
                    <div class="card-title text-center mb-3 text-secondary">Nicole's Chocolaterie</div>
                    <div class="text-center">
                        <img src="/portofolio/bg-portofolio-1.png" draggable="false" class="card-img-top bg-portofolio" loading = "lazy" alt="bg-por-nicoles">
                    </div>
                    <div class="row g-0 mt-4">
                        <div class="col-lg-3 col-2 mt-4 mx-2 frame text-center">
                            <img src="/avatar/factory.png" class="img-fluid frame-logo" draggable="false" alt="logo-bisnis">
                        </div>
                        <div class="col">
                            <div class="card-text mb-2">
                                Web App Factory (ERP) and Point of Sale
                            </div>
                            <div class="text-muted mb-2 lh-sm">
                                <small>Nicole's Chocolaterie</small><br />
                                <small>Puncak Bogor, 2021</small>
                            </div>

                            <div class="d-inline-block">
                                <small>
                                    <div class="badge bg-light-primary me-2">PHP 7</div>
                                    <div class="badge bg-light-primary me-2">Mysql</div>
                                    <div class="badge bg-light-primary me-2">AJAX</div>
                                    <div class="badge bg-light-primary me-2">AdminLTE</div>
                                </small>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col" data-aos="flip-up" data-aos-delay="300">
            <div class="card hover-card border-none h-100" @click="project_modal('mangospa')" role = "button">
                <div class="text-center">
                    <div class="badge bg-primary w-25 text-white"><small>Team</small></div>
                </div>
                <div class="card-body">
                    <div class="card-title text-center mb-3 text-secondary">Mango Spa Brasco</div>
                    <div class="text-center">
                        <img src="/portofolio/bg-portofolio-2.png" draggable="false" class="card-img-top bg-portofolio" loading = "lazy" alt="bg-por-mango">
                    </div>
                    <div class="row g-0 mt-4">
                        <div class="col-lg-3 col-2 mt-4 mx-2 frame text-center">
                            <img src="/avatar/brasco.png" draggable="false" class="img-fluid frame-logo" alt="logo-bisnis">
                        </div>
                        <div class="col">
                            <div class="card-text mb-2">
                                Web App SPA Therapist (ERP) and Point of Sale
                            </div>
                            <div class="text-muted mb-2 lh-sm">
                                <small>Mango Spa Brasco</small><br />
                                <small>Bali, 2021</small>
                            </div>

                            <div class="d-inline-block">
                                <small>
                                    <div class="badge bg-light-primary me-2">PHP 7</div>
                                    <div class="badge bg-light-primary me-2">Mysql</div>
                                    <div class="badge bg-light-primary me-2">AJAX</div>
                                    <div class="badge bg-light-primary me-2">AdminLTE</div>
                                </small>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col" data-aos="flip-up" data-aos-delay="350">
            <div class="card hover-card border-none h-100" @click="project_modal('vingarage')" role = "button">
                <div class="text-center mt-3">
                </div>
                <div class="card-body">
                    <div class="card-title text-center mb-4 text-secondary">Vingarage18</div>
                    <div class="text-center">
                        <img src="/portofolio/bg-portofolio-3.png" draggable="false" class="card-img-top bg-portofolio" loading = "lazy" alt="bg-por-vingarage">
                    </div>
                    <div class="row g-0 mt-4">
                        <div class="col-lg-3 col-2 mt-4 mx-2 frame text-center">
                            <img src="/avatar/avatar-3.png" draggable="false" class="img-fluid frame-logo" alt="logo-bisnis">
                        </div>
                        <div class="col">
                            <div class="card-text mb-2">
                                Website Car Reparation
                            </div>
                            <div class="text-muted mb-2 lh-sm">
                                <small>Vingarage18</small><br />
                                <small>Semarang, 2021</small>
                            </div>

                            <div class="d-inline-block">
                                <small>
                                    <div class="badge bg-light-primary me-2">PHP 7</div>
                                    <div class="badge bg-light-primary me-2">Mysql</div>
                                    <div class="badge bg-light-primary me-2">Bootstrap 5</div>
                                    <div class="badge bg-light-primary me-2">Mazer</div>
                                </small>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col" data-aos="flip-up" data-aos-delay="250">
            <div class="card hover-card border-none h-100" @click="project_modal('rahardja')" role = "button">
                <div class="text-center mt-3">
                </div>
                <div class="card-body">
                    <div class="card-title text-center mb-4 text-secondary">Rahardja Rental</div>
                    <div class="text-center">
                        <img src="/portofolio/bg-portofolio-4.png" draggable="false" class="card-img-top bg-portofolio" loading = "lazy" alt="bg-por-rahardja">
                    </div>
                    <div class="row g-0 mt-4">
                        <div class="col-lg-3 col-2 mt-4 mx-2 frame text-center">
                            <img src="/avatar/avatar-4.png" draggable="false" class="img-fluid frame-logo" alt="logo-bisnis">
                        </div>
                        <div class="col">
                            <div class="card-text mb-2">
                                Website Luxury Car Rental
                            </div>
                            <div class="text-muted mb-2 lh-sm">
                                <small>Rahardja Rental</small><br />
                                <small>Jakarta, 2020</small>
                            </div>

                            <div class="d-inline-block">
                                <small>
                                    <div class="badge bg-light-primary me-2">SCSS</div>
                                    <div class="badge bg-light-primary me-2">Bootstrap 4</div>
                                    <div class="badge bg-light-primary me-2">Javascript</div>
                                </small>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col" data-aos="flip-up" data-aos-delay="300">
            <div class="card hover-card border-none h-100" @click="project_modal('arojaya')" role = "button">
                <div class="text-center mt-3">
                </div>
                <div class="card-body">
                    <div class="card-title text-center mb-4 text-secondary">Bengkel Arojaya</div>
                    <div class="text-center">
                        <img src="/portofolio/bg-portofolio-5.png" draggable="false" class="card-img-top bg-portofolio" loading = "lazy" alt="bg-por-arojaya">
                    </div>
                    <div class="row g-0 mt-4">
                        <div class="col-lg-3 col-2 mt-4 mx-2 frame text-center">
                            <img src="/avatar/avatar-5.png" draggable="false" class="img-fluid frame-logo" alt="logo-bisnis">
                        </div>
                        <div class="col">
                            <div class="card-text mb-2">
                                Point of Sale (Offline) Workshop Web App 
                            </div>
                            <div class="text-muted mb-2 lh-sm">
                                <small>Bengkel Arojaya</small><br />
                                <small>Semarang, 2020</small>
                            </div>

                            <div class="d-inline-block">
                                <small>
                                    <div class="badge bg-light-primary me-2">Laravel 7</div>
                                    <div class="badge bg-light-primary me-2">Mysql</div>
                                    <div class="badge bg-light-primary me-2">AJAX</div>
                                    <div class="badge bg-light-primary me-2">AdminLTE</div>
                                </small>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col" data-aos="flip-up" data-aos-delay="350">
            <div class="card hover-card border-none h-100" @click="project_modal('jar')" role = "button">
                <div class="text-center">
                    <div class="badge bg-primary w-25 text-white"><small>Team</small></div>
                </div>
                <div class="card-body">
                    <div class="card-title text-center mb-3 text-secondary">Jogja Airport Resto</div>
                    <div class="text-center">
                        <img src="/portofolio/bg-portofolio-6.png" draggable="false" class="card-img-top bg-portofolio" loading = "lazy" alt="bg-por-jar">
                    </div>
                    <div class="row g-0 mt-4">
                        <div class="col-lg-3 col-2 mt-4 mx-2 frame text-center">
                            <img src="/avatar/jar.png" draggable="false" class="img-fluid frame-logo" alt="logo-bisnis">
                        </div>
                        <div class="col">
                            <div class="card-text mb-2">
                                Web App Restaurant and Point of Sale (Offline)
                            </div>
                            <div class="text-muted mb-2 lh-sm">
                                <small>Jogja Airport Resto</small><br />
                                <small>Yogyakarta, 2019</small>
                            </div>

                            <div class="d-inline-block">
                                <small>
                                    <div class="badge bg-light-primary me-2">PHP 7</div>
                                    <div class="badge bg-light-primary me-2">Mysql</div>
                                    <div class="badge bg-light-primary me-2">Bootstrap 4</div>
                                    <div class="badge bg-light-primary me-2">AdminLTE</div>
                                </small>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" ref="projectModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header" style="border:none">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body mx-5 mb-5">
                    <!-- Components Projects -->
                    <div v-if = "projectName === 'jar'">
                        <JogjaAirportResto></JogjaAirportResto>
                    </div>
                    <div v-if = "projectName === 'arojaya'">
                        <BengkelArojaya></BengkelArojaya>
                    </div>
                    <div v-if = "projectName === 'rahardja'">
                        <RahardjaRental></RahardjaRental>
                    </div>
                    <div v-if = "projectName === 'vingarage'">
                        <Vingarage></Vingarage>
                    </div>
                    <div v-if = "projectName === 'mangospa'">
                        <MangoSpa></MangoSpa>
                    </div>
                    <div v-if = "projectName === 'nicoles'">
                        <Nicoles></Nicoles>
                    </div>
                    <div v-if = "projectName === 'tmj_om'">
                        <TmjOm></TmjOm>
                    </div>
                    <div v-if = "projectName === 'tmj_wb'">
                        <TmjWb></TmjWb>
                    </div>
                    <div v-if = "projectName === 'alunam'">
                        <Alunam></Alunam>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import {
        Modal
    } from 'bootstrap'

    import JogjaAirportResto from '@/components/projects/JogjaAirportResto.vue'
    import BengkelArojaya from '@/components/projects/BengkelArojaya.vue'
    import RahardjaRental from '@/components/projects/RahardjaRental.vue'
    import Vingarage from '@/components/projects/Vingarage.vue'
    import MangoSpa from '@/components/projects/MangoSpa.vue'
    import Nicoles from '@/components/projects/Nicoles.vue'
    import TmjOm from '@/components/projects/TmjOm.vue'
    import TmjWb from '@/components/projects/TmjWb.vue'
    import Alunam from '@/components/projects/Alunam.vue'

    export default {
        name: "Portofolio",
        components: {
            JogjaAirportResto,
            BengkelArojaya,
            RahardjaRental,
            Vingarage,
            MangoSpa,
            Nicoles,
            TmjOm,
            TmjWb,
            Alunam,
        },
        data: () => ({
            projectName: '',
        }),
        mounted() {
        },
        methods: {
            project_modal(projectName){
                projectName === 'jar' ? this.projectName = projectName : '';
                projectName === 'arojaya' ? this.projectName = projectName : '';
                projectName === 'rahardja' ? this.projectName = projectName : '';
                projectName === 'vingarage' ? this.projectName = projectName : '';
                projectName === 'mangospa' ? this.projectName = projectName : '';
                projectName === 'nicoles' ? this.projectName = projectName : '';
                projectName === 'tmj_om' ? this.projectName = projectName : '';
                projectName === 'tmj_wb' ? this.projectName = projectName : '';
                projectName === 'alunam' ? this.projectName = projectName : '';

                new Modal(this.$refs.projectModal).show()
            },
        },
    }
</script>
