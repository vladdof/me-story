<template>
  <button
    class="the-button"
    :type="type"
  >
    <the-spinner v-if="isLoading" />
    <slot v-else />
  </button>
</template>

<script>
import TheSpinner from './the-spinner.vue';

export default {
  name: 'the-button',
  components: { TheSpinner },
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'submit',
    },
  },
};
</script>

<style scoped>
  .the-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 40px;
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

  .the-button:hover {
    background: #ea472b;
  }
</style>
