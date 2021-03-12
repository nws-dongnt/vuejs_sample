<template>
  <el-upload
    :action="props.action"
    :headers="props.headers"
    :multiple="props.multiple"
    :data="props.data"
    :name="props.name"
    :withCredentials="props.withCredentials"
    :showFileList="props.showFileList"
    :drag="props.drag"
    :accept="props.accept"
    :onPreview="props.onPreview"
    :onRemove="props.onRemove"
    :onSuccess="props.onSuccess"
    :onError="props.onError"
    :onProgress="props.onProgress"
    :onChange="props.onChange"
    :beforeUpload="props.beforeUpload"
    :thumbnailMode="props.thumbnailMode"
    :fileList="props.fileList"
    :listType="props.listType"
    :autoUpload="props.autoUpload"
    :httpRequest="props.httpRequest"
    :disabled="props.disabled"
    :limit="props.limit"
    :onExceed="props.onExceed"
    :clearFiles="props.clearFiles"
    :abort="props.abort"
    :submit="props.submit"
  >
    <Button :props="props.buttonProps" />
  </el-upload>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import TemplateUpload from "./upload";
import Button from "../button/Button.vue";

@Component({
  components: {
    Button,
  },
})
export default class InputNumber extends Vue {
  @Prop() private props!: TemplateUpload;
  @Prop() private value!: any;
}
</script>
