<template>
  <div class="analytics_page">
    <div class="container">
      <nav class="nav">
        <BurgerMenu />
        <p class="desc">{{ $t('analytics.breadcrumb') }}</p>
      </nav>
      <div class="header">
        <h1>{{ $t('analytics.title') }}</h1>
        <p class="desc">{{ $t('analytics.subtitle') }}</p>
      </div>
      <Analytics class="analytics" />
    </div>
  </div>
</template>
<script>
import Analytics from '../components/Analytics.vue';
import BurgerMenu from '../components/BurgerMenu.vue';

export default {
  name: 'analytics_page',
  components: {
    Analytics,
    BurgerMenu,
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.analytics_page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
  color: var(--text-color);
}
.nav {
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
}
.desc {
  font-size: 14px;
  color: #adacac;
  margin-top: 5px;
}
.container {
  width: 95%;
  margin: 0 auto;
}
h1 {
  font-size: 20px;
  font-weight: 400;
}
button {
  all: unset;
}
.nav .desc {
  font-size: 12px;
}
.nav .desc:hover {
  color: var(--text-color);
}
.header {
  margin-top: 20px;
}
.analytics {
  margin-top: 20px;
}
</style>
