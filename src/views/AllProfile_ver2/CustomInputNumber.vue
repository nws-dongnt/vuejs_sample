<template>
  <div>
    <el-input-number v-model="prop"></el-input-number>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

@Component
export default class CustomInputNumber extends Vue {
  @Prop() private prop: any;
}
</script>
