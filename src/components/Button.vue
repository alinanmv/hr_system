<template>
  <div class="button">
    <button class="button" :type="type" @click="$emit('click')">
      {{ label }}
    </button>
  </div>
</template>
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
  width: 100%;
  height: 30px;
  border-radius: 8px;
  border: none;
  background-color: var(--button-color);
  color: var(--button-text);
}
</style>
