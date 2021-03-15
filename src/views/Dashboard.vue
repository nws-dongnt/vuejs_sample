<template>
  <div class="home">
    <AddminLayout>
      <div style="position: relative; display: flex;">
        <marquee
          style="position: absolute"
          behavior="scroll"
          direction="right"
          scrollamount="80"
        >
          <div :key="i" v-for="i in lopp10">
            <span class="custom-text" :key="i" v-for="i in lopp100">
              {{ $t("dashboard.title")}}_____
            </span>
            <br />
          </div>
        </marquee>
      </div>
    </AddminLayout>
  </div>
</template>

<style scoped>
.custom-text {
  font-size: 50px;
  font-weight: bold;
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AddminLayout from "../layouts/AdminLayout.vue";

@Component({
  components: {
    AddminLayout,
  },
})
export default class Dashboard extends Vue {
  private lopp100 = new Array(100);
  private lopp10 = new Array(13);
}
</script>
