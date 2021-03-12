<template>
  <el-checkbox-group
    v-model="checkList"
    :size="propsCbGr.size"
    :disabled="propsCbGr.disabled"
    :min="propsCbGr.min"
    :max="propsCbGr.max"
    :textColor="propsCbGr.textColor"
    :fill="propsCbGr.fill"
  >
    <el-checkbox
      v-for="(propsCb, index) in propsCbs"
      :key="index"
      :value="propsCb.value"
      :label="propsCb.label"
      :trueLabel="propsCb.trueLabel"
      :falseLabel="propsCb.falseLabel"
      :name="propsCb.name"
      :border="propsCb.border"
      :size="propsCb.size"
      :disabled="propsCb.disabled"
      :checked="propsCb.checked"
      :indeterminate="propsCb.indeterminate"
    />
  </el-checkbox-group>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { TemplateCheckBoxRadio, TemplateCheckBoxGroup } from "./checkbox";

@Component
export default class Checkbox extends Vue {
  @Prop() private propsCbs!: TemplateCheckBoxRadio[];
  @Prop() private propsCbGr!: TemplateCheckBoxGroup;
  @Prop() private checkList!: string[];
}
</script>
