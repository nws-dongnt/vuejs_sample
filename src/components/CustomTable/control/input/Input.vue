<template>
  <el-input
    v-model="value"
    :type="props.type"
    :value="props.value"
    :maxlength="props.maxlength"
    :minlength="props.minlength"
    :placeholder="props.placeholder"
    :disabled="props.disabled"
    :size="props.size"
    :prefixIcon="props.prefixIcon"
    :suffixIcon="props.suffixIcon"
    :rows="props.rows"
    :autosize="props.autosize"
    :autoComplete="props.autoComplete"
    :name="props.name"
    :readonly="props.readonly"
    :max="props.max"
    :min="props.min"
    :step="props.step"
    :resize="props.resize"
    :autofocus="props.autofocus"
    :form="props.form"
    :validateEvent="props.validateEvent"
    :clearable="props.clearable"
    :showPassword="props.showPassword"
    :showWordLimit="props.showWordLimit"
    :focus="props.focus"
    :blur="props.blur"
    :select="props.select"
  />
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import TemplateInput from "./input";

@Component
export default class Input extends Vue {
  @Prop() private props!: TemplateInput;
  @Prop() private value!: string | number;
}
</script>
