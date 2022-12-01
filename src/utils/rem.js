const baseSize = 32 //750px视口 1rem = 32px
function setRem(){
    // 获取视口宽度
    let deviceWidth = document.documentElement.clientWidth || window.innerWidth
    // 当前页面宽度相对于750宽的缩放比例
    const scale = deviceWidth / 750
    document.documentElement.style.fontSize = (baseSize * Math.min(scale,1) + 'px')

    // 设置字体大小 通常是 16px 和 24px 现在是16
    // 未考虑iphone12 安全区 （待调整）
    document.querySelector('body').style.fontSize = 1 + 'rem'
}
// 初始化
setRem()
// 当窗口变化时 再次调用
window.onresize = function(){
    setRem()
}