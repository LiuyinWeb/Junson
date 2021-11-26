<template>
  <div class="divBox"
    >
    <div class="textBox">
      <div class="text1"><div v-bind:class="[{ 'text1-animation': textAnimation1} ,'textContent']">Sustainable</div></div>
      <div class="text2"><div v-bind:class="[{ 'text2-animation': textAnimation2 } ,'textContent']">Stewardship</div></div>
    </div>
    <div class="back-shadow"></div>
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="@img/img_newyork.png" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@img/img_hongkong.png" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@img/img_singapore.png" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@img/img_paloalto.png" alt="" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
      <div class="cityName">
        <span v-show="scrollbarActive === 0">NEW YORK</span>
        <span v-show="scrollbarActive === 1">HONG KONG</span>
        <span v-show="scrollbarActive === 2">SINGAPORE</span>
        <span v-show="scrollbarActive === 3">PALO ALTO</span>
      </div>
  </div>
</template>
<script>
import Swiper, { Autoplay,EffectFade,Scrollbar,EffectCreative,Pagination } from 'swiper';
export default {
  components: {},
  data() {
    return {
      animation1: false,
      animation4: false,
      textAnimation1: false,
      textAnimation2: false,
      scrollbarActive:0,
      activeAnimation:false,
      loading:true,
    };
  },
  mounted() {
    let that = this
    let mySwiper =new Swiper(".swiper", { on: {
      slideChangeTransitionStart: function(){
        that.scrollbarActive = this.activeIndex === 5 ? 0 : this.activeIndex - 1;
      },
    },
      modules: [Autoplay, Scrollbar,EffectFade,EffectCreative,Pagination],
      loop: true,
      // init: false,
      autoplay: {
        delay: 3500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      // effect: "fade", //动画效果：渐变
      // fadeEffect: {
      //   crossFade: true,
      // },
      effect : 'creative',
      speed:2500,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      creativeEffect: {
      prev: {
          opacity:0,
          scale:1.1,
        },
        next: {
          opacity:0,
          scale:1.1,
        },
      },
    });
     mySwiper.autoplay.stop();
     setTimeout(()=>{
        mySwiper.autoplay.start();   
     },3000)
    this.activeAnimation = true;
    setTimeout(() => {
      this.textAnimation1 = true;
    }, 2000);
    setTimeout(() => {
      this.textAnimation2 = true;
    }, 2250);
  },
  methods: {},
};
</script>
<style lang="scss">
@keyframes scrollbar-change {
  0%{
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  } 
}
.swiper-pagination{
  animation: scrollbar-change 1s linear;
  animation-fill-mode:forwards;
  animation-delay:2s;
  transform: scale(0);
  opacity: 0;
  top:auto!important;
  left:auto!important;
  bottom: 58Px;
  right: 58px;
  width:204Px!important;
  height:2Px!important;
  background:rgba(255, 255, 255, 0.5)!important;
  border-radius: 10px;
}
.swiper-pagination-progressbar-fill{
  border-radius: 10px!important;
}
</style>
<style lang="scss" scoped>
@keyframes scrollbar-change {
  0%{
    transform: scale(0);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  } 
}
  .cityName{
    animation: scrollbar-change 1s linear;
    animation-fill-mode:forwards;
    animation-delay:2s;
    position: absolute;
    width:204Px;
    bottom: 73Px;
    right: 58px;
    font-size: 14Px;
    color:#fff;
    opacity: 0;
    z-index: 10;
  }
.scrollbar{
  position: absolute;
  transform: scale(0);
  opacity: 0;
  bottom: 6.444vh;
  right:58px;
  width:136px;
  height:0.5vh;
  font-size: 0px;
  background:rgba(255, 255, 255, 0.5);
  z-index: 99;
  border-radius: 10px;
  opacity: 0.8;
  div{
    height:0.5vh;
    width:34px;
    float:left;
  }
  @keyframes active-change {
    0% {
      width:0%;
    }
    100% {
      width:100%;
    }
  }
  div.active{
    background:#DAB56E;
    border-radius: 10px;
  }
  .active-animation{
    animation: active-change 22750ms infinite linear;
  }
}
  .swiper{
    --swiper-theme-color: #DAB56E;
    --swiper-pagination-color: #DAB56E;/* 两种都可以 */
  }
.swiper-scrollbar{
  position: fixed!important;
  bottom: 6.444vh!important;
  right:58px!important;
  left:auto!important;
}
/deep/.swiper-scrollbar-drag{
    background: #DAB56E!important;
}
.swiper {
  width: 100%;
  height: 100vh;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  width:100%;
  height:100%;
}

.swiper-slide {
  img {
    // width:100%;
    // background:#1a2445 url('../../../../public/img/img_newyork.png') no-repeat center ;
    //   @media screen and (device-aspect-ratio:4/3) {
    //     background-size:auto 100%;
    //   }
    //   @media screen and (device-aspect-ratio:16/9) {
    //     background-size:100% auto;
    //   }
  }
}
.divBox {
  height: 100%;
  width: 100%;
  z-index: 1;
  background: #000;
  position: relative;
}
.back-shadow {
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
}
@keyframes back-change1 {
  0% {
    background: rgba(0, 0, 0, 0.7);
  }
  50% {
    background: rgba(0, 0, 0, 0.7);
  }
  100% {
    background: rgba(0, 0, 0, 0.3);
  }
}
.back-shadow {
  animation: back-change1 5s linear;
}
</style>
<style lang="scss" scoped>
.textBox {
  color: #fff;
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  height: 188px;
  margin: auto 0;
  & > div {
    border: 1px solid rgba(0, 0, 0, 0);
    position: absolute;
    height: 90px;
    overflow: hidden;
    z-index: 100;
    width: 100%;
    box-sizing: border-box;
  }
  .textContent {
    text-align: center;
    width: 100%;
    vertical-align: top;
    font-size: 80px;
    position: absolute;
    bottom: 100px;
    text-align: center;
    margin: auto 0;
  }
  .text1 {
    font-weight: 700;
    font-family: HarmonyOS_Sans_SC_Bold;
    top: 0px;
  }
  .text2 {
    bottom: 0px;
    font-family: HarmonyOS_Sans_SC_Light;
  }
}
@keyframes text1-change {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 0px;
  }
}
.text1-animation {
  animation: text1-change 1s linear;
  animation-fill-mode: forwards;
}
.text2-animation {
  animation: text1-change 1.5s linear;
  animation-fill-mode: forwards;
}
</style>