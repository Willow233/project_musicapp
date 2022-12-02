<template>
    <div class="top-nav">
        <div class="top-left">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-menu"></use>
            </svg>
        </div>
        <div class="top-content">
            <span>我的</span>
            <span class="active">发现</span>
            <span>云村</span>
            <span>视频</span>
        </div>
        <div class="top-right">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo1"></use>
            </svg>
        </div>
    </div>


</template>

<script>

</script>

<style lang="less" scoped>
.top-nav {
    display: flex;
    height: 0.5rem;
    padding: .1rem;
    justify-content: space-between;
    align-items: center;

    .top-content {
        width: 65%;
        height: .36rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size:.36rem;
        line-height: .36rem;

        .active{
            font-weight: 600;
        }
    }

    .icon{
        display: block;
    }
}
</style>