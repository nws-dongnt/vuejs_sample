<template>
  <div class="home">
    <AddminLayout>
       <img alt="Vue logo" src="../assets/logo.png" />
        <h1>THIS IS DASHBOARD</h1>
    </AddminLayout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AddminLayout from "../layouts/AdminLayout.vue";

@Component({
  components: {
    AddminLayout,

  },
})
export default class Dashboard extends Vue {}
</script>
