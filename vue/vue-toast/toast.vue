<template>

        <transition name="fade">
            <div class="mask" v-if="visible">
                <div class="window">
                    {{content}}
                </div>
            </div>
        </transition>
  
</template>
<script>
export default {

  data(){

    return {

       content:'',
       time: 3000,
       visible: false,

    }
  },

  mounted(){

    this.colse();
  },

  methods: {
    
    colse() {

      window.setTimeout(()=>{

          this.visible = false

      }, this.time)
    }
  },
  
}
</script>
<style lang="scss" scoped>
   // 渐变过渡
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .35s;
  }
  // 全局弹窗
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: rgba(0,0,0,0.4);
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
      // padding: 75/75rem;
    .window{
      background: #fff;
      border-radius:8px;
      text-align: center;
      padding: 25px 50px;
  
 
    }
  
  }
</style>