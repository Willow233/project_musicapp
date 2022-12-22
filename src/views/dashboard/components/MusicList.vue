<template>
    <div class="itemMusicList">
      <div class="itemListTop">
        <div class="listLeft">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofang1"></use>
          </svg>
          <span
            >播放全部<span>(共{{ itemList.length }}首)</span></span
          >
        </div>
        <div class="listRight">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tianjia"></use>
          </svg>
          <span>收藏({{ subscribedCount }})</span>
        </div>
      </div>
      <div class="itemList">
        <div class="item" v-for="(item, i) in itemList" :key="i">
          <div class="itemLeft" @click="playMusic(i)">
            <span class="leftSpan">{{ i + 1 }}</span>
            <div>
              <p>{{ item.name }}</p>
              <span v-for="(item1, index) in item.ar" :key="index">{{
                item1.name
              }}</span>
            </div>
          </div>
          <div class="itemRight">
            <svg class="icon bofang" aria-hidden="true" v-if='item.mv !=0'>
              <use xlink:href="#icon-shipinbofang"></use>
            </svg>
            <svg class="icon liebiao" aria-hidden="true">
              <use xlink:href="#icon-diandiandianshu"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import { useStore } from 'vuex';
  export default {
    props: ['itemList', 'subscribedCount'],
    setup(props) {
     const store = useStore()
    const playMusic = ()=>{
        store.dispatch('music/updatePlayList',this.itemList)
        store.dispatch('music/updatePlayListIndex',{i})

    }
    return {playMusic}
    }
  };
  </script>
  <style lang="less" scoped>
  .itemMusicList {
    position: sticky;
    top: 1rem;
    width: 100%;
    box-sizing: border-box;
    height: 12.5rem;
    overflow: scroll;
    background-color: #fff;
    padding: 0 0.2rem;
    margin-top: 0.2rem;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    .itemListTop {
      width: 100%;
      height: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      background-color: white;
      .listLeft {
        width: 3rem;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon {
          stroke: #333333;
          stroke-width: 20;
        }
        span {
          font-weight: 700;
          span {
            font-weight: 400;
            font-size: 0.24rem;
            color: #999;
          }
        }
      }
      .listRight {
        display: flex;
        align-items: center;
        background-color: red;
        padding: 0.2rem;
        border-radius: 0.4rem;
        color: #fff;
        .icon {
          width: 0.3rem;
          height: 0.3rem;
          fill: #fff;
          margin-right: 0.1rem;
          stroke: #fff;
          stroke-width: 50;
        }
      }
    }
    .itemList {
      width: 100%;
      
      .item {
        width: 100%;
        height: 1.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .itemLeft {
          width: 85%;
          height: 100%;
          display: flex;
          align-items: center;
          .leftSpan {
            display: inline-block;
            width: 0.2rem;
            text-align: center;
          }
          div {
            p {
              width: 4.54rem;
              height: .4rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-weight: 700;
            }
            span{
              font-weight: 400;
              font-size: .24rem;
              color: #999;
            }
            margin-left: 0.3rem;
          }
        }
        .itemRight{
          width: 20%;
          height: 100%;
          display: flex;
          // justify-content: space-between;
          align-items: center;
          position: relative;
          .icon{
            fill: #999;
          }
           .bofang{
              position: absolute;
              z-index: -1;
              left: 0;
            }
           .liebiao{
              position: absolute;
              z-index: -1;
              right: 0;
            }
        }
      }
    }
  }
  </style>