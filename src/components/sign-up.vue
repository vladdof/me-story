<template>
  <div class="sign-up">
    <p class="sign-up__title">Регистрация</p>
    <p
      v-if="errorMessage"
      class="error"
    >
      {{ errorMessage }}
    </p>
    <form
      class="form"
      @submit.prevent="signUp"
    >
      <input
        v-model="username"
        type="text"
        name="username"
        placeholder="Username"
        autocomplete="off"
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
      <input
        v-model="password"
        type="password"
        name="password"
        placeholder="Password"
        class="form__input"
        required
      />
      <button
        class="form__btn"
        type="submit"
      >
        Sign up
      </button>
    </form>
  </div>
</template>

<script>
import { http } from '@/lib/http-common';
import { ROUTES } from '@/constants';

export default {
  name: 'sign-up',
  data() {
    return {
      username: '',
      password: '',
      email: '',
      errorMessage: '',
    };
  },
  methods: {
    async signUp() {
      try {
        await http.post('/sign-up', {
          username: this.username,
          password: this.password,
          email: this.email,
        });

        this.$router.push({ name: ROUTES.LOGIN.NAME });
      } catch (error) {
        this.errorMessage = error.response.data.message;
        console.error('Ошибка: ', error.message);
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

  .error {
    margin-bottom: 16px;
    font-size: .85rem;
    color: #990808
  }
</style>
