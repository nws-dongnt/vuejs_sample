<template>
  <div>
    <el-select v-model="prop" multiple collapse-tags>
      <el-option
        v-for="(item, index) in hobbiesOptions"
        :key="index"
        :label="item"
        :value="item"
      />
    </el-select>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { allHobbies } from "../../fakedata";
@Component
export default class CustomSelect extends Vue {
  @Prop() private prop: any;
  private hobbiesOptions = allHobbies.map((hob) => hob.name);
}
</script>
