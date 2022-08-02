<template>
  <el-dialog
    title="form dialog"
    :visible.sync="dialogVisible"
    width="800px"
    :before-close="handleClose"
    :close-on-click-modal="false"
    show-close
    @open="open"
    @close="handleCancel"
    ref="formDialog"
  >
    <el-form :model="form" ref="form">
      <FormItemPlus label="活动名称" tooltip="不能超过24个字符">
        <el-input v-model="form.name"></el-input>
      </FormItemPlus>
      <FormItemPlus label="年龄" tooltip="年龄">
        <el-input v-model="form.age"></el-input>
      </FormItemPlus>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="dialogVisible = false">取 消</el-button>
      <el-button
        size="small"
        type="primary"
        @click="handleOk"
        :loading="loading"
      >
        确 定
      </el-button>
    </span>
  </el-dialog>
</template>

<script>
import useFormDialog from "@/mixins/useFormDialog";
import FormItemPlus from "./FormItemPlus.vue";
export default {
  mixins: [useFormDialog],
  components: {
    FormItemPlus,
  },
  data() {
    return {
      form: {
        name: "",
        age: "",
      },
    };
  },
  mounted() {},
};
</script>

<style lang="less" scoped></style>
