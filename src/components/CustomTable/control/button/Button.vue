<template>
  <el-button
    :size="props.size"
    :plain="props.plain"
    :round="props.round"
    :loading="props.loading"
    :disabled="props.disabled"
    :icon="props.icon"
    :autofocus="props.autofocus"
    :nativeType="props.nativeType"
  >
    {{ props.label }}
  </el-button>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import TemplateButton from "./button";

@Component
export default class Button extends Vue {
  @Prop() private props!: TemplateButton;
}
</script>
