const state = {
    playList:[],
    playListIndex:0
}

const mutations = {
    updatePlayList(state,payload){
        state.playList = payload
    },
    updatePlayListIndex(state,i){
        state.playListIndex = i
    }
}

const actions = {

}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}