<template>
  <div class="main">
    <div class="lines">
      <div class="line-a"></div>
      <div class="line-b"></div>
      <div class="line-c"></div>
      <div class="line-d"></div>
    </div>
    <div class="bicy">
      <div class="heart"></div>
      <div class="dog">
        <div class="dog__ear"></div>
        <div class="dog__head"></div>
        <div class="dog__body"></div>
        <div class="dog__mouth-a"></div>
        <div class="dog__mouth-b"></div>
        <div class="dog__tongue"></div>
      </div>
      <div class="bicy__wheel-l">
        <div class="bicy__fender"></div>
      </div>
      <div class="bicy__wheel-r">
        <div class="bicy__fender"></div>
      </div>
      <div class="bicy__ac">
        <div class="bicy__ac-top"></div>
      </div>
      <div class="bicy__parts">
        <div class="bicy__part-a"></div>
        <div class="bicy__part-b"></div>
        <div class="bicy__part-c"></div>
        <div class="bicy__part-d"></div>
        <div class="bicy__part-e"></div>
        <div class="bicy__part-f"></div>
        <div class="bicy__part-g"></div>
      </div>
      <div class="bicy__basket">
        <div class="bicy__basket-a"></div>
      </div>
    </div>
    <div class="shadows">
      <div class="shadow-a"></div>
      <div class="shadow-b"></div>
      <div class="shadow-c"></div>
      <div class="shadow-d"></div>
    </div>
    <div class="human">
      <div class="human__c">
        <div class="human__head">
          <div class="human__neck"></div>
          <div class="human__face-a"></div>
          <div class="human__face-b"></div>
          <div class="human__nose"></div>
          <div class="human__hair"></div>
          <div class="human__cheek"></div>
          <div class="human__ear"></div>
          <div class="human__mouth"></div>
          <div class="human__eye"></div>
        </div>
        <div class="human__chest"></div>
        <div class="human__backpack"></div>
      </div>
      <div class="human__arm-r">
        <div class="human__arm-r-a"></div>
      </div>
      <div class="human__arm-l">
        <div class="human__arm-l-a"></div>
      </div>
      <div class="human__leg-r">
        <div class="human__leg-r-a"></div>
      </div>
      <div class="human__leg-l">
        <div class="human__leg-l-a"></div>
        <div class="human__leg-l-b"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Animation extends Vue {}
</script>

<style lang="scss">
$bg-1: #efe1db;
$bg-2: #6d5450;

$skin-1: #ffac90;
$skin-2: #b35644;

$hair-1: #d45029;
$hair-2: #8c1d0b;

$green-1: #7adacc;
$green-2: #009281;
$green-3: #00665a;

$white-1: #fff6ef;
$white-2: #fedbc5;
$white-3: #e9a589;

$wheel-1: #432316;

$brown-1: #ebb6a1;
$brown-2: #b96c5c;
$brown-3: #883e30;

$gray-1: #3c3c3b;
$gray-2: #3f3e3e;
$gray-3: #101010;

$metal-1: #d5d5d5;
$metal-2: #a2a1a0;


.main {
  position: relative;
  width: 60vw;
  height: 45vw;

  // background-image: url("bg.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
}

/* Component */
.lines {
  width: 100%;
  height: 100%;
  transform: rotateZ(10deg);
}
.line-a,
.line-b,
.line-c,
.line-d {
  position: absolute;
  height: 0.175vw;
  border-radius: 50%;
  background-color: $white-1;
}
.line-a {
  width: 12vw;
  bottom: 20vw;
  left: 7vw;
  animation: line-a 0.15s infinite linear;
}
.line-b {
  width: 10vw;
  bottom: 18vw;
  left: 6vw;
  animation: line-b 0.2s infinite linear;
}
.line-c {
  width: 6vw;
  bottom: 12vw;
  left: 12vw;
  animation: line-c 0.1s infinite linear;
}
.line-d {
  width: 6vw;
  bottom: 26vw;
  left: 15vw;
  animation: line-d 0.135s infinite linear;
}

/**/
.shadows {
  position: absolute;
  top: 13.5vw;
  left: 20.3vw;
  width: 27vw;
  height: 19vw;

  transform-origin: top left;
  transform: rotateZ(10deg);
  z-index: -5;
}
.shadow-a,
.shadow-b,
.shadow-c,
.shadow-d {
  position: absolute;
  border-radius: 50%;
}
.shadow-a {
  bottom: -0.5vw;
  width: 150%;
  left: -25%;
  height: 1vw;
  background-color: rgba($bg-2, 0.5);
  animation: shadow-a 0.15s infinite linear;
}
.shadow-b {
  bottom: -1.5vw;
  width: 100%;
  right: -25%;
  height: 0.45vw;
  background-color: rgba($bg-2, 0.5);
  animation: shadow-b 0.175s infinite linear;
}
.shadow-c {
  bottom: -4vw;
  left: 100%;

  border-top: 2vw solid rgba($bg-2, 0.5);
  border-right: 2vw solid rgba($bg-2, 0.5);
  border-bottom: 2vw solid transparent;
  border-left: 2vw solid transparent;

  transform-origin: bottom left;
  transform: rotateZ(-45deg);
  opacity: 0;

  animation: shadow-c 0.45s infinite linear;

  &::before {
    content: "";
    position: absolute;
    left: 2vw;
    top: 2vw;

    border-top: 1vw solid rgba($bg-2, 0.75);
    border-right: 1vw solid rgba($bg-2, 0.75);
    border-bottom: 1vw solid transparent;
    border-left: 1vw solid transparent;
    border-radius: 50%;
  }
}
.shadow-d {
  bottom: -2vw;
  left: 100%;

  border-top: 1.5vw solid rgba($bg-2, 0.75);
  border-right: 1.5vw solid rgba($bg-2, 0.75);
  border-bottom: 1.5vw solid transparent;
  border-left: 1.5vw solid transparent;

  transform-origin: bottom left;
  transform: rotateZ(-45deg);

  animation: shadow-c 1s infinite linear;
}
/**/
.bicy {
  position: absolute;
  top: 13.5vw;
  left: 17.3vw;
  width: 27vw;
  height: 19vw;

  transform-origin: bottom left;
  transform: rotateZ(10deg);

  animation: bicy 0.15s infinite linear;

  &__wheel-l,
  &__wheel-r {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 10.8vw;
    height: 10.8vw;

    border: 0.4vw solid $wheel-1;
    border-radius: 50%;
    box-shadow: inset 0.3vw 0.3vw 0 $white-3, inset -0.3vw -0.3vw 0 $white-1,
      inset -0.3vw 0.3vw 0 $white-3, inset 0.3vw -0.3vw 0 $white-1;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 70%;
      height: 70%;

      border-radius: 50%;
      border-top: 0.115vw solid $white-1;
      border-bottom: 0.115vw solid $white-1;
      border-left: 0.115vw solid transparent;
      border-right: 0.115vw solid transparent;
      animation: wheel 0.25s infinite linear;
    }
    &::after {
      width: 50%;
      height: 50%;

      border-top: 0.115vw solid transparent;
      animation: wheel 0.25s infinite linear;
    }
  }
  &__wheel-l {
    left: 0;
    z-index: -1;
  }
  &__wheel-r {
    right: 0;
  }

  &__fender {
    position: absolute;
    width: 115%;
    height: 125%;
    border-radius: 50%;
    border-top: 0.5vw solid $green-3;
  }
  /**/
  &__ac {
    position: absolute;
    width: 10.7vw;
    height: 3vw;
    bottom: 4vw;
    left: 4vw;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 99%;
      height: 1.5vw;

      border: 0.3vw solid $gray-2;
      border-top: 0.3vw solid transparent;
      border-bottom-left-radius: 4vw;
      border-bottom-right-radius: 4vw;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 3vw;
      height: 3vw;

      border-radius: 50%;
      border-left: 0.4vw solid $gray-2;
      border-bottom: 0.4vw solid $gray-2;
      z-index: -1;
    }
    &-top {
      position: absolute;
      width: 100%;
      height: 2vw;

      border-top-left-radius: 2vw;
      border-top-right-radius: 2vw;
      background-image: linear-gradient(
        -65deg,
        $green-2 0,
        $green-2 6vw,
        $white-1 6vw,
        $white-1 6.3vw,
        $green-2 6.3vw,
        $green-2 6.5vw,
        $white-1 6.5vw,
        $white-1 7.5vw,
        $green-2 7.5vw,
        $green-2 8vw,
        $white-1 8vw
      );

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2vw;
        border-top-left-radius: 2vw;
        border-top-right-radius: 1vw;
        background-image: linear-gradient(
          to top,
          rgba(#000, 0.1) 50%,
          transparent 50%
        );
      }
    }
  }
  /**/
  &__part {
    &-a,
    &-b,
    &-c {
      position: absolute;
      bottom: 5.8vw;
      left: 4.25vw;
      width: 0.7vw;
      height: 7.8vw;

      transform-origin: bottom left;
      transform: rotateZ(37deg);
      background-image: linear-gradient(
        to right,
        $white-1 0.25vw,
        $white-2 0.25vw
      );
    }
    &-a {
      z-index: -1;
    }
    &-b {
      left: 13vw;
      height: 8.2vw;
      background-image: linear-gradient(
        to right,
        $green-1 0.25vw,
        $green-2 0.25vw
      );
      z-index: -1;
    }
    &-c {
      left: 13.2vw;
      bottom: 9vw;
      height: 6.4vw;

      &::before {
        content: "";
        position: absolute;
        width: 3vw;
        height: 0.7vw;
        bottom: 0;
        right: 0.1vw;

        transform-origin: bottom right;
        transform: rotateZ(-37deg);
        background-image: linear-gradient(
          to bottom,
          $white-1 0.25vw,
          $white-2 0.25vw
        );
      }
    }
    &-d {
      display: flex;
      justify-content: center;
      position: absolute;
      bottom: 5.8vw;
      left: 12vw;
      width: 0.9vw;
      height: 9.5vw;

      transform-origin: bottom left;
      transform: rotateZ(-30deg);
      background-image: linear-gradient(
        to left,
        $white-1 0.4vw,
        $white-2 0.4vw
      );
      z-index: -1;

      &::before {
        content: "";
        position: absolute;
        top: -3.5vw;
        width: 0.5vw;
        height: 3.5vw;

        background-image: linear-gradient(
          to right,
          $metal-2 0.3vw,
          $metal-1 0.3vw
        );
      }
      &::after {
        content: "";
        position: absolute;
        width: 3vw;
        height: 0.9vw;
        top: -4.7vw;

        border-radius: 1vw;
        transform-origin: bottom left;
        transform: rotateZ(30deg) skewX(-20deg);
        background-image: linear-gradient(to bottom, $green-2, $green-3);
      }
    }
    &-e {
      position: absolute;
      width: 0.5vw;
      height: 7.2vw;
      right: 5.2vw;
      bottom: 5vw;

      transform-origin: bottom right;
      transform: rotateZ(8deg);
      background-image: linear-gradient(
        to right,
        $green-2 0.25vw,
        $green-1 0.25vw
      );
    }
    &-f {
      display: flex;
      justify-content: center;
      position: absolute;
      width: 0.5vw;
      height: 9.2vw;
      right: 5.2vw;
      bottom: 5vw;

      transform-origin: bottom right;
      transform: rotateZ(-25deg);
      background-image: linear-gradient(
        to right,
        $green-2 0.25vw,
        $green-1 0.25vw
      );

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1.5vw;
        top: -1.5vw;

        background-image: linear-gradient(
          to left,
          $white-1 0.25vw,
          $white-2 0.25vw
        );
      }
      &::after {
        content: "";
        position: absolute;
        width: 80%;
        height: 1.9vw;
        top: -3.4vw;

        background-image: linear-gradient(
          to left,
          $metal-1 0.25vw,
          $metal-2 0.25vw
        );
      }
    }
    &-g {
      position: absolute;
      right: 10vw;
      bottom: 16.3vw;
      width: 1.75vw;
      height: 1.75vw;

      transform: rotateZ(25deg) skewY(10deg);
      border-top: 0.2vw solid $metal-1;
      border-right: 0.2vw solid $metal-1;
      box-shadow: inset -0.1vw 0.1vw 0 $metal-2;

      &::before {
        content: "";
        position: absolute;
        width: 2.5vw;
        height: 0.5vw;
        transform: rotateZ(-60deg) skewY(0deg) translateY(-1vw) translateX(-1vw);

        border-radius: 1.5vw;
        background-image: linear-gradient(to bottom, $green-2, $green-3);
      }
    }
  }
  /**/
  &__basket {
    position: absolute;
    bottom: 12vw;
    right: 4vw;
    width: 3vw;
    height: 3.5vw;

    background-color: $brown-2;
    border-top: 0.25vw solid $brown-1;

    box-shadow: inset 0 0.25vw 0 $brown-3;

    &-a {
      position: absolute;
      width: 125%;
      bottom: 0;
      border-bottom: 0.25vw solid $brown-3;
      z-index: 5;

      &::before {
        content: "";
        position: absolute;
        width: 2vw;
        height: 3vw;
        left: -0.5vw;
        top: -2.8vw;
        background-image: linear-gradient(
          70deg,
          $brown-3 1.35vw,
          transparent 1.35vw
        );
      }
      &::after {
        content: "";
        position: absolute;
        width: 2vw;
        height: 2.8vw;
        right: 0.15vw;
        top: -2.75vw;
        background-image: linear-gradient(
          -70deg,
          $brown-1 1.35vw,
          transparent 1.35vw
        );
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: -0.25vw;
      left: -1.75vw;
      width: 1.75vw;
      height: 3.5vw;
      border-top: 0.25vw solid $brown-1;
      background-image: linear-gradient(70deg, transparent 1vw, $brown-3 1vw);
    }
    &::after {
      content: "";
      position: absolute;
      top: -0.25vw;
      right: -1.75vw;
      width: 1.75vw;
      height: 3.5vw;
      border-top: 0.25vw solid $brown-1;

      box-shadow: inset 0 0.25vw 0 $brown-3;
      background-image: linear-gradient(-70deg, transparent 1vw, $brown-1 1vw);
    }
  }
}

.human {
  position: absolute;
  top: 6.5vw;
  left: 25vw;
  width: 13.5vw;
  height: 24.5vw;
  transform-origin: top left;
  animation: human 0.15s infinite linear;

  &__c {
    animation: human-c 0.15s infinite alternate;
  }

  &__head {
    position: absolute;
    right: -2vw;
    top: 2.2vw;
    width: 3.75vw;
    height: 4.5vw;
    transform: rotateZ(10deg);

    animation: human-head 6s infinite;
  }
  &__neck {
    position: absolute;
    bottom: 0;
    width: 1.3vw;
    height: 1.9vw;

    background-image: linear-gradient(
      -10deg,
      transparent 0.2vw,
      $skin-2 0.2vw,
      $skin-2 0.3vw,
      $skin-1 0.6vw
    );
  }
  &__face-a {
    position: absolute;
    bottom: 0.1vw;
    right: 0.5vw;
    width: 2.3vw;
    height: 2vw;

    transform: rotateZ(5deg);
    border-bottom-right-radius: 0.5vw;
    background-image: linear-gradient(
      to top,
      $skin-2,
      $skin-2 0.1vw,
      $skin-1 0.4vw
    );
  }
  &__face-b {
    position: absolute;
    top: 0.6vw;
    right: 0.7vw;
    width: 2.4vw;
    height: 2.2vw;
    transform: rotateZ(-20deg);
    overflow: hidden;
    background-color: $skin-1;

    &::before {
      content: "";
      position: absolute;
      bottom: 20%;
      right: 40%;
      width: 3.2vw;
      height: 3.2vw;

      border-radius: 50%;
      background-image: linear-gradient(to bottom, $hair-1, $hair-2);
      border-bottom: 0.25vw solid $hair-2;
    }
  }
  &__nose {
    position: absolute;
    right: 0.25vw;
    bottom: 35%;
    width: 0.9vw;
    height: 0.9vw;
    transform: rotateZ(-40deg);

    background-color: $skin-1;
    border-bottom: 0.1vw solid $skin-2;
    z-index: -1;
  }
  &__hair {
    position: absolute;
    left: 0.35vw;
    top: 0.4vw;
    width: 3.2vw;
    height: 1.1vw;
    transform: rotateZ(-25deg);
    overflow: hidden;

    animation: human-hair 0.1s infinite linear alternate;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 3.2vw;
      height: 3.2vw;

      border-radius: 50%;
      background-image: linear-gradient(to bottom, $hair-1 60%, $hair-2);
      border-bottom: 0.25vw solid $hair-2;
    }
  }
  &__ear {
    position: absolute;
    top: 1.8vw;
    left: 1.2vw;
    width: 0.8vw;
    height: 1vw;

    border-radius: 50%;
    transform: rotateZ(-15deg);
    background-color: $skin-1;
  }
  &__cheek {
    position: absolute;
    top: 2.3vw;
    left: 2.2vw;
    width: 0.8vw;
    height: 0.6vw;

    border-radius: 50%;
    transform: rotateZ(-15deg);
    background-color: rgba($hair-1, 0.35);
    filter: blur(2px);
  }
  &__mouth {
    position: absolute;
    right: 0.4vw;
    bottom: 20%;
    width: 0.8vw;
    height: 0.5vw;
    transform: rotateZ(5deg);
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 2.5vw;
      height: 1vw;
      border-radius: 50%;
      border-bottom: 0.2vw solid $bg-1;
    }
  }
  &__eye {
    position: absolute;
    top: 1.9vw;
    right: 0.65vw;
    width: 0.55vw;
    height: 0.15vw;

    background-color: $gray-3;
    border-radius: 50%;
    transform: rotateZ(-35deg);

    animation: human-eye 6s infinite;

    &::before {
      content: "";
      position: absolute;
      width: 130%;
      height: 0.19vw;
      right: -0.31vw;
      top: -0.4vw;
      background-color: $gray-3;
      transform: skewX(-30deg);
    }
  }
  &__backpack {
    position: absolute;
    top: 5.2vw;
    left: 2.5vw;
    width: 6.5vw;
    height: 1.35vw;

    transform-origin: top left;
    transform: rotateZ(-20deg);
    border-top-right-radius: 3vw;
    border-bottom-left-radius: 0.5vw;
    border-bottom-right-radius: 0.5vw;

    background-image: linear-gradient(
      to bottom,
      $brown-3,
      darken($brown-3, 20)
    );

    &::before {
      content: "";
      position: absolute;
      top: -0.5vw;
      width: 2.5vw;
      height: 0.5vw;

      border-top-right-radius: 2vw;
      border-top-left-radius: 0.5vw;
      background-image: linear-gradient(
        to right,
        darken($brown-3, 10) 30%,
        $green-2 30%,
        $green-2 40%,
        $brown-3 40%,
        $brown-3 50%,
        $green-2 50%
      );
    }
    &::after {
      content: "";
      position: absolute;
      top: 30%;
      width: 93%;
      height: 0.2vw;
      background-color: $brown-2;
    }
  }
  &__chest {
    position: absolute;
    top: 7.2vw;
    left: 1vw;
    width: 10vw;
    height: 3.2vw;
    transform-origin: top left;
    transform: rotateZ(-20deg);

    border-top-right-radius: 2vw;
    border-bottom-right-radius: 1vw;
    background-image: linear-gradient(to bottom, $white-1 2vw, $white-2);

    &::before {
      content: "";
      position: absolute;
      top: -0.4vw;
      right: -2vw;
      width: 4vw;
      height: 3vw;

      transform-origin: top left;
      transform: rotateZ(30deg);
      background-image: linear-gradient(
        -35deg,
        transparent 1vw,
        $white-2 1vw,
        $white-1 2vw
      );
    }

    &::after {
      content: "";
      position: absolute;
      top: -0.5vw;
      right: -0.5vw;
      width: 7vw;
      height: 3.5vw;

      border-top-left-radius: 1vw;
      border-top-right-radius: 5vw;
      border-bottom-left-radius: 4vw;
      border-bottom-right-radius: 3vw;
      border: 0.4vw solid darken($brown-3, 10);
    }
  }
  &__arm-l {
    position: absolute;
    top: 5.45vw;
    left: 5.5vw;
    width: 5.5vw;
    height: 2vw;

    border-radius: 2vw;
    transform: rotateZ(-25deg);
    background-image: linear-gradient(to bottom, $skin-1 80%, $skin-2 90%);

    &::before {
      content: "";
      position: absolute;
      right: 0;
      width: 55%;
      height: 100%;
      border-top-right-radius: 2vw;
      border-bottom-right-radius: 2vw;
      background-image: linear-gradient(to bottom, $white-1 70%, $white-2 90%);
      border-left: 0.25vw solid $skin-2;
    }
    &-a {
      position: absolute;
      bottom: -3.5vw;
      left: -0.02vw;
      width: 1.5vw;
      height: 4.5vw;

      transform-origin: top left;
      transform: rotateZ(-25deg);
      background-image: linear-gradient(
        100deg,
        $skin-1 1.55vw,
        transparent 1.55vw
      );

      &::before {
        content: "";
        position: absolute;
        bottom: -1.75vw;
        left: -0.125vw;
        width: 1vw;
        height: 2vw;

        border-top-left-radius: 1.5vw;
        border-top-right-radius: 1.5vw;
        border-bottom-left-radius: 2vw;
        border-bottom-right-radius: 4vw;
        background-color: $skin-1;
      }
    }
  }
  &__arm-r {
    position: absolute;
    top: 5.45vw;
    left: 6vw;
    width: 5.5vw;
    height: 2vw;

    border-radius: 2vw;
    transform: rotateZ(-25deg);
    background-image: linear-gradient(to bottom, $skin-1 80%, $skin-2 90%);
    z-index: -5;

    &::before {
      content: "";
      position: absolute;
      right: 0;
      width: 55%;
      height: 100%;

      border-top-right-radius: 2vw;
      border-bottom-right-radius: 2vw;
      background-color: $white-1;
      border-left: 0.25vw solid $skin-2;
    }

    &-a {
      position: absolute;
      bottom: -3.5vw;
      left: -0.02vw;
      width: 1.5vw;
      height: 4.5vw;

      transform-origin: top left;
      transform: rotateZ(-25deg);
      background-image: linear-gradient(
        100deg,
        $skin-2 1.55vw,
        transparent 1.55vw
      );

      &::before {
        content: "";
        position: absolute;
        bottom: -1.75vw;
        left: -0.125vw;
        width: 1vw;
        height: 2vw;

        border-top-left-radius: 1.5vw;
        border-top-right-radius: 1.5vw;
        border-bottom-left-radius: 2vw;
        border-bottom-right-radius: 4vw;
        background-color: $skin-2;
      }
    }
  }
  &__leg-l {
    position: absolute;
    top: 8vw;
    width: 2.5vw;
    height: 10vw;

    transform-origin: top left;
    transform: rotateZ(-35deg);
    border-top-left-radius: 1vw;
    border-top-right-radius: 1vw;
    background-image: linear-gradient(
      -82deg,
      transparent 0.775vw,
      $gray-2 0.775vw,
      $gray-2 1.75vw,
      $gray-3 1.75vw
    );

    animation: human-legg 0.15s infinite alternate;

    &-a {
      position: absolute;
      bottom: -5.25vw;
      right: 0.5vw;
      height: 6.5vw;
      width: 2.5vw;

      transform-origin: top left;
      transform: rotateZ(30deg);
      border-top-left-radius: 2vw;
      background-image: linear-gradient(
        82deg,
        transparent 1.1vw,
        $gray-3 1.1vw,
        $gray-3 2.3vw,
        $gray-2 2.3vw
      );

      &::before {
        content: "";
        position: absolute;
        bottom: -1.25vw;
        right: 0.1vw;
        width: 0.75vw;
        height: 1.25vw;

        background-image: linear-gradient(
          to bottom,
          $skin-2 0.25vw,
          $skin-1 0.25vw
        );
      }
      &::after {
        content: "";
        position: absolute;
        bottom: -3.5vw;
        left: 1.2vw;
        width: 4vw;
        height: 1.5vw;

        border-left: 4vw solid $gray-3;
        border-top: 1vw solid transparent;
        border-bottom: 1vw solid transparent;
        border-right: 1vw solid transparent;
        border-radius: 1vw;
        transform: rotateZ(20deg);
      }
    }

    &-b {
      position: absolute;
      bottom: -8.75vw;
      right: 3.9vw;
      height: 0.5vw;
      width: 2.5vw;

      transform: rotateZ(35deg);
      background-image: linear-gradient(to bottom, $green-2, $green-3);
    }
  }
  &__leg-r {
    position: absolute;
    top: 9vw;
    left: 0.5vw;
    width: 2.5vw;
    height: 10vw;
    transform-origin: top left;
    transform: rotateZ(-70deg);

    border-top-left-radius: 1vw;
    border-top-right-radius: 1vw;
    background-image: linear-gradient(
      -82deg,
      transparent 0.775vw,
      $gray-3 0.775vw
    );
    z-index: -5;

    &-a {
      position: absolute;
      bottom: -4vw;
      right: 0.5vw;
      height: 6.5vw;
      width: 2.5vw;

      transform-origin: top left;
      transform: rotateZ(95deg) translateY(-2.2vw);
      border-top-left-radius: 2vw;
      background-image: linear-gradient(
        82deg,
        transparent 1.1vw,
        $gray-3 1.1vw
      );

      &::before {
        content: "";
        position: absolute;
        bottom: -1.25vw;
        right: 0.1vw;
        width: 0.75vw;
        height: 1.25vw;

        background-image: linear-gradient(
          to bottom,
          darken($skin-2, 10) 0.25vw,
          $skin-2 0.25vw
        );
      }
      &::after {
        content: "";
        position: absolute;
        bottom: -3.5vw;
        left: 1.2vw;
        width: 4vw;
        height: 1.5vw;

        border-left: 4vw solid $gray-3;
        border-top: 1vw solid transparent;
        border-bottom: 1vw solid transparent;
        border-right: 1vw solid transparent;
        border-radius: 1vw;
        transform: rotateZ(20deg);
      }
    }
  }
}
.dog {
  position: absolute;
  bottom: 14.75vw;
  right: 3vw;
  width: 5.2vw;
  height: 4.5vw;

  animation: dog 0.075s infinite linear alternate;

  &__head {
    position: absolute;
    left: 2vw;
    top: 0.675vw;
    width: 2vw;
    height: 2.25vw;

    border-radius: 1.5vw;
    background-color: $white-1;

    &::after {
      content: "";
      position: absolute;
      top: 0.5vw;
      right: 0.4vw;
      width: 0.6vw;
      height: 0.125vw;
      border-radius: 50%;

      background-color: $gray-3;
      transform: rotateZ(-30deg);
    }
  }
  &__body {
    position: absolute;
    bottom: 0;
    left: 1.75vw;
    width: 2.5vw;
    height: 3vw;

    transition: bottom left;
    transform: rotateZ(15deg);
    background-image: linear-gradient(70deg, $white-1 2.5vw, transparent 2.5vw);
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      right: 60%;
      bottom: 0;
      width: 2vw;
      height: 2vw;

      border-radius: 50%;
      background-image: linear-gradient(to right, $hair-1, $hair-2);
    }
  }
  &__mouth-a {
    position: absolute;
    top: 1vw;
    right: 0;
    width: 2vw;
    height: 1vw;

    transform: rotateZ(-15deg);
    border-bottom-right-radius: 1vw;
    background-color: $white-1;
    z-index: -1;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 0.4vw;
      height: 0.3vw;
      border-radius: 1vw;
      background-color: $gray-3;
    }
  }
  &__mouth-b {
    position: absolute;
    top: 2.5vw;
    right: 0.2vw;
    width: 1.5vw;
    height: 0.5vw;

    transform: rotateZ(-15deg);
    border-bottom-right-radius: 1vw;
    background-color: $white-1;
  }

  &__ear {
    position: absolute;
    top: 1.35vw;
    width: 2.25vw;
    height: 1.45vw;

    transform: rotateZ(-15deg);
    border-top-left-radius: 0.25vw;
    border-bottom-left-radius: 0.75vw;
    background-image: linear-gradient(
      -10deg,
      transparent 0.25vw,
      $white-1 0.25vw
    );
    overflow: hidden;

    animation: dog-ear 0.075s infinite linear alternate;

    &::before {
      content: "";
      position: absolute;
      bottom: 60%;
      width: 1.5vw;
      height: 1.5vw;

      border-radius: 50%;
      background-image: linear-gradient(to bottom, $hair-1, $hair-2);
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 80%;
      right: 0;
      width: 1vw;
      height: 1vw;

      border-radius: 50%;
      background-image: linear-gradient(to bottom, $hair-1, $hair-2);
    }
  }
  &__tongue {
    position: absolute;
    top: 2vw;
    right: 1vw;
    width: 0.5vw;
    height: 1.25vw;

    background-image: linear-gradient(to top, $hair-1, $hair-2);
    transform: rotateZ(25deg);
    border-top-left-radius: 2vw;
    border-top-right-radius: 3vw;
    border-bottom-left-radius: 1.5vw;
    border-bottom-right-radius: 3vw;

    animation: dog-tongue 0.075s infinite linear alternate;
  }
}

.heart {
  position: absolute;
  width: 1vw;
  height: 1vw;
  right: 7vw;
  background-color: #d02323;

  transform: rotateZ(-50deg);

  animation: heart 6s infinite linear, heart-opacity 6s infinite linear;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 1vw;
    height: 1vw;
    border-radius: 50%;
    background-color: #d02323;
  }
  &::before {
    bottom: 50%;
  }
  &::after {
    left: 50%;
  }
}
/***********/
/***********/
@keyframes bicy {
  0%,
  100% {
    top: 13.5vw;
    transform: rotateZ(10deg) scaleY(1);
  }
  20% {
    top: 13.65vw;
    transform: rotateZ(10deg) scaleY(0.998);
  }
  40% {
    top: 13.55vw;
    transform: rotateZ(10deg) scaleY(0.9975);
  }
  60% {
    top: 13.5vw;
    transform: rotateZ(10deg) scaleY(0.998);
  }
  80% {
    top: 13.6vw;
    transform: rotateZ(10deg scaleY(1));
  }
}
@keyframes human {
  0%,
  100% {
    top: 6.5vw;
    left: 25vw;
  }
  20% {
    top: 6.6vw;
    left: 25vw;
  }
  40% {
    top: 6.55vw;
    left: 25vw;
  }
  60% {
    top: 6.45vw;
    left: 25vw;
  }
  80% {
    top: 6.6vw;
    left: 25vw;
  }
}

@keyframes human-head {
  0%,
  70%,
  100% {
    transform-origin: bottom left;
    transform: rotateZ(0);
  }
  80%,
  95% {
    transform-origin: bottom left;
    transform: rotateZ(10deg);
  }
}
@keyframes human-eye {
  0%,
  65%,
  100% {
    height: 0.15vw;
    top: 1.9vw;
    transform: rotateZ(-35deg);
  }
  75%,
  95% {
    height: 0.2vw;
    top: 2vw;
    transform: rotateZ(-20deg);
  }
}
@keyframes heart {
  0%,
  75% {
    transform: translateY(0) rotateZ(-50deg) scaleZ(0);
  }
  85%,
  95% {
    transform: translateY(-2.5vw) rotateZ(-50deg) scaleZ(1);
  }
  100% {
    transform: translateY(-6vw) rotateZ(-50deg) scaleZ(0);
  }
}
@keyframes heart-opacity {
  0%,
  75% {
    opacity: 0;
  }
  85%,
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes human-hair {
  to {
    transform: rotateZ(-35deg);
  }
}

@keyframes human-c {
  to {
    transform-origin: bottom left;
    transform: rotateZ(-0.75deg);
  }
}
@keyframes human-leg {
  to {
    transform: translateY(-0.1vw) rotateZ(-35deg);
  }
}
@keyframes wheel {
  to {
    transform: rotateZ(1turn);
  }
}
@keyframes line-a {
  to {
    width: 10.8vw;
    bottom: 19.85vw;
    left: 0vw;
  }
}
@keyframes line-b {
  to {
    width: 6.9vw;
    bottom: 17.9vw;
    left: 1vw;
  }
}
@keyframes line-c {
  to {
    width: 3.9vw;
    bottom: 12vw;
    left: 0vw;
  }
}
@keyframes line-d {
  to {
    width: 3vw;
    bottom: 25.95vw;
    left: 1vw;
  }
}
@keyframes shadow-a {
  to {
    height: 0.9vw;
    width: 148%;
  }
}
@keyframes shadow-b {
  to {
    height: 0.425vw;
    width: 95%;
  }
}
@keyframes shadow-c {
  0% {
    left: 100%;
    opacity: 0;
  }
  50% {
    left: 50%;
    opacity: 1;
  }
  100% {
    left: 0%;
    opacity: 0;
  }
}

@keyframes dog {
  to {
    right: 3.1vw;
    bottom: 14.7vw;
  }
}
@keyframes dog-ear {
  to {
    transform-origin: top left;
    top: 1.3vw;
    transform: rotateZ(-10deg);
  }
}
@keyframes dog-tongue {
  to {
    // transform-origin: top right;
    transform: rotateZ(45deg);
    height: 1.2vw;
  }
}
</style>
