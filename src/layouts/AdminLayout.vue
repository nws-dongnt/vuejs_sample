<template>
  <div>
    <el-container>
      <el-aside style="height: 860px;">
        <SideBar />
      </el-aside>
      <el-container>
        <el-header style="border-bottom: 1px solid #eee">
          <div id="nav">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link" style="cursor: pointer;">
                {{$t("common.lang")}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <div @click="changeLang('en')"><el-dropdown-item> {{$t("common.english")}}</el-dropdown-item></div>
                <div @click="changeLang('vi')"> <el-dropdown-item v-on:click="changeLang"> {{$t("common.vietnamese")}}</el-dropdown-item></div>
              </el-dropdown-menu>
            </el-dropdown>
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

import NavBar from "../components/NavBar.vue";
import SideBar from "../components/SideBar.vue";

import i18n from "../langs/i18n"
@Component({
  components: {
    SideBar,
    NavBar,
  },
})
export default class AdminLayout extends Vue {
  private changeLang(lang: string) {
    i18n.locale = lang;
  }
}
</script>
