<template>
  <div>
    <el-container>
      <el-aside style="height: 860px;">
        <SideBar/>
      </el-aside>
      <el-container>
        <el-header style="border-bottom: 1px solid #eee">
          <div id="nav">
            <router-link to="/dashboard">Home</router-link> |
            <router-link to="/about">About</router-link>
          </div>
        </el-header>
        <el-main><slot /></el-main>
        <el-footer>Footer</el-footer>
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
  
}
</script>
