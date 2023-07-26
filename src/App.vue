<template>
  <div class="root-page">
    <the-header />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/header.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
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
