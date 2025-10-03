<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-link to="/login"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('loadUsersIfNeeded');
  },
};
</script>
