<template>
  <div class="modal-window">
    <div class="overlay" @click.self="close">
      <div class="modal" role="dialog" aria-modal="true">
        <header class="modal-head">
          <h3>{{ $t('modal.title') }}</h3>
          <button class="close" @click="close" aria-label="Close">×</button>
        </header>

        <form class="modal-form" @submit.prevent="submit">
          <label class="field">
            <span>{{ $t('modal.name') }}</span>
            <input v-model.trim="userLocal.name" required />
          </label>

          <label class="field">
            <span>{{ $t('modal.email') }}</span>
            <input type="email" v-model.trim="userLocal.email" required />
          </label>

          <label class="field">
            <span>{{ $t('modal.role') }}</span>
            <select v-model="userLocal.role">
              <option value="null"></option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Project Manager">Project Manager</option>
              <option value="Marketing Specialist">Marketing Specialist</option>
              <option value="DevOps Engineer">DevOps Engineer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
            </select>
          </label>

          <label class="field">
            <span>{{ $t('modal.department') }}</span>
            <select v-model="userLocal.department">
              <option value="null"></option>
              <option value="IT">IT</option>
              <option value="Design">Design</option>
              <option value="Management">Management</option>
              <option value="Marketing">Marketing</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
            </select>
          </label>

          <label class="field">
            <span>{{ $t('modal.salary') }}</span>
            <input type="number" v-model.number="userLocal.salary" min="0" required />
          </label>

          <label class="field">
            <span>{{ $t('modal.hire_date') }}</span>
            <input type="date" v-model="userLocal.date" required />
          </label>

          <div class="status">
            <label class="switch">
              <input type="checkbox" v-model="userLocal.isActive" />
              <span class="slider round"></span>
            </label>
            <div>
              {{ userLocal.isActive ? $t('modal.active') : $t('modal.inactive') }}
            </div>
          </div>

          <div class="actions">
            <button type="button" @click="close" class="btn-ghost">{{ $t('modal.cancel') }}</button>
            <button type="submit" class="btn">{{ $t('modal.save') }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    
    user: { type: Object, default: () => ({}) },
  },
  data() {
    return { userLocal: {} };
  },
  mounted() {
    
    this.$emit('opened');
  },
  beforeDestroy() {
   
    this.$emit('closed');
  },
  created() {
    this.copyFromProp(this.user);
  },
  watch: {
    user: {
      deep: true,
      handler(val) {
        this.copyFromProp(val);
      },
    },
  },
  methods: {
    copyFromProp(src) {
      this.userLocal =
        typeof structuredClone === 'function'
          ? structuredClone(src || {})
          : JSON.parse(JSON.stringify(src || {}));
    },
    close() {
      this.$emit('closed');
      this.$emit('close');
    },
    submit() {
      if (this.userLocal && this.userLocal.salary < 0) return;
      this.$emit('form_submitted', this.userLocal);
      this.close();
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  backdrop-filter: blur(2px);
  z-index: 1000;
  top: 0;
}
.modal {
  width: 100%;
  max-width: 480px;
  background: var(--bg-color);
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  padding: 16px;
  border: var(--border-color);
}
.modal-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
input,
select {
  height: 35px;
  border: none;
  background: var(--input-color);
  color: var(--text-color);
  border-radius: 8px;
  padding-left: 15px;
  
}
.close {
  position: relative;
  top: -70px;
  left: 500px;
  opacity: 0.8;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: rgba(180, 180, 180, 0.5);
  border: none;
  font-size: 25px;
}
.actions {
  display: flex;
  gap: 15px;
  justify-content: right;
}
.btn {
  padding: 10px 10px;
  background-color: var(--table-button-off);
  border-radius: 7px;
  color: var(--bg-color);
  list-style: none;
  border: none;
}
.btn-ghost {
  padding: 10px 10px;
  background-color: var(--input-color);
  border-radius: 7px;
  color: var(--text-color);
  list-style: none;
  border: var(--border-color);
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-top: 5px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.status {
  display: flex;
  flex-direction: column;
}
.slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: #ccc;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
}
input:checked + .slider {
  background-color: var(--input-color);
}
input:focus + .slider {
  box-shadow: 0 0 1px #000000;
}
input:checked + .slider:before {
  transform: translateX(26px);
}
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
</style>
