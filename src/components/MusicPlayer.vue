<template>
  <van-popup class="popup-player" closeable close-icon-position="top-left" close-icon="arrow-down" :show="showPlayer"
    position="bottom" @click-close-icon="closePlayer" :style="{ height: '100%' }">
    <img class="bgimg" :src="musicList.al.picUrl" alt="">
    <div class="player-head">
      <div class="song-detail">
        <Vue3Marquee>
          <span class="music-name">{{ musicList.al.name }}</span>
        </Vue3Marquee>
        <span class="singer-name">{{ musicList.ar[0].name }}</span>
      </div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-arrow-right-bold"></use>
      </svg>
    </div>
    <div class="detail-content" v-show="!isLyricShow">
      <img src="@/assets/needle-ab.png" alt="" class="img_needle" :class="{ img_needle_active: !isbtnShow }" />
      <img src="@/assets/cd.png" alt="" class="img_cd" />
      <img :src="musicList.al.picUrl" alt="" class="img_ar" :class="!isbtnShow ? 'img_ar_active' : 'img_ar_pauesd'" />
    </div>
    <div class="musicLyric" ref="musicLyric" v-show="isLyricShow">
      <p v-for="item in lyric" :key="item" :class="{
        active:
          currentTime * 1000 >= item.time && currentTime * 1000 < item.pre,
      }">
        {{ item.lrc }}
      </p>
    </div>
    <div class="detailFooter">
      <div class="footerTop">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-aixin"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shangchuan"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yanchu"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiaoxi"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-diandiandianshu"></use>
        </svg>
      </div>
      <div class="footerContent">
        <input type="range" class="range" min="0" :max="duration" v-model="currentTime" step="0.05">
      </div>
      <div class="footer">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-danquxunhuan"></use>
        </svg>
        <svg class="icon" aria-hidden="true" @click="goPlay(-1)">
          <use xlink:href="#icon-arrow-double-left"></use>
        </svg>
        <svg class="icon bofang" aria-hidden="true" v-if="isbtnShow" @click="play">
          <use xlink:href="#icon-bofangsanjiaoxing"></use>
        </svg>
        <svg class="icon bofang" aria-hidden="true" v-else @click="pause">
          <use xlink:href="#icon-timeout"></use>
        </svg>
        <svg class="icon" aria-hidden="true" @click="goPlay(1)">
          <use xlink:href="#icon-arrow-double-right"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-toggle-right"></use>
        </svg>
      </div>
    </div>

  </van-popup>
</template>


<script>
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
export default {
  props: ['showPlayer', 'musicList', 'isbtnShow'],
  components: {
    Vue3Marquee
  },
  setup(props, { emit }) {

    // 歌词显示
    const isLyricShow = ref(true)
    const store = useStore()
    let lyricList = computed(() => {
      return store.state.music.lyricList
    })
    let lyric = computed(() => {
      let arr
      if (lyricList.value.lyric) {
        arr = lyricList.value.lyric.split(/[(\r\n)\r\n]+/).map((item, i) => {
          let min = item.slice(1, 3)
          let sec = item.slice(4, 6)
          let mill = item.slice(7, 10)
          let lrc = item.slice(11, item.length)//歌词部分
          // 当前歌词时间点
          let time =
            parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
          if (isNaN(Number(mill))) {
            mill = item.slice(7, 9)
            lrc = item.slice(10, item.length)
            time =
              parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
          }
          // console.log(min,sec,Number(mill),lrc);
          return { min, sec, mill, lrc, time }
        });
        arr.forEach((item, i) => {
          if (i === arr.length - 1 || isNaN(arr[i + 1].time)) {
            item.pre = 100000;
          } else {
            item.pre = arr[i + 1].time
          }
        });
      }
      console.log(arr)
      return arr
    })
    // 当前时间
    let currentTime= computed(() => {
      return store.state.music.currentTime
    })

    // 关闭弹窗
    function closePlayer() {
      emit('close-player')
    }
    console.log(props);
    // 播放音乐
    const play = () => {
      emit('play')
    }
    // 暂停
    const pause = () => {
      emit('pause')
    }

    return {
      closePlayer, play, pause, isLyricShow, lyricList, lyric,currentTime
    }
  }
}
</script>

<style lang="less" scoped>
.popup-player {
  .bgimg {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    z-index: -1;
    filter: blur(30px);
  }

  .player-head {
    // position: absolute;
    // left: 3.2rem;
    height: 1rem;
    margin-top: 10px;

    .song-detail {
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 30%;

      .music-name {
        display: inline-block;
        width: 3rem;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: white;
        font-size: .28rem;
      }

      .singer-name {
        display: inline-block;
        width: 3rem;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        font-size: .24rem;
        color: #777;
      }
    }

    .icon {
      position: absolute;
      top: 15px;
      right: 15px;
      fill: white;
    }

  }

  .detail-content {
    width: 100%;
    height: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .img_needle {
      width: 2rem;
      height: 3rem;
      position: absolute;
      left: 46%;
      transform-origin: 0 0;
      transform: rotate(-15deg);
      transition: all 2s;
    }

    .img_needle_active {
      width: 2rem;
      height: 3rem;
      position: absolute;
      left: 46%;
      transform-origin: 0 0;
      transform: rotate(0deg);
      transition: all 2s;
    }

    .img_cd {
      width: 5rem;
      height: 5rem;
      position: absolute;
      bottom: 2.3rem;
      z-index: -1;
    }

    .img_ar {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
      position: absolute;
      bottom: 3.16rem;
      animation: rotate_ar 10s linear infinite;
    }

    .img_ar_active {
      animation-play-state: running;
    }

    .img_ar_pauesd {
      animation-play-state: paused;
    }

    @keyframes rotate_ar {
      0% {
        transform: rotateZ(0deg);
      }

      100% {
        transform: rotateZ(360deg);
      }
    }

  }

  .musicLyric {
    width: 100%;
    height: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.2rem;
    overflow: scroll;

    p {
      color: rgb(190, 181, 181);
      margin-bottom: 0.3rem;
    }

    .active {
      color: #fff;
      font-size: 0.5rem;
    }
  }

  .detailFooter {
    width: 100%;
    box-sizing: border-box;
    height: 3rem;
    position: absolute;
    bottom: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .footerTop {
      width: 100%;
      height: 1rem;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .icon {
        width: 0.36rem;
        height: 0.36rem;
        fill: rgb(245, 234, 234);
      }

      .icon {
        width: 0.6rem;
        height: 0.6rem;
      }
    }

    .range {
      width: 90%;
      height: 0.06rem;
      margin-left: 0.4rem;
    }

    .footer {
      width: 100%;
      height: 1rem;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .icon {
        fill: rgb(245, 234, 234);
      }

      .bofang {
        width: 1rem;
        height: 1rem;
      }
    }
  }
}
</style>