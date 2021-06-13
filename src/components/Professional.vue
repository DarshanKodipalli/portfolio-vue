<template>
  <div
    v-bind:style='{ "padding": (!isClicked ?  "50px 50px 0px 50px;" : "100px 50px 0px 50px;")}'
    data-aos="zoom-in"
    data-aos-delay="200"
  >
    <section class="cards-wrapper">
      <div @click="knowMore('manifest')" class="card-grid-space">
        <!-- <div class="num">Drawing</div> -->
        <a
          class="carde"
          href="#"
          v-bind:style='{"--bg-img": "url(https://pbs.twimg.com/profile_images/1170811153775243264/9z74lRVN_400x400.jpg)","height": (isClicked?"15em":"20em"), "width": (isClicked?"15em":"18em")}'
        >
          <div>
            <h1 v-if="!isClicked">Manifest</h1>
            <p v-if="!isClicked">
              Software Engineer Intern
            </p>
          </div>
        </a>
      </div>
      <div @click="knowMore('aeries')" class="card-grid-space">
        <!-- <div class="num">PhotoGraphy</div> -->
        <a
          class="carde"
          href="#"
          v-bind:style='{"--bg-img": "url(https://zenprospect-production.s3.amazonaws.com/uploads/pictures/5ed97dd450420200010fdf27/picture)","height": (isClicked?"15em":"20em"), "width": (isClicked?"15em":"18em")}'
        >
          <div>
            <h1 v-if="!isClicked">Aeries Blockchain Corporation</h1>
            <p v-if="!isClicked">Software Engineer</p>
          </div>
        </a>
      </div>
      <div @click="knowMore('xanbell')" class="card-grid-space">
        <!-- <div class="num">PhotoGraphy</div> -->
        <a
          class="carde"
          href="#"
          v-bind:style='{"--bg-img": "url(https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/ll2zezdaq6fvgbilv557)","height": (isClicked?"15em":"20em"), "width": (isClicked?"15em":"18em")}'
        >
          <div>
            <h1 v-if="!isClicked">Xanbell Technologies</h1>
            <p v-if="!isClicked">Software Engineer</p>
          </div>
        </a>
      </div>
      <div @click="knowMore('raremile')" class="card-grid-space">
        <!-- <div class="num">PhotoGraphy</div> -->
        <a
          class="carde"
          href="#"
          v-bind:style='{"--bg-img": "url(https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco/v1420012128/tutf6tb8ltigatunqnyo.png)","height": (isClicked?"15em":"20em"), "width": (isClicked?"15em":"18em")}'
        >
          <div>
            <h1 v-if="!isClicked">Raremile Technologies</h1>
            <p v-if="!isClicked">Software Engineer</p>
          </div>
        </a>
      </div>
    </section>

    <!-- <section class="cards-wrapper">
      <div class="card-grid-space">
        <a
          class="carde"
          href="#"
          v-bind:style='{"--bg-img": "url(https://s3.amazonaws.com/media.al-fanarmedia.org/wp-content/uploads/2020/04/17090134/udemy.jpg)","height":"20em", "width": "25em"}'
        >
          <div>
            <h1>Docker and Kubernetes </h1>
            <p>
              Credential ID UC-c84b8325-2be9-424d-a547-1203466acfb1
            </p>
            <div class="tags">
              <div class="tag" @click="viewCertificate('docker')">View!</div>
            </div>
          </div>
        </a>
      </div>
      <div class="card-grid-space">

        <a
          class="carde"
          href="#"
          v-bind:style='{"--bg-img": "url(https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-logo-square.png?auto=format%2Ccompress&dpr=1)","height":"20em", "width": "25em"}'
        >
          <div>
            <h1 v-if="!isClicked">Building Scalable Java Microservices with Spring Boot and Spring Cloud</h1>
            <p v-if="!isClicked">Credential ID 3R8FZP94NL3F</p>
            <div class="tags">
              <div class="tag" @click="viewCertificate('java')">View!</div>
            </div>
          </div>
        </a>
      </div>
      <div class="card-grid-space">
        <a
          class="carde"
          href="#"
          v-bind:style='{"--bg-img": "url(https://s3.amazonaws.com/media.al-fanarmedia.org/wp-content/uploads/2020/04/17090134/udemy.jpg)","height":"20em", "width": "25em"}'
        >
          <div>
            <h1 v-if="!isClicked">Blockchain Development on Hyperledger Fabric using Composer</h1>
            <p v-if="!isClicked">Credential ID UC-LH2T2DW2</p>
            <div class="tags">
              <div class="tag" @click="viewCertificate('blockchain')">View!</div>
            </div>
          </div>
        </a>
      </div>
    </section> -->

    <section v-if="isClicked">
        <div class="testipage">
            <div
            class="main_block"
            >
            <div class="box">
                <div class="wrapper" :data-aos="toDisplayData.animation">
                <div
                    class="left_block"
                    :data-aos="toDisplayData.imganimation"
                    data-aos-delay="100"
                >
                    <span>
                    <img
                        v-bind:src="toDisplayData.image"
                        :alt="toDisplayData.name"
                    />
                    <div>
                      <h3>
                        {{toDisplayData.duration}}
                      </h3>
                    </div>
                    </span>
                </div>
                <div
                    class="right_block"
                    :data-aos="toDisplayData.contentanimation"
                    data-aos-delay="200"
                >
                    <br />
                    <h1 style="font-weight:bold;">{{toDisplayData.name}} — {{toDisplayData.designation}}</h1>
                    <br />
                    <ul id="demo">
                        <li style="font-size:18px;" v-for="(item,index) in toDisplayData.work" :key="index">
                            {{item.item}}
                        </li>
                    </ul>                    
                </div>
                </div>
            </div>
            </div>
        </div>        
    </section>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { professionalCapacity } from "../mock/professionalCapacity";

@Options({
  components: {

  }
})
export default class Professional extends Vue {
    isClicked: any = false;
    public workItems:any = [];
    public toDisplayData:any = {};
    mounted(){
      this.workItems = professionalCapacity[0].work;
      this.toDisplayData = professionalCapacity[0];
    }
    knowMore(companyName) {
        this.isClicked = !this.isClicked;        
        if(professionalCapacity[0].key === companyName) {
            this.toDisplayData = professionalCapacity[0];
            this.workItems = professionalCapacity[0].work;
        };
        if(professionalCapacity[1].key === companyName) {
            this.toDisplayData = professionalCapacity[1];
            this.workItems = professionalCapacity[1].work;
        }
        if(professionalCapacity[2].key === companyName) {
            this.toDisplayData = professionalCapacity[2];
            this.workItems = professionalCapacity[2].work;
        }
        if(professionalCapacity[3].key === companyName) {
            this.toDisplayData = professionalCapacity[3];
            this.workItems = professionalCapacity[3].work;
        }
    }   
    viewCertificate(certificate) {
      if(certificate === 'docker'){
        window.open("https://www.udemy.com/certificate/UC-c84b8325-2be9-424d-a547-1203466acfb1/", "_blank");    
      }else if(certificate === 'java'){
        window.open("https://www.coursera.org/account/accomplishments/verify/3R8FZP94NL3F", "_blank");    
      }else{
        window.open("https://www.udemy.com/certificate/UC-LH2T2DW2/", "_blank");    
      }
    } 
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Heebo:400,700|Open+Sans:400,700");

.testipage {
  //   overflow-x: clip;
  padding: 40px 10%;
  .main_block:last-child {
    margin-bottom: 50px;
  }
  .main_block {
    display: flex;
    width: 100%;
    // padding: 40px 40px;
    .box {
      border-radius: 10px;
      //   background-color: var(--slidedblock);
      margin-bottom: 20px;
      padding: 20px;
    }

    .box > .wrapper {
      padding: 10px;
      border-radius: 10px;
      background: var(--photo-background-color);
      box-shadow: var(--photo-box-shadow);
      display: flex;
    }
    .left_block {
      padding-right: 40px;
      text-align: center;
      span {
        display: inline-block;
        img {
          width: 400px;
          height: 400px;
          border-radius: 10px 0  0 10px ;
        }
      }
    }
    .right_block {
      line-height: 30px;
      word-spacing: 8px;
      color: var(--testimonial-block-text);
      p {
        margin-bottom: 0;
      }
    }
  }
}

:root {
  --color: #3c3163;
  --transition-time: 0.5s;
}

* {
  box-sizing: border-box;
}

// body {
//   margin: 0;
//   min-height: 100vh;
//   font-family: "Open Sans";
//   background: #fafafa;
// }

a {
  color: inherit;
}

.cards-wrapper {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 6rem;
  padding: 6rem;
  margin: 0 auto;
  width: max-content;
  @media only screen and (min-width: 768px) {
    padding: 8rem;
    width: 80%;
    margin-top: 30px;
  }
}

.carde {
  font-family: "Heebo";
  --bg-filter-opacity: 0.5;
  background-image: linear-gradient(
      rgba(0, 0, 0, var(--bg-filter-opacity)),
      rgba(0, 0, 0, var(--bg-filter-opacity))
    ),
    var(--bg-img);
  font-size: 1.5em;
  color: white;
  border-radius: 1em;
  padding: 1em;
  /*margin: 2em;*/
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  transition: all, var(--transition-time);
  position: relative;
  overflow: hidden;
  border: 10px solid var(--dynamic-title-color);
  text-decoration: none;
}

.carde:hover {
  transform: rotate(0);
}

.carde h1 {
  margin: 0;
  font-size: 1.5em;
  line-height: 1.2em;
}

.carde p {
  font-size: 0.75em;
  font-family: "Open Sans";
  margin-top: 0.5em;
  line-height: 2em;
}

.carde .tags {
  display: flex;
}

.carde .tags .tag {
  font-size: 0.75em;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 0.3rem;
  padding: 0 0.5em;
  margin-right: 0.5em;
  line-height: 1.5em;
  transition: all, var(--transition-time);
}

.carde:hover .tags .tag {
  background: var(--color);
  color: white;
}

.carde .date {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.75em;
  padding: 1em;
  line-height: 1em;
  opacity: 0.8;
}

.carde:before,
.carde:after {
  content: "";
  transform: scale(0);
  transform-origin: top left;
  border-radius: 50%;
  position: absolute;
  left: -50%;
  top: -50%;
  z-index: -5;
  transition: all, var(--transition-time);
  transition-timing-function: ease-in-out;
}

.carde:before {
  background: transparent;
  width: 250%;
  height: 250%;
}

.carde:after {
  background: white;
  width: 200%;
  height: 200%;
  opacity: 0.6;
}

.carde:hover {
  color: var(--color);
}

.carde:hover:before,
.carde:hover:after {
  transform: scale(1);
}

.card-grid-space .num {
  font-size: 3em;
  margin-bottom: 1.2rem;
  margin-left: 1rem;
}

.info {
  font-size: 1.2em;
  display: flex;
  padding: 1em 3em;
  height: 3em;
}

.info img {
  height: 3em;
  margin-right: 0.5em;
}

.info h1 {
  font-size: 1em;
  font-weight: normal;
}

/* MEDIA QUERIES */
@media screen and (max-width: 1285px) {
  .cards-wrapper {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 900px) {
  .cards-wrapper {
    grid-template-columns: 1fr;
  }
  .info {
    justify-content: center;
  }
  .card-grid-space .num {
    margin-left: 0;
    text-align: center;
  }
}

@media screen and (max-width: 500px) {
  .cards-wrapper {
    padding: 4rem 2rem;
  }
  .carde {
    max-width: calc(100vw - 4rem);
  }
}

@media screen and (max-width: 450px) {
  .info {
    display: block;
    text-align: center;
  }
  .info h1 {
    margin: 0;
  }
}
</style>
