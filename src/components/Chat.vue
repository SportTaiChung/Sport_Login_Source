<template>
  <div class="container">
<div class="row">
    <div class="col-lg-12">
        <div class="border-0 chat-app">
            <div class="chat">
                <div class="chat-header">
                    <div class="row">
                        <div class="d-flex">
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                <!-- <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar"> -->
                                <img class="avatar" src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar">

                            </a>
                            <div class="chat-about">
                                <h6 class="m-b-0">專屬客服 水水</h6>
                                <small class="text-success">在線中</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chat-history p-3">
                    <ul class="m-b-0 p-0">
                        <li class="d-flex">
                            <div class="me-3">
                                <img class="avatar" src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar">
                            </div>
                            <div class="d-flex flex-column">
                                <div class="message my-message">貴賓您好，我是您的專屬客服，請問有什麼地方可以為您服務?</div>                                    
                                <div class="message-data my-2">
                                    <span class="text-secondary">2分鐘前</span>
                                </div>
                            </div>
                        </li>
                        <li class="d-flex flex-row-reverse pe-2">
                            <div class="d-flex flex-column">
                                <div class="message other-message">請問，我想要打球。</div>
                                <div class="message-data text-right my-2">
                                    <span class="text-secondary">1分鐘前</span>
                                    <!-- <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar"> -->
                                </div>
                            </div>
                        </li>
                                                       
                        <li class="d-flex">
                            <div class="me-3">
                                <img class="avatar" src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar">
                            </div>
                            <div class="d-flex flex-column">
                                <div class="message my-message">好的，馬上給您球。</div>                                    
                                <div class="message-data">
                                    <span class="text-secondary">剛剛</span>
                                </div>
                            </div>
                        </li>
                        <li class="d-flex">
                            <div class="me-3">
                                <img class="avatar" src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar">
                            </div>
                            <div class="d-flex flex-column">
                                <div class="message my-message">好的，馬上給您球。</div>                                    
                                <div class="message-data">
                                    <span class="text-secondary">剛剛</span>
                                </div>
                            </div>
                        </li>
                        <li class="d-flex">
                            <div class="me-3">
                                <img class="avatar" src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar">
                            </div>
                            <div class="d-flex flex-column">
                                <div class="message my-message">好的，馬上給您球。</div>                                    
                                <div class="message-data">
                                    <span class="text-secondary">剛剛</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="input-group mb-0">
                    <label for="inputGroupFile04" class="d-clex flex-column">
                        <BIconCardImage class="me-3 h-100" />
                    </label>
                    <input
                    type="file"
                    class="form-control"
                    id="inputGroupFile04"
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"
                    />
                    <input type="text" class="form-control" placeholder="輸入訊息">                                    
                    <button class="btn bg-upg text-white"><BIconSendFill class="m-2" /></button>
                </div>
                
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
import {
  BIconSendFill,BIconCardImage
} from "bootstrap-icons-vue";
export default {
    components: {
    BIconSendFill,
    BIconCardImage
  },

}
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
#inputGroupFile04{
    display: none;
}

.chat .chat-header {
    padding: 15px 20px;
    border-bottom: 2px solid #f4f7f6
}

.avatar {
    border-radius: 40px;
    width: 40px
}

.chat .chat-header .chat-about {
    padding-left: 10px
}


.message {
    color: #444;
    padding: 18px 20px;
    line-height: 26px;
    font-size: 16px;
    border-radius: 7px;
    display: inline-block;
    position: relative
}

.message:after {
    bottom: 100%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: transparent;
    border-width: 10px;
}

.my-message {
    background: #efefef
}

.my-message:after {
    bottom: 100%;
    left: 30px;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-right-color: #efefef;
    border-width: 10px;
    margin-left: -10px;
    left:-10px;
    top: 30%;

}

.other-message {
    background: #e8f1f3;
    text-align: right
}

.other-message:after {
    border-left-color: #e8f1f3;
    left: 100%;
    top: 30%;
}

.chat-history {
        height: calc(100vh * .6);
        overflow-x: auto
    }

@media only screen and (max-width: 767px) {
    .people-list {
        height: 465px;
        width: 100%;
        overflow-x: auto;
        background: #fff;
        left: -400px;
        display: none
    }
    .people-list.open {
        left: 0
    }
    .chat {
        margin: 0
    }
    .chat .chat-header {
        border-radius: 0.55rem 0.55rem 0 0
    }
    .chat-history {
        height: 300px;
        overflow-x: auto
    }
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
    .chat-list {
        height: 650px;
        overflow-x: auto
    }
    .chat-history {
        height: 600px;
        overflow-x: auto
    }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) {
    .chat-list {
        height: 480px;
        overflow-x: auto
    }
    .chat-history {
        height: calc(100vh - 350px);
        overflow-x: auto
    }
}
</style>