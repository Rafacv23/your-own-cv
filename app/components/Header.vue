<template>
  <header class="flex items-center justify-center gap-4 my-4">
    <!-- Gradient Wrapper -->
    <div class="relative">
      <!-- Gradient Shadow Background -->
      <div
        class="absolute -inset-2 rounded-3xl bg-gradient-to-tl from-text via-secondary/60 to-secondary opacity-50 blur-2xl"
      ></div>

      <!-- Navigation with backdrop blur -->
      <nav
        class="relative rounded-3xl px-8 flex items-center justify-between gap-8 py-4 bg-card/70 bg-clip-padding backdrop-filter backdrop-blur backdrop-saturate-100 backdrop-contrast-100"
      >
        <NuxtLink
          to="/example"
          class="flex items-center gap-2 bg-transparent bg-clip-padding backdrop-filter backdrop-blur backdrop-saturate-100 backdrop-contrast-100 px-4 py-2 rounded-3xl border border-text/50 hover:border-text text-text transition-colors duration-300"
        >
          <Icon name="hugeicons:test-tube-03" style="color: text" />
          Example
        </NuxtLink>

        <NuxtLink
          to="/github"
          class="flex items-center gap-2 bg-transparent bg-clip-padding backdrop-filter backdrop-blur backdrop-saturate-100 backdrop-contrast-100 px-4 py-2 rounded-3xl border border-text/50 hover:border-text text-text transition-colors duration-300"
        >
          <Icon name="uil:github" style="color: text" />
          Github
        </NuxtLink>

        <NuxtLink
          to="/create"
          class="flex items-center gap-2 bg-secondary text-text bg-clip-padding backdrop-filter backdrop-blur backdrop-saturate-100 backdrop-contrast-100 px-4 py-2 rounded-3xl border border-secondary/50 hover:border-secondary/70 hover:bg-secondary/30 transition-colors duration-300"
        >
          <Icon name="material-symbols:add-circle" style="color: dark" />
          Create
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
