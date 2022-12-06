<template>
    <van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="phoneNum"
      name="手机号码"
      label="手机号码"
      placeholder="手机号码"
      :rules="[{ required: true, message: '请输入手机号' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit" @click="onSubmit">
      下一步
    </van-button>
  </div>
</van-form>
</template>

<script>
    import { ref} from 'vue';
    import { loginByPhoneCode } from '@/api/login';
    import { useRouter } from 'vue-router';

export default {
  setup() {
    const phoneNum = ref('')
    const router = useRouter()
    const onSubmit = () => {
      loginByPhoneCode(phoneNum.value)
      console.log('submit', phoneNum.value);
      router.push('/login/inputCode')
    };

    return {
      phoneNum,
      onSubmit,
    };
  },
};
</script>