<template>
  <el-radio-group
    v-model="value"
    :size="propsRadioGr.size"
    :fill="propsRadioGr.fill"
    :disabled="propsRadioGr.disabled"
    :textColor="propsRadioGr.textColor"
  >
    <el-radio
      v-for="(propsRadio, index) in propsRadios"
      :key="index"
      :value="propsRadio.value"
      :label="propsRadio.label"
      :disabled="propsRadio.disabled"
      :border="propsRadio.border"
      :name="propsRadio.name"
    />
  </el-radio-group>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { TemplateRadioChild, TemplateRadioGroup } from "./radio";

@Component
export default class Checkbox extends Vue {
  @Prop() private propsRadios!: TemplateRadioChild[];
  @Prop() private propsRadioGr!: TemplateRadioGroup;
  @Prop() private value!: any;
}
</script>
