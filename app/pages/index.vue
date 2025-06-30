<template>
  <div class="flex flex-col items-center">
    <span class="bg-card border border-text/30 px-4 py-2 rounded-3xl">
      Generate Your CVs in seconds
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
        class="flex items-center gap-2 bg-secondary text-text bg-clip-padding backdrop-filter backdrop-blur backdrop-saturate-100 backdrop-contrast-100 px-4 py-2 rounded-3xl border border-secondary/50 hover:border-secondary/70 hover:bg-secondary/30 transition-colors duration-300"
      >
        <Icon name="material-symbols:add-circle" style="color: dark" />

        Create</NuxtLink
      >
      <NuxtLink
        to="/github"
        class="flex items-center gap-2 bg-transparent bg-clip-padding backdrop-filter backdrop-blur backdrop-saturate-100 backdrop-contrast-100 px-4 py-2 rounded-3xl border border-text/50 hover:border-text text-text transition-colors duration-300"
      >
        <Icon name="uil:github" style="color: text" />

        Github</NuxtLink
      >
    </footer>
  </div>
</template>
