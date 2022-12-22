<template>
    <div class="image-card">
        <div class="card-head">
            <span class="title">推荐歌单</span>
            <span class="more">更多&gt;</span>
        </div>
        <van-swipe :autoplay="3000" indicator-color="white" width="110" 
        :loop="true"
        :stop-propagation ="false"
        :show-indicators="false" 
        :touchable="true">
            <van-swipe-item v-for="item in list.arr" :key="item.id" @dragstart.prevent>
                <div class="card-content" @click="$router.push({path:'/musiclistdetail',query:{id:item.id}})">
                    <div class="play-count">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-bofangsanjiaoxing"></use>
                        </svg>
                        <span>{{Math.floor(item.playCount/10000)}}万</span>
                    </div>
                    <img :src="item.picUrl" />
                    <span class="description">{{ item.name }}</span>
                </div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import { getPersonalized } from '@/api/dashboard'
import router from '@/router'
import { reactive, onMounted } from 'vue'

export default {
    setup() {
        const list = reactive({
            arr: []
        })
        const getPersonalList = async () => {
            const res = await getPersonalized()
            list.arr = res.result
        }

        onMounted(() => {
            getPersonalList()
        })

        return {
            list
        }
    }
}

</script>

<style lang="less" scoped>
.image-card {
    padding: .2rem;

    .card-head {
        display: flex;
        justify-content: space-between;
        margin-bottom: .2rem;

        .title {
            font-size: .32rem;
            font-weight: 600;
        }

        .more {
            width: 1rem;
            text-align: center;
            font-size: .24rem;
            height: 0.32rem;
            border: .02rem rgb(193, 193, 193) solid;
            border-radius: 0.20rem;
        }
    }




    .card-content {
        display: flex;
        flex-direction: column;
        margin-right: .16rem;
        position: relative;
        .play-count{
            position: absolute;
            top: .1rem;
            right: .1rem;
            font-size: .1rem;
            color: white;
            width: 1.2rem;
        height: 0.32rem;
        background-color: rgba(0, 0, 0, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.16rem;
            .icon{
                width: .24rem;
                fill:white;
                margin-right: .04rem;
            }
        }
        img {
            display: block;
            width: 2rem;
            height: 2rem;
            object-fit: cover;
            border-radius: 0.2rem;
            margin-bottom: .1rem;
        }

        .description {
            display: -webkit-box;
            width: 2rem;
            font-size: 0.28rem;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;

        }
    } 


}
</style>