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
      <error-message>
        {{ errorMessage }}
      </error-message>
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
        <text-field
          v-model="email"
          type="email"
          name="email"
          placeholder="Email"
          class="form__input"
          required
        />
        <the-button :is-loading="isLoading">
          Отправить сообщение
        </the-button>
      </form>
    </div>
  </div>
</template>

<script>
import { http } from '@/lib/http-common';
import TextField from './text-field.vue';
import TheButton from './the-button.vue';
import ErrorMessage from './error-message.vue';

export default {
  name: 'feedback-form',
  components: {
    TextField,
    TheButton,
    ErrorMessage,
  },
  data() {
    return {
      email: '',
      message: '',
      errorMessage: '',
      successMessage: '',
      isLoading: false,
    };
  },
  methods: {
    async sendNotification() {
      this.errorMessage = '';

      try {
        this.isLoading = true;

        const { data } = await http.post('/send-notification', {
          email: this.email,
          message: this.message,
        });

        this.successMessage = data?.message;
      } catch (error) {
        this.errorMessage = error.response.data.message;
        console.error('Ошибка: ', error.message);
      } finally {
        this.isLoading = false;
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

.sign-up {
  margin-top: 6px;
}

.link:hover {
  text-decoration: underline;
}

.success {
  font-size: 1.75rem;
  color: #52e81c
}
</style>
