<template>

    <div class="col-12" id = "aboutme">
        <h1 class="title">Did you know, <mark>about me ?</mark></h1>
    </div>

    <div class="row mt-5">
        <div class="col-lg-8" data-aos="fade-up" data-aos-delay="200">
             <iframe src="https://www.youtube.com/embed/-L0__fCTmkU?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1"
                title="YouTube video player" class="vid-about-me rounded-3" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media"
                allowfullscreen></iframe> 
                

            <p class="mt-5 lh-lg text-secondary w-95 text-me">
                Hello There! <br />
                I'm Nabiel Mada, currently working as freelancer, you can check 
                my portofolio. Excited to create projects and to help others, i'm currently 
                learning design and code (Web Developer). I'm natively speak Indonesian 
                and is learning english.
            </p>

            <p class=" text-me text-secondary lh-lg">
                I'm currently fall in love with VueJS and Laravel, you can reach me at my <br />
                instagram @nabielmada.
            </p>

            <div class="row mb-5">
                <div class="col-lg-4">
                    <p class="title h4 mt-5">
                        Location
                    </p>
                    Semarang, Indonesia.
                </div>
                <div class="col-lg-3">
                    <p class="title h4 mt-5">
                        My Age
                    </p>
                    20 year's old.
                </div>
                <div class="col-lg-4">
                    <p class="title h4 mt-5">
                        Professional
                    </p>
                    Full Stack Web Developer
                </div>
            </div>



        </div>

        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=nabielmada&layout=compact&theme=vue" class = "img-fluid">

            <h4 class="mt-5 title">
                Framework
            </h4>

            <div class="row mt-4 pt-2 mx-1 list-about-me">
                <div class="col-lg-2 col-3 mx-2">
                    <img src="/asset/icon/icon-tools-laravel.png" alt="" srcset="">
                </div>
                <div class="col-lg-9 col-8 text-muted sub-title-2 pt-1">
                    Laravel 8
                    <hr>
                </div>

                <div class="col-lg-2 col-3 mx-2">
                    <img src="/asset/icon/icon-tools-bootstrap.png" alt="" srcset="">
                </div>
                <div class="col-lg-9 col-8 text-muted sub-title-2 pt-1">
                    Bootstrap 5
                    <hr>
                </div>

                <div class="col-lg-2 col-3 mx-2">
                    <img src="/asset/icon/icon-tools-vue.png" alt="" srcset="">
                </div>
                <div class="col-lg-9 col-8 text-muted sub-title-2 pt-1">
                     Vue JS & CLI
                    <hr>
                </div>

                <div class="col-lg-2 col-3 mx-2">
                    <img src="/asset/icon/icon-tools-firebase.png" alt="" srcset="">
                </div>
                <div class="col-lg-9 col-8 text-muted sub-title-2 pt-1">
                     Firebase
                    <hr>
                </div>
            </div>

            <h4 class="mt-5 title">
                Developer Tools
            </h4>

            <div class="row mt-4 pt-2 mx-1 list-about-me">
                <div class="col-lg-2 col-3 mx-2">
                    <img src="/asset/icon/icon-tools-vscode.png" alt="" srcset="">
                </div>
                <div class="col-lg-9 col-8 text-muted sub-title-2 pt-1">
                    Visual Studio Code
                    <hr>
                </div>

                <div class="col-lg-2 col-3 mx-2">
                    <img src="/asset/icon/icon-tools-xampp.png" alt="" srcset="">
                </div>
                <div class="col-lg-9 col-8 text-muted sub-title-2 pt-1">
                    Xampp
                    <hr>
                </div>

                <div class="col-lg-2 col-3 mx-2">
                    <img src="/asset/icon/icon-tools-postman.png" alt="" srcset="">
                </div>
                <div class="col-lg-9 col-8 text-muted sub-title-2 pt-1">
                     Postman API
                    <hr>
                </div>

                <div class="col-lg-2 col-3 mx-2">
                    <img src="/asset/icon/icon-tools-github.png" alt="" srcset="">
                </div>
                <div class="col-lg-9 col-8 text-muted sub-title-2 pt-1">
                     Github Desktop
                    <hr>
                </div>
            </div>

            <h4 class="mt-5 title">
                Design Tools
            </h4>

            <div class="row mt-4 pt-2 mx-1 list-about-me">
                <div class="col-lg-2 col-3 mx-2 figma-resize text-end">
                    <img src="/asset/icon/icon-tools-figma.png" alt="" srcset="">
                </div>
                <div class="col-lg-9 col-8 text-muted sub-title-2 pt-1">
                    Figma
                    <hr>
                </div>

                <div class="col-lg-2 col-3 mx-2">
                    <img src="/asset/icon/icon-tools-whimsical.png" alt="" srcset="">
                </div>
                <div class="col-lg-9 col-8 text-muted sub-title-2 pt-1">
                    Whimsical
                    <hr>
                </div>

                <div class="col-lg-2 col-3 mx-2">
                    <img src="/asset/icon/icon-tools-maze.png" alt="" srcset="">
                </div>
                <div class="col-lg-9 col-8 text-muted sub-title-2 pt-1">
                     Maze Design
                    <hr>
                </div>

                <div class="col-lg-2 col-3 mx-2">
                    <img src="/asset/icon/icon-tools-invisionapp.png" alt="" srcset="">
                </div>
                <div class="col-lg-9 col-8 text-muted sub-title-2 pt-1">
                     Invision
                    <hr>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
    export default {
        name: "AboutMe"
    }
</script>