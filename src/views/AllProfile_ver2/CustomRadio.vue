<template>
  <div>
    <el-radio-group v-model="prop">
      <el-radio :label="0">
          <i class="el-icon-male" />
      </el-radio>
      <el-radio :label="1">
         <i class="el-icon-female" />
      </el-radio>
    </el-radio-group>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

@Component
export default class CustomRadio extends Vue {
  @Prop() private prop: any;
}
</script>
