<template>
  <div id="wrapper">
    <div class="item-box left-side"></div>
    <div class="item-box user-list"></div>
    <div class="item-box main-content">
      <MainContent />
    </div>
  </div>
</template>

<script setup lang="ts">
import io from 'socket.io-client'
import { ref, getCurrentInstance } from 'vue'
import MainContent from '../chat/main-content/MainContent.vue';
// let socket = ref(null)
// socket.value = io('http://127.0.0.1:3000')
// console.log('socket', socket.value)
// socket.value.on('message', data => {
//   console.log('data', data)
// })
const { $IM } = getCurrentInstance().appContext.config.globalProperties
$IM.open()
$IM.addSocket('/sys')
console.log('im', $IM)
console.log('send', $IM.getSocket('/sys').send(11))
$IM.bindEvent('/sys','message', (data) => {
  console.log('sys data', data)
})

</script>

<style lang="scss" scoped>
#wrapper {
  height: 100%;
  display: flex;
  .item-box {
    height: 100%;
    padding: 5px;
    &.left-side {
      flex: 0 0 60px;
      width: 60px;
      background-color: #dddde0;
    }
    &.user-list {
      flex: 0 0 300px;
      width: 300px;
      background-color: #f7f7f7;
    }
    &.main-content {
      flex: 1 1 auto;
      background-color: #f3f3f3;
    }
  }
}
</style>
