<template>
  <div class="personal_page">
    <div class="container">
      <div class="card_top">
        <div class="card_header">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 20 20">
            <path
              fill="#000000"
              d="M9.993 10.573a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9ZM10 0a6 6 0 0 1 3.04 11.174c3.688 1.11 6.458 4.218 6.955 8.078c.047.367-.226.7-.61.745c-.383.045-.733-.215-.78-.582c-.54-4.19-4.169-7.345-8.57-7.345c-4.425 0-8.101 3.161-8.64 7.345c-.047.367-.397.627-.78.582c-.384-.045-.657-.378-.61-.745c.496-3.844 3.281-6.948 6.975-8.068A6 6 0 0 1 10 0Z"
            />
          </svg>
          <p>{{ $t('personal.title') }}</p>
        </div>
        <p class="desc">{{ $t('personal.subtitle') }}</p>

        <div class="form_container">
          <div class="input">
            <label>{{ $t('personal.name') }}</label>
            <input
              type="text"
              :placeholder="$t('personal.name_ph')"
              v-model.trim="userLocal.name"
              required
            />
          </div>

          <div class="input">
            <label>{{ $t('personal.birthdate') }}</label>
            <input type="date" />
          </div>

          <div class="input">
            <label>{{ $t('personal.email') }}</label>
            <input
              type="email"
              :placeholder="$t('personal.email_ph')"
              v-model.trim="userLocal.email"
            />
          </div>

          <div class="input">
            <label>{{ $t('personal.role') }}</label>
            <input
              type="text"
              :placeholder="$t('personal.role_ph')"
              disabled
              v-model="userLocal.role"
            />
            <p class="desc" style="font-size: 11px">{{ $t('personal.role_note') }}</p>
          </div>

          <div class="full buttons">
            <button class="submit" @click="onSave">{{ $t('personal.save') }}</button>
            <button class="cancel" @click="onCancel">{{ $t('personal.cancel') }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Personal',

  data() {
    return {
      userLocal: {
        id: null, 
        name: '',
        email: '',
        role: '',
        birthdate: '',
      },
    };
  },

  computed: {
    ...mapGetters(['users']),
    firstUser() {
      return (this.users && this.users[0]) || {};
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
    ...mapActions(['updateData']),
    onSave() {
      this.updateData(this.userLocal);
      console.log('saved:', this.userLocal);
    },
    onCancel() {
      const base = this.firstUser || {};
      this.userLocal =
        typeof structuredClone === 'function'
          ? structuredClone(base)
          : JSON.parse(JSON.stringify(base));
    },
  },
};
</script>
<style scoped>

.personal_page {
  width: 750px;
  border-radius: 10px;
  height: 300px;
  border: var(--border-color);
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}
.container {
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.card_header {
  font-weight: 900;
  font-size: 15px;
  margin-top: 20px;
  display: flex;
  gap: 10px;
}
.form_container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 20px;
  margin-top: 20px;
}

.input {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
}

.input input {
  width: 100%;
  box-sizing: border-box;
}

.full {
  grid-column: 1 / -1;
}
.card_header p {
  font-weight: 500;
  font-size: 16px;
  color: var(--text-color);
}
.desc {
  font-size: 14px;
  color: #adacac;
  margin-top: 5px;
}

.inputs {
  height: 20%;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
}
input {
  width: 420px;
  background-color: var(--input-color);
  height: 30px;
  border-radius: 8px;
  display: flex;
  padding-left: 10px;
  border: var(--input-border);
  color: var(--text-color);
}
.input {
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: var(--text-color);
}
label {
  font-size: 13px;
}
.buttons {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  justify-content: center;
}
button {
  all: unset;
}
.submit {
  height: 30px;
  border-radius: 8px;
  border: none;
  background-color: var(--button-color);
  color: var(--button-text);
  font-size: 12px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.cancel {
  font-size: 12px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border-radius: 8px;
  border: var(--border-color);
  color: var(--text-color);
  padding: 0px 12px;
}
svg path {
  stroke: var(--svg-color);
  fill: var(--svg-color);
}
</style>
