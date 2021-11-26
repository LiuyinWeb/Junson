<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "../public/css/font.css";
#app{
  height: 100%;
  // background: url(' ') no-repeat 100% 100%;
  p,span,div{
  }
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 14px;
}
</style>
