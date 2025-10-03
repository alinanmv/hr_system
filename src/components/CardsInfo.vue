<template>
  <div class="cards">
    <div class="card">
      <div class="card-top">
        <p>{{ $t('emp_cards.total') }}</p>
        <svg class="user" xmlns="http://www.w3.org/2000/svg" width="13" viewBox="0 0 20 20">
          <path
            fill="#000000"
            d="M9.993 10.573a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9ZM10 0a6 6 0 0 1 3.04 11.174c3.688 1.11 6.458 4.218 6.955 8.078c.047.367-.226.7-.61.745c-.383.045-.733-.215-.78-.582c-.54-4.19-4.169-7.345-8.57-7.345c-4.425 0-8.101 3.161-8.64 7.345c-.047.367-.397.627-.78.582c-.384-.045-.657-.378-.61-.745c.496-3.844 3.281-6.948 6.975-8.068A6 6 0 0 1 10 0Z"
          />
        </svg>
      </div>
      <div class="card-bottom">
        <p class="strong">{{ usersCount }}</p>
        <p class="desc">{{ $t('emp_cards.in_db') }}</p>
      </div>
    </div>

    <div class="card">
      <div class="card-top">
        <p>{{ $t('emp_cards.active') }}</p>
        <svg class="user" xmlns="http://www.w3.org/2000/svg" width="13" viewBox="0 0 20 20">
          <path
            fill="#000000"
            d="M9.993 10.573a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9ZM10 0a6 6 0 0 1 3.04 11.174c3.688 1.11 6.458 4.218 6.955 8.078c.047.367-.226.7-.61.745c-.383.045-.733-.215-.78-.582c-.54-4.19-4.169-7.345-8.57-7.345c-4.425 0-8.101 3.161-8.64 7.345c-.047.367-.397.627-.78.582c-.384-.045-.657-.378-.61-.745c.496-3.844 3.281-6.948 6.975-8.068A6 6 0 0 1 10 0Z"
          />
        </svg>
      </div>
      <div class="card-bottom">
        <p class="strong">{{ activeUsersCount }}</p>
        <p class="desc">{{ $t('emp_cards.active_now') }}</p>
      </div>
    </div>

    <div class="card">
      <div class="card-top">
        <p>{{ $t('emp_cards.avg_salary') }}</p>

        <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 21 21">
          <path
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.5 3.5v12a2 2 0 0 0 2 2H17m-10.5-6v3m4-6v6m4-9v9"
          />
        </svg>
      </div>
      <div class="card-bottom">
        <p class="strong">{{ averageSalary.toFixed(2) }}</p>
        <p class="desc">{{ $t('emp_cards.across_all') }}</p>
      </div>
    </div>

    <div class="card">
      <div class="card-top">
        <p>{{ $t('emp_cards.departments') }}</p>

        <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 21 21">
          <path
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.5 3.5v12a2 2 0 0 0 2 2H17m-10.5-6v3m4-6v6m4-9v9"
          />
        </svg>
      </div>
      <div class="card-bottom">
        <p class="strong">{{ departmentsCount }}</p>
        <p class="desc">{{ $t('emp_cards.unique_depts') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CardsInfo',
  computed: {
    ...mapGetters(['usersCount', 'activeUsersCount', 'averageSalary', 'departmentsCount', 'users']),
  },
  mounted() {
    // this.fetchUsers();

    console.log('locale:', this.$i18n.locale);
    console.log('keys:', Object.keys(this.$i18n.getLocaleMessage(this.$i18n.locale)));
  },
  methods: {
    // ...mapActions(['fetchUsers']),
    formatCurrency(v) {
      return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        maximumFractionDigits: 0,
      }).format(v);
    },
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.cards {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 15px;
}
.card {
  flex: 1 1 auto;
  width: 20%;
  height: 135px;
  border: var(--border-color);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.card-top {
  font-size: 14px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
}
.card-bottom {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
}
.text {
  font-weight: 900;
  font-size: 25px;
}
.desc {
  font-size: 14px;
  color: #adacac;
  margin-top: 5px;
}
h1 {
  margin-top: 20px;
}
.strong {
  font-size: 25px;
  font-weight: 900;
}
svg path {
  stroke: var(--svg-color);
}
.user path {
  stroke: var(--svg-color);
  fill: var(--svg-color);
}
.card-bottom .desc {
  font-size: 12px;
}
</style>
