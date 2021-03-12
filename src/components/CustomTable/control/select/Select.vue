<template>
  <el-select
    v-model="value"
    :value="props.value"
    :multiple="props.multiple"
    :disabled="props.disabled"
    :valueKey="props.valueKey"
    :size="props.size"
    :clearable="props.clearable"
    :multipleLimit="props.multipleLimit"
    :autoComplete="props.autoCompleted"
    :name="props.name"
    :placeholder="props.placeholder"
    :filterable="props.filterable"
    :allowCreate="props.allowCreate"
    :filterMethod="props.filterMethod"
    :remote="props.remote"
    :remoteMethod="props.remoteMethod"
    :loading="props.loading"
    :loadingText="props.loadingText"
    :noMatchText="props.noMatchText"
    :noDataText="props.noDataText"
    :popperClass="props.popperClass"
    :defaultFirstOption="props.defaultFirstOption"
    :popperAppendToBody="props.popperAppendToBody"
    :focus="props.focus"
    :blur="props.blur"
    :collapse-tags="props.collapseTags"
  >
    <el-option
      v-for="(item, index) in props.options"
      :key="index"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    >
    </el-option>
  </el-select>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import TemplateSelect from "./select";

@Component
export default class InputNumber extends Vue {
  @Prop() private props!: TemplateSelect;
  @Prop() private value!: any;
}
</script>
