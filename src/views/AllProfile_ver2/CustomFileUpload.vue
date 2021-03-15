<template>
  <div>
    <el-upload
      action="#"
      :autoUpload="false"
      :showFileList="false"
      :onChange="(file) => toggleUpload(file)"
      :onRemove="(file) => toggleUpload(file)"
    >
    <el-button>Upload</el-button>
    </el-upload>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

@Component
export default class CustomFileUpload extends Vue {
  @Prop() private prop: any;
  public toggleUpload(file: any) {
    console.log(file);
  }
}
</script>
