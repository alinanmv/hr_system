<template>
  <div class="login_input">
    <label v-if="label">{{ label }} </label>
    <div class="input">
      <svg width="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
      <input
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginInput',
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
.input {
  display: flex;
  gap: 5px;
}
input {
  all: unset;
  font-size: 12px;
}
svg path,
rect {
  stroke: var(--svg-color);
}
</style>
