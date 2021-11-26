<template>
<div
    class="loadBox"
    v-loading="showLoading"
    element-loading-text="loading..."
    element-loading-background="rgba(0, 0, 0, 1)"
    element-loading-spinner="el-icon-loading">
  <div class="htmlDiv" v-if="heightChange">
    <img class="logoDiv" src="@img/logo_junson@2x.png" alt="">
    <header>
      <div class="nav-container">
         <el-tabs ref="navTabs" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="HOME" name="0">
              <!-- <div class="bottomLine"></div> -->
            </el-tab-pane>
            <el-tab-pane label="ABOUT" name="1"></el-tab-pane>
            <el-tab-pane label="PHILOSOPHY" name="2">
              <!-- <div class="bottomLine"></div> -->
              </el-tab-pane>
            <el-tab-pane label="CULTURE" name="3"></el-tab-pane>
            <el-tab-pane label="CONTACT" name="4"></el-tab-pane>
          </el-tabs>
        <nav>
          <div></div>
        </nav>
      </div>
    </header>
    <div class="backColor"></div>
    <main class="main" id="main">
       <!-- <Home v-if="activeName[0] === '0'"></Home>
       <About ref="AboutPage" v-else-if="activeName === '1'" @pageChange="pageChange"></About>
       <Philosophy ref="PhilosophyPage" v-else-if="activeName === '2'" @pageChange="pageChange"></Philosophy>
        <Culture ref="CulturePage" v-else-if="activeName === '3'" @pageChange="pageChange"></Culture>
        <Contact ref="ContactPage" v-else-if="activeName === '4'"></Contact> -->
       <Home id="page0" ></Home>
       <About id="page1" ref="AboutPage" @pageChange="pageChange"></About>
       <Philosophy id="page2" ref="PhilosophyPage" @pageChange="pageChange"></Philosophy>
       <Culture id="page3" ref="CulturePage" @pageChange="pageChange"></Culture>
       <Contact id="page4" ref="ContactPage" @pageChange="pageChange"></Contact>
    </main>
  </div>
</div>
</template>

<script>
import Home from "@/view/home/index.vue";
import About from "@/view/About/index.vue";
import Philosophy from "@/view/Philosophy/index.vue";
import Culture from "@/view/Culture/index.vue";
import Contact from "@/view/Contact/index.vue";
// import waterEnvironment from "../view/waterEnvironment/index.vue";

export default {
  components: { Home , About, Philosophy, Culture, Contact },
  data() {
    return {
      activeName:'0',
      isScroll:false,
      showLoading:true,
      urlArr:[
        '@img/img_hongkong.png',
        '@img/img_singapore.png',
        '@img/img_paloalto.png',
        '@img/img_newyork.png',
        '@img/img_about_hongkong.png',
        '@img/img_about_newyork.png',
        '@img/img_about_singapore.png',
        '@img/img_about_paloalto.png',
        '@img/img_aboutus.png',
        '@img/img_mission.png',
        '@img/img_partnership.png',
        '@img/img_innovation.png',
        '@img/img_sailboat.png',
        '@img/img_team.png',
        '@img/img_Integrity.png',
      ],
      homeDom : null,
      clientHeight:'',
      heightChange:true,
      setTime2:false,
    };
  },
  watch:{
    activeName(val, oldVal){
      let num = Number(oldVal)- Number(val)
        if(val == '1'){
          this.$refs.AboutPage.loadPage()
        }else if(val == '3'){
          this.$refs.CulturePage.loadPage()
        }else if(val == '2'){
          this.$refs.PhilosophyPage.loadPage()
        }else if(val == '4'){
          this.$refs.ContactPage.loadPage()
        }
      if(!this.isScroll) {
        this.scrollTo(this.getCurrentScroll() + this.clientHeight*num)
        this.isScroll = true;
        setTimeout(() => {
            this.isScroll = false;
        }, 500);
      }
     },
     clientHeight(val, oldVal){
       if(val !== oldVal){
          this.showLoading=true;
          this.heightChange=false;
          this.heightChange=true;
          this.scrollTo(-this.clientHeight*(Number(this.activeName)))
          setTimeout(()=>{
            this.showLoading=false;
          },500)
       }
     },
  },
  mounted() {
    this.homeDom = document.getElementById('main')
    this.clientHeight = window.innerHeight;
      setTimeout(()=>{
        this.setTime2 = true;
      },3000)
        /*注册事件*/
      if(document.addEventListener){
          document.addEventListener('DOMMouseScroll',this.scrollFunc,false);
      }//W3C
      window.addEventListener("resize", ()=>{
        this.activeName = String(this.activeName)
        this.clientHeight = window.innerHeight;
     });
      console.log(this.clientHeight)
      window.onmousewheel=document.onmousewheel=this.scrollFunc;//IE/Opera/Chrome
      this.loadImages(this.urlArr)
  },
  methods: {
    /**
     * 获取Home元素下某个元素的高度
     */
    getOffsetHeightByHomeDom(selectors) {
        return selectors.offsetHeight
    },
    /**
     * 滚动到那个位置
     */
    scrollTo(number) {
      if(this.homeDom){
        this.homeDom.style.transform = `translateY(${number}px)`
      }
    },
    /**
     * 获取当前滚动的高度
     */
    getCurrentScroll() {
        return Number(this.homeDom.style.transform.slice(11, -3))
    },
    /**
     * 向下滚动一屏
     */
    downScroll() {
        const innerHeight = window.innerHeight
        const currentScroll = this.getCurrentScroll()
        this.scrollTo(currentScroll - innerHeight)
    },
    /**
     * 向上滚动一屏
     */
    upScroll() {
        const innerHeight = window.innerHeight
        const currentScroll = this.getCurrentScroll()
        this.scrollTo(currentScroll + innerHeight)
    },
    loadImages (urlArr) { //参数 图片地址数组
        if (urlArr.length <= 0) return
        let i = 0,
        timer = null,
        len = urlArr.length,
        load = (url) => {
            if (i < len) {
                const image = new Image()
                image.src  = url
                timer = setInterval(() => {
                    if (image.complete) {
                        console.log('complete')
                        clearInterval(timer)
                        load(urlArr[i++])
                    }
                }, 80)
            } else {
                this.showLoading = false // 所有图片加载完后的操作
            }
        }
        load(urlArr[i])
    },
    pageChange(num){
      if(num === 1){
        this.downScroll()
        this.activeName = (Number(this.activeName)+1)+''
      }else{
        this.upScroll()
        this.activeName = (Number(this.activeName)-1)+''
      }
    },
    scrollFunc(e){
        e=e || window.event;
        if (e.deltaY > 0 && !this.isScroll && this.setTime2) {
            // 向下
            switch (this.activeName){
              case '0':
                  this.activeName = '1'
                  this.downScroll()
                break;
              case '1':
                this.$refs.AboutPage.scrollF(1)
                break;
              case '2':
                this.$refs.PhilosophyPage.scrollF(1)
                break;
              case '3':
                this.$refs.CulturePage.scrollF(1)
                break;
              case '4':
                // this.$refs.ContactPage.scrollF(1)
                break;
            }
            this.isScroll = true;
            setTimeout(() => {
                this.isScroll = false;
            }, 500);
        }else if (e.deltaY < 0  && !this.isScroll && this.setTime2) {
            switch (this.activeName){
              case '0':
                break;
              case '1':
                this.$refs.AboutPage.scrollF(0)
                break;
              case '2':
                this.$refs.PhilosophyPage.scrollF(0)
                break;
              case '3':
                this.$refs.CulturePage.scrollF(0)
                break;
              case '4':
                this.$refs.ContactPage.scrollF(0)
                // this.activeName = '3'
                // this.upScroll()
                break;
            }
            this.isScroll = true;
            setTimeout(() => {
                this.isScroll = false;
            }, 500);
        }
    },
    handleClick(tab, event) {
      console.log(this.activeName)
    }
  }
};
</script>
<style lang="scss">
.el-tabs__active-bar:after{
      content:"12222222";
      margin-left: calc((100% - 40px)/2 );
      display: inline-block;
      width:40px!important;
      height:2Px;
      background: #DAB56E;
    }
</style>
<style lang="scss" scoped>
   /deep/ .el-loading-text, /deep/.el-loading-spinner i{
      color: #fff!important;
    }
.logoDiv{
  position: absolute;
  left: -96px;
  top:35Px;
  width:96px;
  height:34px;
  z-index: 99;
  animation: logoDiv-change 1s linear;
  animation-fill-mode: forwards;
  animation-delay: 2s;
}
  @keyframes logoDiv-change {
    0% {
        left: -96px;
    }
    100% {
        left:58px;
    }
  }
html,body,div,span,p{
  font-family:HarmonyOS Sans SC
}
.loadBox{
  height:100vh;
  width:100vw;
}
.htmlDiv{
  height:100vh;
  width:100vw;
  background:#1A2445;
  .backColor{
    width:100vw;
    height:12.666vh;
    position: fixed; 
    top: 0;
    background:linear-gradient(rgba(26, 36, 69, 0.46)0%,rgba(26, 36, 69, 0)100%);
    z-index: 10;
  }
}
/deep/.el-tabs__item.is-active{
  color:#DAB56E
}
/deep/.el-tabs__active-bar{
    background: none;
    // width: calc(40px!important;)
}
.bottomLine{
  width:40px;
  height:2Px;
  background: #DAB56E;
}
/deep/.el-tabs__item{
  color:#fff;
  font-size:14px;
  margin-right: 150px;
  animation: tabs__item-change 1s ease-out;
  animation-fill-mode:forwards;
  animation-delay: 2s;
}
@keyframes tabs__item-change {
  0% { 
    margin-right: 100px; 
  } 
  100% {
    margin-right: 0px;
  }
}
header {
  height: 120px;
  position: absolute;
  top:2.8vh;
  left:1282px;
  z-index: 99;
  opacity: 0;
  display: inline-block;
  animation: header-change 0.8s ease-out;
  animation-fill-mode:forwards;
  animation-delay: 2s;
}
@keyframes header-change {
  0% { 
    left:1282px;
  opacity: 0;
  } 
  100% {
  left:882px;
  opacity: 1;
  }
}
#main{
    box-sizing: border-box;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    transition: all 0.5s ease-in-out;
    transform: translateY(0px);
}
.nav-container {
  display: flex;
  justify-content: space-between;
  z-index: 11;
}
/deep/.el-tabs__nav-wrap::after{
    background-color: #e4e7ed00;
}
</style>
