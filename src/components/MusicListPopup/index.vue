<template>
    <van-popup :show="showBottom" position="bottom"
    @click-overlay="closePopup"
    :style="{height:'65%',width:'90%',marginLeft:'4%',marginBottom:'0.3rem',borderRadius:'0.4rem'}"
    :overlay-style="{backgroundColor:'rgba(0, 0, 0, 0.15)'}">
    <span>当前播放</span>
    </van-popup>
</template>

<script>

export default {
    props:['showBottom'],
    setup(props,{emit}){

        function closePopup(){
            emit('close-popup')
        }
       return {
    closePopup
       }
     
    }
}
</script>

