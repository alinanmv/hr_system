<template></template>
<script>
export default {
  name: 'Button',
  props: {
    label: String,
    type: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
.button {
  padding: 12px;
  font-weight: bolder;
  border-radius: 3px;
  background-color: white;
  border: none;
  text-align: center;
}
</style>
