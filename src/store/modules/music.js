const state = {
    playList: [{
        id: 2009007646,//歌曲id
        name:'歌曲名',
        al: {
            id:157096025, //专辑id
            name:"年终奖",
            pic:109951168171363070,
            picUrl:"https://p1.music.126.net/xmSPwmIPQ6oEieLeDmnDMA==/109951168171363071.jpg",
            pic_str: "109951168171363071"
        }
    }],
    playListIndex: 0
}

const mutations = {
    updatePlayList(state, payload) {
        state.playList = payload
    },
    updatePlayListIndex(state, i) {
        state.playListIndex = i
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}