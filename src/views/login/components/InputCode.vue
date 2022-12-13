<template>
    <van-password-input
  :value="form.captcha"
  :length="4"
  :mask="false"
  :focused="showKeyboard"
  @focus="showKeyboard = true"
/>
<!-- 数字键盘 -->
<van-number-keyboard
  v-model="form.captcha"
  :show="showKeyboard"
  @blur="checkCode"
/>
</template>
<script>
import { reactive ,ref} from 'vue';
import {checkPhoneCode } from '@/api/login'

export default {
  setup() {
    const form = reactive({
      phone:15650751334,
      captcha:''
    });
    const showKeyboard = ref(true);
    const checkCode = async() => {
      const {phone,captcha} = form
      await checkPhoneCode({phone,captcha})
      router.push('/dashboard')
      showKeyboard.value = false
      
    }

    return {
      form,
      showKeyboard,
      checkCode
    };
  },
};

</script>