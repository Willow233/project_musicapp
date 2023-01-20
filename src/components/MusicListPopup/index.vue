<template>
    <van-popup 
    class="popup-musiclist"
    :show="showBottom" position="bottom"
    @click-overlay="closePopup"
    :style="{height:'65%',width:'90%',marginLeft:'4%',marginBottom:'0.3rem',borderRadius:'0.4rem',overflow:'hidden'}"
    :overlay-style="{backgroundColor:'rgba(0, 0, 0, 0.15)'}">
    
    <div class="itemMusicTop">
    <span class="list-title">当前播放</span>
      <div class="itemLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiaoxunhuan"></use>
        </svg>
        <span>单曲循环</span>
      </div>
      <div class="itemRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shangchuan"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zengjia"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shanchu"></use>
        </svg>
      </div>
    </div>
    <div class="itemMusicList">
    
      <div class="itemList">
        <div class="item" v-for="(item, i) in itemList" :key="i">
          <div class="itemLeft" @click="playMusic(i)">
            <div>
              <span class="song-name">{{ item.name }}</span>
              <span>&nbsp;-&nbsp;{{ item.ar[0].name }}</span>
            </div>
          </div>
          <div class="itemRight">
            <svg class="icon bofang" aria-hidden="true">
              <use xlink:href="#icon-shibai"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
    </van-popup>
</template>

<script>
  import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
    props:['showBottom'],
    setup(props,{emit}){
// 关闭弹窗
        function closePopup(){
            emit('close-popup')
        }
        // 获取当前歌单列表

        const itemList = computed(()=>{
            return store.state.music.playList
        })

    // 播放歌曲
    const store = useStore()
    const playMusic = (i)=>{
        store.commit('music/updatePlayListIndex',i)

    }
           return {
    closePopup,itemList,playMusic
       }
     
    }
}
</script>

<style lang="less" scoped>
 .popup-musiclist{
   
    .itemMusicTop {
    width: 100%;
    box-sizing: border-box;
    height: 1.6rem;
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
    position: absolute;
    top: 0;
    background-color:rgb(255, 255, 255);

     .list-title{
        font-size: .36rem;
        font-weight: bold;
        display: block;
        height: 1rem;
        line-height: 1.2rem;
        margin-left: 0.2rem;
    }

    .itemLeft,
    .itemRight {
      
      height: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 0.2rem;
      span {
        font-size: 0.26rem;
        color: #999;
      }
      .icon {
        fill: #999; //填充颜色
      }
    }
    .itemLeft{
      width: 22%;
      position: absolute;
      left: 0;
      .icon{
        height: 0.36rem;
        width: 0.36rem;
      }
    }
    .itemRight{
        width: 30%;
      position: absolute;
      right: 0.2rem;
    }
  }

  .itemMusicList {
    height: 8rem;
    overflow-y: scroll;
    background-color: rgb(255, 255, 255);
    padding: 0 0.2rem;
    margin-top: 1.6rem;
  
    .itemList {
      width: 100%;
      
      .item {
        width: 100%;
        height: 0.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .itemLeft {
          width: 85%;
          height: 100%;
          display: flex;
          align-items: center;
          div {
          .song-name{
            color: #111;
            font-size: 0.28rem;
          }
            span{
              font-weight: 400;
              font-size: .24rem;
              color: #999;
            }
            margin-left: 0.1rem;
          }
        }
        .itemRight{
          width: 10%;
          height: 100%;
          display: flex;
          align-items: center;
          position: relative;
          .icon{
            fill: #999;
          }
          
        }
      }
    }
  }
 }
</style>

