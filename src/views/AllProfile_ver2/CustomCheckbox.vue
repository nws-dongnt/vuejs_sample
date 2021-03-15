<template>
  <div>
    <el-checkbox-group v-model="prop">
      <el-checkbox label="Meat" />
      <el-checkbox label="Girl" />
    </el-checkbox-group>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

@Component
export default class CustomCheckbox extends Vue {
  @Prop() private prop: any;
}
</script>
