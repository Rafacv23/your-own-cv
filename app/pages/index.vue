<script lang="ts" setup>
import { GITHUB_URL } from "../utils/constants"
</script>

<template>
  <div class="flex flex-col items-center">
    <span
      class="bg-card border border-transparent px-4 py-2 rounded-3xl flex items-center gap-2"
    >
      <Icon name="material-symbols:lightbulb" /> Generate Your CVs in seconds
    </span>
    <h1
      class="text-6xl font-bold bg-gradient-to-l from-text via-secondary to-secondary text-transparent bg-clip-text my-8"
    >
      Your Own CV
    </h1>
    <h2 class="text-xl">Generate your own cvs in seconds and customisable.</h2>
    <footer class="mt-8 flex items-center gap-4">
      <NuxtLink
        to="/create"
        class="flex cursor-pointer items-center gap-2 bg-secondary px-4 py-2 rounded-xl border border-transparent hover:bg-secondary/60 text-text transition-colors duration-300"
      >
        <Icon name="material-symbols:add-circle" style="color: dark" />

        Create</NuxtLink
      >
      <NuxtLink
        :to="GITHUB_URL"
        target="_blank"
        rel="noreferrer noopener"
        class="flex cursor-pointer items-center gap-2 bg-transparent px-4 py-2 rounded-xl border border-secondary hover:bg-secondary text-text transition-colors duration-300"
      >
        <Icon name="uil:github" style="color: text" />

        Github</NuxtLink
      >
    </footer>
  </div>
</template>
