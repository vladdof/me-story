<template>
  <div class="about">
    <div class="photo">
      <picture class="photo__picture">
        <source srcset="../assets/selfie-vlad-mobile.jpg" media="(max-width: 620px)">
        <img class="photo__img" src="../assets/selfie-vlad.jpg" alt="Мое селфи">
      </picture>
      <picture class="photo__picture photo__picture--school">
        <img
          class="photo__img photo__img--school"
          src="../assets/selfie-school.jpg"
          alt="Фото из школы"
        >
      </picture>
    </div>
    <div class="description">
      <h1 class="description__title">
        Привет, я - Влад Ефанов!
      </h1>
      <p class="description__text">
        Много лет назад, когда я впервые попал в мир программирования,
        это было для меня чем-то необычным и загадочным. Так как я случайно попал в веб-разработку,
        когда меня попросили посмотреть что-то на сайте.
        В итоге это привлекло меня и я решил сменить профессию.
      </p>
      <p class="description__text">
        Первый мой курс был взят у начинающего блогера за 1400 рублей. Целый месяц каждый день
        смотрел ее уроки и повторял, но при этом к каждому уроку выкатывал по 1 странице А4
        вопросов.
      </p>
      <p class="description__text">
        Потом через месяц залетел в другую платформу на курс, который шел 1 месяц. Там приходилось
        выполнять задания в большом объеме каждый день. По итогу я сильно устал, но верил, что
        сейчас все получится.
      </p>
      <p class="description__text">
        Первую официальную работу искал примерно 9 месяцев. Это было трудное время так как я
        перехал в Москву. Много было факторов, которые пытались меня сбить с пути.
      </p>
      <p class="description__text">
        Сейчас я стараюсь учиться чему-то новому на регулярной основе, сталкиваюсь
        с вызовами и преодолеваю
        трудности. И хотя иногда это может быть сложно, я всегда чувствую себя живым
        и вдохновленным, занимаясь программированием.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'public',
};
</script>

<style>
  .photo {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.3rem;
  }

  .photo__picture {
    width: max-content;
    margin-bottom: 1.9rem;
  }

  .photo__img {
    display: block;
    height: 50vh;
    border-radius: 2rem;
    border: 1px #ccc solid;
  }

  .photo__img--school {
    height: 55vh;
  }

  @media (max-width: 628px) {
    .photo__picture--school {
      width: 80%;
    }

    .photo__img--school {
      height: 100%;
      width: 100%;
    }
  }

  .description__title {
    margin-bottom: 1.9rem;
    font-size: 1.75rem;
  }

  .description__text {
    margin-bottom: 1.7rem;
  }

  .description__text:last-child {
    margin-bottom: 0;
  }
</style>
