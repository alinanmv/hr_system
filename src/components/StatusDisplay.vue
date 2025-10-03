<template>
  <div class="status_page">
    <div class="card">
      <div class="card_container">
        <div class="card_header">
          <p>{{ $t('status.title') }}</p>
        </div>
        <p class="desc">{{ $t('status.subtitle') }}</p>
        <div class="status_card">
          <div class="status">
            <div class="status_left">
              <p class="card_h">{{ $t('status.profile_updated') }}</p>
              <p class="desc">Иван Петров</p>
            </div>
            <div class="status_right">
              <button class="badge_ok">{{ $t('status.info') }}</button>
              <p class="desc">5 {{ $t('status.minutes_ago') }}</p>
            </div>
          </div>

          <div class="status">
            <div class="status_left">
              <p class="card_h">{{ $t('status.new_employee') }}</p>
              <p class="desc">{{ $t('status.system') }}</p>
            </div>
            <div class="status_right">
              <button class="badge_off">{{ $t('status.success') }}</button>
              <p class="desc">1 {{ $t('status.hours_ago') }}</p>
            </div>
          </div>

          <div class="status">
            <div class="status_left">
              <p class="card_h">{{ $t('status.analytics_updated') }}</p>
              <p class="desc">{{ $t('status.system') }}</p>
            </div>
            <div class="status_right">
              <button class="badge_ok">{{ $t('status.info') }}</button>
              <p class="desc">{{ $t('status.hours_ago_plural') }}</p>
            </div>
          </div>

          <div class="status">
            <div class="status_left">
              <p class="card_h">{{ $t('status.data_export') }}</p>
              <p class="desc">Анна Смирнова</p>
            </div>
            <div class="status_right">
              <button class="badge_off">{{ $t('status.success') }}</button>
              <p class="desc">3 {{ $t('status.hours_ago_plural') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StatusDisplay',
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.card_header {
  margin-top: 20px;
}
.card_header p {
  font-weight: 500;
  font-size: 16px;
}
.card_container {
  width: 95%;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card {
  width: 100%;
  height: 240px;
  border: var(--border-color);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.desc {
  font-size: 14px;
  color: #adacac;
}
.status {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.status_card {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}
.status_right {
  display: flex;
  gap: 5px;
  align-items: center;
}
.card_h {
  font-size: 13px;
}
.status .desc {
  font-size: 11px;
}
.badge_ok {
  padding: 5px;
  border-radius: 8px;
  background-color: var(--table-button);
  color: var(--text-color);
  font-size: 11px;
}
.badge_off {
  background-color: var(--table-button-off);
  padding: 5px;
  border-radius: 8px;
  font-size: 12px;
  color: var(--bg-color);
}
button {
  all: unset;
}
</style>
