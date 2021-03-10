<template>
  <el-menu
    style="border-right: none !important; height: 860px; border-right: 1px solid #eee;"
    default-active="1"
    router
  >
   <el-menu-item index="1" route="/dashboard">
      <i class="el-icon-menu"></i>
      <span>{{ $t("sidebar.dashboard") }}</span>
      </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class NavBar extends Vue {}
</script>
