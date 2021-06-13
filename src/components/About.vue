<template>
  <div style="padding: 40px 50px 0px 50px;">
    <div class="contact" data-aos="zoom-in"
                  data-aos-easing="ease-in-back">
      <div class="left_block">
        <span>
          <h2 style="color: black">Contact information</h2>
          <div style="margin-top: 50px;" class="icon_details">
            <ul style="margin-top: 5%">
              <li>
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>+1 312-973-9215</span>
              </li>
              <li>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>darshan.kodipalli@gmail.com</span>
              </li>
              <li>
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>2901, South King Drive. Chicago, IL. 60616 - United States</span>
              </li>
              <span class="bottom_icons" style="margin-top: 50em">
                <ul>                  
                  <li>
                    <a href="https://www.linkedin.com/in/dkodipalli/" target="_blank"
                      ><i class="fa fa-linkedin" aria-hidden="true"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/nahsrad_k/" target="_blank"
                      ><i class="fa fa-instagram" aria-hidden="true"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/KodipalliD" target="_blank"
                      ><i class="fa fa-twitter-square" aria-hidden="true"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://github.com/DarshanKodipalli" target="_blank"
                      ><i class="fa fa-github" aria-hidden="true"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://medium.com/@darshankodipalli" target="_blank"
                      ><i class="fa fa-medium" aria-hidden="true"></i
                    ></a>
                  </li>
                </ul>
              </span>
            </ul>

          </div>
        </span>
      </div>
      <!-- <div class="right_block">
        <div class="form">
          <div class="form-input">
            <label>
              <input required />
              <span class="placeholder">First Name</span>
            </label>
          </div>
          <div class="form-input">
            <label>
              <input required />
              <span class="placeholder">Last Name</span>
            </label>
          </div>
        </div>
        <div class="form">
          <div class="form-input">
            <label>
              <input required />
              <span class="placeholder">Mail</span>
            </label>
          </div>
          <div class="form-input">
            <label>
              <input required />
              <span class="placeholder">Phone</span>
            </label>
          </div>
        </div>

        <div class="form-input">
          <label>
            <input required />
            <span class="placeholder">Message</span>
          </label>
        </div>
        <button style="width:100px;height:100px;" class="btn_round">
          <i style="font-size:50px;" class="fa fa-paper-plane" aria-hidden="true"></i>
        </button>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Watch } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";

@Options({
  components: {
    HelloWorld,
  },
})
export default class About extends Vue {}
</script>

<style lang="scss">
.form {
  display: flex;
}
.form-input {
  margin: 40px 0;
  width: 50%;

  label {
    position: relative;
    display: block;
    width: 100%;
    min-height: 30px + 15px;
  }

  .placeholder {
    position: absolute;
    display: block;
    top: (30px / 2) + 8px;
    z-index: 2;
    font-size: 16pxe;
    transition: all 200ms ease-in-out;
    width: 100%;
    cursor: text;
    color: var(--dynamic-title-color);
  }

  input,
  textarea {
    position: absolute;
    top: 15px;
    z-index: 1;
    width: 100%;
    font-size: 16px;
    border: 0;
    border-bottom: 1px solid grey;
    transition: border-color 200ms ease-in-out;
    outline: none;
    padding: 0;
    margin: 0;
    background: var(--app-background-color);
  }

  textarea {
    min-height: 30px;
    padding: 8px 0;
  }

  input {
    height: 30px;
  }

  input:focus,
  input:valid,
  textarea:focus,
  textarea:valid {
    & + .placeholder {
      top: 0;
      cursor: inherit;
      font-size: 16pxe-small;
      color: var(--contentleftblock);
    }

    border-bottom: 2px solid var(--contentleftblock);
  }
}
.form div:last-child {
  padding-left: 20px;
}
.form div:first-child {
  padding-right: 20px;
}
.btn_round {
  background: grey;
  border-radius: 100%;
  font-size: 20px;
  padding: 20px;
  border: 0;
  width: 60px;
  height: 60px;
  color: #ffffff;
  float: right;
  box-shadow: var(--photo-box-shadow);
  i {
    position: relative;
    top: -5px;
    left: -2px;
  }
}
</style>
