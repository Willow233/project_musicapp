<template>
    <van-popup class="popup" closeable close-icon-position="top-left" close-icon="arrow-down" :show="showPlayer"
        position="bottom" @click-close-icon="closePlayer" :style="{ height: '100%' }">
        <div class="topNav">
            <div class="musicInfo">
                <span>{{ playList[playListIndex].name }}</span>
                <span>{{playList[playListIndex].ar[0].name}}</span>
            
        </div>
        <div class="share">
            <svg class="icon liebiao" aria-hidden="true" @click="popup">
                <use xlink:href="#icon-toggle-right"></use>
            </svg>

        </div>
        </div>
        

    </van-popup>
</template>


<script>
import store from '@/store';
import { computed,reactive} from 'vue';
export default {
    props: ['showPlayer'],
    setup(props, { emit }) {
        // 关闭弹窗
        function closePlayer() {
            emit('close-player')
        }

        
        // 获取当前歌单及歌曲信息
        const playList = computed(()=> store.state.music.playList)
        const playListIndex = computed(() => store.state.music.playListIndex)

        // 获取所有歌手信息
        const singer = reactive(playList[playListIndex])
        console.log(singer);

     

        return {
            closePlayer,playList,playListIndex
        }
    }
}
</script>
<style>

</style>