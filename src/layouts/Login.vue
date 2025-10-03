<template>
  <div class="login-page">
    <button class="moon" @click="toggle_theme">
      <svg width="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.0174 2.80157C6.37072 3.29221 2.75 7.22328 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C16.7767 21.25 20.7078 17.6293 21.1984 12.9826C19.8717 14.6669 17.8126 15.75 15.5 15.75C11.4959 15.75 8.25 12.5041 8.25 8.5C8.25 6.18738 9.33315 4.1283 11.0174 2.80157ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.7166 1.25 13.0754 1.82126 13.1368 2.27627C13.196 2.71398 13.0342 3.27065 12.531 3.57467C10.8627 4.5828 9.75 6.41182 9.75 8.5C9.75 11.6756 12.3244 14.25 15.5 14.25C17.5882 14.25 19.4172 13.1373 20.4253 11.469C20.7293 10.9658 21.286 10.804 21.7237 10.8632C22.1787 10.9246 22.75 11.2834 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z"
          fill="#1C274C"
        />
      </svg>
    </button>
    <div class="lang_select">
      <button class="language" @click="toggle_lang">
        <svg
          fill="#000000"
          width="15px"
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
          </g>
        </svg>
      </button>
    </div>
    <div class="login">
      <div class="login_header">
        <h3>{{ $t('login_page.login') }}</h3>
        <p class="desc">{{ $t('login_page.desc') }}</p>
      </div>

      <form @submit.prevent="onSubmit">
        <div class="field">
          <label class="label">{{ $t('login_page.email') }}</label>

          <LoginInput
            v-model.trim="email"
            type="email"
            placeholder="you@example.com"
            class="email_input"
          />
        </div>

        <div class="field">
          <label class="label">{{ $t('login_page.password') }}</label>
          <PasswordInput
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="••••••"
            class="email_input"
          />
        </div>

        <Button
          :label="$t('login_page.login')"
          type="button"
          :disabled="!canSubmit"
          id="button"
          @click="onSubmit"
        ></Button>
      </form>
      <button class="q_btn">{{ $t('login_page.forgot') }}</button>
      <div class="registr">
        <p class="desc_p">{{ $t('login_page.no_accout') }}</p>
        <button class="q_btn">{{ $t('login_page.registration') }}</button>
      </div>
      <div class="test_box">
        <p class="desc_p">{{ $t('login_page.test') }}</p>
        <div class="test">
          <p class="test_p">Email: user@example.com</p>
          <p class="test_p">Пароль: password</p>
          <p class="test_p">2FA код: 123456</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Button from '../components/Button.vue';
import LoginInput from '../components/EmailInput.vue';
import PasswordInput from '../components/PasswordInput.vue';

export default {
  name: 'Login',
  components: { Button, LoginInput, PasswordInput },
  data() {
    return { email: '', password: '', showPassword: false, error: null, isDark: false };
  },
  computed: {
    canSubmit() {
      return this.email.length > 3 && this.password.length >= 6;
    },
  },
  methods: {
    toggle_lang() {
      localStorage.setItem('lang', (this.$i18n.locale = this.$i18n.locale === 'ru' ? 'en' : 'ru'));
    },

    toggle_theme() {
      const root = document.documentElement; // <html>
      root.classList.toggle('dark');
    },
    goToLogin() {
      this.$router.push('/login');
    },

    onSubmit() {
      this.error = null;
      if (this.email === 'user@example.com' && this.password === 'password') {
        this.$router.push('/auth');
      } else {
        console.log('wrong passwords');
      }
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
:root {
 --drawer-width: 220px;      
  --drawer-anim: 250ms ease; 
  --svg-color: black;
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
  --table-button: rgb(236, 234, 234);
  --table-button-off: black;
  --burger-menu-color: #fafafa;
}

:root.dark {
  --svg-color: #e5e5e5;
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
  --table-button: #2e2e31;
  --dark-text-color: black;
  --table-button-off: rgb(236, 234, 234);
  --burger-menu-color: #171717;
}
</style>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
h3 {
  font-size: 16px;
  font-weight: 400;
}
.label {
  font-size: 12px;
}
.desc {
  font-size: 15px;
  color: #adacac;
  margin-top: 5px;
}
.login-page {
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color);
  color: var(--text-color);
}
.login {
  width: 350px;
  margin: 48px auto;
  padding: 24px;
  border: var(--border-color);
  border-radius: 10px;
  font-family: 'helvetica';
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  gap: 20px;
  background-color: var(--login-color);
}
.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
  gap: 5px;
}
.inline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 8px 0 16px;
}
.error {
  color: #d33;
  margin-top: 12px;
}
.test_box {
  background: var(--card-color);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 12px;
  padding: 15px 10px;
  border: none;
  border-radius: 8px;
}
.test {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.test_p {
  font-size: 10px;
}
.desc_p {
  font-size: 13px;
  color: #757575;
}
.q_btn {
  border: none;
  background: none;
  font-weight: 900;
  font-size: 12px;
  text-align: center;
}
.q_btn:hover {
  text-decoration: underline;
  transition: 0.3s;
  text-underline-offset: 4px;
}
.registr {
  display: flex;
  justify-content: center;
  gap: 5px;
}
.email_input {
  background-color: var(--input-color);
  height: 30px;
  border-radius: 8px;
  display: flex;
  padding-left: 10px;
  border: var(--input-border);
}
.email_input:focus {
  box-shadow: 0 0 5px 3px rgba(180, 180, 180, 0.5);
}
button {
  all: unset;
}
.moon {
  position: absolute;
  top: 15px;
  right: 60px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
}
.language {
  position: absolute;
  top: 15px;
  right: 20px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
}

.moon:hover {
  background-color: var(--button-hover-color);
  transition: 0.3s;
}
.language:hover {
  background-color: var(--button-hover-color);
  transition: 0.3s;
}
.theme_dark {
  background-color: black;
}
svg path {
  fill: var(--svg-color);
}
</style>
