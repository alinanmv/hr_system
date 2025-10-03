import Vue from 'vue';
import Vuex from 'vuex';
import { $fetchUsers } from '../api/UsersAPI';

Vue.use(Vuex);

function normalize(input) {
  if (Array.isArray(input)) return input; // [ ... ]
  if (input && Array.isArray(input.users)) return input.users;
  if (input && Array.isArray(input.data)) return input.data; // { data: [...] }
  if (input && Array.isArray(input.items)) return input.items; // { items: [...] }
  if (typeof input === 'string') {
    try {
      const parsed = JSON.parse(input);
      if (Array.isArray(parsed)) return parsed;
      if (parsed && Array.isArray(parsed.data)) return parsed.data;
    } catch {
      console.log('error while parsing to json');
    }
  }
  return [];
}

const usersStore = new Vuex.Store({
  state: {
    users: [],
  },

  getters: {
    users: (s) => s.users,
    usersCount: (s) => s.users.length,
    activeUsersCount: (s) => s.users.filter((u) => u.isActive === true).length,
    averageSalary: (s) => {
      if (!s.users.length) return 0;
      const sum = s.users.reduce((a, u) => a + (Number(u.salary) || 0), 0);
      return Math.round(sum / s.users.length);
    },
    departmentsCount: (s) => new Set(s.users.map((u) => u.department).filter(Boolean)).size,
  },

  mutations: {
    setUsers(state, list) {
      const arr = normalize(list);
      state.users = arr.map((u) => ({
        ...u,
        isActive: u.isActive === true || u.is_active === true,
      }));
    },

    toggleUserActive(state, id) {
      const i = state.users.findIndex((u) => u.id === id);
      if (i !== -1) {
        state.users[i].isActive = !state.users[i].isActive;
      }
    },

    setNewData(state, form) {
      const i = state.users.findIndex((u) => u.id === form.id);
      if (i !== -1) {
        Vue.set(state.users, i, { ...state.users[i], ...form });
      }
    },
  },

  actions: {
    async loadUsersIfNeeded({ state, commit }) {
      if (state.users.length) return; 
      try {
        const response = await $fetchUsers();
        commit('setUsers', response);
      } catch (err) {
        console.error('Ошибка загрузки пользователей:', err);
      }
    },
    fetchUsers({ commit }, list) {
      commit('setUsers', list);
    },
    updateData({ commit }, form) {
      commit('setNewData', form);
    },
    toggleUserActive({ commit }, id) {
      commit('toggleUserActive', id);
    },
  },
});

export default usersStore;
