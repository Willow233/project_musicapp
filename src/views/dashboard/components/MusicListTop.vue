<template>
    <div class="itemMusicTop">
      <img :src="playlist.coverImgUrl" alt="" class="bgimg" />
      <div class="itemLeft">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
          <use xlink:href="#icon-arrow-left-bold"></use>
        </svg>
        <span>歌单</span>
      </div>
      <div class="itemRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo1"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-menu"></use>
        </svg>
      </div>
    </div>
    <div class="itemTopContent">
      <img :src="playlist.coverImgUrl" alt="" class="bgimg" />
      <div class="contentLeft">
        <img :src="playlist.coverImgUrl" alt="" />
        <div class="palyCount">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gl-play-copy"></use>
          </svg>
          <span>{{ changeCount(playlist.playCount) }}</span>
        </div>
      </div>
      <div class="contentRight">
        <p class="rightP_one">{{ playlist.name }}</p>
        <div class="right_img">
          <img :src="creator.backgroundUrl" alt="" />
          <span>{{creator.nickname }}</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
        <p class="rightP_two">
          <span>{{ playlist.description }}</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </p>
      </div>
    </div>
    <div class="itemTopFooter">
      <div class="footerItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiaoxi"></use>
        </svg>
        <span>{{ playlist.commentCount }}</span>
      </div>
      <div class="footerItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-guanzhu"></use>
        </svg>
        <span>{{ playlist.shareCount }}</span>
      </div>
      <div class="footerItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shangchuan"></use>
        </svg>
        <span>下载</span>
      </div>
      <div class="footerItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-chenggong"></use>
        </svg>
        <span>多选</span>
      </div>
    </div>
  </template>
  <script>
  export default {
    setup(props) {
      // 对播放量的处理
      function changeCount(num) {
        if (num >= 100000000) {
          return (num / 100000000).toFixed(1) + "亿";
        } else if (num >= 10000) {
          return (num / 10000).toFixed(1) + "万";
        }
      }
      return{changeCount}
    },
    props: ['playlist','creator'],
  };
  </script>
  <style lang="less" scoped>
  .itemMusicTop {
    width: 100%;
    box-sizing: border-box;
    height: 1rem;
    
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
    position: fixed;
    top: 0;
    .itemLeft,
    .itemRight {
      width: 20%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 0.2rem;
      span {
        font-size: 0.32rem;
        font-weight: bold;
        color: #fff;
      }
      .icon {
        fill: #fff; //填充颜色
      }
    }
    .itemLeft{
      position: absolute;
      left: 0;
    }
    .itemRight{
      position: absolute;
      right: 0.2rem;
    }

    .bgimg {
      width: 100%;
      height: 1rem;
      position: absolute;
      object-fit: cover;
      z-index: -1;
      filter: blur(30px);
    }
  }
  .itemTopContent {
    width: 100%;
    height: 3rem;
    padding: 0.2rem;
    box-sizing: border-box;
    margin-top: 1.4rem;
    display: flex;
    justify-content: space-between;
    position: relative;
    
    .contentLeft {
      width: 36%;
      height: 2.6rem;
      position: relative;
  
      img {
        width: 2.6rem;
        height: 2.6rem;
        border-radius: 0.2rem;
        position: absolute;
        z-index: -1;
      }
      .palyCount {
        position: absolute;
        right: 0.1rem;
        margin-top: 0.1rem;
        .icon {
          width: 0.26rem;
          height: 0.26rem;
          margin-top: -0.02rem;
          vertical-align: middle;
        }
        span {
          font-size: 0.26rem;
          color: #fff;
        }
      }
    }
    .contentRight {
      width: 60%;
      height: 2.6rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .rightP_one {
        font-size: 0.3rem;
        font-weight: 900;
        color: #fff;
        font-family: "微软雅黑";
        margin-top: 0;
      }
      .right_img {
        width: 100%;
        height: 0.6rem;
        line-height: 0.6rem;
        color: #ccc;
        img {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 50%;
          vertical-align: middle;
        }
        span {
          margin-left: 0.1rem;
        }
        .icon {
          width: 0.26rem;
          height: 0.26rem;
          margin-top: -0.08rem;
          vertical-align: middle;
        }
      }
      .rightP_two {
        width: 100%;
        height: 0.6rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          display: inline-block;
          width: 95%;
          height: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-size: 0.24rem;
          color: #ccc;
        }
        .icon {
          width: 0.24rem;
          height: 0.24rem;
        }
      }
    }
    .bgimg {
      width: 100%;
      // height: 11rem;
      object-fit: cover;
      position: absolute;
      top: 0;
      z-index: -1;
      filter: blur(30px);
    }
  }
  .itemTopFooter{
    width: 100%;
    height: 1.4rem;
    display: flex;
    justify-content: space-around;
    margin-top: .2rem;
    .footerItem{
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      .icon{
        width: 0.45rem;
          height: 0.45rem;
        fill: #fff;
      }
      span{
        font-size: .24rem;
        margin-top: .1rem;
      }
    }
  
  }
  </style>