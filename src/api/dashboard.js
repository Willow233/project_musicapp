import request from '@/utils/request'

// 获取用户基本资料
export function getBanner() {
    return request({
      url: '/banner?type=2',
    })
  }

// 获取推荐歌单
export function getPersonalized() {
  return request({
    url: '/personalized?limit=10',
    withCredentials: true
  })
}

// 获取歌单详情
export function getListDetail(id) {
  return request({
    url: `/playlist/detail?id=${id}`
  })
}

// 获取歌单所有歌曲
export function getListAll(id) {
  return request({
    url: `/playlist/track/all?id=${id}`
  })
}

// 获取音乐
export function getMUsicUrl(id) {
  return request({
    url: `/song/url?id=${id}`
  })
}


