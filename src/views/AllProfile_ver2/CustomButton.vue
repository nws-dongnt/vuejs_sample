<template>
  <div>
    <el-button @click="toDetailPage">Detail</el-button>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

@Component
export default class CustomButton extends Vue {
  @Prop() private prop: any;
  @Prop() private id: any;
  $router: any;
  toDetailPage() {
    this.$router.push(`/profile-detail/update/` + this.id);
  }
}
</script>
