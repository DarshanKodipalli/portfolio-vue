<template>
  <div class="testipage">
    <div
      class="main_block"
      v-for="(data, index) in TestimonialData"
      :key="index"
    >
      <div class="box">
        <div class="wrapper" 
            :data-aos="data.animation">
          <div
            class="left_block"
            :data-aos="data.imganimation"
            data-aos-delay="100"
          >
            <span style="margin-top: 50%;align-items: center;">
              <img                
                v-bind:src="require('../assets/images/' + data.image)"
                :alt="data.name"
                style="cursor: pointer;width: 250px;height: 250px; " @click="viewProfile(data.url)"                
              />
            </span>
          </div>
          <div
            class="right_block"
            :data-aos="data.contentanimation"
            data-aos-delay="200"
          >
            <h1 style="cursor: pointer;" @click="viewProfile(data.url)" >{{ data.name }}</h1>
              <h4>{{data.year}}</h4>
              <h3 style="cursor: pointer;" @click="viewProfile(data.url)">
                {{data.designation}}
              </h3>              
              <hr style="border: 2px solid darkgrey;"> 
              <p style="font-size:18px;">{{ data.disp }}</p>
                <ul style="margin-top: 2%;margin-left: 1%;">
                    <li style="margin-right: 20px;"> {{data.course1}} </li>
                    <li style="padding-right: 20px;"> {{data.course2}} </li>
                    <li style="padding-right: 20px;"> {{data.course3}} </li>
                    <li style="padding-right: 20px;"> {{data.course4}} </li>
                </ul>
              <hr style="border: 1px solid grey; width: 50%; margin: auto; margin-top: 2%; margin-bottom: 1%;"> 
              <p style="font-size:18px; font-weight: bolder; text-align:center; margin-bottom: 2%;">CGPA: {{data.gpa}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { educationaldata } from "../mock/educationDetails";
import { testimonial } from "../mock/testimonial";

@Options({
  components: {},
})
export default class Education extends Vue {
  TestimonialData: any = {};
  dummy: any = {};

  mounted() {
    this.TestimonialData = educationaldata;
    this.dummy = testimonial;
  }
  viewProfile(url) {
    window.open(url, "_blank");    
  }  
}
</script>

<style lang="scss">
.testipage {
  //   overflow-x: clip;
  margin-top: 30px;
  .main_block:last-child {
    margin-bottom: 50px;
  }
  .main_block {
    display: flex;
    // padding: 40px 40px;
    .box {
      border: none;
//      border-radius: 10px;
      //   background-color: var(--slidedblock);
      margin-bottom: 20px;
      padding: 20px;
    }

    .box > .wrapper {
      border: none;
      padding: 10px;
      // border-radius: 10px;
      background: var(--photo-background-color);
      // box-shadow: var(--photo-box-shadow);
      display: flex;
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
</style>
