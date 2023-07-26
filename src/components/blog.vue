<template>
  <div>
    <video
      class="video"
      controls="controls"
      poster="../assets/video-poster.png"
      muted
      loop
    >
      <source src="../assets/block-behavior.mp4" type="video/mp4">
      Ваш браузер не поддерживает видео тег.
    </video>

    <div class="github-link">
      <a href="https://github.com/ваш-логин-github" target="_blank">Мой GitHub</a>
    </div>

    <feedback-form />
  </div>
</template>

<script>
import FeedbackForm from './feedback-form.vue';

export default {
  name: 'blog',
  components: {
    FeedbackForm,
  },
};
</script>

<style>
  .video {
    display: block;
    width: 70vw;
    margin: 2rem auto;
    border-radius: 2rem;
    cursor: pointer;
    transition: transform .2s;
  }

  .video:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    .video {
      width: 100%;
    }
  }

  .github-link {
    text-align: center;
  }

  .github-link a {
    font-size: 1.2rem;
    text-decoration: none;
    color: #0366d6;
    transition: transform .2s;
  }

  .github-link a:hover {
    text-decoration: underline;
  }

</style>
