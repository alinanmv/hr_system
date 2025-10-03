<template>
  <div class="analytics-card">
    <div class="card">
      <p class="card-heading">{{ $t('analytics.heading') }}</p>
      <p class="desc">{{ $t('analytics.count') }}</p>
      <div class="first-bar">
        <Bar :data="barData" :options="barOptions" />
      </div>
    </div>
    <div class="card">
      <p class="card-heading">{{ $t('analytics.heading') }}</p>
      <p class="desc">{{ $t('analytics.count') }}</p>
      <div class="first-bar">
        <Bar :data="barData" :options="barOptions" />
      </div>
    </div>
    <div class="card">
      <p class="card-heading">{{ $t('analytics.status') }}</p>
      <p class="desc">
        {{ $t('analytics.status_desc') }}
      </p>
      <div class="pie">
        <Pie :data="pieData" :options="pieOptions" />
      </div>
    </div>
    <div class="card">
      <p class="card-heading">{{ $t('analytics.dynamics') }}</p>
      <p class="desc">{{ $t('analytics.dynamics_desc') }}</p>
      <div class="line">
        <LineBar :data="lineData" :options="lineOptions" />
      </div>
    </div>
  </div>
</template>
<script>
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { Pie, Bar, Line as LineBar } from 'vue-chartjs';
import { mapGetters } from 'vuex';
import * as chartConfig from './chartConfig.js';
import { color } from 'chart.js/helpers';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

export default {
  name: 'Analytics',
  components: { Pie, Bar, LineBar },
  computed: {
    ...mapGetters(['users']),

    barData() {
      const countsByDept = {};
      (this.users || []).forEach((u) => {
        const dept = u.department || 'Без отдела';
        countsByDept[dept] = (countsByDept[dept] || 0) + 1;
      });
      const labels = Object.keys(countsByDept);
      const values = labels.map((k) => countsByDept[k]);

      return {
        labels,
        datasets: [
          {
            label: 'Сотрудников',
            data: values,
            backgroundColor: [' #000000', '#eceaea'],
          },
        ],
      };
    },
    barOptions() {
      return chartConfig.barOptions || { responsive: true, maintainAspectRatio: false };
    },

    pieData() {
      const active = (this.users || []).filter((u) => !!(u.isActive ?? u.is_active)).length;
      const inactive = Math.max(0, (this.users || []).length - active);
      return {
        labels: ['Активен', 'Неактивен'],
        datasets: [{ data: [active, inactive], backgroundColor: [' #000000', '#eceaea'] }],
      };
    },
    pieOptions() {
      return chartConfig.options || { responsive: true, maintainAspectRatio: false };
    },

    lineData() {
      const byMonth = new Map();
      (this.users || []).forEach((u) => {
        let d = u.date;
        if (!d) return;

        if (/^\d{8}$/.test(String(d))) {
          const s = String(d);
          d = `${s.slice(0, 4)}-${s.slice(4, 6)}-${s.slice(6, 8)}`;
        }
        const m = String(d).slice(0, 7);
        if (!/^\d{4}-\d{2}$/.test(m)) return;
        byMonth.set(m, (byMonth.get(m) || 0) + 1);
      });

      const labels = Array.from(byMonth.keys()).sort();
      const values = labels.map((k) => byMonth.get(k));

      return {
        labels,
        datasets: [
          {
            label: 'Новых сотрудников',
            data: values,
            tension: 0.3,
            fill: false,
            backgroundColor: [' #000000', '#ECEAEA'],
          },
        ],
      };
    },
    lineOptions() {
      return chartConfig.lineOptions || { responsive: true, maintainAspectRatio: false };
    },
  },
};
</script>

<style scoped>
.card {
  border: var(--border-color);
  border-radius: 10px;
  padding: 20px;
  color: var(--text-color);
  min-height: 250px;
  box-sizing: border-box;
}
.analytics-card {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: auto auto;
  gap: 20px;
  width: 100%;
}
.pie {
  width: 200px;
}
.card-heading {
  font-weight: 900;
}
.first-bar {
  height: 200px;
}
.desc {
  font-size: 11px;

  color: #adacac;
}
.card-heading {
  font-size: 14px;
  font-weight: 100;
}
</style>
