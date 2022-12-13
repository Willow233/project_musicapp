<template>
    <div class="image-card">
        <div class="card-head">
            <span class="title">推荐歌单</span>
            <span class="more">更多&gt;</span>
        </div>
        <van-swipe :loop="false" :width="100">
            <van-swipe-item  v-for="item in list.arr" :key="item.id">
                <div class="card-content">
                 <img :src="item.picUrl" />
                 <span class="description">{{ item.name }}</span>
                </div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import { getPersonalized } from '@/api/dashboard'
import { reactive, onMounted } from 'vue'

export default {
    // props: {
    //     list: {
    //         type:Object,
    //         required:false
    //     }
    // },
    setup() {
        const list = reactive({
            arr: []
        })
        const getPersonalList = async () => {
            const res = await getPersonalized()
            list.arr = res.data.result
            console.log(list.arr);
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