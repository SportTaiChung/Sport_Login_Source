<template>
  <Ad v-if="ad && isMobile" @adSkip="handAdSkip" />

  <div v-if="!ad || !isMobile">
    <div class="video_mask"></div>
    <video
      id="login_video"
      autoplay="autoplay"
      muted="muted"
      loop="loop"
      playsinline=""
      webkit-playsinline="webkit-playsinline"
    >
      <source src="@/assets/video/bg_sports.mp4" type="video/mp4" />
    </video>
    <div class="register_wrap">
      <Service />
    </div>
    <div class="register_card_wrap">
      <div class="container">
        <img
          class="mw-100"
          src="@/assets/img/logo.png"
          alt=""
          style="width: 300px"
        />
        <div class="card w-100 m-auto d-block py-5 rounded-3">
          <div class="card-body">
            <div class="input_wrap rounded-pill position-relative mx-4 my-2">
              <img
                src="@/assets/img/login/account.png"
                alt=""
                class="mx-3 my-auto position-absolute"
                style="left: 0; top: 0; bottom: 0; max-width: 40px"
              />
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control rounded-pill text-center text-white"
                  id="floatingInput"
                  placeholder="account"
                />
                <label for="floatingInput" class="pl-5">帳號</label>
              </div>
            </div>
            <div class="input_wrap rounded-pill position-relative mx-4  my-2">
              <img
                src="@/assets/img/login/password.png"
                alt=""
                class="mx-3 my-auto position-absolute"
                style="left: 0; top: 0; bottom: 0; max-width: 40px"
              />
              <div class="form-floating w-100">
                <input
                  type="password"
                  class="form-control rounded-pill text-center text-white"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">密碼</label>
              </div>
            </div>
            <div class="d-flex justify-content-around">
              <a class="btn" href="javascript:;">會員註冊</a>
              <a class="btn" href="javascript:;">忘記密碼</a>
            </div>
            <button class="btn btn-danger rounded-pill w-75" type="submit">
              <BIconBoxArrowInRight class="mb-1" /> 會員登入
            </button>
            <div class="d-flex justify-content-around mt-4">
              <a class="btn btn-outline-danger rounded-pill" href="javascript:;"
                ><BIconDoorOpenFill class="mb-1" /> 先去逛逛</a
              >
              <a
                class="btn btn-outline-danger rounded-pill"
                data-bs-toggle="offcanvas"
                href="#offcanvasService"
                role="button"
                aria-controls="offcanvasService"
                ><BIconHeadset class="mb-1" /> 專屬客服</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Ad from "../components/Ad.vue";
import Service from "../components/Service.vue";
import { onMounted, ref } from "vue";
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

    // onMounted(()=>{
    //   console.log('是否為行動裝置',device.mobile())
    // })

    return { ad, isMobile, handAdSkip };
  },
};
</script>

<style lang="scss" scoped>
.card {
  background: #ffffff80;
  border: none;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.4);
  max-width: 480px;
}
.video_mask {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 1;
  background: #00000052;
}
#login_video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
}
.bg {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  background-image: url("~@/assets/img/nba.gif");
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
  top: calc(40vh);
  // top: calc(50vh - 350px);
  text-align: center;
  z-index: 1;
}
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-select ~ label {
  // transform: scale(0.85) translateY(-0.5rem) translateX(0rem);
  transform: scale(0.85) translateY(-0.5rem) translateX(calc(50% - 40%));
}
.input_wrap {
  background: #0006;
  padding-left: 60px;
}

.form-floating>label {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    padding: 1rem 0.75rem;
    pointer-events: none;
    border: 1px solid transparent;
    transform-origin: 0 0;
    transition: opacity .1s ease-in-out,transform .1s ease-in-out;
}

.form-floating {
  > label {
    width: 100%;
  }

  .form-control {
    background: transparent;
    border: none;
    ~ label {
      color: #fff;
    }
    &:hover,
    &:focus,
    &:active,
    &.active {
      border-top: none;
      border-right: none;
      border-left: none;
      ~ label {
        color: rgb(214, 214, 214);
        text-shadow: none;
      }
    }
  }
  // label{
  // color: #dc3545;
  // color: #fff;
  // text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.8);
  // }
}
</style>
