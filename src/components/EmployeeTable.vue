<template>
  <div class="table-card">
    <div class="table-top">
      <h3>{{ $t('table.title') }}</h3>
      <p class="desc">{{ $t('table.subtitle') }}</p>
    </div>
    <input
  type="text"
  :placeholder="$t('table.search_ph')"
  v-model.trim="search"
/>
    <table>
      <thead>
        <tr>
          <th>
            {{ $t('table.name') }}
            <button @click="toggleNameSort" class="sort_button">
              <svg id="arrow_svg" xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m11 16l-3 3m0 0l-3-3m3 3V5m5 3l3-3m0 0l3 3m-3-3v14"
                />
              </svg>
            </button>
          </th>
          <th>Email</th>
          <th>{{ $t('table.role') }}</th>
          <th>{{ $t('table.department') }}</th>
          <th>
            {{ $t('table.salary') }}
            <button @click="toggleSalarySort" class="sort_button">
              <svg id="arrow_svg" xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m11 16l-3 3m0 0l-3-3m3 3V5m5 3l3-3m0 0l3 3m-3-3v14"
                />
              </svg>
            </button>
          </th>
          <th>{{ $t('table.hire_date') }}</th>
          <th>{{ $t('table.status') }}</th>
          <th>{{ $t('table.action') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in paginatedUsers" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td>{{ user.department }}</td>
          <td>{{ formatSalary(user.salary) }}</td>
          <td>{{ user.date }}</td>
          <td>
            <span :class="['badge', user.isActive ? 'ok' : 'off']">
              {{ user.isActive ? 'Активен' : 'Неактивен' }}
            </span>
          </td>
          <td>
            <div class="button" @click="open(user.id)">
              <IconBase iconName="edit" width="24" height="24">
                <path
                  d="M12.3 3.7l4 4L7.6 16.4H3.5v-4.1L12.3 3.7zM14.7 1.3a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-1.8 1.8-4-4 1.8-1.8z"
                  fill="currentColor"
                />
              </IconBase>
            </div>
          </td>
        </tr>
      </tbody>
      <Modal
        v-if="show"
        :user="selectedUser"
        @form_submitted="update_data"
        @closed="show = false"
        @close="closeModal"
        @opened="$emit('modal-open')"
      />
    </table>
    <div id="last">
      <p class="desc">
        Показано 5 из 12 <br />
        записей
      </p>
      <div class="buttons">
        <button @click="page--" :disabled="page === 1" class="pagination-btn">
          {{ $t('table.prev') }}
        </button>
        <button
          id="button-numbers"
          v-for="n in totalPages"
          :key="n"
          type="button"
          @click="goToPage(n)"
          :class="{ active: page === n }"
        >
          {{ n }}
        </button>
        <button @click="page++" :disabled="page === totalPages" class="pagination-btn">
          {{ $t('table.next') }}
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import { $fetchUsers } from '../api/UsersAPI';
import IconBase from './IconBase.vue';
import Modal from './Modal.vue';
import usersStore from '../store/users';

export default {
  name: 'EmployeesTable',
  components: { Modal, IconBase },

  data() {
    return {
      page: 1,
      perPage: 5,
      show: false,
      selectedUser: null as any,
      search: '',
      sortByName: null as null | 'asc' | 'desc',
      sortBySalary: null as null | 'asc' | 'desc',
    };
  },

  async created(){
    try {
      if(this.users && this.users.length > 0){
        return;
      }
      const response = await $fetchUsers();

      usersStore.dispatch('fetchUsers', response);
    } catch (ex) {
      console.log(ex);
    }
  },

  computed: {
    ...mapGetters(['users']),

    filteredUsers(): any[] {
      const s = this.search.toLowerCase();
      if (!s) return this.users;
      return this.users.filter(
        (u: any) =>
          (u.name || '').toLowerCase().includes(s) || (u.email || '').toLowerCase().includes(s)
      );
    },

    sortedUsers(): any[] {
      const arr = this.filteredUsers.slice();

      if (this.sortByName) {
        arr.sort((a: { name: any }, b: { name: any }) =>
          this.sortByName === 'asc'
            ? String(a.name || '').localeCompare(String(b.name || ''))
            : String(b.name || '').localeCompare(String(a.name || ''))
        );
      } else if (this.sortBySalary) {
        arr.sort((a: { salary: any }, b: { salary: any }) => {
          const av = Number(a.salary) || 0;
          const bv = Number(b.salary) || 0;
          return this.sortBySalary === 'asc' ? av - bv : bv - av;
        });
      }
      return arr;
    },

    paginatedUsers(): any[] {
      const start = (this.page - 1) * this.perPage;
      return this.sortedUsers.slice(start, start + this.perPage);
    },

    totalPages(): number {
      return Math.max(1, Math.ceil(this.sortedUsers.length / this.perPage));
    },

    shownCount(): number {
      return this.paginatedUsers.length;
    },
    totalCount(): number {
      return this.sortedUsers.length;
    },
  },

  watch: {
    search() {
      this.page = 1;
    },
  },

  methods: {
    ...mapActions(['updateData', 'toggleUserActive']),

    goToPage(n: number) {
      if (n >= 1 && n <= this.totalPages) this.page = n;
    },

    toggleNameSort() {
      this.sortBySalary = null;
      this.sortByName =
        this.sortByName === 'asc' ? 'desc' : this.sortByName === 'desc' ? null : 'asc';
    },

    toggleSalarySort() {
      this.sortByName = null;
      this.sortBySalary =
        this.sortBySalary === 'asc' ? 'desc' : this.sortBySalary === 'desc' ? null : 'asc';
    },

    open(id: number) {
      const idx = this.users.findIndex((u: any) => u.id === id);
      this.selectedUser = this.users[idx] || null;
      this.show = true;
      this.$emit('modal-open');
    },

    closeModal() {
      this.show = false;
      this.$emit('modal-close');
    },

    update_data(form: any) {
      this.updateData(form);
      this.show = false;
      this.$emit('modal-close');
    },

    formatSalary(v: number): string {
      return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        maximumFractionDigits: 0,
      }).format(Number(v) || 0);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.table-card table {
  width: 100%;
  margin: 0 auto;
  border-spacing: 0;
  border: var(--border-color);
  border-radius: 8px;
  font-size: 14px;
}
.table-card {
  width: max;
  border: var(--border-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  margin-top: 20px;
  gap: 20px;
  padding: 30px 25px;
}
td,
th {
  border-right: none;
  border-left: none;
  height: 40px;
  border-bottom: var(--border-color);
  padding: 0px 10px;
}
th {
  text-align: left;
}
.table-card input {
  padding: 10px;
  background-color: var(--input-color);
  border: var(--input-border);
  border-radius: 10px;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.pagination button {
  border: none;
  background-color: var(--bg-color);
}
button {
  background-color: var(--button-color);
  border: none;
}
.desc {
  font-size: 14px;
  color: rgb(173, 172, 172);
  margin-top: 5px;
}
.nav .desc {
  font-size: 12px;
}
tbody tr:hover {
  background-color: var(--button-hover-color);
  transition: 0.4s;
}
.badge {
  padding: 5px;
  border-radius: 6px;
}
.ok {
  background-color: var(--button-color);
  color: var(--bg-color);
}
.off {
  background-color: var(--table-button);
}
#last {
  border-bottom: none;
}
.pagination-btn {
  padding: 7px;
  font-weight: 900;
}
input:hover {
  background-color: var(--button-hover-color);
  transition: 100ms;
}
.buttons {
  gap: 10px;
  display: flex;
  align-items: center;
}
#button-numbers {
  height: 30px;
  width: 30px;

  border-radius: 5px;
  border: var(--border-color);
  color: var(--text-color);
}
#button-numbers:hover {
  background-color: var(--button-hover-color);
}
#arrow_svg path {
  stroke: var(--svg-color);
}
.sort_button {
  all: unset;
}
.buttons button {
  background-color: var(--bg-color);
  color: var(--text-color);
  font-weight: 100;
}
.table-top h3 {
  font-size: 15px;
  font-weight: 300;
}
.table-top .desc {
  font-size: 13px;
}

.nav .desc:hover {
  color: var(--text-color);
}
#last {
  display: flex;
  justify-content: space-between;
  width: 65%;
}
#last .desc {
  font-size: 12px;
  text-align: left;
}
</style>
