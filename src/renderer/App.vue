<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'voino'
  }
</script>

<style lang="less">
	@import url("assets/less/App.less");
  body,html{
    pointer-events: none;
  }
</style>