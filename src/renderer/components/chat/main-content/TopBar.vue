<template>
  <div class="top-bar">
    <div class="user-top-info">
      {{user}}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  user: {
    type: String,
    default: () => '文件传输助手'
  }
})
</script>

<style lang="scss" scoped>
  .top-bar {
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    height: 100%;
    .user-top-info {
      height: 100%;
      padding-left: 10px;
      display: flex;
      align-items: center;
    }
  }
</style>
