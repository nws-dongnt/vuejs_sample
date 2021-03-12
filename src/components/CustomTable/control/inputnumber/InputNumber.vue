<template>
  <el-input-number
    v-model="value"
    :value="props.value"
    :min="props.min"
    :max="props.max"
    :step="props.step"
    :size="props.size"
    :disabled="props.disabled"
    :controls="props.controls"
    :debounce="props.debounce"
    :controlsPosition="props.controlsPosition"
    :precision="props.precision"
    :stepStrictly="props.stepStrictly"
    :focus="props.focus"
  />
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import TemplateInputNumber from "./inputnumber";

@Component
export default class InputNumber extends Vue {
  @Prop() private props!: TemplateInputNumber;
  @Prop() private value!: number;
}
</script>
