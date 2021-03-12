<template>
  <el-button
    v-if="props.click"
    :size="props.size"
    :plain="props.plain"
    :round="props.round"
    :loading="props.loading"
    :disabled="props.disabled"
    :icon="props.icon"
    :autofocus="props.autofocus"
    :nativeType="props.nativeType"
    @click="props.click(id)"
  >
    {{ props.label }}
  </el-button>
  <el-button
    v-else
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
  @Prop() private id!: string | number;
}
</script>
