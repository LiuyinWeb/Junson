<template>
  <div class="divBox">
    <div class="backLeave backLeave-animation">
    </div>
    <div class="imgBox">
      <div @mouseover="imgChange(1)" class="img1Box" :class="{'img1Box-animation': img1BoxNarrow,'img1Box-animation-amplification': img1BoxAmplification}">
        <div class="img img1"></div>
        <div class="textBox textBox-animation">
          <div class="title textBox-title-animation">MISSION</div>
          <div class="content">
            Anchored by permanent capital, and with an eye towards long-term sustainability, Junson Capital’s mission is to invest in and develop improvements to people’s wellbeing and quality of life. 
          </div>
          <div class="bottomText">
            WHY US.
          </div>
        </div>
      </div>
      <div @mouseover="imgChange(2)" class="img2Box" :class="{'img2Box-animation-movel': img2BoxMoveLeft,'img2Box-animation-mover': img2BoxMoveRight,
      'img2Box-animation-right': img2BoxRight,'img2Box-narrow-left': img2BoxNarrowLeft}">
        <div class="img img2"></div>
        <div class="verticalText">PARTNERSHIP</div>
      </div>
      <div @mouseover="imgChange(3)" class="img3Box" :class="{'img3Box-animation-amplification': img3BoxAmplification,'img3Box-animation-aarrow': img3BoxNarrow}">
        <div class="img img3"></div>
        <div class="verticalText verticalText2">INNOVATION</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    components:{},
    data(){
        return{
          active:1,
          img1BoxNarrow:false,
          img1BoxAmplification:false,
          // 当在第一张点击第三张时向左移动
          img2BoxMoveLeft:false,
          // 当在第三张点击第一张时向右移动
          img2BoxMoveRight:false,
          // 当在第三张点击第二向右展开
          img2BoxRight:false,
          // 当在第二张点击第三向左缩
          img2BoxNarrowLeft:false,
          img3BoxNarrow:false,
          img3BoxAmplification:false,
        }
    },
    mounted(){
    },
    methods:{
      imgChange(num){
        // eslint-disable-next-line no-debugger
        console.log(this.active)
        if(num === 2){
          if(this.active ===1){
            this.img1BoxNarrow = true;
          }else if(this.active ===3){
            document.getElementsByClassName('img3Box')[0].style.zIndex=1;
            this.img2BoxRight = true;
          }
          setTimeout(()=>{
            document.getElementsByClassName('img2Box')[0].style.zIndex=3;
            document.getElementsByClassName('img1Box')[0].style.zIndex=2;
            this.img1BoxNarrow = false;
            this.img2BoxRight = false;
          },1200)
        } else if(num === 3){
          if(this.active ===1){
            this.img1BoxNarrow = true;
            setTimeout(()=>{
            },1200)
          }else if(this.active ===2){
            document.getElementsByClassName('img1Box')[0].style.zIndex=0;
            this.img2BoxNarrowLeft = true;
          }
          setTimeout(()=>{
            document.getElementsByClassName('img3Box')[0].style.zIndex=3;
            document.getElementsByClassName('img2Box')[0].style.zIndex=2;
            document.getElementsByClassName('img1Box')[0].style.zIndex=1;
            this.img1BoxNarrow = false;
            this.img2BoxNarrowLeft = false;
          },1200)
        } else if(num === 1){
          if(this.active === 2){
            this.img1BoxAmplification = true;
            setTimeout(()=>{
              this.img1BoxAmplification = false;
            },1200)
          }else if(this.active ===3){
            this.img3BoxAmplification = true;
            this.img1BoxAmplification = true;
            setTimeout(()=>{
              this.img3BoxAmplification = false;
              this.img1BoxAmplification = false;
            },1200)
          }
          setTimeout(()=>{
            document.getElementsByClassName('img1Box')[0].style.zIndex=3;
            document.getElementsByClassName('img2Box')[0].style.zIndex=2;
            document.getElementsByClassName('img3Box')[0].style.zIndex=1;
          })
        }
        this.active = num
        console.log(this.active)
      },
    },
}
</script>

<style lang="scss" scoped>
.divBox{
  width: 100%;
  height:100%;
}
.backLeave{
  position: absolute;
  width: 100%;
  height:100%;
  left:0;
  background:url('../../../../public/img/img_abouttexture.png') no-repeat 0 0 ;
  background-image:100% 100%;
  background-color:#1a2445;
  z-index: 4;
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
.imgBox{
  width: 100%;
  height:100%;
  position: relative;
  .img{
      position: absolute;
      width:1270px;
      height:100%;
  }
  &>div{
    overflow: hidden;
  }
  .img1Box{
    position: absolute;
    left:0;
    right:170px;
    height:100%;
    right:170px;
    z-index: 3;
    .img1{
      background:url('../../../../public/img/img_mission.png') no-repeat center;
      background-size:100% 100%;
    }
  }
  .img2Box{
    position: absolute;
    height:100%;
    right:85px;
    left:85px;
    z-index: 2;
    filter:grayscale(100%);
    .img2{
      background:url('../../../../public/img/img_partnership.png') no-repeat center;
      background-size:100% 100%;
    }
  }
  .img3Box{
    position: absolute;
    height:100%;
    right:0;
    left:170px;
    z-index: 1;
    filter:grayscale(100%);
    .img3{
      background:url('../../../../public/img/img_innovation.png') no-repeat center;
      background-size:100% 100%;
    }
  }
  .verticalText{
    transform: rotate(90deg);
    position: absolute;
    top:21.88vh;
    right:-27px;
    font-size:30px;
    font-family: Montserrat-Light, Montserrat;
    color:#fff;
  }
  .verticalText2{
    transform: rotate(90deg);
    position: absolute;
    top:21.88vh;
    right:145px;
    font-size:30px;
    font-family: Montserrat-Light, Montserrat;
    color:#fff;
  }
}
  @keyframes img1Box-change {
    0%{
      right:170px;
    }
    100% {
      right:1310px;
    } 
  }
  .img1Box-animation {
      animation: img1Box-change 1s linear;
      animation-fill-mode:forwards;
  }
  @keyframes img1Box-change2 {
    0%{
      right:1310px;
    }
    100% {
      right:170px;
    } 
  }
  .img1Box-animation-amplification {
      animation: img1Box-change2 1s linear;
      animation-fill-mode:forwards;
  }
  @keyframes img2Box-change1 {
    0%{
      left:85px;
    }
    100% {
      left:85px;
      right:85px;
    } 
  }
  .img2Box-animation-right {
      animation: img2Box-change1 1s linear;
      animation-fill-mode:forwards;
  }
  @keyframes img2Box-change2 {
    0%{
      left:85px;
      right:85px;
    }
    100% {
      left:85px;
      right:1270px;
    } 
  }
  .img2Box-narrow-left{
      animation: img2Box-change2 1s linear;
      animation-fill-mode:forwards;
  }
  @keyframes img3Box-change {
    0% {
      right:0;
    }
    100% {
      right:0;
      left:170px;
    } 
  }
  .img3Box-animation-amplification {
      animation: img3Box-change 1s linear;
      animation-fill-mode:forwards;
  }
  @keyframes img3Box-change2 {
    0% {
      right:0;
      left:170px;
    }
    100% {
      right:0;
      left:1270px;
    } 
  }
  .img3Box-animation-aarrow {
      animation: img3Box-change2 1s linear;
      animation-fill-mode:forwards;
  }
  .textBox{
    color:#fff;
    width:412px;
    position:absolute;
    top:75vh;
    left:150px;
    .title{
      font-size:60px;
      margin-bottom:4.222vh;
    }
    .content{
      font-size:16px;
      margin-bottom:1.111vh;
    }
    .bottomText{
      font-size:12px;
      color:#E7C177;
    }
  }
  @keyframes textBox-change {
    100% {
      top:65vh;
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
      animation-delay:0.8s;
  }
</style>