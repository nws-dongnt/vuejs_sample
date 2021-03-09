<template>
  <div class="about">
    <AddminLayout> <h1>This is an about page</h1></AddminLayout>
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
export default class About extends Vue {}
</script>
