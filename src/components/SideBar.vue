<template>
  <el-menu
    style="border-right: none !important; height: 860px; border-right: 1px solid #eee;"
    default-active="1"
    :collapse=collapse
  >
    <el-menu-item index="1">
      <i class="el-icon-menu"></i>
      <span>{{ $t("sidebar.dashboard") }}</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-user-solid"></i>
      <span>{{ $t("sidebar.all_profile") }}</span>
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

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";

export default class SideBar extends Vue {
  @Prop({ default: false }) collapse!: boolean;
}
</script>
