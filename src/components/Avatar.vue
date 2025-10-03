<template>
  <div class="avatar">
    <div class="container">
      <div class="card_top">
        <div class="card_header">
          <svg id="camera" xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 24 24">
            <path
              fill="#000000"
              d="M19 6.5h-1.28l-.32-1a3 3 0 0 0-2.84-2H9.44A3 3 0 0 0 6.6 5.55l-.32 1H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3.05Zm1 11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-.68l.54-1.64a1 1 0 0 1 .95-.68h5.12a1 1 0 0 1 .95.68l.54 1.64a1 1 0 0 0 .9.68h2a1 1 0 0 1 1 1Zm-8-9a4 4 0 1 0 4 4a4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2Z"
            />
          </svg>
          <p>{{ $t('avatar.title') }}</p>
        </div>
        <p class="desc">{{ $t('avatar.subtitle') }}</p>
      </div>

      <div class="pfp">
        <img :src="currentAvatar" alt="avatar" width="90" class="avatar_img" />

        <label class="label" for="avatar_input">{{ $t('avatar.change') }}</label>
        <input type="file" id="avatar_input" accept="image/*" @change="onSelect" />
      </div>

      <p class="desc_small">{{ $t('avatar.recommended') }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';


import defaultAvatar from '../img/cat.png';

export default {
  name: 'Avatar',

  data() {
    return {
      defaultAvatar, 
    };
  },

  computed: {
    ...mapGetters(['users']),
    // берём первого пользователя (как и в Personal.vue)
    currentUser() {
      return (this.users && this.users[0]) || {};
    },
    
    currentAvatar() {
      return this.currentUser.avatar || this.defaultAvatar;
    },
  },

  methods: {
    ...mapActions(['updateData']),

    onSelect(e) {
      const file = e.target.files && e.target.files[0];
      if (!file || !this.currentUser?.id) return;

      const reader = new FileReader();
      reader.onload = () => {
        this.updateData({
          id: this.currentUser.id,
          avatar: reader.result, 
        });
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>

<style scoped>
.avatar {
  width: 430px;
  border-radius: 10px;
  height: 300px;
  border: var(--border-color);
  color: var(--text-color);
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
  margin-top: 25px;
  display: flex;
  gap: 10px;
  padding-left: 10px;
}
.card_header p {
  font-weight: 500;
  font-size: 16px;
}
.desc {
  font-size: 14px;
  color: #adacac;
  margin-top: 5px;
  padding-left: 10px;
}
.desc_small {
  font-size: 12px;
  color: #adacac;
  text-align: center;
}

.pfp {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.label {
  width: 90%;
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
  color: var(--bg-color);
}
input {
  display: none;
}
.avatar_img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
}
#camera path {
  fill: var(--svg-color);
}
</style>
