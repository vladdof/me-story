<template>
  <header class="navbar">
    <div class="navbar__content">
      <a
        class="navbar__link"
        href="https://t.me/Vladdof"
      >
        <div class="avatar">
          <img
            class="avatar__picture"
            src="../assets/efanov-vlad.jpg"
            alt="Efanov Vlad"
          />
        </div>
      </a>
      <nav class="menu">
        <ul class="menu__list">
          <li>
            <router-link
              class="menu__link"
              :to="$options.loginRoute"
            >
              Войти
            </router-link>
          </li>
          <li class="menu__item">
            <router-link
              class="menu__link"
              :to="$options.signUpRoute"
            >
              Регистарция
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { ROUTES } from '@/constants';

export default {
  name: 'the-header',
  loginRoute: ROUTES.LOGIN.PATH,
  signUpRoute: ROUTES.SIGN_UP.PATH,
};
</script>

<style>
  .navbar {
    z-index: 11;
    position: sticky;
    inset-block-start: 1rem;
    color: #2f2b3d;
  }

  .navbar__content {
    display: flex;
    align-items: center;
    block-size: 64px;
    padding-inline: 1.5rem;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 2px 6px rgba(47, 43, 61,.14), 0 0 transparent, 0 0 transparent;
  }

  .navbar__link:hover .avatar {
    --size: 2.9rem;
  }

  .avatar {
    --size: 2.4rem;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    overflow: hidden;
    transition: all .2s;
  }

  .avatar__picture {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .menu {
    margin-inline-start: auto;
  }

  .menu__list {
    display: flex;
    column-gap: 12px;
  }

  .menu__link {
    color: #56acf7;
    transition: color .2s;
  }

  .menu__link:hover,
  .router-link-active {
    color: #2895f4;
    text-decoration: underline;
  }
</style>
