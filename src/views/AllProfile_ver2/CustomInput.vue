<template>
  <div>
    <el-input v-model="prop"></el-input>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

@Component
export default class CustomInput extends Vue {
  @Prop() private prop: any;
}
</script>
