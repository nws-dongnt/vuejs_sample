<template>
  <el-date-picker
    v-model="value"
    :value="props.value"
    :readonly="props.readonly"
    :disabled="props.disabled"
    :size="props.size"
    :editable="props.editable"
    :clearable="props.clearable"
    :placeholder="props.placeholder"
    :startPlaceholder="props.startPlaceholder"
    :endPlaceholder="props.endPlaceholder"
    :type="props.type"
    :format="props.format"
    :align="props.align"
    :popperClass="props.popperClass"
    :pickerOptions="props.pickerOptions"
    :rangeSeparator="props.rangeSeparator"
    :defaultValue="props.defaultValue"
    :valueFormat="props.valueFormat"
    :name="props.name"
  />
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import TemplateDatePicker from "./datepicker";

@Component
export default class DatePicker extends Vue {
  @Prop() private props!: TemplateDatePicker;
  @Prop() private value!: Date | string | Date[] | string[];
}
</script>
