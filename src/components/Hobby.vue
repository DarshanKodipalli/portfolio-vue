<template>
  <div
    style="padding: 200px 50px 0px 50px;"
    data-aos="zoom-in"
    data-aos-delay="200"
  >
    <section class="cards-wrapper">
      <div class="card-grid-space">
        <!-- <div class="num">Drawing</div> -->
        <a
          class="carde"
          href="#"
          style="--bg-img: url(https://media3.s-nbcnews.com/j/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422_ae181a762406ae9dce02dd0d5453d1ba.fit-2000w.jpg)"
        >
          <div>
            <h1>Cooking</h1>
            <p>
              My food corridor
            </p>
            <div class="tags">
              <div class="tag"><router-link to="/gallery">Get in!</router-link></div>
            </div>
          </div>
        </a>
      </div>
      <div class="card-grid-space">
        <!-- <div class="num">PhotoGraphy</div> -->
        <a
          class="carde"
          href="#"
          style="--bg-img: url('https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://dvyvvujm9h0uq.cloudfront.net/com/articles/1543483387-reinhart-julian-1145947-unsplash.jpg')"
        >
          <div>
            <h1>Photography</h1>
            <p>Some of my clicks</p>
            <div class="tags">
              <div class="tag"><router-link to="/photography">Get in!</router-link></div>
            </div>
          </div>
        </a>
      </div>
      <div class="card-grid-space">
        <!-- <div class="num">PhotoGraphy</div> -->
        <a
          class="carde"
          href="#"
          style="--bg-img: url('https://img.freepik.com/free-vector/young-group-people-spending-time-together_23-2148462306.jpg?size=626&ext=jpg')"
        >
          <div>
            <h1>People</h1>
            <p>My Confidants</p>
            <div class="tags">
              <div class="tag"><router-link to="/people">Get in!</router-link></div>
            </div>
          </div>
        </a>
      </div>
      <div class="card-grid-space">
        <!-- <div class="num">PhotoGraphy</div> -->
        <a
          class="carde"
          href="#"
          style="--bg-img: url('https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2018/03/shutterstock_1021312174.jpg')"
        >
          <div>
            <h1>Bike</h1>
            <p>Biking</p>
            <div class="tags">
              <div class="tag"><router-link to="/bikes">Get in!</router-link></div>
            </div>
          </div>
        </a>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Watch } from "vue-property-decorator";
import Clock from "./clock.vue";

@Options({
  components: {
    Clock,
  },
})
export default class Hobby extends Vue {}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Heebo:400,700|Open+Sans:400,700");

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
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4rem;
  padding: 4rem;
  margin: 0 auto;
  width: max-content;
}

.carde {
  font-family: "Heebo";
  --bg-filter-opacity: 0.5;
  background-image: linear-gradient(
      rgba(0, 0, 0, var(--bg-filter-opacity)),
      rgba(0, 0, 0, var(--bg-filter-opacity))
    ),
    var(--bg-img);
  height: 20em;
  width: 15em;
  font-size: 1.5em;
  color: white;
  border-radius: 1em;
  padding: 1em;
  /*margin: 2em;*/
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 5em -1em black;
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
