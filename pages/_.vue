<template>
  <article class="xl:pr-64">
    <h1>{{ page.title }}</h1>
    <p class="text-xl font-light leading-8 text-gray-600">
      {{ page.description }}
    </p>
    <nuxt-content :document="page" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  async asyncData({ $content, params }) {
    const contentPath = params.pathMatch === '' ? 'index' : params.pathMatch;
    // const contentPath = params.pathMatch;
    const page = await $content(contentPath).fetch();
    return {
      page,
    };
  },
});
</script>

<style lang="postcss" scoped>
/* Sample `apply` at-rules with Tailwind CSS */
article {
  /* @apply min-h-screen flex justify-center items-center text-center mx-auto; */
}

h1 {
  @apply font-extrabold text-5xl mb-2;
}

h2 {
  @apply text-3xl font-semibold mb-2;
}

h3 {
  @apply text-xl font-semibold mb-2;
}

p {
  @apply mb-8;
}
</style>
