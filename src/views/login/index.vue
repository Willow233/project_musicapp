<template>
  <div class="login-container">
    <div class="login-icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yanchu"></use>
      </svg>
    </div>
    <div class="login-button">
      <span @click="$router.push('/login/phonecode')">用户名登录</span>
    </div>
    <div class="login-protocol">
      <van-checkbox v-model="checked">我已阅读并同意<a href="javascript:;">《服务条款》</a>、<a href="javascript:;">《隐私政策》</a>、<a href="javascript:;">《中国联通认证服务协议》</a></van-checkbox>
    </div>
    <div class="other-methods">
      <span>登录遇到问题</span>&nbsp;|&nbsp;<span>其他登陆方式 &gt;</span>
    </div>
  </div>


</template>
<script>
import { reactive,ref } from 'vue';
export default {
  name: 'Login',
  setup() {
    const checked = ref(true)
   
    return { checked}
  },
}
</script>

<style lang="less" scoped>
@import "@/styles/color-theme.less";
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
background-image: linear-gradient(0deg, #ffffff 0%, #ffffff 65%, #ffeeeec8 100%);

    .login-icon{
      background-color:@primary-color;
      margin-top: 3.6rem;
      margin-bottom: 3rem;
      border-radius: 50%;
      padding: 0.2rem;
      outline:.02rem solid #e6222516;
      outline-offset: 1.3rem;
     
      .icon{
        display: block;
        width: 0.8rem;
        height: 0.8rem;
        fill:#ffffff;
        border-radius: 50%;
        outline:.02rem solid #e6222521;
      outline-offset: 0.8rem;
      }
    
    }
    .login-button{
      width: 5rem;
      height: 0.9rem;
      background-color: @primary-color;
      border-radius: 1.5rem;
      text-align: center;
      vertical-align: center;
      color: #ffffff;
      font-size: .32rem;
      font-weight: 600;
      margin-bottom: 0.6rem;
      span{
        height: 0.9rem;
        line-height: 0.9rem;
      }

    }
    .login-protocol{
      width:5rem ;
      font-size: .16rem;
      color: #777;
      a{
        color: rgb(88, 116, 144);
      }
      :deep(.van-checkbox__icon){
        font-size: .24rem;
      }

      :deep(.van-checkbox__icon--checked .van-icon){
        background-color:@primary-color ;
        border-color:@primary-color ;
      }
    }

    .other-methods{
      margin-top: 2.2rem;
      font-size: .22rem;
      color: #777;
    }
}
</style>