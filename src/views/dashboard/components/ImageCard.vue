<template>
    <div class="image-card">
        <div class="card-head">
            <span >推荐歌单</span>
            <div class="more">
                <span>更多</span>
            </div>
        </div>
        <div class="card-content" >
            <van-image width="3rem" height="3rem" fit="cover" position="center"
                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
        </div>



    </div>
</template>

<script>


export default {
    props: {
        list: {
            type:Object,
            required:false
        }
    }
}

</script>

<style lang="less" scoped>

</style>