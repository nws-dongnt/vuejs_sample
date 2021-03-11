<template>
  <div>
    <el-container>
      <el-aside style="height: 920px;">
        <SideBar />
      </el-aside>
      <el-container>
        <el-header style="border-bottom: 1px solid #eee">
          <div id="nav-bar">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link" style="cursor: pointer;">
                {{$t("common.lang")}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <div @click="changeLang('en')"><el-dropdown-item> {{$t("common.english")}}</el-dropdown-item></div>
                <div @click="changeLang('vi')"> <el-dropdown-item> {{$t("common.vietnamese")}}</el-dropdown-item></div>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main><slot /></el-main>
        <el-footer>© Copyrignt nws-dongnt (DONG DEN) dap troai :))</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
 #nav-bar {
   padding-top: 17px;
 }
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import NavBar from "../components/NavBar.vue";
import SideBar from "../components/SideBar.vue";

@Component({
  components: {
    SideBar,
    NavBar,
  },
})
export default class AdminLayout extends Vue {
  $store: any;
  private changeLang(lang: string) {
    this.$store.dispatch('setLang', lang);
  }
}
</script>
