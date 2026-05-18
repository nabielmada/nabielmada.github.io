<template>
    <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="200">
        <p><i class="em em-woozy_face" aria-role="presentation" aria-label="FACE WITH UNEVEN EYES AND WAVY MOUTH"></i></p>
        <h1 class="title">My Recent <mark>Portfolio</mark></h1>
        <p class="text-muted my-4 pb-2 sub-title">
            <small>
                Showcasing projects I've completed as a freelancer, developer, and founder
                <br /> serving diverse clients and users throughout Indonesia
            </small>
        </p>
    </div>

    <div class="d-flex justify-content-center">
        <div class="col-sm-12 col-md-6">
            <ul class="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow" id="pillNav2" role="tablist" style="--bs-nav-link-color: var(--bs-white); --bs-nav-pills-link-active-color: var(--bs-primary); --bs-nav-pills-link-active-bg: var(--bs-white);">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active rounded-5" id="real-project-tab" data-bs-toggle="tab" data-bs-target="#real-project-tab-pane" type="button" role="tab" aria-controls="real-project-tab-pane" aria-selected="true">Web Developer</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link rounded-5" id="mobile-developer-tab" data-bs-toggle="tab" data-bs-target="#mobile-developer-tab-pane" type="button" role="tab" aria-controls="mobile-developer-tab-pane" aria-selected="false">Mobile Developer</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link rounded-5" id="ai-developer-tab" data-bs-toggle="tab" data-bs-target="#ai-developer-tab-pane" type="button" role="tab" aria-controls="ai-developer-tab-pane" aria-selected="false">AI Developer</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link rounded-5" id="practices-tab" data-bs-toggle="tab" data-bs-target="#practices-tab-pane" type="button" role="tab" aria-controls="practices-tab-pane" aria-selected="false">Practices</button>
                </li>
            </ul>
        </div>
    </div>

    <div class="tab-content">
        <div id = "real-project-tab-pane" class="tab-pane fade show active"  role="tabpanel" aria-labelledby="real-project-tab">
            <div class = "row row-cols-1 row-cols-md-3 g-4 card-porto mt-4">
                <div class="col" data-aos="flip-up" data-aos-delay="250">
                    <div class="card hover-card border-none h-100" @click="project_modal('mbg')" role = "button">
                        <div class="text-center mt-3">
                        </div>
                        <div class="card-body">
                            <div class="card-title text-center mb-3 text-secondary">MBG Tracpack</div>
                            <div class="text-center">
                                <img src="/portofolio/bg-portofolio-14.png" draggable="false" class="card-img-top bg-portofolio" loading = "lazy" alt="bg-por-alunam">
                            </div>
                            <div class="row g-0 mt-4">
                                <div class="col-lg-3 col-2 mt-4 mx-2 frame text-center">
                                    <img src="/avatar/bgn-logo.png" class="img-fluid frame-logo" draggable="false" alt="logo-bisnis">
                                </div>
                                <div class="col">
                                    <div class="card-text mb-2">
                                        Makanan Bergizi Gratis - Packing & Tracking
                                    </div>
                                    <div class="text-muted mb-2 lh-sm">
                                        <small>BGN (Badan Gizi Nasional)</small><br />
                                        <small>Semarang, 2025</small>
                                    </div>

                                    <div class="d-inline-block">
                                        <small>
                                            <div class="badge bg-light-primary me-2">Nuxt JS</div>
                                            <div class="badge bg-light-primary me-2">Nest JS</div>
                                            <div class="badge bg-light-primary me-2">Supabase</div>
                                            <div class="badge bg-light-primary me-2">PM2 VPS</div>
                                        </small>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col" data-aos="flip-up" data-aos-delay="250">
                    <div class="card hover-card border-none h-100" @click="project_modal('alunam-gb')" role = "button">
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
                                        Digital Guest Book & Souvenir by Alunam
                                    </div>
                                    <div class="text-muted mb-2 lh-sm">
                                        <small>Alunam</small><br />
                                        <small>Indonesia, 2025</small>
                                    </div>

                                    <div class="d-inline-block">
                                        <small>
                                            <div class="badge bg-light-primary me-2">Nuxt JS</div>
                                            <div class="badge bg-light-primary me-2">Express JS</div>
                                            <div class="badge bg-light-primary me-2">Pinia</div>
                                            <div class="badge bg-light-primary me-2">Mysql</div>
                                            <div class="badge bg-light-primary me-2">Node JS</div>
                                            <div class="badge bg-light-primary me-2">Tailwind</div>
                                            <div class="badge bg-light-primary me-2">Cloudflare</div>
                                            <div class="badge bg-light-primary me-2">PM2 VPS</div>
                                        </small>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                                            <div class="badge bg-light-primary me-2">Nuxt JS</div>
                                            <div class="badge bg-light-primary me-2">Express JS</div>
                                            <div class="badge bg-light-primary me-2">Pinia</div>
                                            <div class="badge bg-light-primary me-2">Mysql</div>
                                            <div class="badge bg-light-primary me-2">Node JS</div>
                                            <div class="badge bg-light-primary me-2">Tailwind</div>
                                            <div class="badge bg-light-primary me-2">Cloudflare</div>
                                            <div class="badge bg-light-primary me-2">PM2 VPS</div>
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
        </div>

        <div id="mobile-developer-tab-pane" class="tab-pane fade" role="tabpanel" aria-labelledby="practices-tab">
            <div class = "row row-cols-1 row-cols-md-3 g-4 card-porto mt-4">
                <div class="col" data-aos="flip-up" data-aos-delay="300">
                    <div class="card hover-card border-none h-100" @click="project_modal('mbg-apps')" role = "button">
                        <div class="text-center mt-3">
                        </div>
                        <div class="card-body">
                            <div class="card-title text-center mb-4 text-secondary">MBG Pactrack</div>
                            <div class="text-center">
                                <img src="/portofolio/bg-portofolio-12.png" draggable="false" class="card-img-top bg-portofolio" loading = "lazy" alt="bg-por-mbg">
                            </div>
                            <div class="row g-0 mt-4">
                                <div class="col-lg-3 col-2 mt-4 mx-2 frame text-center">
                                    <img src="/avatar/bgn-logo.png" draggable="false" class="img-fluid frame-logo" alt="logo-bisnis">
                                </div>
                                <div class="col">
                                    <div class="card-text mb-2">
                                        Makanan Bergizi Gratis - Packing & Tracking (Apps) 
                                    </div>
                                    <div class="text-muted mb-2 lh-sm">
                                        <small>BGN (Badan Gizi Nasional)</small><br />
                                        <small>Semarang, 2025</small>
                                    </div>

                                    <div class="d-inline-block">
                                        <small>
                                            <div class="badge bg-light-primary me-2">Flutter</div>
                                            <div class="badge bg-light-primary me-2">Supabase</div>
                                        </small>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col" data-aos="flip-up" data-aos-delay="250">
                    <div class="card hover-card border-none h-100" @click="project_modal('mykiara')" role = "button">
                        <div class="card-body">
                            <div class="card-title text-center mb-3 text-secondary">MyKiara</div>
                            <div class="text-center">
                                <img src="/portofolio/bg-portofolio-15.png" draggable="false" class="card-img-top bg-portofolio" loading = "lazy" alt="bg-por-mykiara">
                            </div>
                            <div class="row g-0 mt-4">
                                <div class="col-lg-3 col-2 mt-4 mx-2 frame text-center">
                                    <img src="/avatar/mykiara-logo.png" class="img-fluid frame-logo" draggable="false" alt="logo-bisnis">
                                </div>
                                <div class="col">
                                    <div class="card-text mb-2">
                                        MyKiara Loyalty Program Membership (PlayStore & AppStore)
                                    </div>
                                    <div class="text-muted mb-2 lh-sm">
                                        <small>MyKiara Indonesia</small><br />
                                        <small>Semarang, 2025</small>
                                    </div>

                                    <div class="d-inline-block">
                                        <small>
                                            <div class="badge bg-light-primary me-2">Dart</div>
                                            <div class="badge bg-light-primary me-2">Flutter</div>
                                            <div class="badge bg-light-primary me-2">Firebase</div>
                                            <div class="badge bg-light-primary me-2">Play Store</div>
                                            <div class="badge bg-light-primary me-2">Apps Store</div>
                                        </small>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" data-aos="flip-up" data-aos-delay="250">
                    <div class="card hover-card border-none h-100" @click="project_modal('tmj_wb')" role = "button">
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
                                        ApsPro (Aplikasi Pengendalian Service Provider)
                                    </div>
                                    <div class="text-muted mb-2 lh-sm">
                                        <small>Trans Marga Jateng (AIS)</small><br />
                                        <small>Semarang-Solo, 2024</small>
                                    </div>

                                    <div class="d-inline-block">
                                        <small>
                                            <div class="badge bg-light-primary me-2">Dart</div>
                                            <div class="badge bg-light-primary me-2">Flutter</div>
                                        </small>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" data-aos="flip-up" data-aos-delay="250">
                    <div class="card hover-card border-none h-100" @click="project_modal('tmj_wb')" role = "button">
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
                                        ApsPro (Aplikasi Pengendalian Service Provider)
                                    </div>
                                    <div class="text-muted mb-2 lh-sm">
                                        <small>Trans Marga Jateng (Operational)</small><br />
                                        <small>Semarang-Solo, 2024</small>
                                    </div>

                                    <div class="d-inline-block">
                                        <small>
                                            <div class="badge bg-light-primary me-2">Dart</div>
                                            <div class="badge bg-light-primary me-2">Flutter</div>
                                        </small>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="ai-developer-tab-pane" class="tab-pane fade" role="tabpanel" aria-labelledby="practices-tab">
            <div class = "row row-cols-1 row-cols-md-3 g-4 card-porto mt-4">
                <div class="col" data-aos="flip-up" data-aos-delay="250">
                    <div class="card hover-card border-none h-100" role = "button">
                        <div class="text-center mt-3">
                            <a href="https://nabielmada-compro-unictive.netlify.app" target = "_blank" class="stretched-link"></a>
                        </div>
                        <div class="card-body">
                            <div class="card-title text-center mb-3 text-secondary">Aira</div>
                            <div class="text-center">
                                <img src="/portofolio/bg-portofolio-11.png" draggable="false" class="card-img-top bg-portofolio" loading = "lazy" alt="bg-por-alunam">
                            </div>
                            <div class="mx-3 mt-4">
                                <div class="card-text mb-2">
                                    Aira (Artificial Intellegence Reporting Assistant) - Unreleased
                                </div>
                                
                                <div class="row g-0">
                                    <div class="col">
                                        <div class="text-muted mb-2 lh-sm">
                                            <small>Aira</small><br />
                                            <small>Indonesia, 2025</small>
                                        </div>
                                        <div class="d-inline-block">
                                        <small>
                                            <div class="badge bg-light-primary me-2">Next JS</div>
                                            <div class="badge bg-light-primary me-2">Nest</div>
                                            <div class="badge bg-light-primary me-2">Tailwind</div>
                                            <div class="badge bg-light-primary me-2">Supabase</div>
                                            <div class="badge bg-light-primary me-2">PostgreSQL</div>
                                            <div class="badge bg-light-primary me-2">Drizzle ORM</div>
                                            <div class="badge bg-light-primary me-2">Redis</div>
                                            <div class="badge bg-light-primary me-2">Docker</div>
                                            <div class="badge bg-light-primary me-2">Clerk</div>
                                            <div class="badge bg-light-primary me-2">Turbo Monorepo</div>
                                            <div class="badge bg-light-primary me-2">Chat UI AI Agent</div>
                                            <div class="badge bg-light-primary me-2">Gemini Flash 2.5</div>
                                        </small>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="practices-tab-pane" class="tab-pane fade" role="tabpanel" aria-labelledby="practices-tab">
            <div class = "row row-cols-1 row-cols-md-3 g-4 card-porto mt-4">
                <div class="col" data-aos="flip-up" data-aos-delay="250">
                    <div class="card hover-card border-none h-100" role = "button">
                        <div class="text-center mt-3">
                            <a href="https://nabielmada-compro-unictive.netlify.app" target = "_blank" class="stretched-link"></a>
                        </div>
                        <div class="card-body">
                            <div class="card-title text-center mb-3 text-secondary">Kreasi Digital</div>
                            <div class="text-center">
                                <img src="/portofolio/bg-portofolio-11.png" draggable="false" class="card-img-top bg-portofolio" loading = "lazy" alt="bg-por-alunam">
                            </div>
                            <div class="mx-3 mt-4">
                                <div class="card-text mb-2">
                                    Website Company Profile
                                </div>
                                
                                <div class="row g-0">
                                    <div class="col">
                                        <div class="text-muted mb-2 lh-sm">
                                            <small>Figma Community</small><br />
                                            <small>September 2023</small>
                                        </div>
                                        <div class="d-inline-block">
                                        <small>
                                            <div class="badge bg-light-primary me-2">CSS</div>
                                            <div class="badge bg-light-primary me-2">Bootstrap 5</div>
                                        </small>
                                    </div>
                                    </div>
                                    <div class="col-lg-3 col-2 mt-3 frame text-center">
                                        <img src="/asset/icon/icon-beginner.png" class="img-fluid frame-logo" draggable="false" alt="icon-beginner"><br/>
                                        <small>Easy</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" data-aos="flip-up" data-aos-delay="250">
                    <div class="card hover-card border-none h-100" role = "button">
                        <div class="text-center mt-3">
                            <a href="https://chatnrechat-nabielmada.vercel.app" target = "_blank" class="stretched-link"></a>
                        </div>
                        <div class="card-body">
                            <div class="card-title text-center mb-3 text-secondary">Chat n'Rechat</div>
                            <div class="text-center">
                                <img src="/portofolio/bg-portofolio-10.png" draggable="false" class="card-img-top bg-portofolio" loading = "lazy" alt="bg-por-alunam">
                            </div>
                            <div class="mx-3 mt-4">
                                <div class="card-text mb-2">
                                    Website Company Profile
                                </div>
                                
                                <div class="row g-0">
                                    <div class="col">
                                        <div class="text-muted mb-2 lh-sm">
                                            <small>Code The Design</small><br />
                                            <small>March 2023</small>
                                        </div>
                                        <div class="d-inline-block">
                                        <small>
                                            <div class="badge bg-light-primary me-2">Vite</div>
                                            <div class="badge bg-light-primary me-2">Vue 3</div>
                                            <div class="badge bg-light-primary me-2">Bootstrap 5</div>
                                            <div class="badge bg-light-primary me-2">CSS</div>
                                        </small>
                                    </div>
                                    </div>
                                    <div class="col-lg-3 col-2 mt-3 frame text-center">
                                        <img src="/asset/icon/icon-beginner.png" class="img-fluid frame-logo" draggable="false" alt="icon-beginner"><br/>
                                        <small>Easy</small>
                                    </div>
                                </div>
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
                this.projectName = projectName;
                
                this.$nextTick(() => {
                    let modalInstance = Modal.getInstance(this.$refs.projectModal);
                    if (!modalInstance) {
                        modalInstance = new Modal(this.$refs.projectModal);
                    }
                    modalInstance.show();
                });
            },
        },
    }
</script>
