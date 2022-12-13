import request from '@/utils/request'

// 手机验证码登录
export function loginByPhoneCode(phone) {
    return request({
      url: `/captcha/sent?phone=${phone}`,
      withCredentials: true
    })
  }

// 验证验证码
export function checkPhoneCode(params) {
  return request({
    url: '/captcha/verify',
    // url: `/captcha/verify?phone=${params.phone}&captcha=${params.captcha}`,
    params,
    withCredentials: true
  })
}