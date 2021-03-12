<template>
  <el-menu
    style="border-right: none !important; height: 860px; border-right: 1px solid #eee;"
    background-color="rgb(249 249 249)"
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
    <img style="width: 290px; display: flex; position: absolute; bottom: 0" src="https://i.pinimg.com/originals/ac/b1/f0/acb1f0fd64578c46239226a06fd0b13e.gif" alt="">
  </el-menu>
</template>

<style scoped>
li.el-menu-item {
  text-align: left;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SideBar extends Vue {

  // $store: any;

  // private setUpdateProfileStatus() {
  //   this.$store.dispatch('setUpdateProfile', false);
  // }
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
