<template>
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasService"
    aria-labelledby="offcanvasServiceLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title text-upg" id="offcanvasServiceLabel">
        <BIconHeadset class="mb-1" />專屬客服
      </h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="container">
        <p class="text-start">
          您好，歡迎來到新體育，請先點擊以下問題分類，讓我能夠更快的為您服務
        </p>
        <div class="row row-cols-2">
          <div v-for="list in category" :key="list.title">
            <div class="card m-1 shadow-sm rounded-pill">
              <a
                class="text-decoration-none"
                :href="list.link"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img
                  :src="require('@/assets/img/service/' + list.img)"
                  class="card-img-top shadow rounded-pill"
                  alt=""
                />
                <div class="card-body">
                  <h5 class="card-title btn bg-upg text-white rounded-pill">
                    {{ list.title }}
                  </h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="dropdown mt-3">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
        >
          Dropdown button
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div> -->
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-upg" id="exampleModalLabel">
            <BIconHeadset class="mb-1" />專屬客服
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <Chat />
          <!-- <p class="text-start">
            貴賓您好，我是您的專屬客服，請問有什麼地方可以為您服務?
          </p>
          <textarea class="form-control" cols="30" rows="10"></textarea> -->
          
        </div>
        <!-- <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            關閉
          </button>
          <button type="button" class="btn bg-upg text-white">送出</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { BIconHeadset } from "bootstrap-icons-vue";
import { reactive } from "@vue/reactivity";
import Chat from "../components/Chat.vue";
export default {
  components: {
    BIconHeadset,
    Chat
  },
  setup() {
    const category = reactive([
      {
        title: "點數問題",
        link: "javascript:;",
        img: "point.png",
      },
      {
        title: "球賽問題",
        link: "javascript:;",
        img: "sport.png",
      },
      {
        title: "彩球遊戲",
        link: "javascript:;",
        img: "lottery.png",
      },
      {
        title: "其他問題",
        link: "javascript:;",
        img: "other.png",
      },
    ]);

    return {
      category,
    };
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
.offcanvas {
  background: #fffffff2;
  border: none;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.4);
  max-width: 480px;
}
</style>
