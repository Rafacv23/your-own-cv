<script lang="ts" setup>
import useCvStore from "../stores/cv"

const cvStore = useCvStore()
</script>

<template>
  <div>
    <header>
      <h2 class="text-xl font-semibold mb-2">Preview</h2>
      <p class="text-zinc-400">Fill the form to see a live preview here</p>
    </header>
    <article>
      <h3>
        {{ cvStore.name }}
      </h3>
    </article>
  </div>
</template>
