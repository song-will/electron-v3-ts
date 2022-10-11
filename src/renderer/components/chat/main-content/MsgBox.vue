<template>
  <div class="msg-box">
    <div class="msg-item" v-for="item in msgList" :key="item.msgId">
      <div class="avatar">
        <img :src="avatar" alt="">
      </div>
      <div class="msg-info">
        <div class="nick-name">
          {{item.nickName}}
        </div>
        <div class="msg-content">
          {{item.content}}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Msg } from '../types'
import avatar from '@renderer/assets/sl.jpg'

let msgList = reactive<Msg[]>([])
msgList.push({
  nickName: 'song',
  userId: '12434334',
  msgId: '000099999',
  msgType: 'TEXT',
  isCurUser: false,
  isSys: false,
  content: 'first msg'
})

</script>

<style lang="scss" scoped>
.msg-box {
  height: 100%;
  padding: 5px 10px;
  overflow-y: auto;
  .msg-item {
    display: flex;
    .avatar {
      height: 40px;
      width: 40px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .msg-info {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      .nick-name {
        color: #595859;
        padding-bottom: 5px;
      }
      .msg-content {
        padding: 3px 0;
      }
    }
  }
}
</style>
