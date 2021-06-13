<template>
  <div class="site_main">
    <div class="profile_block">
      <div class="main_content">
        <div class=" col-xs-12 col-sm-12 ">
          <div class="row">
            <div class="col-sm-12 col-md-5 col-lg-5">
              <div
                class="round_background"
                data-aos="zoom-out-right"
                data-aos-delay="200"
              >
                <div class="photo_bg"></div>
              </div>
            </div>
            <div class="col-sm-12 col-md-7 col-lg-7">
              <div
                class="left_pad25"
                data-aos="zoom-out-left"
                data-aos-delay="500"
              >
                <div class="desg_text"><h1>Darshan Kodipalli</h1></div>
                <h3>FullStack Developer</h3>
                <p style="margin-top: 4%;" class="about_text">
                  Software engineer and an AWS certified Solutions Architect with 4+ years of experience in developing cutting-edge software solutions using
                  MEAN and MERN stacks and additionally Java for backend. Skilled in agile processes, creating web-applications and automating the software
                  development using various CI/CD tools. Led a team of 5 interns and guided them in developing the company’s internal tool.
                  Working experience in Docker-ising the infrastructure and bringing them up using Docker-Compose and AWS's CodePipeline. 
                </p>
                <div
                  class="site_buttons"
                  data-aos="zoom-in-right"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="100"
                  data-aos-duration="2000"
                >
                  <a
                    class="btns btn-primary"
                    @click="download()"
                    >View Resume</a
                  >
                  <a
                    href="javscript:void(0)"
                    class="btns btn-secondary"
                    @click="navigate()"
                    >Contact</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Animation from "../components/Animation.vue";
import Terminal from "../components/Terminal.vue";
// import router from "../router";
import Testmonial from "./testmonial.vue";
import axios from "axios";

@Options({
  components: {
    Animation,
    Terminal,
    Testmonial,
  },
})
export default class SiteMain extends Vue {
  mounted() {}

  navigate() {
    // alert('sasasa')
    this.$router.push({ path: "about" });
    // router.push('home');
  }
  download() {
    window.open("https://mypersonalblogbucket.s3.amazonaws.com/Darshan_Resume.pdf", "_blank");    
  }
}
</script>

<style lang="scss">
  .about_text {
    width: 100%;
    @media (max-width: 768px) {
      width: 40%;
    }
  }
</style>
