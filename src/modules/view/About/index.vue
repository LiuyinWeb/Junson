<template>
  <div class="divBox">
    <div class="text1">
      <div v-bind:class="[{ 'text1-animation': textAnimation1}]">STAY HUMBLE</div>
      <div v-bind:class="[{ 'text1-animation': textAnimation1}]">ACHIEVE SUSTAINABILITY</div>
    </div>
    <div v-bind:class="[{ 'text2-animation': textAnimation2},'text2']">
      <img v-bind:class="[{ 'img1-animation': imgAnimation1},'img1']" src="@img/10year1.png" alt="">
      <div v-bind:class="[{ 'text3-animation': textAnimation3},'line']"></div>
      <img v-bind:class="[{ 'img2-animation': imgAnimation2},'img2']" src="@img/10year2.png" alt="">
    </div>
    <div v-bind:class="[{ 'content1-animation': contentAnimation1}]" class="aboutUsPage">
      <div class="imgDiv">
        <img v-bind:class="[{ 'img3-animation': imgAnimation3}]" clsss src="@img/img_aboutus.png" alt="">
      </div>
      <div class="bottomText">
        <div v-bind:class="[{ 'text4-animation': textAnimation4}]" class="title">WHAT WE DO.</div>
        <div v-bind:class="[{ 'text5-animation': textAnimation5}]" class="divContent">
           <div>
              Junson Capital is a financial services company with diversified investment
            </div>
            <div>
              strategies across a wide range of asset classes and geographies. 
            </div>
            <div>
              A truly global and cross-cultural organization.
            </div>
        </div>
      </div>
    </div>
    <div :class="[{ 'content2-animation': content2Animation},{ 'content2-leave': content2AnimationLeave}]" class="content2 ">
      <div :class="{'content2-aboutUsText-animation':content2Animation}" class="aboutUsText">ABOUT US.</div>
      <div class="imgBox">
        <div :class="[{ 'content2-img1-animation': content2Animation}]" class="img1Box">
          <div class="img-mask"></div>
          <div class="img1"></div>
          <span class="text">HONG KONG</span>
          <span class="background"></span>
        </div>
        <div :class="[{ 'content2-img2-animation': content2Animation}]" class="img2Box">
          <div class="img2"></div>
          <span class="text">NEW YORK</span>
          <span class="background"></span>
        </div>
        <div :class="[{ 'content2-img3-animation': content2Animation}]" class="img3Box ">
          <div class="img3"></div>
          <span class="text">SINGAPORE</span>
          <span class="background"></span>
        </div>
        <div class="img4Box">
          <div class="img4"></div>
          <span class="text">PALO ALTO</span>
          <span class="background"></span>
        </div>
      </div>
      <div :class="[{ 'content2-text1-animation': content2Animation}]" class="content2-text1 ">
        Junson Capital has a global footprint with professionals located in Hong Kong, New York, Singapore and Palo Alto.
      </div>
      <div :class="[{ 'content2-text2-animation': content2Animation}]" class="content2-text2 ">
        <div>
          Junson Capital’s asset management and investment activities extend across public markets, private equity,
        </div>
        <div>
          venture capital, real estate, alternative assets and generational services.
        </div>
      </div>
    </div>
    <div v-show="active !== 0" class="indexList">
      <div :class="{'active': active === 1}"></div>
      <div :class="{'active': active === 2}"></div>
      <div :class="{'active': active === 3}"></div>
    </div>
  </div>
</template>

<script>
export default {
    components:{},
    data(){
        return{
          textAnimation1:false,
          imgAnimation1:false,
          imgAnimation2:false,
          textAnimation3:false,
          textAnimation2:false,
          imgAnimation3:false,
          textAnimation4:false,
          textAnimation5:false,
          contentAnimation1:false,
          content2Animation:false,
          content2AnimationLeave:false,
          leave:null,
          active:0,
          timeOutList:{
            timeOut0:null,
            timeOut1:null,
            timeOut11:null,
            timeOut12:null,
            timeOut2:null,
            timeOut21:null,
            timeOut3:null,
          }
        }
    },
    mounted(){
      this.timeOutList.timeOut0 = setTimeout(()=>{
        // STAY HUMBLE文字
        this.textAnimation1 = true
      },1000)
      this.timeOutList.timeOut1 = setTimeout(()=>{
        this.active = 1
        /* 第一页 */
        // 线条
        this.textAnimation1 = false
        this.textAnimation3 = true
      },4000)
      this.timeOutList.timeOut11 = setTimeout(()=>{
        // 10year
        this.imgAnimation1 = true
        this.imgAnimation2 = true
      },4500)
    },
    methods:{
      loadPage(){
          this.active = 0;
          this.clearTimeoutF()
          this.textAnimation1=false,
          this.imgAnimation1=false,
          this.imgAnimation2=false,
          this.textAnimation3=false,
          this.textAnimation2=false,
          this.imgAnimation3=false,
          this.textAnimation4=false,
          this.textAnimation5=false,
          this.contentAnimation1=false,
          this.content2Animation=false,
          this.content2AnimationLeave=false;
        if(this.active === 0){
            this.timeOutList.timeOut0 = setTimeout(()=>{
              // STAY HUMBLE文字
              this.textAnimation1 = true
            },800)
            this.timeOutList.timeOut1 = setTimeout(()=>{
              this.active = 1
              /* 第一页 */
              // 线条
              this.textAnimation3 = true
            },3800)
            this.timeOutList.timeOut11 = setTimeout(()=>{
              // 10year
              this.imgAnimation1 = true
              this.imgAnimation2 = true
            },4300)
        }
      },
      scrollF(text){
        let that = this;
        if(text === 1 && that.active !== 0){
           if(that.active === 3){
             that.$emit('pageChange',1);
             return
           }
            if(that.active === 1){
                /* 第一页离开 */
              that.textAnimation2 = true
                /* 第二页 */
              that.timeOutList.timeOut2 = setTimeout(()=>{
                that.textAnimation3 = false
                that.imgAnimation1 = false
                that.imgAnimation2 = false
                that.textAnimation2 = false
                that.textAnimation1 = false
                that.active = 2
                // about us 图片
                that.imgAnimation3 = true
                // title
                that.textAnimation4 = true
                // 一大段文字
                that.textAnimation5 = true
              },800)
            }else if(that.active === 2){
                /* 第二页离开 */
              that.contentAnimation1 = true
              that.timeOutList.timeOut3 = setTimeout(()=>{
                that.imgAnimation3 = false
                that.textAnimation4 = false
                that.textAnimation5 = false
                that.contentAnimation1 = false
                that.active = 3
                /* 第三页 */
                that.content2Animation = true
              },1000)
            }
        }else if(text === 0){
           if(that.active === 1){
             that.$emit('pageChange',0);
             return
           }
            // 向上
            if(that.active === 3){
              that.content2AnimationLeave = true
                 /* 第二页 */
              that.timeOutList.timeOut2 = setTimeout(()=>{
                that.content2Animation = false
                that.content2AnimationLeave = false
                that.active = 2
                // about us 图片
                that.imgAnimation3 = true
                // title
                that.textAnimation4 = true
                // 一大段文字
                that.textAnimation5 = true
              },1000)
            }else if(that.active === 2){
                /* 第二页离开 */
              that.contentAnimation1 = true
              that.timeOutList.timeOut1 = setTimeout(()=>{
                that.imgAnimation3 = false
                that.textAnimation4 = false
                that.textAnimation5 = false
                that.contentAnimation1 = false
                  that.active = 1
                  /* 第一页 */
                  // 线条
                  that.textAnimation3 = true
                },1000)
                that.timeOutList.timeOut11 = setTimeout(()=>{
                  // 10year
                  that.imgAnimation1 = true
                  that.imgAnimation2 = true
                },1500)
            }
        }
      },
      clearTimeoutF(){
        for(let key in this.timeOutList){
          clearInterval(this.timeOutList[key]);
        }
        console.log(this.timeOutList)
      },
    },
}
</script>

<style lang="scss" scoped>
.divBox{
  width: 100%;
  height:100vh;
  z-index: 2;
  background:url('../../../../public/img/img_abouttexture.png') no-repeat 0 0 ;
  background-size:100% 100%;
  background-color:#1a2445;
  position: relative;
  .indexList{
    position: absolute;
    right:37px;
    bottom:6.111vh;
    div{
      width: 6px;
      height: 6px;
      background: #DAB56E;
      opacity: 0.3;
      border-radius: 50%;
      margin-bottom:12px;
      &:last-child{
        margin-bottom:0;
      }
      &.active{
        opacity: 1;
      }
    }
  }
}
  .text1{
    color:#fff;
    font-size: 40px;
    width:100%;
    height:162px;
    line-height: 70px;
    position: absolute;
    top:0;
    bottom:0;
    text-align: center;
    font-family: HarmonyOS Sans SC;;
    margin:auto 0;
    div{
      opacity: 0;
    }
  }
@keyframes text1-change1 {
    0% { 
    font-size: 40px;
    opacity: 0;
    } 
      40% { 
    font-size: 50px;
    opacity: 1;
    } 
    70% { 
    font-size: 50px;
      opacity: 1;
    } 
    100% { 
    font-size: 50px;
      opacity: 0;
    } 
} 
.text1-animation { 
    animation: text1-change1 3s linear; 
    animation-fill-mode:forwards;
}
.text2{
  position: absolute;
  top:50vh;
  margin-top:-9.5vh;
  left:0;
  right:0;
  width:657px;
  height:19vh;
  margin-left:auto;
  margin-right:auto;
  .line{
    height:0px;
    width:1px;
    background:#dddddd;
    position: absolute;
    display: inline-block;
    left:0;
    top:0;
    right:0;
    bottom:0;
    margin:auto;
    opacity: 0.5;
  }
  img{
    height:17.78vh;
    position: absolute;
  }
  .img1{
      right:50%;
      margin-right:15px;
      opacity: 0;
  }
  .img2{
      left:50%;
      margin-left:15px;
      opacity: 0;
  }
}
@keyframes text2-change1 {
    0% { 
      top:50vh;
    } 
    100% {
      top: -28.5vh;
    } 
} 
.text2-animation { 
    animation: text2-change1 1.2s linear;
    animation-fill-mode:forwards;
}
@keyframes text3-change1 {
    0% { 
      height:0px;
    } 
    100% {
      height:15.55vh;
    } 
} 
.text3-animation { 
    animation: text3-change1 0.5s linear;
    animation-fill-mode:forwards;
}
@keyframes img1-change1 {
    0% { 
      margin-right:15px;
      opacity: 0;
    } 
    100% {
      margin-right:45px;
      opacity: 1;
    } 
} 
.img1-animation { 
    animation: img1-change1 0.8s linear;
    animation-fill-mode:forwards;
}
@keyframes img2-change1 {
    0% { 
      margin-left:15px;
      opacity: 0;
    } 
    100% {
      margin-left:45px;
      opacity: 1;
    } 
} 
.img2-animation { 
    animation: img2-change1 0.8s linear;
    animation-fill-mode:forwards;
}
.imgDiv{
  height:60.89vh;
  width:100%;
  overflow: hidden;
  position: relative;
  img{
    position: absolute;
    // top:-95px;
    top:61.1vh;
    width:100%;
    left:0;
  }
}
@keyframes img3-change1 {
    0% { 
      top:61.1vh
    } 
    100% {
      top:-18.56vh;
    } 
} 
.img3-animation {
    animation: img3-change1 0.5s linear;
    animation-fill-mode:forwards;
}
.bottomText{
  position: relative;
  color:#fff;
  text-align: center;
  font-size: 17Px;
  line-height: 29Px;
  .title{
    color:#DAB56E;
    line-height: 7.5vh;
    margin-top:7.78vh;
    opacity: 0;
  }
}
.divContent{
  position: absolute;
  width:100%;
  top:1vh;
  opacity: 0;
}
@keyframes text4-change1 {
    0% { 
      margin-top:10vh;
      opacity: 0;
    } 
    100% {
      margin-top:7.78vh;
      opacity: 1;
    } 
} 
.text4-animation {
    animation: text4-change1 0.75s linear;
    animation-fill-mode:forwards;
}
@keyframes text5-change1 {
    0% { 
      margin-top:10vh;
      opacity: 0;
    } 
    100% {
      margin-top:7.78vh;
      opacity: 0.8;
    } 
} 
.text5-animation {
    animation: text5-change1 1s linear;
    animation-fill-mode:forwards;
}
.aboutUsPage{
  position: absolute;
  top:0;
  left:0;
  width:100%;
}
@keyframes content1-change1 {
    0% { 
      top:0;
    } 
    100% {
      top:-100vh;
    } 
} 
.content1-animation {
    animation: content1-change1 1s linear;
    animation-fill-mode:forwards;
}
.content2{
  position: absolute;
  bottom:-100vh;
  left:0;
  width:100%;
  height: 100%;
  color:#fff;
  font-size: 16Px;
  .aboutUsText{
    width: 665px;
    height: 90px;
    font-size: 120px;
    font-family: HarmonyOS_Sans_SC_Bold;
    color: #FFFFFF;
    line-height: 90px;
    position: absolute;
    right:61px;
    bottom:183Px;
    opacity: 0.03;
    @media screen and (min-width: 1100px) {
        bottom:183Px;
    }
    @media screen and (min-width: 1440px) {
        bottom:183Px;
    }
    @media screen and (min-width: 1800px) {
        bottom:133Px;
    }
  }
  .content2-text1{
    position: absolute;
    bottom: 11.9vh;
    left:65px;
    opacity: 0.8;
  }
  .content2-text2{
    position: absolute;
    bottom: 1.78vh;
    left:65px;
    opacity: 0.8;
    line-height: 25Px;
  }
}
@keyframes content2-text1-change1 {
    0% { 
      bottom: 11.9vh;
    } 
    100% {
      bottom: 15vh;
    } 
} 
.content2-text1-animation {
    animation: content2-text1-change1 0.8s linear;
    animation-fill-mode:forwards;
    animation-delay:0.5s;
}
@keyframes content2-aboutUsText-change1 {
    0% { 
      bottom: 143Px;
    } 
    100% {
      bottom: 183Px;
    } 
}
@keyframes content2-aboutUsText-change2 {
    0% { 
      bottom: 90Px;
    } 
    100% {
      bottom:133Px;
    } 
}
.content2-aboutUsText-animation {
    @media screen and (min-width: 1440px) {
      animation: content2-aboutUsText-change2 0.8s linear;
    }
    @media screen and (min-width: 1800px) {
      animation: content2-aboutUsText-change1 0.8s linear;
    }
    animation-fill-mode:forwards;
    animation-delay:0.5s;
}
@keyframes content2-text2-change1 {
    0% { 
      bottom: 0.78vh;
    } 
    100% {
      bottom: 7.5vh;
    } 
}
.content2-text2-animation {
    animation: content2-text2-change1 0.9s linear;
    animation-fill-mode:forwards;
    animation-delay:0.5s;
}
@keyframes content2-change1 {
    0% { 
      bottom:-100vh;
    } 
    100% {
      bottom:0;
    } 
} 
.content2-animation {
    animation: content2-change1 1s linear;
    animation-fill-mode:forwards;
}
@keyframes content2-change2 {
    0% {
      bottom:0;
    } 
    100% {
      bottom:-100vh;
    } 
}
.content2-leave{
    animation: content2-change2 1s linear;
    animation-fill-mode:forwards;
}
.imgBox{
  position: absolute;
  width:1300px;
  height:38vh;
  top:130px;
  left:0;
  right:0;
  margin:0 auto;
  .img-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #081951;
    filter: opacity(70%);
  }
  &>div{
    position: relative;
    &>div{
      position: absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      filter: opacity(60%) grayscale(100%);
    }
    span{
      position: absolute;
      bottom:50%;
      width:100%;
      text-align: center;
      font-size: 29px;
      height:41px;
      margin-bottom:-20.5px;
      z-index:10
    }
    .background{
      width: 177px;
      height: 0px;
      background: #DAB56E;
      filter: none;
      margin-bottom:-2.444vh;
      left:0;
      right:0;
      margin-left:auto;
      margin-right:auto;
      z-index:9
    }
  }
  @keyframes content2-span-text {
    0% { 
      margin-bottom:-4.444vh;
    } 
    100% {
      margin-bottom:-2.222vh;
    } 
  }
  @keyframes content2-span-back {
    0% { 
      height: 0px;
      margin-bottom:-2.844vh;
    } 
    100% {
      height: 41px;
      margin-bottom:-2.244vh;
    } 
  }
        @keyframes content2-img {
          0%{
            transform: scale(1,1);
          }
          100% {
            transform: scale(1.1,1.1);
            filter: none;
          } 
        }
  &>div:hover{
      div{
        animation: content2-img 2s linear;
        animation-fill-mode:forwards;
        animation-delay:0.4s;
      }
    .text{
      animation: content2-span-text 0.5s linear;
      animation-fill-mode:forwards;
    }
    .background{
        animation: content2-span-back 0.5s linear;
        animation-fill-mode:forwards;
        animation-delay:0.3s;
    }
  }
  .img1Box{
    position:absolute;
    left:0;
      top:3.5vh;
    width:373px;
    height:54.1vh;
    z-index: 10;
    clip-path: polygon(0 0, 100% 0, 75.87% 100%, 0 100%);
    box-sizing: border-box;
    .img1{
      background:#1a2445 url('../../../../public/img/img_about_hongkong.png') no-repeat center ;
    }
    .text{
      text-align: left;
      margin-left:18.5%;
    }
    .background{
      width: 197px;
      margin-left:16%;
    }
  }
  .img2Box{
    position:absolute;
      left:273px;
      top:8.6vh;
    width:412px;
    height:54.1vh;
    z-index: 9;
    clip-path: polygon(21.4% 0, 100% 0, 79.3% 100%, 0 100%);
    .img2{
      background:#1a2445 url('../../../../public/img/img_about_newyork.png') no-repeat center ;
    }
  }
  .img3Box{
      position:absolute;
      top:11.22vh;
      left:595px;
      width:412px;
      height:54.1vh;
    z-index: 8;
      clip-path: polygon(20.6% 0, 100% 0, 79.3% 100%, 0 100%);
    .img3{
      background:#1a2445 url('../../../../public/img/img_about_singapore.png') no-repeat center ;
    }
  }
  .img4Box{
    position:absolute;
    right:0px;
    top:5.333vh;
    width:373px;
    height:54.1vh;
    z-index: 7;
    clip-path: polygon(23.4% 0, 100% 0, 100% 100%, 0 100%);
    .img4{
      background:#1a2445 url('../../../../public/img/img_about_paloalto.png') no-repeat center ;
    }
    .text{
      text-align: left;
      margin-left: 37%;
    }
    .background{
      width: 197px;
      margin-right:16.5%;
    }
  }
}
@keyframes content2-img1-change1 {
    0% { 
      top:3.5vh;
    } 
    100% {
      top:0;
    } 
}
.content2-img1-animation {
    animation: content2-img1-change1 0.8s linear;
    animation-fill-mode:forwards;
    animation-delay:0.5s;
}
@keyframes content2-img2-change1 {
    0% { 
      left:273px;
      top:8.6vh;
    } 
    100% {
      left:273px;
      top:6.6vh;
    } 
}
.content2-img2-animation {
    animation: content2-img2-change1 0.8s linear;
    animation-fill-mode:forwards;
    animation-delay:0.5s;
}
@keyframes content2-img3-change1 {
    0% { 
      top:11.22vh;
      left:595px;
    } 
    100% {
      top:2.22vh;
      left:607px;
    } 
}
.content2-img3-animation {
    animation: content2-img3-change1 0.8s linear;
    animation-fill-mode:forwards;
    animation-delay:0.5s;
}
</style>