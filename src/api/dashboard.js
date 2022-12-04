import request from '@/utils/request'

// 获取用户基本资料
export function getBanner() {
    return request({
      url: '/banner?type=2',
    })
  }

// 获取推荐歌单
export function getMusicList() {
  return request({
    url: '/recommend/resource',
  })
}

// 获取精品歌单
export function getTopPlayList() {
  return request({
    url: '/top/playlist/highquality',
  })
}