<template>
  <div class="mob">
    <!-- BUTTON SHOW/HIDE INSTRUCTION -->
    <input
      type="checkbox"
      id="u-instruction__button"
      name="u-instruction__button"
    />
    <!-- <label for="u-instruction__button" class="c-button c-instruction__button">
      <span class="c-button__off">OFF</span><span class="c-button__on">ON</span>
      <div class="c-instruction__button__frame">
        <div class="c-button__instruction__toggle"></div>
      </div>
    </label> -->
    <!-- <div class="c-instruction__text">
      Switch the toggle for see different action buttons made with checkbox
      trick.
    </div> -->

    <div class="c-mobile-view">
      <!-- CONTROLLERS -->
      <input type="checkbox" id="u-mobile__button" name="u-mobile__button" />
      <input type="checkbox" id="u-topbar__button" name="u-topbar__button" />
      <input
        type="checkbox"
        id="u-cards-switcher__button"
        name="u-cards-switcher__button"
      />
      <input
        type="checkbox"
        id="u-cards-hide__button"
        name="u-cards-hide__button"
      />
      <!-- / controllers-->

      <!-- MOBILE VIEW CONTAINER -->
      <div class="c-mobile-view__inner">
        <!-- TOPBAR -->
        <div class="c-mobile__topbar">
          <label
            for="u-topbar__button"
            class="c-button c-topbar__button--menu fa fa-bars"
          ></label>
          <label
            for="u-topbar__button"
            class="c-button c-topbar__button--close fa fa-times"
          ></label>
          <ul>
            <li><a href="" class="u-link__effect">Events list</a></li>
            <li><a href="" class="u-link__effect">Favorites</a></li>
            <li><a href="" class="u-link__effect">Credits</a></li>
          </ul>
        </div>

        <!-- CARDS -->
        <div class="c-cards__inner">
          <div class="c-card c-card--back">
            <div class="c-card__details">
              <div class="c-card__details__top">
                <h1>201-217 Central Park West</h1>
                <p>New York, NY 10024, Stati Uniti</p>
                <p>40.782093, -73.971731</p>
              </div>
              <div class="c-card__details__bottom">12<span>km</span></div>
            </div>
          </div>
          <div class="c-card c-card--front">
            <div class="c-card__details">
              <div class="c-card__details__top">
                <h1>284 5th Avenue</h1>
                <p>New York, NY 10001, Stati Uniti</p>
                <p>40.737330, -73.987470</p>
              </div>
              <div class="c-card__details__bottom">2.4<span>km</span></div>
            </div>
          </div>

          <!-- ANIMATED PIN -->
          <div class="c-pin"></div>
        </div>
      </div>

      <!-- OVERLAY -->
      <div class="c-overlay">
        <div class="c-overay__inner">
          <!-- BUTTON 1 -->
          <label for="u-mobile__button" class="c-button">
            <span class="c-overlay-inner__button fa fa-star button__1"></span>
          </label>
          <!-- BUTTON 2 -->
          <label for="u-mobile__button" class="c-button">
            <span class="c-overlay-inner__button fa fa-search button__2"></span>
          </label>
        </div>
      </div>

      <!-- SWITCHER CARDS BUTTON -->
      <label for="u-cards-switcher__button" class="c-button c-switcher__button">
        <span class="c-switcher__button--cards fa fa-refresh"></span>
      </label>

      <!-- HIDE CARDS BUTTON -->
      <label for="u-cards-hide__button" class="c-button c-show__button">
        <span class="c-show__button--cards fa fa-eye"></span>
      </label>
      <label for="u-cards-hide__button" class="c-button c-hide__button">
        <span class="c-hide__button--cards fa fa-eye-slash"></span>
      </label>

      <!-- BUTTON + -->
      <label for="u-mobile__button" class="c-button c-mobile__button">
        <span class="c-mobile__button__plus fa fa-plus"></span>
      </label>

      <!-- INSTRUCTION -->
      <div class="c-bubble__info c-bubble--menu">
        <div class="c-bubble__inner"><span>01</span><span>open menu</span></div>
      </div>
      <div class="c-bubble__info c-bubble--plus">
        <div class="c-bubble__inner c-bubble__inner">
          <span>02</span><span>open plus menu</span>
        </div>
      </div>
      <div class="c-bubble__info c-bubble--switch">
        <div class="c-bubble__inner">
          <span>03</span><span>switch cards</span>
        </div>
      </div>
      <div class="c-bubble__info c-bubble--hide">
        <div class="c-bubble__inner">
          <span>04</span><span>hide cards</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class MobileDemo extends Vue {}
</script>

<style lang="scss">
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxP.ttf) format('truetype');
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  src: local('Roboto Black'), local('Roboto-Black'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmYUtfBBc9.ttf) format('truetype');
}
.mob {
  font-family: "Roboto", sans-serif;
  font-size: 62.5%;
}
// .mob {
//   background: #321e43;
// }
.mob input {
  display: none;
}
.mob ul {
  padding: 0;
}
.mob li {
  list-style-type: none;
}
.c-mobile-view {
  position: relative;
  margin: 0px auto 0;
  width: 320px;
  height: 568px;
  background: url("../assets/images/mobile-codepen.jpg");
  background-position: bottom;
  background-size: cover;
  opacity: 0;
  animation-name: animation-fadein;
  animation-duration: 2s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-animation-name: animation-fadein;
  -webkit-animation-duration: 2s;
  -webkit-animation-delay: 0.1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-box-shadow: 0 0 60px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0 0 60px rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.6);
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
}
.c-mobile-view:before {
  position: absolute;
  content: "";
  display: block;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-box-shadow: inset 0 -1px 3px rgba(255, 255, 255, 0.2);
  -moz-box-shadow: inset 0 -1px 3px rgba(255, 255, 255, 0.2);
  box-shadow: inset 0 -1px 3px rgba(255, 255, 255, 0.2);
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.c-mobile-view__inner {
  overflow: hidden;
  width: 100%;
  height: 100%;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
}
.c-pin {
  position: absolute;
  width: 36px;
  height: 36px;
  top: 120px;
  left: 160px;
  z-index: -1;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: solid 4px #5873fe;
  -moz-border: solid 4px #5873fe;
  -webkit-border: solid 4px #5873fe;
  opacity: 0;
  animation-name: animation-fadein-infinite;
  animation-duration: 1.5s;
  animation-timing-function: easy-in-out;
  animation-iteration-count: infinite;
  -webkit-animation-name: animation-fadein-infinite;
  -webkit-animation-duration: 1.5s;
  -webkit-animation-timing-function: easy-in-out;
  -webkit-animation-iteration-count: infinite;
}
.c-button {
  cursor: pointer;
  font-size: 1.2em;
}
.c-mobile__button {
  position: absolute;
  width: 68px;
  height: 68px;
  bottom: -26px;
  line-height: 60px;
  text-align: center;
  z-index: 2;
  color: #fff;
  border: solid 6px rgba(255, 255, 255, 0.2);
  opacity: 0;
  animation-name: animation-fadein;
  animation-duration: 0.5s;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-animation-name: animation-fadein;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-delay: 0.4s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  background-color: #5873fe;
  background: -webkit-gradient(linear, left top, right bottom, from(#5873fe), to(#871cde));
  background: -moz-linear-gradient(top, #5873fe, #871cde);
  -webkit-box-shadow: 0 0 10px #404040;
  -moz-box-shadow: 0 0 10px #404040;
  box-shadow: 0 0 10px #404040;
  left: 50%;
  margin-left: -34px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  transition-property: all;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.4s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
}
.c-mobile__button:hover {
  width: 80px;
  height: 80px;
  line-height: 77px;
  bottom: -26px;
  border: solid 4px rgba(255, 255, 255, 0.2);
  left: 50%;
  margin-left: -40px;
}
.c-mobile__button .c-mobile__button__plus {
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.3s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
}
input[name="u-mobile__button"]:checked ~ .c-mobile__button .c-mobile__button__plus {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.6s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
}
.c-mobile__topbar {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 10%;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.3s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
  -webkit-border-radius: 30px 30px 0 100%;
  -moz-border-radius: 30px 30px 0 100%;
  border-radius: 30px 30px 0 100%;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  background-color: #5873fe;
  background: -webkit-gradient(linear, left top, right bottom, from(#5873fe), to(#871cde));
  background: -moz-linear-gradient(top, #5873fe, #871cde);
}
.c-mobile__topbar a {
  text-decoration: none;
  color: #fff;
  letter-spacing: 3px;
  font-size: 1.4em;
  z-index: 1;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.3s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
}
.c-mobile__topbar a:hover {
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.3s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
  color: #ecc54d;
}
.c-mobile__topbar ul {
  text-align: right;
  padding-top: 40px;
}
.c-mobile__topbar li {
  margin: 30px 30px 40px 0;
}
input[name="u-topbar__button"]:checked ~ .c-mobile-view__inner .c-mobile__topbar {
  height: 50%;
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.6s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
}
.u-link__effect {
  position: relative;
}
.u-link__effect:after {
  position: absolute;
  content: "";
  display: block;
  right: 0;
  width: 0;
  bottom: -4px;
  height: 2px;
  background: #ecc54d;
  transition-property: all;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.4s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
}
.u-link__effect:hover:after {
  width: 100%;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.3s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
}
.c-topbar__button--menu {
  position: absolute;
  right: 32px;
  top: 32px;
  z-index: 1;
  color: #fff;
  transform: scale(1);
  -webkit-transform: scale(1);
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.3s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
}
.c-topbar__button--close {
  position: absolute;
  right: 32px;
  top: 32px;
  z-index: 1;
  cursor: pointer;
  color: #fff;
  transform: scale(0);
  -webkit-transform: scale(0);
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.3s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
}
input[name="u-topbar__button"]:checked ~ .c-mobile-view__inner .c-topbar__button--menu {
  transform: scale(0);
  -webkit-transform: scale(0);
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.6s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
}
input[name="u-topbar__button"]:checked ~ .c-mobile-view__inner .c-topbar__button--close {
  transform: scale(1);
  -webkit-transform: scale(1);
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.6s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
}
.c-switcher__button {
  position: absolute;
  left: 20px;
  bottom: 20px;
  color: #fff;
}
.c-switcher__button--cards {
  transform: rotate(0);
  -webkit-transform: rotate(0);
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.6s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
}
input[name="u-cards-switcher__button"]:checked ~ .c-switcher__button .c-switcher__button--cards {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.6s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
}
input[name="u-cards-switcher__button"]:checked ~ .c-mobile-view__inner .c-card--back {
  z-index: 1;
  opacity: 1;
  bottom: 60px;
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.6s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
  transform: scale(1);
  -webkit-transform: scale(1);
}
input[name="u-cards-switcher__button"]:checked ~ .c-mobile-view__inner .c-card--front {
  z-index: 0;
  opacity: 0.7;
  bottom: 30px;
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.6s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
  transform: scale(0.9);
  -webkit-transform: scale(0.9);
}
.c-hide__button,
.c-show__button {
  position: absolute;
  right: 20px;
  bottom: 20px;
  color: #fff;
}
.c-show__button--cards {
  transform: scale(1);
  -webkit-transform: scale(1);
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.6s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
}
.c-hide__button--cards {
  transform: scale(0);
  -webkit-transform: scale(0);
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.6s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
}
input[name="u-cards-hide__button"]:checked ~ .c-show__button .c-show__button--cards {
  transform: scale(0);
  -webkit-transform: scale(0);
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.6s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
}
input[name="u-cards-hide__button"]:checked ~ .c-hide__button .c-hide__button--cards {
  transform: scale(1);
  -webkit-transform: scale(1);
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.6s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
}
input[name="u-cards-hide__button"]:checked ~ .c-mobile-view__inner .c-card {
  opacity: 0;
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.6s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
}
.cards__inner {
  position: relative;
}
.c-card {
  position: absolute;
  bottom: 60px;
  width: calc(100% - 40px);
  margin: 0 20px;
  overflow: hidden;
  opacity: 1;
  transition-property: all;
  transition-duration: 0.8s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.8s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
  -webkit-box-shadow: 0 0 10px 0 rgba(22, 1, 40, 0.9);
  -moz-box-shadow: 0 0 10px 0 rgba(22, 1, 40, 0.9);
  box-shadow: 0 0 10px 0 rgba(22, 1, 40, 0.9);
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
}
.c-card--back {
  bottom: 30px;
  opacity: 0.7;
  transform: scale(0.9);
  -webkit-transform: scale(0.9);
}
.c-card--back .c-card__details__bottom {
  background: #871cde;
}
.c-card--back .c-card__details__top h1 {
  color: #871cde;
}
.c-card__details {
  position: relative;
  height: 150px;
}
.c-card__details__top {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  height: 110px;
  top: 0;
  width: 100%;
  padding: 20px;
  background: #160128;
  -webkit-border-radius: 20px 20px 0 0;
  -moz-border-radius: 20px 20px 0 0;
  border-radius: 20px 20px 0 0;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
}
.c-card__details__top h1 {
  color: #5873fe;
  font-size: 1.6em;
  margin: 0;
}
.c-card__details__top p {
  color: #fff;
  font-size: 1.1em;
  margin: 6px 0;
}
.c-card__details__top p:last-child {
  color: #747474;
  font-size: 1em;
  margin: 14px 0;
}
.c-card__details__bottom {
  position: absolute;
  height: 40px;
  width: 100%;
  bottom: 0;
  text-align: center;
  line-height: 40px;
  font-size: 1.6em;
  font-weight: 900;
  background: rgba(88, 115, 254, 0.8);
  -webkit-border-radius: 0 0 20px 20px;
  -moz-border-radius: 0 0 20px 20px;
  border-radius: 0 0 20px 20px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
}
.c-card__details__bottom span {
  font-size: 0.7em;
  padding-left: 6px;
}
.c-overlay {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(22, 1, 40, 0.8);
  opacity: 0;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  transition-property: all;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.4s;
  -webkit-transition-timing-function: ease-in-out;
  -webkit-transition-delay: 0;
}
input[name="u-mobile__button"]:checked ~ .c-overlay {
  opacity: 1;
  z-index: 1;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-in-out;
  -webkit-transition-delay: 0;
}
.c-overlay__inner {
  position: relative;
  width: 100%;
  height: 100%;
}
.c-overlay-inner__button {
  position: absolute;
  left: calc(50% - 30px);
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  background: #fff;
  color: #871cde;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  transform: scale(0);
  -webkit-transform: scale(0);
}
.c-overlay-inner__button:hover {
  color: #ecc54d;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.3s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
}
.c-overlay-inner__button.button__1 {
  transition-delay: 0.1s;
  -webkit-transition-delay: 0.1s;
  -moz-transition-delay: 0.1s;
  bottom: 80px;
}
.c-overlay-inner__button.button__2 {
  transition-delay: 0.2s;
  -webkit-transition-delay: 0.2s;
  -moz-transition-delay: 0.2s;
  bottom: 160px;
}
input[name="u-mobile__button"]:checked ~ .c-overlay .c-overlay-inner__button {
  z-index: 1;
  transform: scale(1);
  -webkit-transform: scale(1);
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.6s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
}
.c-bubble__info {
  position: absolute;
  width: 100px;
  height: 100px;
  background: #fff;
  margin: 20px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
}
.c-bubble__info.c-bubble--plus {
  left: calc(50% - 70px);
  bottom: -160px;
  transform: scale(0);
  -webkit-transform: scale(0);
  transition-property: all;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.4s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
}
.c-bubble__info.c-bubble--switch {
  left: -45px;
  transform: scale(0);
  -webkit-transform: scale(0);
  transition-property: all;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.4s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
}
.c-bubble__info.c-bubble--hide {
  right: -45px;
  transform: scale(0);
  -webkit-transform: scale(0);
  transition-property: all;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.4s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
}
.c-bubble__info.c-bubble--menu {
  right: -130px;
  top: -30px;
  transform: scale(0);
  -webkit-transform: scale(0);
  transition-property: all;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.4s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0;
}
input[name="u-instruction__button"]:checked + label ~ .c-mobile-view .c-bubble--menu {
  transform: scale(1);
  -webkit-transform: scale(1);
  transition-property: all;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0s;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.4s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0s;
}
input[name="u-instruction__button"]:checked + label ~ .c-mobile-view .c-bubble--plus {
  transform: scale(1);
  -webkit-transform: scale(1);
  transition-property: all;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0.5s;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.4s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 0.5s;
}
input[name="u-instruction__button"]:checked + label ~ .c-mobile-view .c-bubble--switch {
  transform: scale(1);
  -webkit-transform: scale(1);
  transition-property: all;
  transition-duration: 0.4;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 1s;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.4;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 1s;
}
input[name="u-instruction__button"]:checked + label ~ .c-mobile-view .c-bubble--hide {
  transform: scale(1);
  -webkit-transform: scale(1);
  transition-property: all;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 1.5s;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.4s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition-delay: 1.5s;
}
.c-bubble__inner {
  position: relative;
  width: 100px;
  height: 100px;
  text-align: center;
}
.c-bubble__inner:before {
  content: "";
  display: block;
  position: absolute;
  width: 30px;
  height: 30px;
  z-index: -1;
  background: #fff;
  left: 50%;
  margin-left: -15px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.c-bubble__inner span {
  display: block;
  font-size: 2.4em;
  padding-top: 26px;
  font-weight: 900;
}
.c-bubble__inner span:last-child {
  font-size: 1.2em;
  padding-top: 0;
  font-weight: 400;
}
.c-bubble__info.c-bubble--menu .c-bubble__inner:before {
  left: 0px;
  top: 35px;
  margin-left: 0;
}
.c-instruction__button {
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 80px;
  height: 40px;
  background: #fff;
  overflow: hidden;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
}
.c-button__instruction__toggle {
  position: absolute;
  left: 0;
  width: 40px;
  height: 40px;
  background: #871cde;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.2s;
  -webkit-transition-timing-function: ease-in-out;
  -webkit-transition-delay: 0;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: solid 2px #fff;
  -moz-border: solid 2px #fff;
  -webkit-border: solid 2px #fff;
}
.c-button__off {
  position: absolute;
  line-height: 40px;
  width: 40px;
  text-align: center;
  color: #747474;
}
.c-button__on {
  position: absolute;
  line-height: 40px;
  width: 40px;
  text-align: center;
  color: #747474;
  right: 0;
}
input[name="u-instruction__button"]:checked + label .c-button__instruction__toggle {
  left: 40px;
  background: #5873fe;
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0;
  -webkit-transition-property: all;
  -webkit-transition-duration: 0.2s;
  -webkit-transition-timing-function: ease-in-out;
  -webkit-transition-delay: 0;
}
.c-instruction__text {
  position: fixed;
  bottom: 15px;
  left: 120px;
  width: 260px;
  font-size: 1.4em;
  line-height: 1.8em;
  color: #5873fe;
}
@keyframes animation-fadein {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@-webkit-keyframes animation-fadein {
  from {
    -webkit-transform: scale(0);
    opacity: 0;
  }
  to {
    -webkit-transform: scale(1);
    opacity: 1;
  }
}
@keyframes animation-fadein-infinite {
  from {
    transform: scale(0);
    opacity: 1;
  }
  to {
    transform: scale(1);
    opacity: 0;
  }
}
@-webkit-keyframes animation-fadein-infinite {
  from {
    -webkit-transform: scale(0);
    opacity: 1;
  }
  to {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}

</style>
