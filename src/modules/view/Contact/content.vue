<template>
  <div class="divBox">
    <div class="bottomBox" :class="{'bottomBoxAnimation':imgBoxAnimation}">
      <div class="opacity5">Copyright © 2011-2021 Junson Capital Company Limited. </div>
      <div><span class="opacity5">JUNSON is a trademark of Hope Empire Limited in the United States and other countries. All Rights Reserved.</span> <span class="last"></span><span class="legalLinke" @click="legal">Legal</span> <span class="last"></span><span class="legalLinke" @click="privacy">privacy</span></div>
    </div>
    <div :class="[{ 'imgBox-animation': imgBoxAnimation}]" class="imgBoxDiv">
      <div class="imgBox">
        <div class="img img1">
        </div>
        <div class="img img2">
        </div>
        <div class="img img3">
        </div>
        <div class="img img4">
        </div>
    </div>
    <div class="back"></div>
    </div>
    <div class="textBox">
      <div class="titleBox">
       <div :class="[{ 'titleBox-animation': imgBoxAnimation}]" class="titleBoxContent">CONTACT US</div>
      </div>
      <div :class="[{ 'content-animation': imgBoxAnimation}]" class="content">
        <div>To inquire further about Junson Capital or obtain additional</div>
        <div>information，please contact us.</div>
      </div>
      <div :class="[{ 'bottomText-animation': imgBoxAnimation}]" class="bottomText ">
        <img src="@img/icon_email@2x.png" alt="">corp@junsoncapital.com
      </div>
    </div>
  </div>
</template>

<script>
export default {
    components:{},
    data(){
        return{
          imgBoxAnimation:false,
        }
    },
    mounted(){
        this.imgBoxAnimation=true;
    },
    methods:{
      loadPage(){
          this.imgBoxAnimation=false;
          setTimeout(()=>{
            this.imgBoxAnimation=true;
          },100)
      },
      legal(){
        this.$emit('change','1')
      },
      privacy(){
        this.$emit('change','2')
      }
    },
}
</script>

<style lang="scss" scoped>
.legalLinke{
  cursor: pointer;
}
@media screen and (max-width: 1655px) {
    .divBox .imgBox .img img{
        height:100%;
    }
}
.divBox{
  background:#1A2445;
  width: 100%;
  height:100vh;
  position: relative;
  
  @keyframes imgBox-change {
    0% {
        transform: translateY(100vh);
        opacity: 0;
    }
    100% {
        transform: translateY(0vh);
        opacity: 1;
    }
  }
  .imgBoxDiv{
    transform: translateY(100vh);
    opacity: 0;
    z-index: 2;
  }
  .imgBox-animation {
    animation: imgBox-change 1s ease;
    animation-fill-mode: forwards;
  }
  .imgBox{
    font-size: 0;
    .img{
      display: inline-block;
      width:50vw;
      height:44vh;
      overflow: hidden;
      position: relative;
      img{
        position: absolute;
        top:0;
        bottom:0;
        margin:auto;
        width:100%;
      }
    }
    .img1{
      background:url("../../../../public/img/img_newyork1.png") no-repeat center;
    }
    .img2{
      background:url("../../../../public/img/img_hongkong1.png") no-repeat center;
    }
    .img3{
      background:url("../../../../public/img/img_singapore1.png") no-repeat center;
    }
    .img4{
      background:url("../../../../public/img/img_paloalto1.png") no-repeat center;
    }
  }
  .back{
    position: fixed;
    top:0;
    left:0;
    width:100vw;
    height:88.888vh;
    background:#1A2445;
    opacity: 0.45;
  }
  .textBox{
    position: absolute;
    font-size: 16px;
    color:#fff;
    width:100vw;
    top:35.44vh;
    text-align: center;
    left:0;
    .titleBox{
      font-size: 68px;
      height:11.111vh;
      overflow: hidden;
      font-family: HarmonyOS_Sans_SC_Bold;
      div{
        transform: translateY(11.111vh);
      }
    }
  @keyframes titleBox-change {
    0% {
        transform: translateY(11.111vh);
    }
    100% {
        transform: translateY(0vh);
    }
  }
  .titleBox-animation {
    animation: titleBox-change 0.5s linear;
    animation-fill-mode: forwards;
    animation-delay: 0.6s;
  }
    .content{
      line-height: 24px;
      margin-top:32px;
      margin-bottom:16px;
        opacity: 0;
    }
  @keyframes content-change {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 0.8;
    }
  }
  .content-animation {
    animation: content-change 0.6s linear;
    animation-fill-mode: forwards;
    animation-delay: 0.4s;
  }
  .bottomText{
    img{
      width:18px;
      height:18px;
      vertical-align: text-bottom;
      margin-right:5px;
    }
    color:#DAB56E;
    line-height: 24px;
        opacity: 0;
  }
  @keyframes bottomText-change {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
  }
    .bottomText-animation {
      animation: bottomText-change 0.6s linear;
      animation-fill-mode: forwards;
      animation-delay: 0.4s;
    }
  }
}
.bottomBox{
  position: fixed;
  bottom:3.112vh;
  width:100vw;
  text-align: center;
  font-size:14px;
  color: #FFFFFF;
    font-family: HarmonyOS_Sans_SC_Light;
  line-height: 26px;
        opacity: 0;
  z-index: 0;
  .opacity5{
    opacity: 0.5;
  }
  .last{
    display: inline-block;
    height:12px;
    width:1px;
    margin-left:5px;
    padding-left:5px;
    border-left:1px solid #ddd;
  }
}
.bottomBoxAnimation{
      animation: bottomBox-change 0.1s linear;
      animation-fill-mode: forwards;
      animation-delay: 0.5s;
}
  @keyframes bottomBox-change {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
  }
</style>