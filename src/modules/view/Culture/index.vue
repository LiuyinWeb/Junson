<template>
  <div class="divBox">
    <div class="firstDiv">
      <div :class="[{ 'leftImg-animation-leave': page1Leave},{ 'leftImg-animation': page1ImgLoad}]" class="leftImg ">
        <img src="@img/img_sailboat.png" alt="" />
      </div>
      <div :class="[{ 'leftBox-leave': page1Leave}]" class="">
        <div :class="[{ 'verticalText-animation': verticalTextLoad}]" class="verticalText">CHLTURE</div>
        <div class="leftBox">
          <div :class="[{ 'line-animation': linetLoad}]" class="line"></div>
          <div :class="[{ 'textDiv-animation': textDivLoad}]" class="textDiv ">
            <div>
              Junson Capital’s core values of integrity, passion, innovation and
              excellence encourage model corporate citizenship at the individual
              and organizational level.
            </div>
            <div class="content">
              In line with Junson Capital’s commitment to partnership and
              responsibility in investing, Junson Capital’s talent centric
              approach to hiring and corporate culture fosters an environment
              where individual success is measured not just by career growth
              within Junson Capital, but through lifelong personal development
              and achievement.
            </div>
          </div>
          <ul :class="[{ 'imgUl-animation': verticalTextLoad}]" class="imgUl ">
            <li>
              <div class="imgBox">
                <img src="@img/icon_inegrity@2x.png" alt="" />
              </div>
              <span>Integrity</span>
            </li>
            <li>
              <div class="imgBox">
                <img src="@img/icon_passion@2x.png" alt="" />
              </div>
              <span>Passion</span>
            </li>
            <li>
              <div class="imgBox">
                <img src="@img/icon_innovation@2x.png" alt="" />
              </div>
              <span>Innovation</span>
            </li>
            <li>
              <div class="imgBox">
                <img src="@img/icon_excellence@2x.png" alt="" />
              </div>
              <span>Excellence</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div :class="[{ 'twoDiv-leave': twoDivleave}]" class="twoDiv">
      <div :class="[{ 'topImg-animation': topImgLoad}]"  class="topImg">
       <img src="@img/img_team.png" alt="">
      </div>
      <div class="bottomImg" >
        <img :class="[{ 'bottomImg-animation': bottomImgLoad}]" src="@img/img_Integrity.png" alt="">
      </div>
      <div :class="[{ 'twoDiv-title-animation': twoDivTitleLoad}]" class="title ">
        <div>
          TALENT
        </div>
        <div>
          CENTRIC 
        </div>
      </div>
      <div :class="[{ 'twoDiv-content-animation': twoDivContentLoad}]" class="content ">
        <div>
          Junson Capital prizes flexibility, diversity, curiosity and
        </div>
        <div>
          ambition. We are constantly seeking high-achieving and
        </div>
        <div>
          dynamic individuals to strengthen and complement our team. 
        </div>
        <div :class="[{ 'twoDiv-bottomText-animation': twoDivBottomTextLoad}]" class="bottomText ">
          <img src="@img/icon_email@2x.png" alt="">hr@junsoncapital.com
        </div>
      </div>
    </div>
    <div v-show="active !== 0" class="indexList">
      <div :class="{'active': active === 1}"></div>
      <div :class="{'active': active === 2}"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      active:1,
      page1Leave:false,
      page1ImgLoad:false,
      verticalTextLoad:false,
      linetLoad:false,
      topImgLoad:false,
      bottomImgLoad:false,
      twoDivTitleLoad:false,
      twoDivContentLoad:false,
      twoDivBottomTextLoad:false,
      twoDivleave:false,
      textDivLoad:false,
      timeOutList:{
        page1:null,
        page11:null,
        page2:null,
        page21:null,
      }
    };
  },
  mounted() {      
    // 第一页加载
    this.page1ImgLoad = true;
    this.timeOutList.page1= setTimeout(()=>{
      this.verticalTextLoad = true;
      this.linetLoad = true;  
    },500)
    this.timeOutList.page1= setTimeout(()=>{
      this.textDivLoad = true;
    },600)
    // // 第一页离开
    // this.timeOutList.page11= setTimeout(()=>{
    //   this.page1Leave = true;
    // },4000)
    // // 第二页加载
    // this.timeOutList.page2= setTimeout(()=>{
    //   this.active = 2
    //   this.page1ImgLoad = false;
    //   this.verticalTextLoad = false;
    //   this.linetLoad = false;
    //   // this.page1Leave = false;

    //   this.topImgLoad = true;
    //   this.bottomImgLoad = true;
    //   this.twoDivTitleLoad =true;
    //   this.twoDivContentLoad =true;
    // },5000)
    // this.timeOutList.page21= setTimeout(()=>{
    //   this.twoDivBottomTextLoad = true;
    // },5100)
  },
  methods: {
      loadPage(){
        this.active = 1;
      this.page1Leave =false,
      this.page1ImgLoad =false,
      this.verticalTextLoad =false,
      this.linetLoad =false,
      this.topImgLoad =false,
      this.bottomImgLoad =false,
      this.twoDivTitleLoad =false,
      this.twoDivContentLoad =false,
      this.twoDivBottomTextLoad =false,
      this.twoDivleave =false,
      this.textDivLoad =false;
        if(this.active === 1){
          // 第一页加载
          setTimeout(()=>{
            this.page1ImgLoad = true;
          },500)
          this.timeOutList.page1= setTimeout(()=>{
            this.verticalTextLoad = true;
            this.linetLoad = true;
          },1000)
          this.timeOutList.page1= setTimeout(()=>{
            this.textDivLoad = true;
          },1100)
        }
      },
      scrollF(text){
        let that =this;
        if(text === 1  && that.active !== 0){
           if(that.active === 2){
             that.$emit('pageChange',1);
             return
           }
            if(that.active === 1){
                /* 第一页离开 */
              that.page1Leave = true;
                /* 第二页 */
              that.timeOutList.page2= setTimeout(()=>{
                that.active = 2
                that.page1ImgLoad = false;
                that.verticalTextLoad = false;
                that.linetLoad = false; 
                that.textDivLoad = false;
                // that.page1Leave = false;

                that.topImgLoad = true;
                that.bottomImgLoad = true;
                that.twoDivTitleLoad =true;
                that.twoDivContentLoad =true;
              },500)
              that.timeOutList.page21= setTimeout(()=>{
                that.twoDivBottomTextLoad = true;
              },600)
            }
        }else if(text === 0){
           if(that.active === 1){
             that.$emit('pageChange',0);
             return
           }
            if(that.active === 2){
              that.twoDivleave = true
                 /* 第一页 */
              that.timeOutList.page1= setTimeout(()=>{
                that.page1Leave = false;
                that.active = 1
                that.topImgLoad = false;
                that.bottomImgLoad = false;
                that.twoDivTitleLoad =false;
                that.twoDivContentLoad =false;
                that.twoDivBottomTextLoad = false;
                that.twoDivleave = false
                that.page1ImgLoad = true;
              },600)
              that.timeOutList.page1= setTimeout(()=>{
                that.verticalTextLoad = true;
                that.linetLoad = true;
              },1100)
              that.timeOutList.page1= setTimeout(()=>{
                that.textDivLoad = true;
              },1200)
            }
        }
      },
      clearTimeoutF(){
        console.log(this.timeOutList)
        for(let key in this.timeOutList){
          clearInterval(this.timeOutList[key]);
        }
        console.log(this.timeOutList)
      },},
};
</script>

<style lang="scss" scoped>
.divBox {
  width: 100%;
  height:100vh;
  background: #1a2445;
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
.leftImg {
  width: 472px;
  height: 100vh;
  position: relative;
  opacity: 0;
  z-index: 2;
  img {
    width: 100%;
    height: 100vh;
  }
}
.verticalText {
  position: absolute;
  transform: rotate(90deg);
  top: 50vh;
  width: 30vw;
  height: 89px;
  line-height: 89px;
  margin-top: -44.5px;
  z-index: 1;
  font-size: 90px;
  opacity: 0;
  left: 18vw;
  font-weight: 700;
  font-family: HarmonyOS_Sans_SC_Bold;
  background: url("../../../../public/img/img_sailboat2.png") repeat 44.98vw 147.32999999999998vh;
  background-size: 55vw 155.95vh;
  -webkit-background-clip: text; /* Chrome 用户注意加 -webkit 前缀 */
  background-clip: text;
  color: transparent; /* 文字设为透明 */
}
@keyframes leftImg-change {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes leftImg-leave {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.leftImg-animation {
  animation: leftImg-change 0.5s linear;
  animation-fill-mode: forwards;
}
.leftImg-animation-leave {
  animation: leftImg-leave 0.5s linear;
  animation-fill-mode: forwards;
}
@keyframes verticalText-change {
  0% {
    opacity: 0;
    left: 18vw;
  }
  100% {
    left: 22.3vw;
    opacity: 1;
  }
}
.verticalText-animation {
  animation: verticalText-change 0.5s linear;
  animation-fill-mode: forwards;
}
@keyframes leftBox-change-leave {
  0% {
    transform: translateY(none);
  }
  100% {
    transform: translateY(-100vh);
  }
}
.leftBox-leave {
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  animation: leftBox-change-leave 0.5s linear;
  animation-fill-mode: forwards;
}
.leftBox {
  color: #fff;
  opacity: 0.8;
  width: 592px;
  font-size: 16Px;
  word-break: hyphenate;
  position: absolute;
  left: 48vw;
  top: 50vh;
  margin-top: -18.33vh;
  .textDiv {
    width: 592px;
    margin-left: 700px;
    line-height: 25Px;
    opacity: 0;
    .content{
      margin-top:2.555vh;
    }
  }
  @keyframes textDiv-change {
    0% {
      margin-left: 700px;
      opacity: 0;
    }
    100% {
      margin-left: 0;
      opacity: 0.8;
    }
  }
  .textDiv-animation {
    animation: textDiv-change 0.4s linear;
    animation-fill-mode: forwards;
  }
  .line {
    width: 0px;
    height: 2px;
    background: #dab56e;
    opacity: 1;
    margin-bottom: 4.666vh;
  }
  @keyframes line-change {
    0% {
      width: 0px;
    }
    100% {
      width: 60px;
    }
  }
  .line-animation {
    animation: line-change 0.5s linear;
    animation-fill-mode: forwards;
  }
  .imgUl {
    list-style: none;
    padding: 0;
    opacity: 0;
    li {
      float: left;
      margin-right: 86px;
      text-align: center;
      .imgBox {
        width: 56px;
        height: 56px;
        display: inline-block;
        margin-bottom: 5px;
        img {
          width: 56px;
        }
      }
      span {
        display: block;
        opacity: 0.8;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  @keyframes imgUl-change {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .imgUl-animation {
    animation: imgUl-change 0.6s linear;
    animation-fill-mode: forwards;
  }
}
  @keyframes twoDiv-leave-change {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }
.twoDiv-leave{
    animation: twoDiv-leave-change 0.6s linear;
    animation-fill-mode: forwards;
}
.firstDiv,.twoDiv{
  position: absolute;
  left:0;
  right:0;
  bottom:0;
  top:0;
}
.twoDiv{
  color:#fff;
  .topImg{
    position: absolute;
    right:0;
    opacity:0;
    top:0;
    width:408px;
    height:71.66vh;
    overflow: hidden;
    img{
      @media screen and (device-aspect-ratio:4/3) {
        height: 100%;
      }
      @media screen and (device-aspect-ratio:16/9) {
        width:100%;
      }
    }
     transform: translateX(408px);
  }
  @keyframes topImg-change {
    0% {
      transform: translateX(408px);
      opacity:0;
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
  .topImg-animation {
    animation: topImg-change 0.8s linear;
    animation-fill-mode: forwards;
  }
  .bottomImg{
    position: absolute;
    right:422px;
    bottom:0;
    width:408px;
    height:71.66vh;
    overflow: hidden;
    img{
      @media screen and (device-aspect-ratio:4/3) {
        height: 100%;
      }
      @media screen and (device-aspect-ratio:16/9) {
        width:100%;
      }
      transform: translateX(408px);
      opacity: 0;
    }
  @keyframes bottomImg-change {
    0% {
      transform: translateX(408px);
      opacity: 0;
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
  .bottomImg-animation {
    animation: bottomImg-change 0.5s linear;
    animation-fill-mode: forwards;
  }
  }
  .title{
    font-size:69px;
    text-align: right;
    font-family: HarmonyOS_Sans_SC_Bold;
    position: absolute;
    right:804px;
    top:21.66vh;
    opacity: 0;
  }
  @keyframes twoDiv-title-change {
    0% {
      opacity: 0;
      right:1004px;
    }
    100% {
      right:804px;
      opacity: 1;
    }
  }
  .twoDiv-title-animation {
    animation: twoDiv-title-change 0.5s linear;
    animation-fill-mode: forwards;
  }
  .content{
    font-size:16x;
    text-align: right;
    position: absolute;
    right:894px;
    min-width:595px;
    line-height: 25px;
    top:51vh;
      opacity: 0;
    div{
      display: block;
    }
    .bottomText{
      img{
        width:20px;
        height:20px;
        vertical-align: text-bottom;
        margin-right:5px;
      }
      font-size: 16px;
      color:#DAB56E;
      margin-right:-30px;
      margin-top:18Px;
    }
  }
  @keyframes twoDiv-content-change {
    0% {
      opacity: 0;
      right:1240px;
    }
    100% {
      right:875px;
      opacity: 0.8;
    }
  }
  .twoDiv-content-animation {
    animation: twoDiv-content-change 0.5s ease-out;
    animation-fill-mode: forwards;
  }
  @keyframes twoDiv-bottomText-change {
    0% {
      margin-right:-30Px;
    }
    100% {
      margin-right:0;
    }
  }
  .twoDiv-bottomText-animation {
    animation: twoDiv-bottomText-change 0.3s linear;
    animation-fill-mode: forwards;
  }
}
</style>