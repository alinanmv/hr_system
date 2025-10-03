<template>
  <div class="page">
    <div class="shrink">
      <nav class="nav">
        <BurgerMenu />
        <p class="desc">{{ $t('dashboard.breadcrumb') }}</p>
      </nav>

      <div class="header">
        <h1>{{ $t('dashboard.title') }}</h1>
        <p class="desc">{{ $t('dashboard.desc') }}</p>
      </div>
      <DashCards />
      <div class="card">
        <Weather id="weather" />
        <Converter />
      </div>
      <StatusDisplay />
    </div>
  </div>
</template>
<script>
import Converter from '../components/ Converter.vue';
import BurgerMenu from '../components/BurgerMenu.vue';
import DashCards from '../components/DashCards.vue';
import StatusDisplay from '../components/StatusDisplay.vue';
import Weather from '../components/Weather.vue';

export default {
  name: 'dashboard',
  components: { DashCards, Weather, Converter, StatusDisplay, BurgerMenu },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.shrink {
  width: 95%;
  margin: 0 auto;
}
.page {
  height: 100%;
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
.header {
  margin-top: 20px;
}
.desc {
  font-size: 14px;
  color: #adacac;
  margin-top: 5px;
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
#weather {
  margin-top: 20px;
}
.card {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}
.header {
  margin-top: 20px;
}
h1 {
  font-size: 20px;
  font-weight: 400;
  color: var(--text-color);
}
</style>
