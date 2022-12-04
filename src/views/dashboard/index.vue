<template>
  <div>
    <!-- 顶部导航 -->
    <TopNav />
    <!-- 轮播图区域 -->
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
    <!-- 图标列表 -->
    <div class="iconNav">
      <div class="iconList">
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-rili"></use>
      </svg>
      <span>每日推荐</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-guanzhu"></use>
      </svg>
      <span>私人FM</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yanchu"></use>
      </svg>
      <span>歌单</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang"></use>
      </svg>
      <span>排行榜</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zhibo"></use>
      </svg>
      <span>直播</span>
      </div>
    </div>
    </div>
    <!-- 推荐歌单 -->
    <ImageCard :list="topPlayList"/>

    
  </div>
</template>

<script>
import TopNav from '@/components/TopNav'
import ImageCard from './components/ImageCard.vue';
import { getBanner,getMusicList } from '@/api/dashboard';
import { reactive, onMounted } from 'vue';

export default {
  components: {
    TopNav,
    ImageCard
  },
  setup() {
    const state = reactive({
      images: [],
      topPlayList:{}
    })


    onMounted(() => {
      getSwiperBanner()
      getMusicCardList()
    });

    async function getSwiperBanner() {
      const res = await getBanner()
      state.images = res.data.banners
    }

    async function getMusicCardList(){
      const res = await getMusicList()
      console.log(res);
    }


    return { state };
  },
};
</script>

<style lang="less" scoped>
.van-swipe {
  margin: .2rem;
  height: 2.6rem;
  border-radius: .2rem;

  img {
    width: 100%
  }

  :deep(.van-swipe__indicator--active)  {
    background-color: red;
  }
}

.iconNav{
  display: flex;
  justify-content: center;
  .iconList{
  width: 90%;
  display: flex;
  margin: 0.2rem;
  justify-content: space-between;
  align-items: center;
.iconItem{
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon{
    border-radius: 50%;
    padding: .1rem;
    background-color: rgb(240, 39, 39);
    width:  0.7rem;
    height: 0.7rem;
    box-sizing: border-box;
    fill: white;
  }

  span{
    font-size: .22rem;
  }
}
 

}
}

</style>