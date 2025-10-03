<template>
  <div class="cards">
    <div class="card">
      <div class="card-top">
        <p>{{ $t('cards.time_title') }}</p>
        <svg width="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="card-bottom">
        <p class="strong">{{ time }}</p>
        <p class="desc">{{ $t('cards.time_tashkent') }}</p>
      </div>
    </div>

    <div class="card">
      <div class="card-top">
        <p>{{ $t('cards.date_title') }}</p>
        <svg width="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="card-bottom">
        <p class="strong">{{ date }}</p>
        <p class="desc">{{ $t('cards.workday') }}</p>
      </div>
    </div>

    <div class="card">
      <div class="card-top">
        <p>{{ $t('cards.perf_title') }}</p>
        <svg width="15px" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m0 6.5h2l2.5-6 2 12 3-9 2.095 6 1.405-3h2"
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            transform="translate(3 4)"
          />
        </svg>
      </div>
      <div class="card-bottom">
        <p class="strong">99.9%</p>
        <p class="desc">{{ $t('cards.all_ok') }}</p>
      </div>
    </div>

    <div class="card">
      <div class="card-top">
        <p>{{ $t('cards.depts_title') }}</p>
        <svg
          width="15px"
          viewBox="0 -39.5 155 155"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="trend_up"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M5.23656 74.9811C5.88372 74.9733 6.51912 74.8079 7.08796 74.4994L7.60458 74.2316C8.4865 73.8207 9.31966 73.3127 10.0888 72.7168L11.9738 71.1409C16.2735 67.552 20.7201 63.8427 24.9857 60.0648C33.2476 52.7479 41.6271 45.2474 49.7296 37.9935C52.9273 35.1306 56.1329 32.2629 59.3463 29.3903C59.5813 29.5675 59.7979 29.7276 60.0027 29.8779C60.5015 30.2314 60.9811 30.6112 61.4393 31.0159L66.3799 35.59C72.8599 41.5876 79.5598 47.7894 86.0937 53.9479C89.5066 57.1639 91.9738 57.3765 95.5338 54.7649C96.1337 54.3239 96.7152 53.8512 97.275 53.3931C97.6642 53.0768 98.0521 52.7592 98.4492 52.4514C111.483 42.3438 124.52 32.2394 137.562 22.1384C138.365 21.5168 139.19 20.9438 140.146 20.2809L140.606 19.9593C140.61 20.0728 140.601 20.1864 140.576 20.2974C139.59 24.1348 138.598 27.9713 137.602 31.8069C136.544 35.8841 135.49 39.9616 134.44 44.0397L134.33 44.4604C133.992 45.5494 133.802 46.6788 133.766 47.8183C133.792 49.0047 134.196 50.1517 134.919 51.0929C135.641 52.034 136.645 52.7202 137.785 53.0516C138.924 53.3831 140.14 53.3427 141.255 52.9361C142.369 52.5295 143.326 51.778 143.985 50.7908C144.693 49.6872 145.201 48.4661 145.482 47.1848C147.791 36.5049 150.824 22.4062 153.809 8.05403C154.269 5.86648 153.937 4.01434 152.858 2.69839C151.748 1.34371 149.913 0.628906 147.542 0.628906H147.46C146.4 0.636782 145.34 0.65506 144.281 0.674094C142.912 0.697722 141.543 0.722005 140.175 0.722005C140.047 0.722005 139.919 0.722005 139.788 0.722005C126.71 0.783354 113.649 1.68225 100.687 3.41305C99.0189 3.62636 96.7893 4.2308 96.6758 7.00448C96.5859 9.21371 98.1335 10.7772 100.715 11.0837C102.091 11.2232 103.477 11.2529 104.858 11.1723C110.219 10.9426 115.579 10.7056 120.939 10.4615C125.11 10.2746 129.281 10.0894 133.452 9.90562C134.088 9.8774 134.743 9.87805 135.477 9.88593L90.7044 44.3981L89.5283 43.3263C87.1248 41.1262 84.7232 38.9241 82.3237 36.7196C76.4704 31.3488 70.4177 25.7949 64.4257 20.3722C60.974 17.2481 58.1249 17.1311 54.895 19.9882L53.0265 21.6428C45.2062 28.5645 37.1194 35.7219 29.2374 42.8425C20.6394 50.607 12.1287 58.4942 5.67497 64.5016C4.25675 65.8423 3.00096 67.3446 1.93372 68.9783C1.42963 69.7271 1.21694 70.6342 1.33555 71.5288C1.45415 72.424 1.89598 73.2445 2.57772 73.8358C3.27763 74.5538 4.23368 74.966 5.23656 74.9811Z"
              fill="#000000"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="153.583"
                height="74.8225"
                fill="white"
                transform="translate(0.734619 0.178711)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="card-bottom">
        <p class="strong">85%</p>
        <p class="desc">{{ $t('cards.perf_great') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashCards',
  data() {
    return {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
  },
  mounted() {
    setInterval(() => {
      ((this.date = new Date().toLocaleDateString()),
        (this.time = new Date().toLocaleTimeString()));
    }, 1000);
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.cards {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 15px;
}
.card {
  flex: 1 1 auto;
  width: 20%;
  height: 135px;
  border: var(--border-color);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.card-top {
  font-weight: 900;
  font-size: 15px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
}
.card-bottom {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
}
.text {
  font-weight: 900;
  font-size: 25px;
}
.desc {
  font-size: 14px;
  color: #adacac;
  margin-top: 5px;
}
h1 {
  margin-top: 20px;
}
.strong {
  font-size: 25px;
  font-weight: 900;
}
.card-top p {
  font-size: 14px;
  font-weight: 400;
}
.card-bottom .desc {
  font-size: 12px;
}
svg path {
  stroke: var(--svg-color);
}
#trend_up path {
  fill: var(--svg-color);
}
</style>
