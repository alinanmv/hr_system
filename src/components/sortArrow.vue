<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    aria-hidden="true"
    class="inline-block align-middle"
  >
    <!-- Вверх -->
    <path
      d="M8 11 L12 7 L16 11"
      fill="none"
      :stroke="upColor"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <!-- Вниз -->
    <path
      d="M8 13 L12 17 L16 13"
      fill="none"
      :stroke="downColor"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: 'SortArrows',
  props: {
    direction: {
      // 'asc' | 'desc' | null
      type: String,
      default: null,
      validator: (v) => [null, 'asc', 'desc'].includes(v),
    },
    size: { type: [Number, String], default: 16 },
    strokeWidth: { type: [Number, String], default: 2 },
    activeColor: { type: String, default: 'currentColor' },
    inactiveColor: { type: String, default: '#C9CED6' },
  },
  computed: {
    upColor() {
      return this.direction === 'asc' ? this.activeColor : this.inactiveColor;
    },
    downColor() {
      return this.direction === 'desc' ? this.activeColor : this.inactiveColor;
    },
  },
};
</script>
