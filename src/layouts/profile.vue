<template>
  <div class="profile_page">
    <div class="container">
      <nav class="nav">
        <BurgerMenu />
        <p class="desc">{{ $t('profile.breadcrumb') }}</p>
      </nav>

      <div class="header">
        <h1>{{ $t('profile.title') }}</h1>
        <p class="desc">{{ $t('profile.subtitle') }}</p>
      </div>

      <div class="hero">
        <Avatar />
        <PersonalChange class="item" />
      </div>

      <div class="card">
        <div class="card_container">
          <div class="card_header">
            <p>{{ $t('profile.stats_title') }}</p>
            <p class="desc">{{ $t('profile.stats_subtitle') }}</p>
          </div>

          <div class="items">
            <div class="card_item">
              <p class="strong">23</p>
              <p class="desc">{{ $t('profile.days_in_system') }}</p>
            </div>

            <div class="card_item">
              <p class="strong">47</p>
              <p class="desc">{{ $t('profile.logins') }}</p>
            </div>

            <div class="card_item">
              <p class="strong">12</p>
              <p class="desc">{{ $t('profile.profile_updates') }}</p>
            </div>

            <div class="card_item">
              <p class="strong">89%</p>
              <p class="desc">{{ $t('profile.activity') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from '../components/Avatar.vue';
import BurgerMenu from '../components/BurgerMenu.vue';
import PersonalChange from '../components/PersonalChange.vue';

export default {
  name: 'profile',
  components: { BurgerMenu, Avatar, PersonalChange },
};
</script>
<style>
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
  --login-color: #ffffff;
  --border-color: 1px solid #e5e5e5;
  --input-color: #e5e5e5;
  --button-color: #000000;
  --button-text: #ffffff;
  --card-color: #e5e5e5;
  --input-border: none;
  --button-hover-color: #e5e5e5;
}

:root.dark {
  --bg-color: #0b0b0f;
  --text-color: #e5e5e5;
  --login-color: #0b0b0f;
  --border-color: 1px solid #2e2e31;
  --input-color: #151518;
  --button-color: #ffffff;
  --button-text: #000000;
  --card-color: #1e1e20;
  --input-border: 1px solid #2e2e31;
  --button-hover-color: #2e2e31;
}
</style>
<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.profile_page {
  height: 100vh;
  background-color: var(--bg-color);
}
.container {
  width: 95%;
  margin: 0 auto;
}
.hero {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}
.nav {
  padding-top: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
}
.nav .desc {
  font-size: 12px;
}
.item {
  flex: 1;
}
.desc {
  font-size: 14px;
  color: #adacac;
  margin-top: 5px;
}
.header {
  margin-top: 20px;
}
h1 {
  font-size: 20px;
  font-weight: 400;
  color: var(--text-color);
}
.items {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 40px;
  margin-top: 20px;
}
.card_header {
  font-weight: 900;
  font-size: 15px;
  margin-top: 20px;
  display: flex;

  display: flex;
  flex-direction: column;
}
.card_header p {
  font-weight: 500;
  font-size: 16px;
}
.desc {
  font-size: 14px;
  color: #adacac;
  margin-top: 5px;
}
.card_item .desc {
  font-size: 13px;
  color: #adacac;
}
.card_item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.strong {
  font-size: 25px;
  font-weight: 900;
  color: var(--text-color);
}
.card {
  flex: 1;
  height: 155px;
  border: var(--border-color);
  border-radius: 10px;
  margin-top: 20px;
  color: var(--text-color);
}
.card_container {
  width: 95%;
  margin: 0 auto;
}
</style>
