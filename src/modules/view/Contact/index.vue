<template>
  <div class="divBox">
    <Content ref="content" v-show="active === '0'" @change="change"></Content>
    <Legal v-show="active === '1'" @change="change"></Legal>
    <Privacy v-show="active === '2'" @change="change"></Privacy>
  </div>
</template>

<script>
import Content from "./content.vue";
import Legal from "./legal.vue";
import Privacy from "./privacy.vue";
export default {
    components:{Legal, Content, Privacy},
    data(){
        return{
          active:'0'
        }
    },
    mounted(){
    },
    methods:{
      loadPage(){
        this.active = '0'
        this.$refs.content.loadPage()
      },
      scrollF(text){
        let that =this;
        if(text === 0 && that.active === '0'){
             that.$emit('pageChange',0);
             return
        }
      },
      change(num){
        this.active = num
      }
    },
}
</script>
<style lang="scss">
.divBox{
  z-index: 11;
}
</style>