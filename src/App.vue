<script setup>
import { ref } from "vue";
import "./style.scss";

const currentSlide = ref(null);
const playSlide = ref(false);

const resumeSlide = () => {
  currentSlide.value?.resume();
  playSlide.value = false;
};

const pauseSlide = () => {
  currentSlide.value?.pause();
  playSlide.value = true;
};

const previousSlide = () => {
  currentSlide.value?.prev();
  playSlide.value = false;
};

const nextSlide = () => {
  currentSlide.value?.next();
  playSlide.value = false;
};
</script>

<template>
  <div class="gallery-container">
    <BCarousel
      ref="currentSlide"
      :interval="3000"
      indicators
      ride="carousel"
      fade
      noHoverPause
      class="gallery-carousel"
    >
      <BCarouselSlide class="carousel-item">
        <template #img>
          <img
            src="./assets/images/img1.JPG"
            alt="image slot"
            class="carousel-image"
          />
        </template>
        <h1>You are invited</h1>
      </BCarouselSlide>
      <BCarouselSlide class="carousel-item">
        <template #img>
          <img
            src="./assets/images/img2.JPG"
            alt="image slot"
            class="carousel-image"
          />
        </template>
      </BCarouselSlide>
      <BCarouselSlide class="carousel-item">
        <template #img>
          <img
            src="./assets/images/img3.JPG"
            alt="image slot"
            class="carousel-image"
          />
        </template>
      </BCarouselSlide>
      <BCarouselSlide class="carousel-item">
        <template #img>
          <img
            src="./assets/images/img4.JPG"
            alt="image slot"
            class="carousel-image"
          />
        </template>
      </BCarouselSlide>
      <BCarouselSlide class="carousel-item">
        <template #img>
          <img
            src="./assets/images/img5.JPG"
            alt="image slot"
            class="carousel-image"
          />
        </template>
      </BCarouselSlide>
      <BCarouselSlide class="carousel-item">
        <template #img>
          <img
            src="./assets/images/img6.JPEG"
            alt="image slot"
            class="carousel-image"
          />
        </template>
      </BCarouselSlide>
    </BCarousel>

    <div class="carousel-btn-container">
      <BButtonGroup>
        <BButton @click="previousSlide">
          <font-awesome-icon icon="fa-solid fa-backward-step" />
        </BButton>
        <BButton @click="resumeSlide" v-if="playSlide">
          <font-awesome-icon icon="fa-solid fa-play" />
        </BButton>
        <BButton @click="pauseSlide" v-else>
          <font-awesome-icon icon="fa-solid fa-pause" />
        </BButton>
        <BButton @click="nextSlide">
          <font-awesome-icon icon="fa-solid fa-forward-step" />
        </BButton>
      </BButtonGroup>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gallery-container {
  .carousel-item {
    height: 94vh;

    .carousel-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .carousel-btn-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
