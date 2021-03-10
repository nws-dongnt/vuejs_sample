<template>
  <el-menu
    style="border-right: none !important; height: 860px; border-right: 1px solid #eee;"
    default-active="1"
    router
  >
    <!-- <el-menu-item>
      <i class="el-icon-d-arrow-left" @click="collapseHandle()"></i>
      <span>{{ $t("sidebar.minimize") }}</span>
    </el-menu-item> -->
    <el-menu-item index="1" route="/dashboard">
      <i class="el-icon-menu"></i>
      <span>{{ $t("sidebar.dashboard") }}</span>
    </el-menu-item>
    <el-menu-item index="2" route="/all-profile">
      <i class="el-icon-user-solid"></i>
      <span>{{ $t("sidebar.all_profile") }}</span>
    </el-menu-item>
    <el-menu-item index="3" route="/profile-detail/create">
      <i class="el-icon-s-claim"></i>
      <span>{{ $t("sidebar.profile_detail") }}</span>
    </el-menu-item>
    <!-- <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item one</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-submenu>
    </el-submenu> -->
  </el-menu>
</template>

<style scoped>
li.el-menu-item {
  text-align: left;
}
</style>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class SideBar extends Vue {
  //   public isCollapse = false;
  //   public collapseHandle() {
  //     this.isCollapse = !this.isCollapse;
  //   }
  //   data() {
  //       return {
  //         isCollapse: this.isCollapse
  //       };
  //     }
}
</script>
