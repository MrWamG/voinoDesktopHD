<!-- 首页（播放器） -->
<template>
    <div class="container">
        <Player :win="win"></Player>
    </div>
</template>

<script>
    import Player from "@/components/Player/index.vue"
    export default  {
        components: {
            Player
        },
        data() {
            return {
                win:null, // 当前窗口实例对象
            }
        },
        created(){
            
        },
        mounted() {
            // 在当前页面中挂在 electron 实例
			this.win = require('electron').remote.getCurrentWindow();
        },
        unmounted() {
            
        },
        methods: {
            
        },
        computed: {
            
        }
    }
</script>

<style lang="less" scoped>
    @import "index.less";
</style>