<template>
  <footer
    class="mt-16 max-w-6xl text-center rounded-xl p-6 bg-card/10 backdrop-blur shadow-[0px_20px_207px_10px_rgba(255,46,99,0.3)] text-text space-y-4"
  >
    <div>
      <h5 class="text-lg font-semibold">Your Own CV</h5>
      <p class="text-sm">Created with ❤️ by Rafa Canosa</p>
      <p class="text-xs text-zinc-400">
        {{ new Date().getFullYear() }}
      </p>
    </div>

    <div class="flex justify-center gap-6 text-sm">
      <NuxtLink
        to="https://github.com/rafacanosa"
        target="_blank"
        class="hover:text-secondary transition-colors"
      >
        <Icon name="uil:github" class="inline-block mr-1" />
        GitHub
      </NuxtLink>

      <NuxtLink
        to="https://linkedin.com/in/rafacanosa"
        target="_blank"
        class="hover:text-secondary transition-colors"
      >
        <Icon name="uil:linkedin" class="inline-block mr-1" />
        LinkedIn
      </NuxtLink>

      <a
        href="mailto:rafa@example.com"
        class="hover:text-secondary transition-colors"
      >
        <Icon name="material-symbols:mail-outline" class="inline-block mr-1" />
        Email
      </a>
    </div>
  </footer>
</template>
