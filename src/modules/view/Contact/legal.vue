<template>
  <div class="divBox">
    <img @click="legal" class="returnImg" src="@img/icon_back@2x.png" alt="">
    <div class="content">
       <div class="title">Legal Title is here</div>
        <div class="line"></div>
        <div class="box">
          <div class="topText">
          By accessing or using this website (the “Site”) of Blackstone Inc. and its affiliates (collectively, “Blackstone”), you hereby accept and agree to comply with these Terms and Conditions of Use. You acknowledge your understanding that these Terms and Conditions of Use constitute a binding agreement between you and Blackstone (sometimes referred to as “we” or “us”) that governs your access and use of the Site, which includes any images, text, illustrations, designs, icons, photographs, programs, music clips, downloads, systems and methods of trading, video clips, graphics, user interfaces, visual interfaces, information, data, tools, products, written materials, services and other content (together, “Content”), including but not limited to the design, structure, selection, coordination, expression and arrangement of the Content available on or through the Site.
        </div>
        <div class="bottomText">
          <div>
            PLEASE READ THESE TERMS AND CONDITIONS OF USE CAREFULLY BEFORE USING THE SITE. EACH TIME YOU USE THE SITE, YOUR USE INDICATES YOUR FULL ACCEPTANCE OF AND AGREEMENT TO ABIDE BY THESE TERMS AND CONDITIONS IN CURRENT FORM. IF YOU DO NOT ACCEPT THE TERMS AND CONDITIONS STATED HEREIN, DO NOT USE THE SITE. IF YOU DO NOT AGREE TO THESE TERMS AND CONDITIONS OF USE, YOU AGREE THAT YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE.
          </div>
            YOUR COMPLIANCE WITH THESE TERMS AND CONDITIONS OF USE AND ALL OTHER RULES, PROCEDURES, POLICIES, TERMS AND CONDITIONS THAT GOVERN ALL OR ANY PORTION OF THE SITE IS A CONDITION TO YOUR RIGHT TO ACCESS THE SITE. YOUR BREACH OF ANY PROVISION OF THESE TERMS AND CONDITIONS OF USE OR OTHER RULES, PROCEDURES, POLICIES, TERMS AND CONDITIONS THAT GOVERN ALL OR ANY PORTION OF THE SITE WILL AUTOMATICALLY, WITHOUT THE REQUIREMENT OF NOTICE OR OTHER ACTION, REVOKE AND TERMINATE YOUR RIGHT TO ACCESS THE SITE AND YOU WILL BE FULLY LIABLE FOR CONVERSION, MISAPPROPRIATION, TRESPASS TO CHATTELS AND ALL OTHER CLAIMS AND CAUSES, REGARDLESS OF THE IDENTITY OF CLAIMANT OR INJURED PARTY, ARISING FROM OR RELATING TO YOUR CONTINUED USE OF THE SITE AFTER SUCH BREACH.<br> ARISING FROM OR RELATING TO YOUR CONTINUED USE OF THE SITE AFTER SUCH BREACH.
        </div>
        </div>
    </div>
    <div class="back"></div>
  </div>
</template>

<script>
export default {
    components:{},
    data(){
        return{}
    },
    mounted(){
    },
    methods:{
      legal(){
        this.$emit('change','0')
      }
    },
}
</script>

<style lang="scss" scoped>
.divBox{
    color: #FFFFFF;
    position: relative;
    width:100%;
    height:100vh;
    .back{
      width:100%;
      height:100vh;
      background:url("../../../../public/img/contactBack.png") no-repeat 0 60px;
      background-size: 100% 100%;
      filter: blur(25Px) opacity(0.4) grayscale(40%) brightness(50%);
      position: absolute;
      z-index: -1;
    }
    .returnImg{
      position: absolute;
      z-index: 999;
      top:12vh;
      left:58px;
      width:32px;
      height:32px;
      cursor: pointer;
    }
    .content{
      position: absolute;
      top:18.333vh;
      width: 1070Px;
      left:0;
      right:0;
      margin:0 auto;
      line-height: 28Px;
      .box{
        height:516.5Px;
      width: 1070Px;
        overflow-y: auto;
        box-sizing: border-box;
        padding-right: 27Px;
        overflow-x: hidden;
      }
      .box::-webkit-scrollbar {/*滚动条整体样式*/

        width: 4Px;     /*高宽分别对应横竖滚动条的尺寸*/

        height: 1px;

    }

.box::-webkit-scrollbar-thumb {/*滚动条里面小方块*/

        border-radius: 2px;

         -webkit-box-shadow: none;

        background: rgba(255, 255, 255, 0.09);

    }

.box::-webkit-scrollbar-track {/*滚动条里面轨道*/

        -webkit-box-shadow: none;

        border-radius: 2Px;

        background: none;

}
    }
  .title{
    width: 390Px;
    height: 62Px;
    font-size: 44Px;
    font-family: HarmonyOS Sans SC;
    color: #FFFFFF;
    line-height: 62Px;
  }
  .line{
    width: 60Px;
    height: 2Px;
    background: #DAB56E;
    margin:25Px 0 45Px 0;
  }
  .topText{
    width: 1043Px;
    font-size: 14Px;
    font-family: HarmonyOS_Sans_SC_Light;
    margin-bottom:34.2Px;
  }
  .bottomText{
    font-family: HarmonyOS Sans SC;
    width: 1043Px;
    font-size: 14Px;
    div{
      margin-bottom:34.2Px;
    }
  }
}
</style>  