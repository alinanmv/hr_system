<template>
  <div class="burger_menu">
    <button class="burger" @click="setOpen(!open)" aria-label="Toggle menu">
      <svg width="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0" />

        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

        <g id="SVGRepo_iconCarrier">
          <g id="System / Window_Sidebar">
            <path
              id="Vector"
              d="M3 6H3.01919M3.01919 6H9M3.01919 6C3 6.31438 3 6.70191 3 7.2002V16.8002C3 17.9203 3 18.4796 3.21799 18.9074C3.40973 19.2837 3.71547 19.5905 4.0918 19.7822C4.51921 20 5.079 20 6.19694 20L9 20M3.01919 6C3.04314 5.60768 3.09697 5.3293 3.21799 5.0918C3.40973 4.71547 3.71547 4.40973 4.0918 4.21799C4.51962 4 5.08009 4 6.2002 4H17.8002C18.9203 4 19.4796 4 19.9074 4.21799C20.2837 4.40973 20.5905 4.71547 20.7822 5.0918C20.9032 5.3293 20.957 5.60768 20.9809 6M9 6H20.9809M9 6V20M20.9809 6H21M20.9809 6C21 6.31368 21 6.70021 21 7.19691L21 16.8031C21 17.921 21 18.48 20.7822 18.9074C20.5905 19.2837 20.2837 19.5905 19.9074 19.7822C19.48 20 18.921 20 17.8031 20H9"
              stroke=" #2e2e31"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </svg>
    </button>

    <nav class="drawer" :class="{ open }" @keydown.esc="close">
      <div class="nav-top">
        <div class="header">
          <div class="user_icon">
            <svg
              id="user"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              viewBox="0 0 24 24"
              fill="#000000"
            >
              <g
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              >
                <path
                  d="M21 19.75c0-2.09-1.67-5.068-4-5.727m-2 5.727c0-2.651-2.686-6-6-6s-6 3.349-6 6"
                />
                <circle cx="9" cy="7.25" r="3" />
                <path d="M15 10.25a3 3 0 1 0 0-6" />
              </g>
            </svg>
          </div>

          <h3>{{ $t('menu.app_name') }}</h3>
        </div>

        <div class="navigation">
          <p class="desc">{{ $t('menu.navigation') }}</p>
          <ul class="links">
            <li>
              <button @click="($router.push('/dashboard'), close())">
                <svg class="svg" xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 16 16">
                  <path
                    fill="#000000"
                    d="M9.333 14a.667.667 0 0 1-.666-.667V8c0-.368.298-.667.666-.667h4c.368 0 .667.299.667.667v5.333a.667.667 0 0 1-.667.667zM2.667 8.667A.667.667 0 0 1 2 8V2.667C2 2.298 2.298 2 2.667 2h4c.368 0 .666.298.666.667V8a.667.667 0 0 1-.666.667zM6 7.333v-4H3.333v4zM2.667 14A.667.667 0 0 1 2 13.333v-2.666c0-.368.298-.667.667-.667h4c.368 0 .666.299.666.667v2.666a.667.667 0 0 1-.666.667zm.666-1.333H6v-1.334H3.333zm6.667 0h2.667v-4H10zm-1.333-10c0-.369.298-.667.666-.667h4c.368 0 .667.298.667.667v2.666a.667.667 0 0 1-.667.667h-4a.667.667 0 0 1-.666-.667zM10 3.333v1.334h2.667V3.333z"
                  /></svg
                >{{ $t('menu.dashboard') }}
              </button>
            </li>
            <li>
              <button @click="($router.push('/employee'), close())">
                <svg class="svg" xmlns="http://www.w3.org/2000/svg" width="13" viewBox="0 0 20 20">
                  <path
                    fill="#000000"
                    d="M9.993 10.573a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9ZM10 0a6 6 0 0 1 3.04 11.174c3.688 1.11 6.458 4.218 6.955 8.078c.047.367-.226.7-.61.745c-.383.045-.733-.215-.78-.582c-.54-4.19-4.169-7.345-8.57-7.345c-4.425 0-8.101 3.161-8.64 7.345c-.047.367-.397.627-.78.582c-.384-.045-.657-.378-.61-.745c.496-3.844 3.281-6.948 6.975-8.068A6 6 0 0 1 10 0Z"
                  />
                </svg>
                {{ $t('menu.employees') }}
              </button>
            </li>
            <li>
              <button @click="($router.push('/analytics_page'), close())">
                <svg id="graph" xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 21 21">
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.5 3.5v12a2 2 0 0 0 2 2H17m-10.5-6v3m4-6v6m4-9v9"
                  /></svg
                >{{ $t('menu.analytics') }}
              </button>
            </li>
            <li>
              <button @click="($router.push('/profile'), close())">
                <svg class="svg" xmlns="http://www.w3.org/2000/svg" width="13" viewBox="0 0 20 20">
                  <path
                    fill="#000000"
                    d="M9.993 10.573a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9ZM10 0a6 6 0 0 1 3.04 11.174c3.688 1.11 6.458 4.218 6.955 8.078c.047.367-.226.7-.61.745c-.383.045-.733-.215-.78-.582c-.54-4.19-4.169-7.345-8.57-7.345c-4.425 0-8.101 3.161-8.64 7.345c-.047.367-.397.627-.78.582c-.384-.045-.657-.378-.61-.745c.496-3.844 3.281-6.948 6.975-8.068A6 6 0 0 1 10 0Z"
                  />
                </svg>
                {{ $t('menu.profile') }}
              </button>
            </li>
          </ul>
        </div>

        <div class="settings">
          <p class="desc">{{ $t('menu.settings') }}</p>
          <ul class="links">
            <li>
              <button @click="toggle_theme" class="toggle_button">
                <svg
                  class="svg"
                  width="15px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.0174 2.80157C6.37072 3.29221 2.75 7.22328 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C16.7767 21.25 20.7078 17.6293 21.1984 12.9826C19.8717 14.6669 17.8126 15.75 15.5 15.75C11.4959 15.75 8.25 12.5041 8.25 8.5C8.25 6.18738 9.33315 4.1283 11.0174 2.80157ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.7166 1.25 13.0754 1.82126 13.1368 2.27627C13.196 2.71398 13.0342 3.27065 12.531 3.57467C10.8627 4.5828 9.75 6.41182 9.75 8.5C9.75 11.6756 12.3244 14.25 15.5 14.25C17.5882 14.25 19.4172 13.1373 20.4253 11.469C20.7293 10.9658 21.286 10.804 21.7237 10.8632C22.1787 10.9246 22.75 11.2834 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z"
                    fill="#1C274C"
                  /></svg
                >{{ $t('menu.dark_theme') }}
              </button>
            </li>
            <li>
              <button @click="toggle_lang">
                <svg
                  class="svg"
                  fill="#000000"
                  height="15px"
                  version="1.1"
                  id="XMLID_275_"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 24 24"
                  xml:space="preserve"
                >
                  <g id="language">
                    <g>
                      <path
                        d="M12,24C5.4,24,0,18.6,0,12S5.4,0,12,0s12,5.4,12,12S18.6,24,12,24z M9.5,17c0.6,3.1,1.7,5,2.5,5s1.9-1.9,2.5-5H9.5z
			 M16.6,17c-0.3,1.7-0.8,3.3-1.4,4.5c2.3-0.8,4.3-2.4,5.5-4.5H16.6z M3.3,17c1.2,2.1,3.2,3.7,5.5,4.5c-0.6-1.2-1.1-2.8-1.4-4.5H3.3
			z M16.9,15h4.7c0.2-0.9,0.4-2,0.4-3s-0.2-2.1-0.5-3h-4.7c0.2,1,0.2,2,0.2,3S17,14,16.9,15z M9.2,15h5.7c0.1-0.9,0.2-1.9,0.2-3
			S15,9.9,14.9,9H9.2C9.1,9.9,9,10.9,9,12C9,13.1,9.1,14.1,9.2,15z M2.5,15h4.7c-0.1-1-0.1-2-0.1-3s0-2,0.1-3H2.5C2.2,9.9,2,11,2,12
			S2.2,14.1,2.5,15z M16.6,7h4.1c-1.2-2.1-3.2-3.7-5.5-4.5C15.8,3.7,16.3,5.3,16.6,7z M9.5,7h5.1c-0.6-3.1-1.7-5-2.5-5
			C11.3,2,10.1,3.9,9.5,7z M3.3,7h4.1c0.3-1.7,0.8-3.3,1.4-4.5C6.5,3.3,4.6,4.9,3.3,7z"
                      />
                    </g>
                  </g></svg
                >{{ $t('menu.language') }}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="nav_bottom">
        <div class="profile">
          <div class="profile_left">
            <img
              :src="avatarSrc"
              alt="avatar"
              class="img"
              width="30"
              height="30"
              style="border-radius: 50%; object-fit: cover"
            />
            <input
              type="text"
              v-model.trim="userLocal.name"
              required
            />
          </div>

          <button id="log-out" @click="($router.push('/login'), close())">
            
<svg xmlns="http://www.w3.org/2000/svg" width="15"  viewBox="0 0 24 24"><path fill="none" stroke="var(--svg-color)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12h-9.5m7.5 3l3-3l-3-3m-5-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-1"/></svg>
          </button>
        </div>
      </div>
    </nav>

    <div class="backdrop" v-if="open" @click="close"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import defaultAvatar from '../img/cat.png';

export default {
  name: 'BurgerMenu',
  data: () => ({ open: false, userLocal: {
        id: null, 
        name: '',
     
      }, }),
  created() {
    this.$store.dispatch('loadUsersIfNeeded');
  },
  computed: {
    ...mapGetters(['users']),
    currentUser() {
      return (this.users && this.users[0]) || {};
    },
    avatarSrc() {
      return this.currentUser.avatar || defaultAvatar;
    },
    displayName() {
      return this.currentUser.name || '—';
    },
  },
  watch: {
    users: {
      immediate: true,
      handler(newUsers) {
        const base = (newUsers && newUsers[0]) || {};
        this.userLocal =
          typeof structuredClone === 'function'
            ? structuredClone(base)
            : JSON.parse(JSON.stringify(base || {}));
      },
    },
  },
  methods: {
    toggle_lang() {
      localStorage.setItem('lang', (this.$i18n.locale = this.$i18n.locale === 'ru' ? 'en' : 'ru'));
    },
    toggle_theme() {
      document.documentElement.classList.toggle('dark');
    },
    close() {
      this.setOpen(false);
    },
    setOpen(v) {
      this.open = v;
      document.body.classList.toggle('drawer-open', v);
    },
  },
};
</script>
<style>
body.drawer-open {
  margin-left: 220px;
 
  overflow: hidden;
}
body{
 transition: margin-left 0.25s ease;
}
body.drawer-open .backdrop {
  display: none !important;
}
</style>
<style scoped>
  input{
    all:unset;
    color:var(--text-color);
  }
button {
  all: unset;
}
.burger_menu {
  display: flex;
  align-items: end;
}
.burger {
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: 0px;
  display: flex;
  gap: 5px;
  color: var(--text-color);
  align-items: center;

  padding: 0;
}

* {
  margin: 0;
  padding: 0;
  font-size: 13px;
  color: #2e2e31;
}
.navigation {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
h3 {
  font-size: 15px;
  color: var(--text-color);
}
.header {
  display: flex;
  gap: 10px;
  align-items: center;
  padding-left: 15px;
}
li {
  display: flex;
  gap: 5px;
  align-items: center;
}
.profile_left {
  display: flex;

  align-items: center;
  gap: 10px;
}
.desc {
  font-size: 11px;
  font-weight: 900;
  color: #adacac;
  padding-left: 5px;
}

.drawer {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 220px;
  background: #fff;
  transform: translateX(-100%);
  transition: transform 0.25s ease;
  z-index: 999;
  padding: 15px 5px;
  display: flex;
  flex-direction: column;

  justify-content: start;
  flex-shrink: 0;
  background-color: var(--burger-menu-color);
  color: var(--text-color);
  border: var(--border-color);
}
.drawer.open {
  transform: translateX(0);
}

.links {
  list-style: none;
  padding: 0;

  display: flex;
  flex-direction: column;
}

#graph {
  stroke: var(--svg-color);
}

.settings {
  border-top: var(--border-color);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.settings .desc {
  margin-top: 20px;
}

.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  z-index: 998;
}
button {
  width: max-content;
  height: 30px;
  border-radius: 8px;
  border: 0px;
  display: flex;
  gap: 5px;
  color: var(--text-color);
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
}
button:hover {
  background: var(--button-hover-color);
  transition: 100ms;
}

.user_icon {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--svg-color);
  padding: 6px;
  border-radius: 3px;
}
#user path {
  stroke: var(--bg-color);
}
.svg path {
  fill: var(--svg-color);
}
.burger path {
  stroke: var(--svg-color);
  fill: none;
}
.profile p {
  color: var(--text-color);
  width: 100%;
  display: flex;
}
.profile {
  display: flex;
  width: 100%;
  padding-left: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.nav_bottom {
  display: flex;
  align-items: end;
  height: 56%;
}
#log_out {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
}
</style>
