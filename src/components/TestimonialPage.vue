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
            <span>
              <img
                v-bind:src="require('../assets/images/' + data.image)"
                :alt="data.name"
                style="cursor: pointer;" @click="viewProfile(data.url)"                
              />
            </span>
          </div>
          <div
            class="right_block"
            :data-aos="data.contentanimation"
            data-aos-delay="200"
          >
            <h1 style="cursor: pointer;" @click="viewProfile(data.url)" >{{ data.name }}</h1>
              <h3 style="cursor: pointer;" @click="viewProfile(data.url)">
                {{data.designation}}
              </h3>
              <hr style="border: 2px solid grey;"> 
            <p style="font-size:18px;">{{ data.disp }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { testimonialdata } from "../mock/testimonialfulldetails";
import { testimonial } from "../mock/testimonial";

@Options({
  components: {},
})
export default class TestimonialPage extends Vue {
  TestimonialData: any = {};
  dummy: any = {};

  mounted() {
    this.TestimonialData = testimonialdata;
    console.log(testimonialdata);
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
  padding: 40px 10%;
  .main_block:last-child {
    margin-bottom: 50px;
  }
  .main_block {
    display: flex;
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
</style>
