<template>
  <header
    class="rounded-3xl p-4 my-4 flex items-center justify-between py-8 bg-text/10 bg-clip-padding backdrop-filter backdrop-blur backdrop-saturate-100 backdrop-contrast-100"
  >
    <h2 class="text-xl font-bold">Your Own CV</h2>
    <nav class="space-x-4 flex items-center">
      <NuxtLink
        to="/example"
        class="flex items-center gap-2 bg-primary/10 bg-clip-padding backdrop-filter backdrop-blur backdrop-saturate-100 backdrop-contrast-100 px-4 py-2 rounded-3xl border border-primary/50 hover:border-primary/70 hover:bg-primary/30 text-primary transition-colors duration-300"
      >
        <Icon name="hugeicons:test-tube-03" style="color: primary" />
        Example</NuxtLink
      >
      <NuxtLink
        to="/github"
        class="flex items-center gap-2 bg-primary/10 bg-clip-padding backdrop-filter backdrop-blur backdrop-saturate-100 backdrop-contrast-100 px-4 py-2 rounded-3xl border border-primary/50 hover:border-primary/70 hover:bg-primary/30 text-primary transition-colors duration-300"
      >
        <Icon name="uil:github" style="color: primary" />
        Github</NuxtLink
      >
      <NuxtLink
        to="/create"
        class="flex items-center gap-2 bg-secondary/10 bg-clip-padding backdrop-filter backdrop-blur backdrop-saturate-100 backdrop-contrast-100 px-4 py-2 rounded-3xl border border-secondary/50 hover:border-secondary/70 hover:bg-secondary/30 text-secondary transition-colors duration-300"
      >
        <Icon name="material-symbols:add-circle" style="color: secondary" />
        Create</NuxtLink
      >
    </nav>
  </header>
</template>
