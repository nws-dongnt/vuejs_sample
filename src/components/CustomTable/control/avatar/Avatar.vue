<template>
  <el-avatar
    :icon="props.icon"
    :size="props.size"
    :shape="props.shape"
    :src="src"
    :error="props.error"
    :srcSet="props.srcSet"
    :alt="props.alt"
    :fit="props.fit"
  />
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import TemplateAvatar from "./avatar";

@Component
export default class Avatar extends Vue {
  @Prop() private props!: TemplateAvatar;
  @Prop() private src!: string;
}
</script>
