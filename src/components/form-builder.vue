<template>
    <div class="sign-in">
      <p class="sign-in__title">Добро пожаловать</p>
      <p
        v-if="errorMessage"
        class="error"
      >
        {{ errorMessage }}
      </p>
      <form
        class="form"
        @submit.prevent="login"
      >
        <template v-for="(field, index) in formFields">
          <input
            v-model="username"
            :key="field.label"
            type="text"
            name="username"
            placeholder="Username"
            autocomplete="off"
            class="form__input"
            required
          />
        </template>
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
          Войти
        </button>
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
      <!-- formFields: [
        { type: 'text', label: 'Имя', model: 'name' },
        { type: 'email', label: 'Email', model: 'email' },
        { type: 'password', label: 'Пароль', model: 'password' },
      ], -->
<script>
export default {
  name: 'form-builder',
};
</script>
