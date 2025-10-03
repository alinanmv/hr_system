<template>
  <div :class="['employee-page', { 'no-scroll': ModalState.isOpened }]">
    <div class="container">
      <nav class="nav">
        <BurgerMenu />
        <p class="desc">{{ $t('employees.breadcrumb') }}</p>
      </nav>

      <div class="header">
        <h1>{{ $t('employees.title') }}</h1>
        <p class="desc">{{ $t('employees.subtitle') }}</p>
      </div>

      <CardsInfo />
      <EmployeeTable v-show="currentTab === 'Table'" :perPage="5" />
    </div>
  </div>
</template>

<script lang="ts">
import Analytics from '../components/Analytics.vue';
import BurgerMenu from '../components/BurgerMenu.vue';
import EmployeeTable from '../components/EmployeeTable.vue';
import NextButton from '../components/NextButton.vue';
import Tabs from '../components/Tabs.vue';
import CardsInfo from '../components/cardsInfo.vue';

export default {
  name: 'Employee',
  components: { NextButton, EmployeeTable, Analytics, CardsInfo, Tabs, BurgerMenu },
  provide() {
    return { ModalState: this.ModalState };
  },
  data() {
    return {
      tabs: ['Table', 'Analytics'],
      currentTab: 'Table',
      ModalState: { isOpened: false },
    };
  },
  methods: {
    openModal() {
      document.body.classList.add('noscroll');
    },
    closeModal() {
      document.body.classList.remove('noscroll');
    },
  },
};
</script>

<style scoped>
.nav .desc{
  font-size: 12px;
}
* {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
}
.employee-page {
  height: 100vh;
  background-color: var(--bg-color);
  color: var(--text-color);
}
.container {
  width: 95%;
  margin: 0 auto;
}
.no-scroll {
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: fixed;
}

#log-out {
  border: none;
  background: white;
}
.no-scroll {
  height: 100%;
  width: 100%;
  position: fixed;
  overflow: hidden;
}
.nav {
  padding-top: 20px;
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
</style>
