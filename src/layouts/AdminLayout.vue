<template>
  <div>
    <el-container>
      <el-header style="border-bottom: 1px solid #eee">
        <div id="nav">
          <i class="el-icon-d-arrow-left" style="float: left;" />
          <router-link to="/dashboard">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
      </el-header>
      <el-container style="height: 860px;">
        <el-aside style="height: 860px;">
          <SideBar :collapse="isCollapse"/>
        </el-aside>
        <el-main>
          <slot />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// import NavBar from "../components/NavBar.vue";
import SideBar from "../components/SideBar.vue";

@Component({
  components: {
    SideBar,
    //  NavBar,
  },
})
export default class Home extends Vue {
  public isCollapse = false;
}
</script>
