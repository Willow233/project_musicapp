import { createStore } from 'vuex'
import user from './modules/user'
import music from './modules/music'

const store = createStore({
  modules: {
    user,
    music
  }
})

export default store
