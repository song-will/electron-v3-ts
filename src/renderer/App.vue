<template>
  <div class="app">
  <!-- <title-bar /> -->
  <el-config-provider :locale="i18nt" class="el-config-provider">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </el-config-provider>
  </div>

</template>

<script setup lang="ts">
import { computed } from "vue";
import { ElConfigProvider } from "element-plus";
import { i18n } from "./i18n";
import TitleBar from "./components/common/TitleBar.vue";

const i18nt = computed(() => i18n.global.messages[i18n.global.locale].el);
</script>

<style scoped lang="scss">
  .app {
    width: 100%;
    height: 100%;
  }
  .el-config-provider {
    height: 100%
  }
</style>
