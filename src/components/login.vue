<template>
  <div class="sign-in">
    <p class="sign-in__title">Добро пожаловать</p>
    <error-message>
      {{ errorMessage }}
    </error-message>
    <form
      class="form"
      @submit.prevent="login"
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
        v-model="password"
        type="password"
        name="password"
        placeholder="Пароль"
        class="form__input"
        required
      />
      <the-button :is-loading="isLoading">
        Войти
      </the-button>
    </form>
    <div class="sign-up">
      <router-link
        class="link"
        :to="$options.signUpRoute"
      >
        Зарегистрироваться
      </router-link>
      <span class="ml-1"> если у вас все еще нет аккаунта.</span>
    </div>
  </div>
</template>

<script>
import { ROUTES } from '@/constants';
import { apiAdapter } from '@/lib/api-adapter';

import TextField from './text-field.vue';
import TheButton from './the-button.vue';
import ErrorMessage from './error-message.vue';

export default {
  name: 'login',
  components: {
    TextField,
    TheButton,
    ErrorMessage,
  },
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
      isLoading: false,
    };
  },
  signUpRoute: ROUTES.SIGN_UP.PATH,
  methods: {
    async login() {
      try {
        this.isLoading = true;

        const { token } = await apiAdapter.login({
          username: this.username,
          password: this.password,
        });

        localStorage.setItem('token', token);

        if (token) {
          this.$router.push({ name: ROUTES.BLOG.NAME });
        }
      } catch ({ msg }) {
        this.errorMessage = msg;
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
</style>
