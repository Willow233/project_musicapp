import { createStore } from 'vuex'

export default createStore({
  state: {
    playList: [{
      id: 2009007646,//歌曲id
      al: {
          id:157096025, //专辑id
          name:"年终奖",
          pic:109951168171363070,
          picUrl:"https://p1.music.126.net/xmSPwmIPQ6oEieLeDmnDMA==/109951168171363071.jpg",
          pic_str: "109951168171363071"
      }
  }],
  playListIndex: 0
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
