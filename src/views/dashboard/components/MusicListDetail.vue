<template>
    <div>
        歌单详情页
    </div>
</template>

<script>
import {getListDetail} from '@/api/dashboard'
import { onMounted ,reactive} from 'vue'
import { useRoute } from 'vue-router'
export default{
    setup(){
        const state = reactive({
            playlist: {}
        })

        const getDetail = async() =>{
            let id = useRoute().query.id
            const res = await getListDetail(id)
            state.playlist = res.data.playlist

        }

        onMounted(() => {
            getDetail()
        })

        return {state}
    }
}
</script>