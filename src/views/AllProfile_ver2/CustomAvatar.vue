<template>
  <div>
    <el-avatar :src="prop"></el-avatar>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

@Component
export default class CustomAvatar extends Vue {
  @Prop() private prop: any;
}
</script>
