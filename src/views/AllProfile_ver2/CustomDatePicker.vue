<template>
  <div>
    <el-date-picker v-model="prop" type="date" placeholder="Pick a day" />
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
@Component
export default class CustomDatePicker extends Vue {
  @Prop() private prop: any;
}
</script>
