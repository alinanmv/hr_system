<template>
  <div class="base-input">
    <label v-if="label">{{ label }} </label>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  name: 'BaseInput',
  props: {
    value: String,
    label: String,
    type: String,
    placeholder: String,
    error: String,
  },
};
</script>
<style scoped>
input {
  width: 317px;
  height: 30px;
  background: #e5e5e5;
  border-radius: 8px;
  border: 0px;
  padding-left: 30px;
}
</style>
