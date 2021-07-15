<template>
  <div class="HomePage">

    <Navbar />

    <div class="container pt-4">
      <div class="row">

        <div class="col-lg-7" data-aos="fade-right" data-aos-delay="200">
          <div class="heading lh-sm">
            Hello. <br />
            I'm <mark> Nabiel Mada </mark> <br />
            <span class="text-primary-m heading-2">Web Developer & Designer</span>
          </div>

          <p class="pt-4 text-muted sub-heading sub-heading-resize ">
            Co-Founder <b>@Sulungsoft</b> Team and specialize in full stack
            web development and visual design.
          </p>

          <div class="row pt-3 mb-3">
            <div class="col-lg-7">
              <input type="text" name="" id="" class="form-control form-control-lg"
                placeholder="Enter your email address...">
            </div>
            <div class="col-lg-4 connect-me">
              <div class="d-grid">
                <button class="btn btn-lg btn-primary shadow"> <small>Connect with me</small></button>
              </div>
            </div>
          </div>

          <br />
          <div class="row pt-3 summary">
            <div class="col-lg-1 col-2">
              <span class="h1">2</span>
            </div>
            <div class="col-lg-3 col-10 text-muted">
              <small>YEARS EXPERIENCE</small>
            </div>

            <div class="col-lg-1 col-2">
              <span class="h1">5</span>
            </div>
            <div class="col-lg-3 col-10 text-muted">
              <small>HAPPY CUSTOMERS</small>
            </div>

            <div class="col-lg-1 col-2">
              <span class="h1">6</span>
            </div>
            <div class="col-lg-3 col-10 text-muted">
              <small>PROJECTS COMPLETE </small>
            </div>

          </div>

        </div>

        <div class="col-lg-5">
          <kinesis-container>
            <kinesis-element :strength="15">
              <img src="/img/foto-heading.png" alt="foto-heading" draggable="false" class="foto-heading">

            </kinesis-element>
          </kinesis-container>
        </div>

      </div> <!-- end row -->

      <div class="row space">
        <div class="col-12 text-guidlines ">
          <span class="vlh"> </span>My 3 guidlines that I usually apply.
        </div>

        <div class="col-lg-4 justify-content-center mt-4">
          <div class="card hover-card mb-3" data-aos="fade-up" data-aos-delay="200">
            <div class="row g-0 my-3 guidelines">
              <div class="col-md-4 mt-3 text-end">
                <img src="/asset/icon/icon-heading-1.png" class="img-fluid rounded-start" draggable="false">
              </div>
              <div class="col-lg-8">
                <div class="card-body">
                  <h5 class="card-title">Responsibility</h5>
                  <p class="card-text text-muted">
                    Take responsibility for what i have started.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 justify-content-center mt-4">
          <div class="card hover-card mb-3" data-aos="fade-up" data-aos-delay="250">
            <div class="row g-0 my-3 guidelines">
              <div class="col-md-4 mt-3 text-end">
                <img src="/asset/icon/icon-heading-2.png" class="img-fluid rounded-start" draggable="false">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Commitment</h5>
                  <p class="card-text text-muted">
                    Commitment to work or create something great.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 justify-content-center mt-4">
          <div class="card hover-card mb-3" data-aos="fade-up" data-aos-delay="300">
            <div class="row g-0 my-3 guidelines">
              <div class="col-md-4 mt-3 text-end">
                <img src="/asset/icon/icon-heading-3.png" class="img-fluid rounded-start" draggable="false">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Vigorously</h5>
                  <p class="card-text text-muted">
                    Like to learn new things about creativity or logic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="row mb-5 pb-5 space">
        <div class="col-12 text-center mb-4" id="specialize" data-aos="fade-up" data-aos-delay="200">
          <h1 class="title">What <mark>am i doing</mark></h1>
          <p class="text-muted mt-3 sub-title">There are many things i usually do but i
            specialize in
            <br /> sectors of software development.</p>
        </div>
        <div class="col-lg-6 mt-5">
          <div class="row">
            <div class="col-lg-2 col-3 mt-3" data-aos="fade-right" data-aos-delay="200">
              <img src="/asset/icon/bi-check.png" class="w-50" draggable="false">
            </div>
            <div class="col-lg-10 col" data-aos="fade-right" data-aos-delay="350">
              <h4 class="title-specialize">Web Design</h4>
              <p class="text-muted text-size">Landing Page, User Flow, Prototyping, UI/UX Design.</p>
            </div>
            <p></p>

            <div class="col-lg-2 col-3 mt-3" data-aos="fade-right" data-aos-delay="200">
              <img src="/asset/icon/bi-check.png" class="w-50" draggable="false">
            </div>
            <div class="col-lg-10 col" data-aos="fade-right" data-aos-delay="350">
              <h4 class="title-specialize">Web Development</h4>
              <p class="text-muted text-size">Full Stack Website, Security, SEO, Responsive.</p>
            </div>
            <p></p>

            <div class="col-lg-2 col-3 mt-3" data-aos="fade-right" data-aos-delay="200">
              <img src="/asset/icon/bi-check.png" class="w-50" draggable="false">
            </div>
            <div class="col-lg-10 col" data-aos="fade-right" data-aos-delay="350">
              <h4 class="title-specialize">Designer</h4>
              <p class="text-muted text-size">Banner Iklan, Poster, Content Digital.</p>
            </div>
            <p></p>

            <div class="col-lg-2 col-3 mt-3" data-aos="fade-right" data-aos-delay="200">
              <img src="/asset/icon/bi-check.png" class="w-50" draggable="false">
            </div>
            <div class="col-lg-10 col" data-aos="fade-right" data-aos-delay="350">
              <h4 class="title-specialize">Photography</h4>
              <p class="text-muted text-size">Couple Session, Pre-wedding, Photo Product, Photo Editing.</p>
            </div>
            <p></p>

            <div class="col-lg-2 col-3 mt-3" data-aos="fade-right" data-aos-delay="200">
              <img src="/asset/icon/bi-check.png" class="w-50" draggable="false">
            </div>
            <div class="col-lg-10 col" data-aos="fade-right" data-aos-delay="350">
              <h4 class="title-specialize">Videography</h4>
              <p class="text-muted">Cinematic, Company Profile, Animation.</p>
            </div>
          </div>
        </div>

        <div class="col-6" data-aos="fade-right" data-aos-delay="200">
          <!-- <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_Yfas6J.json" background="transparent"
            speed="1" class="img-fluid" loop autoplay></lottie-player> -->
          <kinesis-container>
            <kinesis-element :strength="15" type="depth">
              <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_dqp37g7d.json" background="transparent"
                speed="1" class="img-fluid foto-specialize pt-5" loop autoplay></lottie-player>
            </kinesis-element>
          </kinesis-container>

        </div>

        <div class="mt-3"></div>
        <div class="col-1"></div>
        <div class="col-lg-3 hire-me" data-aos="fade-up" data-aos-delay="200">
            <a href = "#" v-scroll-to="'#hire-me'">
          <div class="d-grid">
            <button class="btn btn-lg btn-primary shadow"> Hire Me</button>
          </div>
            </a>
        </div>
        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="250">
          <div class="d-grid">
            <button class="btn btn-lg btn-light text-muted" @click="modal.show()"> Get My
              CV</button>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" ref="cvModal" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header" style="border:none">
                <button type="button" class="btn-close" @click="modal.hide()" aria-label="Close"></button>
              </div>
              <div class="modal-body pb-5 text-center">
                <img src="/asset/icon/Progress _Outline.svg" class="img-fluid" alt="" srcset="">
                <h3 class="mx-5"> Oops! <br />Sorry, my curriculum vitae is still in progress. </h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div> <!-- end container -->


    <div class="bg-wave">
      <div class="container space">
        <div class="row" id = "portofolio">
          <Portofolio />

           <div class="mt-5 pt-5 box-team">
            <div class="d-flex justify-content-center text-center">
              <div class="card shadow-lg border-none-testi w-75 ">

                <div class="bg-testi">
                  <div class="card-body mt-5 mb-5 pt-5 pb-5 body-resize">
                    <h5 class="text-vt">
                      <b>" Great things in</b> Business <b> are never done by </b> one person. <br />
                      <b> They're done by team of people " </b>
                    </h5>

                    <p class="mt-4 text-vt-2">
                      <small> Thank's for my customer : </small>
                    </p>

                    <div class="mb-4">
                      <img src="/avatar/bg-avatar-testi.png" draggable="false" class="img-fluid img-ava" alt="" srcset="">
                    </div>

                    <div class="d-flex justify-content-center mt-5 margin-resize">
                      <div>
                        <a href = "https://www.instagram.com/sulungsoft/" target="_blank"><button class="btn btn-lg btn-primary btn-resize shadow"> <small>Visit My Team</small></button></a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>

    <div class="container space box-aboutme" data-aos="fade-up" data-aos-delay="200">
      <AboutMe />
    </div>

    <div class="container mt-5 pt-5">
      <Footer />
    </div>

  </div>

</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import Portofolio from '@/components/Portofolio.vue'
  import AboutMe from '@/components/AboutMe.vue'
  import Footer from '@/components/Footer.vue'

  import {
    Modal
  } from 'bootstrap'

  export default {
    name: 'HomePage',
    components: {
      Navbar,
      Portofolio,
      AboutMe,
      Footer
    },
    data: () => ({
      modal: null,
      modal_mail: null,
    }),
    mounted() {
      this.modal = new Modal(this.$refs.cvModal)
      this.modal_mail = new Modal(this.$refs.mailModal)
    }
  };
</script>