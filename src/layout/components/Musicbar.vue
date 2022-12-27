<template>
    <div  class="FooterMusic">
        <div class="footerLeft" @click="updateDetailShow">
            <!-- <img :src="playList[playListIndex].al.picUrl" alt="" /> -->
            <div>
                <!-- <p>{{ playList[playListIndex].name }}</p> -->
                <span>横滑切换上下首哦</span>
            </div>
        </div>
        <div class="footerRight">
            <svg class="icon liebiao" aria-hidden="true" @click="play" v-if="isbtnShow">
                <use xlink:href="#icon-bofang1"></use>
            </svg>
            <svg class="icon liebiao" aria-hidden="true" @click="play" v-else>
                <use xlink:href="#icon-timeout"></use>
            </svg>
            <svg class="icon liebiao" aria-hidden="true">
                <use xlink:href="#icon-toggle-right"></use>
            </svg>
        </div>
        <!-- <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio> -->
    </div>
</template>

<script>
import { mapState,useStore } from 'vuex';
import { computed } from 'vue';
export default {
    setup() {
        const store = useStore()
        const playList = computed(()=> store.state.playlist)
        const  playListIndex = computed(()=> store.state.playListIndex)
       


        const isbtnShow = ()=>{
            return playList !== []}

        return {
            playList,playListIndex,isbtnShow
        }     
    }
}
</script>

<style lang="less" scoped>
.FooterMusic {
  width: 100%;
  height: 1rem;
  box-sizing: border-box;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #999;
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
  .footerLeft {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
    }
  }
  .footerRight {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
}
</style>