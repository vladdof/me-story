<template>
  <div class="sign-in">
    <p
      v-if="successMessage"
      class="success"
    >
      {{ successMessage }}
    </p>
    <div v-else>
      <p class="sign-in__title">Оставьте автору сообщение</p>
      <p
        v-if="errorMessage"
        :key="errorMessage"
        class="error"
      >
        {{ errorMessage }}
      </p>
      <form
        class="form"
        @submit.prevent="sendNotification"
      >
        <textarea
          v-model="message"
          type="text"
          name="message"
          placeholder="Оставьте свое сообщение"
          class="form__input"
          required
        />
        <input
          v-model="email"
          type="email"
          name="email"
          placeholder="Email"
          class="form__input"
          required
        />
        <button
          class="form__btn"
          type="submit"
        >
          Отправить сообщение
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { http } from '@/lib/http-common';

export default {
  name: 'feedback-form',
  data() {
    return {
      email: '',
      message: '',
      errorMessage: '',
      successMessage: '',
    };
  },
  methods: {
    async sendNotification() {
      this.errorMessage = '';

      try {
        const { data } = await http.post('/send-notification', {
          email: this.email,
          message: this.message,
        });

        this.successMessage = data?.message;
      } catch (error) {
        this.errorMessage = error.response.data.message;
        console.error('Ошибка: ', error.message);
      }
    },
  },
};
</script>

<style scoped>
.sign-in {
  max-width: 330px;
  margin: 50px auto;
  padding: 2rem 1rem;
  text-align: center;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.1);
}

.sign-in__title {
  margin-bottom: 1.7rem;
  font-size: 1.75rem;
  font-weight: bold;
}

.form__input {
  width: 100%;
  margin-bottom: 10px;
  padding: 12px 14px;
  border: 1px solid transparent;
  border-radius: 10px;
  background: #dfe9f5;
  outline: none;
  transition: border .2s;
}

.form__input:focus-within,
.form__input:focus {
  border: 1px solid #56acf7;
}

.form__btn {
  width: 100%;
  padding: 8px 10px;
  font-size: 1rem;
  color: #fff;
  border-radius: 10px;
  border: none;
  background: #f85f44;
  outline: none;
  cursor: pointer;
  transition: background .2s;
}

.form__btn:hover {
  background: #ea472b;
}

.sign-up {
  margin-top: 6px;
}

.link:hover {
  text-decoration: underline;
}

.error {
  margin-bottom: 16px;
  font-size: .85rem;
  color: #990808
}

.success {
  font-size: 1.75rem;
  color: #52e81c
}
</style>
