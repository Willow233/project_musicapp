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

