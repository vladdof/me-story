<template>
  <div class="sign-up">
    <p class="sign-up__title">Регистрация</p>
    <error-message>
      {{ errorMessage }}
    </error-message>
    <form
      class="form"
      @submit.prevent="signUp"
    >
      <text-field
        v-model="username"
        type="text"
        name="username"
        placeholder="Логин"
        autocomplete="off"
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
      <text-field
        v-model="password"
        type="password"
        name="password"
        placeholder="Пароль"
        class="form__input"
        required
      />
      <the-button :is-loading="isLoading">
        Зарегистрироваться
      </the-button>
    </form>
  </div>
</template>

<script>
import { http } from '@/lib/http-common';
import { ROUTES } from '@/constants';
import TextField from './text-field.vue';
import TheButton from './the-button.vue';
import ErrorMessage from './error-message.vue';

export default {
  name: 'sign-up',
  components: {
    TextField,
    TheButton,
    ErrorMessage,
  },
  data() {
    return {
      username: '',
      password: '',
      email: '',
      errorMessage: '',
      isLoading: false,
    };
  },
  methods: {
    async signUp() {
      try {
        this.isLoading = true;

        await http.post('/sign-up', {
          username: this.username,
          password: this.password,
          email: this.email,
        });

        this.$router.push({ name: ROUTES.LOGIN.NAME });
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
  .sign-up {
    max-width: 330px;
    margin: 50px auto;
    padding: 2rem 1rem;
    text-align: center;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.1);
  }

  .sign-up__title {
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
</style>
