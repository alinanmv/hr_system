<template>
  <div class="weather_page">
    <div class="card">
      <div class="card_container">
        <div class="card_header">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 24 24">
            <path
              fill="#000000"
              d="M11 5a5 5 0 0 0-4.916 5.919l.175.942l-.934.215A3.001 3.001 0 0 0 6 18h11a4 4 0 1 0-.067-8l-.86.014l-.142-.848A5.002 5.002 0 0 0 11 5Zm-7 5a7 7 0 0 1 13.723-1.957A6.001 6.001 0 0 1 17 20H6a5 5 0 0 1-1.988-9.589A7.092 7.092 0 0 1 4 10Z"
            />
          </svg>
          <p>{{ $t('weather.title') }}</p>
        </div>
        <p class="desc">{{ $t('weather.city') }}</p>
        <div class="weather_display">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 24 24">
            <path
              fill="#000000"
              d="M11 5a5 5 0 0 0-4.916 5.919l.175.942l-.934.215A3.001 3.001 0 0 0 6 18h11a4 4 0 1 0-.067-8l-.86.014l-.142-.848A5.002 5.002 0 0 0 11 5Zm-7 5a7 7 0 0 1 13.723-1.957A6.001 6.001 0 0 1 17 20H6a5 5 0 0 1-1.988-9.589A7.092 7.092 0 0 1 4 10Z"
            />
          </svg>
          <div class="weather_display_right">
            <p class="weather">{{ weather }}</p>
            <div class="button">{{ description }}</div>
          </div>
        </div>
        <div class="weather_details">
          <div class="details">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" id="drop" viewBox="0 0 16 16">
              <path
                fill="#0165e2"
                d="M8 12.09a1.74 1.74 0 0 1-1.25-.49a1.1 1.1 0 0 1-.36-.8a.63.63 0 0 0-.63-.63a.62.62 0 0 0-.62.63a2.33 2.33 0 0 0 .73 1.69a3 3 0 0 0 2.13.85a.63.63 0 1 0 0-1.25z"
              />
              <path
                fill="#0165e2"
                d="M9.25 1.25C9.06.23 8.43 0 8 0S6.94.23 6.75 1.25C6 5.2 2.5 7 2.5 10.82A5.35 5.35 0 0 0 8 16a5.35 5.35 0 0 0 5.5-5.18C13.5 7 10 5.2 9.25 1.25zM8 14.75a4.1 4.1 0 0 1-4.25-3.93c0-1.66.85-2.9 1.84-4.33A12.85 12.85 0 0 0 8 1.48v-.1v.1a12.85 12.85 0 0 0 2.39 5c1 1.43 1.84 2.67 1.84 4.33A4.1 4.1 0 0 1 8 14.75z"
              />
            </svg>
            <p class="desc">
              {{ $t('weather.humidity') }}: <span class="text">{{ humidity + '%' }}</span>
            </p>
            <span></span>
          </div>
          <div class="details">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 256 256">
              <path
                fill="#000000"
                d="M184 184a32 32 0 0 1-32 32c-13.7 0-26.95-8.93-31.5-21.22a8 8 0 0 1 15-5.56C137.74 195.27 145 200 152 200a16 16 0 0 0 0-32H40a8 8 0 0 1 0-16h112a32 32 0 0 1 32 32Zm-64-80a32 32 0 0 0 0-64c-13.7 0-26.95 8.93-31.5 21.22a8 8 0 0 0 15 5.56C105.74 60.73 113 56 120 56a16 16 0 0 1 0 32H24a8 8 0 0 0 0 16Zm88-32c-13.7 0-26.95 8.93-31.5 21.22a8 8 0 0 0 15 5.56C193.74 92.73 201 88 208 88a16 16 0 0 1 0 32H32a8 8 0 0 0 0 16h176a32 32 0 0 0 0-64Z"
              />
            </svg>
            <p class="desc">
              {{ $t('weather.wind') }}: <span class="text">{{ wind }}</span>
            </p>
            <span></span>
          </div>
        </div>
        <p id="small_desc">{{ $t('weather.last_update') }}:{{ time }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Weather',
  data() {
    return {
      humidity: null,
      wind: '',
      description: '',
      weather: '',
      time: new Date().toLocaleTimeString(),
    };
  },
  async mounted() {
    const r = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Tashkent&units=metric&lang=ru&appid=4f9f747678a4850d5f83c11224f598d4'
    );
    const d = await r.json();

    /*   setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);*/

    this.weather = Math.round(d.main.temp) + '°C';
    this.humidity = d.main.humidity;
    this.wind = d.wind.speed;
    this.description = d.weather[0].description;
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.weather_page {
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
}
.card_header {
  font-weight: 900;
  font-size: 15px;
  margin-top: 40px;
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
.weather_display {
  gap: 10px;
  margin-top: 20px;
  display: flex;
  align-items: center;
}
.weather {
  color: #ff6600;
  font-size: 25px;
  font-weight: 900;
}
.weather_details {
  display: flex;
  gap: 200px;
  margin-top: 20px;
}
.weather_details_right {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.weather_details .desc {
  font-size: 13px;
}
.details {
  display: flex;
  align-items: center;
  gap: 5px;
}
#small_desc {
  font-size: 12px;
  color: #adacac;
  margin-top: 20px;
}
.card_container {
  width: 95%;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.button {
  background-color: var(--table-button);
  width: 60px;
  padding: 3px;
  border-radius: 8px;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.text {
  color: var(--text-color);
}
svg path {
  stroke: var(--svg-color);
  fill: var(--svg-color);
}
#drop path {
  stroke: rgb(53, 53, 252);
  fill: rgb(53, 53, 252);
}
</style>
