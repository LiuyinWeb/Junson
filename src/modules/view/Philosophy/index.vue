<template>
  <div class="divBox">
    <div class="imgBox">
      <div class="imgBox-part" @click="changeActive(1)" :class="{active: acitveIndex === 1}">
        <div class="img">
          <div class="verticalText verticalText0" :class="{'textSide-animation': acitveIndex === 1,'textSideLoad': backLeaveAnimation}">MISSION</div>
          <div class="textBox" :class="{'textBox-animation': acitveIndex === 1 && backLeaveAnimation}">
            <div :class="{'textBox-title-animation': acitveIndex === 1 && backLeaveAnimation}" class="title">MISSION</div>
            <div class="content">
              <div>Anchored by permanent capital, and with an eye</div>
              <div>towards long-term sustainability, Junson Capital’s</div>
              <div>
                mission is to invest in and develop improvements to
              </div>
              <div>people’s wellbeing and quality of life.</div>
            </div>
            <div :class="{'bottomText-animation': acitveIndex === 1}" class="bottomText">
              WHY US.
            </div>
          </div>
          <div class="gradientDiv"></div>
          <div :class="{'backLeave-animation': backLeaveAnimation}" class="backLeave "></div>
          <div class="img-mask"></div>
          <div class="imgDiv">
            <div class="imgBack imgBack1"></div>
          </div>
        </div>
      </div>
      <div class="imgBox-part" @click="changeActive(2)" :class="{active: acitveIndex === 2}">
        <div :class="{'backLeave-animation1': backLeaveAnimation}" class="backLeave "></div>
        <div class="img">
          <div class="verticalText" :class="{'textSide-animation': acitveIndex === 2}">PARTNERSHIP</div>
          <div class="textBox" :class="{'textBox-animation': acitveIndex === 2}">
            <div :class="{'textBox-title-animation': acitveIndex === 2}" class="title">PARTNERSHIP</div>
            <div class="content">
              <div>Junson Capital strives to be more than just an investor,</div>
              <div>but a long-term business partner and incubator,</div>
              <div>leveraging experience, connections and responsible</div>
              <div>capital deployment.</div>
            </div>
            <div :class="{'bottomText-animation': acitveIndex === 2}" class="bottomText">
              WHY US.
            </div>
          </div>
          <div class="gradientDiv"></div>
            <div class="img-mask"></div>
          <div class="imgDiv">
            <div class="imgBack imgBack2"></div>
          </div>
        </div>
      </div>
      <div class="imgBox-part" @click="changeActive(3)" :class="{active: acitveIndex === 3}">
          <div :class="{'backLeave-animation1': backLeaveAnimation}" class="backLeave"></div>
        <div class="img">
          <div class="verticalText verticalText2" :class="{'textSide-animation': acitveIndex === 3}">INNOVATION</div>
          <div class="textBox" :class="{'textBox-animation': acitveIndex === 3}">
            <div :class="{'textBox-title-animation': acitveIndex === 3}" class="title">INNOVATION</div>
            <div class="content">
              <div>As a digitized organization, Junson Capital’s platform</div>
              <div>also provides high-tech solutions and innovative</div>
              <div>approaches to data analysis, management and security.</div>
            </div>
            <div :class="{'bottomText-animation': acitveIndex === 3}" class="bottomText">
              WHY US.
            </div>
          </div>
          <div class="gradientDiv"></div>
            <div class="img-mask"></div>
          <div class="imgDiv">
            <div class="imgBack imgBack3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    components:{},
    data(){
        return{
          acitveIndex: 1,
          activeing: false,
          backLeaveAnimation:false,
        }
    },
    mounted(){
      this.backLeaveAnimation = true;
    },
    methods:{
      loadPage(){
        this.acitveIndex = 1;
        this.backLeaveAnimation=false,
        setTimeout(()=>{
          this.backLeaveAnimation = true;
        },500)
      },
      scrollF(text){
        let that =this;
        if(text === 1){
           if(that.acitveIndex === 3){
             that.$emit('pageChange',1);
             return
           }
          that.acitveIndex +=1
        }else if(text === 0){
           if(that.acitveIndex === 1){
             that.$emit('pageChange',0);
             return
           }
           that.acitveIndex -=1
        }
      },
      changeActive(index) {
        if (this.acitveIndex === index) return
        if (this.activeing) return
        this.acitveIndex = index
        this.activeing = true
        setTimeout(() => {
          this.activeing = false
        }, 500)
      }
    },
}
</script>

<style lang="scss" scoped>
.divBox{
  width: 100%;
  height:100%;
  position: relative;
  background-color:#1a2445;
  z-index: 3;
}
.gradientDiv{    
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 99;
  height: 31vh;
  background: linear-gradient(rgba(16, 32, 82, 0), rgba(7, 14, 41, 0.66));
}
.backLeave{
  position: absolute;
  width: 100%;
  height:100%;
  left:0;
  background:url('../../../../public/img/img_abouttexture.png') no-repeat 0 0 ;
  background-image:100% 100%;
  background-color:#1a2445;
  z-index: 9;
}
@keyframes backLeave-change {
    0% {
      left:0;
    }
    100% {
      left:-100%;
      display: none;
    } 
} 
.backLeave-animation {
    animation: backLeave-change 0.9s linear;
    animation-fill-mode:forwards;
}
.backLeave-animation1{
    filter: none!important;
    z-index: 11;
    animation: backLeave-change 0.9s linear;
    animation-fill-mode:forwards;
}
.imgBox{
  width: 100vw;
  height: 100vh;
  position: relative;
  &-part {
    display: inline-block;
    width: calc((100vw - (1270 / 1440) * 100vw) / 2);
    height: 100vh;
    transition: .6s width ease-out,.6s filter ease-out;
    vertical-align: top;
    overflow: hidden;
      position: relative;
    .img {
      position: absolute;
      // width: 100%;
      width: 100%;
      height: 100%;
      overflow: hidden;
        .img-mask {
          position: absolute;
          float: left;
          width: 100%;
          height: 100%;
          background-color: #081951;
          filter: opacity(30%);
          z-index: 1;
        transition: filter 0.3s linear 0.5s;
        }
      .imgDiv{
        width: (1270 / 1440) * 100vw;
        height: 100vh;
        position: relative;
        filter: opacity(60%) grayscale(100%);
        transition: filter 0.3s linear 0.5s;
        z-index: 0;
        img {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    }
    &.active {
      width: (1270 / 1440) * 100vw;
      filter:none;
        .imgDiv{
          filter:none;
          transition: filter 0.5s linear;
        }
        .verticalText{
          opacity: 0;
          transition: opacity 0.5s linear;
        }
        .img-mask {
          filter: opacity(0%);
          transition: filter 0.5s linear;
        }
        img{
            filter: none!important;
        }
    }
  }
  // &>div{
  //   overflow: hidden;
  // }
    .imgBack{
      position: absolute;
      width: 100%;
      height: 100%;
    }
  .imgBack1{
      background:url('../../../../public/img/img_mission.png') no-repeat center;
  }
  .imgBack2{
      background:url('../../../../public/img/img_partnership.png') no-repeat center;
  }
  .imgBack3{
      background:url('../../../../public/img/img_innovation.png') no-repeat center;
  }
  .verticalText{
    transform: rotate(90deg);
    position: absolute;
    top: 200Px;
    left: -98Px;
    font-size:30Px;
    font-family: Montserrat-Light;
    opacity: 0.5;
    color:#fff;
    z-index: 2;
    transition: opacity 0.3s linear 0.5s;
  }
  .verticalText0{
    left: -54Px;
    top: 158Px;
  }
  .verticalText2{
    left: -86Px;
    top: 188Px;
  }
}
  .textBox{
    color:#fff;
    position:absolute;
    top:75vh;
    opacity: 0;
    left:150px;
    z-index: 100;
    .title{
      font-size:60px;
      margin-bottom:4.222vh;
      font-family: HarmonyOS_Sans_SC_Bold;
    }
    .content{
      font-size:16px;
      opacity: 0.8;
      margin-bottom:1.111vh;
      line-height: 24px;
    }
    .bottomText{
      font-size:12px;
      color:#E7C177;
      margin-top:22Px;
    }
  @keyframes bottomText-change {
    0% {
     margin-top:27Px;
    }
    100% {
     margin-top:15Px;
    } 
  }
  .bottomText-animation {
      animation: bottomText-change 0.5s linear;
      animation-fill-mode:forwards;
      animation-delay:0.6s;
  }
  }
  @keyframes textBox-change {
    0% {
      top:75vh;
     opacity: 0;
    }
    30%{
     opacity: 1;
    }
    100% {
      top:65vh;
      opacity: 1;
    } 
  }
  .textBox-animation {
      animation: textBox-change 0.5s linear;
      animation-fill-mode:forwards;
      animation-delay:0.5s;
  }
  @keyframes textBox-title-change {
    100% {
      margin-bottom:2.222vh;
    } 
  }
  .textBox-title-animation {
      animation: textBox-title-change 0.5s linear;
      animation-fill-mode:forwards;
      animation-delay:0.6s;
  }
  @keyframes textSide-change {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes textSideLoad-change {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
  // .textSide-animation {
  //     animation: textSide-change 0.3s linear;
  //     animation-fill-mode:forwards;
  // }
</style>