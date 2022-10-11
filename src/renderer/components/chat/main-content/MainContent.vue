<template>
  <div class="main-content"> 
    <div class="top-content">
      <TopBar />
    </div>
    <div class="center-content">
      <MsgBox />
    </div>
    <div class="bottom-content"></div>
  </div>
</template>

<script setup lang="ts">
  import TopBar from './TopBar.vue';
import MsgBox from './MsgBox.vue';

</script>

<style lang="scss" scoped>
.main-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  .top-content {
    flex: 0 0 60px;
    height: 60px;
  }
  .center-content {
    flex: 4 1 auto;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
  }
  .bottom-content {
    flex: 1 1 150px;
  }
}
</style>
