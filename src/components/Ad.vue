<template>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <!-- <button class="ad_skip_btn btn bg-upg_alpha50 text-white me-md-2" @click="adSkipBtn"> -->
    <button
      class="ad_skip_btn btn bg-upg_alpha50 text-white rounded-pill border border-1 border-whit py-1 px-4 me-md-2"
      @click="adSkipBtn"
    >
      {{ time }}秒 跳過
    </button>
  </div>
  <swiper
    :spaceBetween="0"
    :centeredSlides="true"
    :autoplay="{
      delay: swiperTime,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :effect="'cube'"
    :grabCursor="true"
    :cubeEffect="{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }"
    class="mySwiper"
  >
    <swiper-slide v-for="item in ad" :key="item">
      <a
        href="javascript:;"
        class="ad_img"
        :style="`background-image:url(${require(`@/assets/img/ad/${item}`)})`"
      >
      </a
    ></swiper-slide>
  </swiper>
</template>

<script>
import { ref, reactive, watch } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import "swiper/pagination"
import SwiperCore, {
  Pagination,
  Autoplay,
  Navigation,
  EffectCube,
} from "swiper";
SwiperCore.use([Pagination, Autoplay, Navigation, EffectCube]);

export default {
  props: {
    parm_time: {
      type: Number,
      default: true,
    },

    // emits: {
    //   adSkip: (parm) => {
    //       return parm.value === 0
    //   },
    // },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  emits: ["adSkip"],
  setup(props, { emit }) {
    const ad = reactive(['ad01.jpg', 'ad02.jpg']);
    const swiperTime = ref(2500); //輪播間格時間
    const adSkipBtn = () => {
      emit("adSkip", false);
    };
    // watch(props, (w)=>{
    //     console.log(w)
    // })
    const time = ref(5);
    const timeInterval = setInterval(() => {
      time.value--;
      if (time.value <= 0) {
        emit("adSkip", false);
        clearInterval(timeInterval);
      }
    }, 1000);
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return { ad, swiperTime, time, adSkipBtn, onSwiper, onSlideChange };
  },
};
</script>

<style lang="scss" scoped>
$upg: #38a688;
$upg_alpha50: #38a68880;
.text-upg {
  color: $upg;
}
.bg-upg {
  background-color: $upg;
}
.bg-upg_alpha50 {
  background-color: $upg_alpha50;
  &:hover,
  &:focus,
  &:active,
  &.active {
    background-color: rgba($color: $upg_alpha50, $alpha: 0.8);
  }
}

.ad_img {
  display: block;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 768px) {
    background-size: cover;
  }
}
.ad_skip_btn {
  position: absolute;
  right: 0%;
  -webkit-transform: translateX(-20%);
  transform: translateX(-20%);
  top: calc(2vh - 0px);
  text-align: center;
  z-index: 5;
}
.sliderWrapper {
  :global(.swiper-pagination-bullet) {
    background: #ffffff;
    opacity: 0.7;
  }
  :global(.swiper-button-next) {
    color: white;
    opacity: 0.7;
  }
  :global(.swiper-button-prev) {
    color: white;
    opacity: 0.7;
  }
  :global(.swiper-pagination-bullet-active) {
    background: $upg;
  }
}
</style>
