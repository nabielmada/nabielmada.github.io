<template>
  <div class="HomePage">

    <Navbar />

    <div class="container pt-4">
      <kinesis-container>
        <kinesis-element :strength="20">
          <div class="row">
            <div class="col-lg-7 align-self-center" data-aos="fade-right" data-aos-delay="200">
              <div class="heading lh-sm mb-2">
                Hello. <br />
                I'm <mark> Nabiel Mada </mark> <br />
              </div>
              <span class="sub-heading"> Fullstack & Mobile Developer · Jr AI Developer · Product
                Designer</span>

              <p class="py-3 lh-lg text-muted sub-heading sub-heading-resize ">
                Creator of
                <b><a href="https://alunam.com" target="_blank" class="text-muted">Alunam</a></b>
                & <b><a href="https://alunam.com" target="_blank" class="text-muted">AIRA</a></b> (AI Reporting Assistant) <br/>
                Crafting smart, seamless, and impactful digital products <br/>
                Tech-savvy · Creative · Empowering · Innovative
              </p>

              <div class="row pt-3">
                <div class="col-sm-3 col-md-4">
                  <div class="d-flex flex-column">
                    <small class="text-muted">PROJECTS</small>
                    <span class="h2">18 <i class="em em-fire h5" aria-role="presentation" aria-label="FIRE"></i></span>
                  </div>
                </div>

                <div class="col-sm-3 col-md-4">
                  <div class="d-flex flex-column">
                    <small class="text-muted">TECH EXPERIENCE</small>
                    <span class="h2">8 Years</span>
                  </div>
                </div>

                <div class="col-sm-3 col-md-4">
                  <div class="d-flex flex-column">
                    <small class="text-muted">NATIONALITY</small>
                    <span class="h2">IDN <i class="em em-flag-id h5" aria-role="presentation"
                        aria-label="Indonesia Flag"></i></span>
                  </div>
                </div>
              </div>

            </div>

            <div class="col-lg-5">
              <img src="/img/foto-heading.png" alt="foto-heading" draggable="false" loading="lazy" class="foto-heading">
            </div>
          </div> <!-- end row -->
        </kinesis-element>
      </kinesis-container>

      <div class="row space">
        <div class="col-12 text-guidlines ">
          <span class="vlh"> </span>My 3 guidlines that I usually apply.
        </div>

        <div class="col-lg-4 justify-content-center mt-4">
          <div class="hover-card">
            <div class="card mb-3 border-0" data-aos="fade-up" data-aos-delay="200">
              <div class="row g-0 my-3 guidelines">
                <div class="col-md-4 mt-3 text-end">
                  <img src="/asset/icon/icon-heading-1.png" class="img-fluid rounded-start" alt="icon-responsibility"
                    loading="lazy" draggable="false">
                </div>
                <div class="col-lg-8">
                  <div class="card-body">
                    <h5 class="card-title">Responsibility</h5>
                    <p class="card-text text-muted">
                      <small>Take ownership and stand behind every project I start — including its risks, outcomes, and impact.</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 justify-content-center mt-4">
          <div class="hover-card">
            <div class="card mb-3 border-0" data-aos="fade-up" data-aos-delay="250">
              <div class="row g-0 my-3 guidelines">
                <div class="col-md-4 mt-3 text-end">
                  <img src="/asset/icon/icon-heading-2.png" class="img-fluid rounded-start" alt="icon-commitment"
                    loading="lazy" draggable="false">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Dedication</h5>
                    <p class="card-text text-muted">
                      <small>Stay focused and dedicated to building meaningful, high-quality work that creates value.</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 justify-content-center mt-4">
          <div class="hover-card">
            <div class="card mb-3 border-0" data-aos="fade-up" data-aos-delay="300">
              <div class="row g-0 my-3 guidelines">
                <div class="col-md-4 mt-3 text-end">
                  <img src="/asset/icon/icon-heading-3.png" class="img-fluid rounded-start" alt="icon-vigorusly"
                    loading="lazy" draggable="false">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Curiosity</h5>
                    <p class="card-text text-muted">
                      <small>Thrive on learning — always exploring new ideas, whether in logic, design, or creative thinking.</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="row space">
        <div class="col-12 text-center mb-4" id="specialize" data-aos="fade-up" data-aos-delay="200">
          <p><i class="em em-sunglasses" aria-role="presentation" aria-label="SMILING FACE WITH SUNGLASSES"></i></p>
          <h1 class="title">What <mark>am i doing</mark></h1>
          <p class="text-muted mt-3 sub-title">
            <small>
              I touch many aspects of tech, but I specialize in building <br/> software that works, scales and impactfull
            </small>
          </p>
        </div>
        <div class="col-lg-6 mt-5">
          <div class="row">
            <!-- Web Design -->
            <div class="col-lg-2 col-3 mt-3 text-center" data-aos="fade-right" data-aos-delay="200">
              <img src="/asset/icon/bi-check.png" class="w-50" draggable="false" />
            </div>
            <div class="col-lg-10 col" data-aos="fade-right" data-aos-delay="350">
              <h5 class="title-specialize">Web Design</h5>
              <p class="text-muted text-size">Landing Pages · User Flow · Wireframe · UI Prototyping</p>
            </div>

            <!-- Web & Mobile Development -->
            <div class="col-lg-2 col-3 mt-3 text-center" data-aos="fade-right" data-aos-delay="200">
              <img src="/asset/icon/bi-check.png" class="w-50" draggable="false" />
            </div>
            <div class="col-lg-10 col" data-aos="fade-right" data-aos-delay="350">
              <h5 class="title-specialize">Web & Mobile Development</h5>
              <p class="text-muted text-size">Frontend · Backend · Flutter · SEO · API Integration</p>
            </div>

            <!-- AI Development -->
            <div class="col-lg-2 col-3 mt-3 text-center" data-aos="fade-right" data-aos-delay="200">
              <img src="/asset/icon/bi-check.png" class="w-50" draggable="false" />
            </div>
            <div class="col-lg-10 col" data-aos="fade-right" data-aos-delay="350">
              <h5 class="title-specialize">AI Development</h5>
              <p class="text-muted text-size">AI Agent · GPT Integration · Business Insight Tools</p>
            </div>

            <!-- Product Design -->
            <div class="col-lg-2 col-3 mt-3 text-center" data-aos="fade-right" data-aos-delay="200">
              <img src="/asset/icon/bi-check.png" class="w-50" draggable="false" />
            </div>
            <div class="col-lg-10 col" data-aos="fade-right" data-aos-delay="350">
              <h5 class="title-specialize">Product Design</h5>
              <p class="text-muted text-size">User Flow · Wireframing · UI Prototyping · Design Systems</p>
            </div>

            <!-- System Architecture -->
            <div class="col-lg-2 col-3 mt-3 text-center" data-aos="fade-right" data-aos-delay="200">
              <img src="/asset/icon/bi-check.png" class="w-50" draggable="false" />
            </div>
            <div class="col-lg-10 col" data-aos="fade-right" data-aos-delay="350">
              <h5 class="title-specialize">System Architecture</h5>
              <p class="text-muted text-size">Modular Design · Scalable Backend · API-first Approach</p>
            </div>

          </div>
        </div>

        <div class="col-6" data-aos="fade-right" data-aos-delay="200">
          <kinesis-container>
            <kinesis-element :strength="15" type="depth">
              <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_dqp37g7d.json" background="transparent"
                speed="1" class="img-fluid foto-specialize" loop autoplay></lottie-player>
            </kinesis-element>
          </kinesis-container>
        </div>
      </div>
    </div> <!-- end container -->


    <div class="bg-wave pb-5">
      <div class="container">
        <div class="row" id="portofolio">
          <Portofolio />

          <div class="mt-5 pt-5 box-team">
            <div class="d-flex justify-content-center text-center">
              <div class="card shadow-lg border-none-testi w-75 ">

                <div class="bg-testi">
                  <div class="card-body my-5 py-5 body-resize">
                    <p>
                      <i class="em em-crown" aria-role="presentation" aria-label="CROWN"></i>
                    </p>
                    <h5 class="text-vt">
                      <b>" Great things in</b> Business <b> are never done by </b> one person <br />
                      <b> They're done by team of people " </b>
                    </h5>

                    <p class="mt-4 text-vt-2">
                      <small> Thank's</small>
                    </p>

                    <div class="mb-4">
                      <img src="/avatar/bg-avatar-testi.png" draggable="false" class="img-fluid img-ava" alt=""
                        srcset="">
                    </div>

                    <div class="d-flex justify-content-center mt-5 margin-resize">
                      <div>
                        <a href="https://www.instagram.com/sulungsoft/" target="_blank"><button
                            class="btn btn-lg btn-primary btn-resize shadow rounded-pill px-4"> <small>Our
                              Medsos</small></button></a>
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

export default {
  name: 'HomePage',
  components: {
    Navbar,
    Portofolio,
    AboutMe,
    Footer
  },
  data: () => ({
  }),
  mounted() {
  }
};
</script>