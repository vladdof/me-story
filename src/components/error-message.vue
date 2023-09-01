<template>
  <p
    v-if="$slots.default"
    class="error-message"
  >
    <slot />
  </p>
</template>

<script>
export default {
  name: 'error-message',
};
</script>

<style scoped>
  .error-message {
    margin-bottom: 16px;
    font-size: .85rem;
    color: #990808
  }
</style>
