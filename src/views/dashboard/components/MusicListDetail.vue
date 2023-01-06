<template>
    <div class="container">
    <MusicListTop :playlist="state.playlist" :creator="state.creator"/>
    <MusicList :itemList="state.itemList" :subscribedCount="state.subscribedCount"/>
    </div>
    
</template>

<script>
import {getListDetail,getListAll} from '@/api/dashboard'
import { onMounted ,reactive} from 'vue'
import { useRoute } from 'vue-router'
import MusicListTop from './MusicListTop.vue'
import MusicList from './MusicList.vue'
import store from '@/store'
export default{
    components: { MusicListTop,MusicList},
    setup() {
        const state = reactive({
            playlist: {},
            creator:{},
            itemList:[],
            subscribedCount:0
        });
        const getDetail = async () => {
            let id = useRoute().query.id;
            // 获取歌单详情
            const res = await getListDetail(id);
            console.log(res);
            state.playlist = res.playlist;
            state.creator = res.playlist.creator
            //获取歌单歌曲
            const result = await getListAll(id)
            state.itemList = result.songs
            store.commit('music/updatePlayList',result.songs)
            // console.log(result.songs);
            state.subscribedCount = res.playlist.subscribedCount
            
        };
        onMounted(() => {
            getDetail();
        });
        return { state };
    }
}
</script>

<style lang="less" scoped>
.container{
    overflow: hidden;
}
    
</style>