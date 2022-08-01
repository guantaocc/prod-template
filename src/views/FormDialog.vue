<template>
  <div>
    <button @click="openDialog">打开modal</button>
    <FormModal ref="formModal" :onFinish="onFinish"></FormModal>
  </div>
</template>

<script>
import FormModal from "@/components/form/FormModal.vue";
export default {
  components: {
    FormModal,
  },
  data() {
    return {};
  },
  methods: {
    openDialog() {
      this.$refs.formModal.show({});
    },
    waitTime(time = 1000) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, time);
      });
    },
    // 表单确认函数，返回 true 则 关闭表单, 否则不关闭
    async onFinish(values, finishType) {
      // values
      console.log(values, finishType);
      await this.waitTime(2000);
      this.$message.success("提交成功");
      return true;
    },
  },
};
</script>

<style></style>
