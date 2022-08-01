export default {
  props: {
    // onFinish 表单提交函数
    onFinish: { type: Function },
    loadingText: { type: String, default: "" },
  },
  data() {
    return {
      // 提交表单的 loading
      loading: false,
      dialogVisible: false,
      // 对话框内容被打开
    };
  },
  methods: {
    // 打开表单
    show(ModalProps = {}, type = "add") {
      // 如果有 ModalProps 则填充表单
      Object.assign(this.form, { ...ModalProps });
      this.dialogType = type;
      this.dialogVisible = true;
    },
    // 如果是 form表单则重置
    handleClose(done) {
      this.resetForm();
      done();
    },
    resetForm() {
      // 查找 el-form表单
      const formRef = this.$refs.form;
      if (formRef) {
        // 重置表单
        typeof formRef.resetField === "function" && formRef.resetFields();
        this.form = this.$options.data().form;
      }
    },
    // 对话框确定事件, 请求接口
    handleOk() {
      this.loading = true;
      this.onFinish(this.form, this.dialogType)
        .then((successed) => {
          if (successed) {
            // 抛出结束事件
            this.$emit("finished");
            this.dialogVisible = false;
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    // 对话框取消事件
    handleCancel() {
      this.resetForm();
      this.$emit("cancel");
    },
    // 对话框打开
    open() {
      this.$emit("open");
    },
  },
};
