<template>
    <div class="FooterMusic">
        <div class="footerLeft" @click="updateDetailShow">
            <img :src="playList[playListIndex].al.picUrl" alt="" />
            <div>
                <p>{{ playList[playListIndex].name }}</p>
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
        <audio ref="audio"
        controls 
            :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
    </div>
</template>

<script>
import { mapState, useStore } from 'vuex';
import { computed, ref, onMounted } from 'vue';
export default {
    setup() {
        // vuex
        const store = useStore()
        console.log(store)
        let playList = computed(() => {
            return store.state.music.playList
        })
        let playListIndex = computed(() => {
            return store.state.music.playListIndex
        })

        let isbtnShow = ref(true)

        //获取<audio> ref对象 本质就是创建一个响应式对象 从而获取到audio实例对象
        let audio = ref(null)

        onMounted(() => {
        // 此时才能获取到ref对象，因setup执行比mounted早，dom还没生成
            console.log('audio', audio)

        })
        //播放/暂停
        function play() {

            audio.value.play()
            console.log('play', audio)
        }


        console.log('playlist', playList)
        return {
            // 要return audio 才能获取获取到audio实例对象 不然就是null
            playList, playListIndex, isbtnShow, play, audio
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