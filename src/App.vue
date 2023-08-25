<template>
  <div class="root-page">
    <the-header
      :is-authorized="isAuthorized"
      @logout="onLogout"
    />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import { ROUTES } from '@/constants';
import { RepositoryToken } from '@/lib/repository-token';
import TheHeader from '@/components/the-header.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
  },
  data: () => ({
    isAuthorized: false,
  }),
  created() {
    this.$options.repo = new RepositoryToken();
    this.isAuthorized = this.$options.repo.get();
  },
  methods: {
    onLogout() {
      this.isAuthorized = false;
      this.$options.repo.remove();
      this.$router.push({ name: ROUTES.PUBLIC.NAME });
    },
  },
};
</script>

<style>
  @import './assets/style.css';

  .root-page {
    inline-size: 100%;
    margin-inline: auto;
    padding-inline: 1.5rem;
  }

  .content {
    margin-block-start: 1.5rem;
    padding-block: 1.5rem;
  }
</style>
