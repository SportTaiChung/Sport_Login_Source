<template>
  <Ad v-if="ad && isMobile" @adSkip="handAdSkip" />
  
    <div v-if="!ad || !isMobile">
      <div class="video_mask"></div>
      <div class="bg"></div>
      <video
        v-if="!isMobile"
        class="login_video"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
        playsinline=""
        webkit-playsinline="webkit-playsinline"
      >
        <!-- poster="@/assets/img/ad/basketball.jpg" -->
        <source src="@/assets/video/bg_sports.mp4" type="video/mp4" />
      </video>
      <video
        v-if="isMobile"
        class="login_video"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
        playsinline=""
        preload
        webkit-playsinline="webkit-playsinline"
      >
        <source src="@/assets/video/bg_sports_m.mp4" type="video/mp4" />
      </video>
      <div class="register_wrap">
        <Service />
      </div>
      <div class="register_card_wrap">
        <div class="container">
          <img class="logo" src="@/assets/img/logo.png" alt="" />
          <div
            class="card w-100 mx-auto mb-4 d-block pt-2 rounded-custom shadow-sm"
          >
            <div class="card-body">
              <div class="mb-5">
                <div
                  class="d-flex align-items-center justify-content-center mb-3"
                >
                  <!-- <div class="form-floating w-100"> -->
                  <div class="input-group w-100">
                    <img
                      src="@/assets/img/login/account.png"
                      alt=""
                      class="mx-1 my-auto position-absolute"
                      style="left: 0; top: 0; bottom: 0; max-width: 30px"
                    />
                    <input
                      type="text"
                      class="form-control rounded-pill pl-3 text-center text-white"
                      id=""
                      placeholder="帳號"
                    />
                  </div>
                </div>
                <div
                  class="d-flex align-items-center justify-content-center mb-3"
                >
                  <div class="input-group w-100">
                    <img
                      src="@/assets/img/login/password.png"
                      alt=""
                      class="mx-1 my-auto position-absolute"
                      style="left: 0; top: 0; bottom: 0; max-width: 30px"
                    />
                    <input
                      type="password"
                      class="form-control rounded-pill text-center text-white"
                      id="floatingPassword"
                      placeholder="密碼"
                    />
                  </div>
                </div>
              </div>

              <button
                class="btn bg-upg_alpha50 text-white rounded-pill border border-1 border-whit py-1 w-75"
                type="submit"
              >
                會員登入
              </button>

              <div class="d-flex mx-3">
                <div
                  class="border-bottom border-1 border-whit w-100 mt-4 mb-3 opacity-50"
                ></div>
                <h5
                  class="d-flex align-items-center px-2 m-0 text-white mt-4 opacity-50"
                >
                  or
                </h5>
                <div
                  class="border-bottom border-1 border-whit w-100 mt-5 mb-3 opacity-50"
                ></div>
              </div>

              <div class="d-flex justify-content-around mt-1">
                <a
                  class="btn btn-link text-white text-decoration-none"
                  style="font-size: small"
                  href="javascript:;"
                  ><img
                    src="@/assets/img/login/around.png"
                    alt=""
                    class="mx-3 my-2 d-flex"
                    style="max-width: 30px"
                  />
                  先去逛逛</a
                >
                <a
                  class="btn btn-link text-white text-decoration-none"
                  style="font-size: small"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasService"
                  role="button"
                  aria-controls="offcanvasService"
                  ><img
                    src="@/assets/img/login/service.png"
                    alt=""
                    class="mx-3 my-2 d-flex"
                    style="max-width: 30px"
                  />
                  專屬客服</a
                >
              </div>
            </div>
          </div>
          <!--card-->
        </div>
      </div>
      <i class="text-white opacity-50 footer position-absolute"
        >UPG SPORTSBOOK</i
      >
    </div>
</template>

<script>
import Ad from "../components/Ad.vue";
import Service from "../components/Service.vue";
import { onMounted, ref, watch } from "vue";
import {
  BIconPersonFill,
  BIconLockFill,
  BIconHeadset,
  BIconDoorOpenFill,
  BIconBoxArrowInRight,
} from "bootstrap-icons-vue";
export default {
  components: {
    Ad,
    Service,
    BIconPersonFill,
    BIconLockFill,
    BIconHeadset,
    BIconDoorOpenFill,
    BIconBoxArrowInRight,
  },
  setup() {
    const ad = ref(true);
    // const ad = ref(false);
    const isMobile = ref(device.mobile());

    const handAdSkip = (parm) => {
      ad.value = parm;
    };

    // onMounted(() => {
    //   const vdo = document.querySelector("video");
    //   vdo.addEventListener("loadeddata", (event) => {
    //     console.log(event);
    //   });
    // });

    // watch(a, (a, b) => {
    // });

    return { ad, isMobile, handAdSkip };
  },
};
</script>

<style lang="scss" scoped>
$upg: #38a688;
$upg_alpha50: #38a68880;
.text-upg {
  color: $upg;
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
.card {
  background: rgba($color: #ffffff, $alpha: 0.3);
  // border: none;
  max-width: 480px;
}
.card-body {
  padding: 1rem 1.5rem;
}
.video_mask {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 2;
  // background: #00000052;
  background: rgba($color: #000000, $alpha: 0.5);
}
.login_video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 1;
}
.bg {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 1;
  // background-image: url("~@/assets/img/nba.gif");
  background: url("~@/assets/img/login/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.register_wrap {
  position: absolute;
}
.register_card_wrap {
  position: relative;
  width: 100%;
  left: 50%;
  -webkit-transform: translate(-50%, -40%);
  transform: translate(-50%, -40%);
  top: calc(35vh);
  // top: calc(50vh - 350px);
  text-align: center;
  z-index: 3;
}
.input-group {
  ::placeholder {
    color: #fff;
  }

  .form-control {
    background: #0006;
    border: none;
    color: #fff;

    &:hover,
    &:focus,
    &:active,
    &.active {
      border: none;
      background: #fff6;
      color: #555 !important;
    }
  }
}

.logo {
  margin-top: -1.5rem;
  max-width: 200px;
  @media screen and (max-width: 768px) {
    max-height: 220px;
  }
}

.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl,
.container-xxl {
  width: 100%;
  padding-right: var(--bs-gutter-x, 3.75rem);
  padding-left: var(--bs-gutter-x, 3.75rem);
  margin-right: auto;
  margin-left: auto;
}

.rounded-custom {
  border-radius: 1rem;
}

.footer {
  left: 0;
  right: 0;
  bottom: calc(2vh);
  z-index: 3;
}
</style>
