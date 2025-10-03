<template>
  <div class="converter_page">
    <div class="card">
      <div class="converter_container">
        <div class="card_header">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 24 24">
            <path
              fill="#000000"
              d="M12 20.75a.76.76 0 0 1-.75-.75V4a.75.75 0 0 1 1.5 0v16a.76.76 0 0 1-.75.75Z"
            />
            <path
              fill="#000000"
              d="M13.5 18.75H7a.75.75 0 0 1 0-1.5h6.5A2.54 2.54 0 0 0 16.25 15a2.54 2.54 0 0 0-2.75-2.25h-3A4 4 0 0 1 6.25 9a4 4 0 0 1 4.25-3.75H16a.75.75 0 0 1 0 1.5h-5.5A2.54 2.54 0 0 0 7.75 9a2.54 2.54 0 0 0 2.75 2.25h3A4 4 0 0 1 17.75 15a4 4 0 0 1-4.25 3.75Z"
            />
          </svg>
          <p>{{ $t('converter.title') }}</p>
        </div>
        <p class="desc">{{ $t('converter.subtitle') }}</p>

        <div class="inputs">
          <div class="converter_input">
            <span>{{ $t('converter.amount_usd') }}</span>
            <input type="number" v-model.number="amount" @input="update"  class="input_converter" />
          </div>
          <div class="results">
            <p>{{ $t('converter.usd') }}: {{ amount }}</p>

            <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 24 24">
              <path
                fill="#000000"
                d="M14.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L16.586 8H5a1 1 0 0 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414zm-4.586 10a1 1 0 0 1 0 1.414L7.414 16H19a1 1 0 1 1 0 2H7.414l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0z"
              />
            </svg>
            <p>{{ $t('converter.uzs') }}: {{ formattedUzs }}</p>

            <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 24 24">
              <path
                fill="#000000"
                d="M14.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L16.586 8H5a1 1 0 0 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414zm-4.586 10a1 1 0 0 1 0 1.414L7.414 16H19a1 1 0 1 1 0 2H7.414l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0z"
              />
            </svg>
            <p>{{ $t('converter.rub') }}: {{ formattedRub }}</p>
          </div>
          <div class="small_desc">
            <p>{{ $t('converter.rates_realtime') }}</p>
            <p>{{ $t('converter.last_update') }}:{{ time }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      amount: 1n,
      rate: { uzs: 0, rub: 0 },
       time: new Date().toLocaleTimeString(),
    };
  },
  async mounted() {
    const d = await fetch('https://open.er-api.com/v6/latest/USD').then((r) => r.json());
     this.rate.uzs = Math.floor(Number(d.rates.UZS.toFixed(2)));
  this.rate.rub = Math.floor(Number(d.rates.RUB.toFixed(2)));
  },
  computed: {
    formattedUzs() {
      return Math.floor(Number(this.amount) * this.rate.uzs * 100)/100;
    },
    formattedRub() {
      return Math.floor(Number(this.amount) * this.rate.rub * 100) / 100;
    },
  },
  watch:{
  amount(newVal) {
    if (Number(newVal) > 9999999999999999) {
      alert("Слишком большое число! Максимум 9999999999999999");
      this.amount = 9999999999999999; // сбросить обратно
    }
  }
  
}}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.converter_page {
  display: flex;
  flex: 1 1 0;
  min-width: 0;
}
.card {
  width: 100%;

  height: 350px;
  border: var(--border-color);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.converter_container {
  width: 95%;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card_header {
  font-weight: 900;
  font-size: 15px;
  margin-top: 20px;
  display: flex;
  gap: 10px;
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
.small_desc {
  font-size: 12px;
  color: #adacac;
  margin-top: 20px;
}
.converter_input {
  display: flex;
  flex-direction: column;
}
.inputs {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}
.input_converter {
  height: 30px;
  border: none;
  background-color: var(--input-color);
  border: var(--border-color);
  border-radius: 8px;
  padding-left: 15px;
  font-size: 13px;
}
input {
  all: unset;
}
.results {
  display: flex;
  justify-content: space-between;
  align-items: end;
}

span {
  font-size: 13px;
}
.results p {
  font-size: 13px;
}
svg path {
  stroke: var(--svg-color);
  fill: var(--svg-color);
}
</style>
