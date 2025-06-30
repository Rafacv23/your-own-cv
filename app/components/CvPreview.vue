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
    <article class="grid grid-cols-4 gap-4 p-8">
      <aside class="flex flex-col col-span-1 items-center">
        <img
          v-if="cvStore.avatar"
          :src="cvStore.avatar"
          :alt="cvStore.name"
          width="120"
          class="object-cover rounded-full border mb-8 border-zinc-700"
        />
        <div class="bg-secondary p-4 rounded-3xl flex flex-col gap-4">
          <h5 class="text-background font-semibold">Languages</h5>
          <ul class="grid grid-cols-1 gap-4">
            <li
              v-for="(lang, index) of cvStore.langs"
              :key="index"
              class="bg-card px-4 py-2 rounded-3xl"
            >
              {{ lang.lang }} {{ lang.knowledge }}
            </li>
          </ul>
          <h5 class="text-background font-semibold">Skills</h5>
          <ul class="flex flex-wrap gap-4">
            <li
              v-for="(skill, index) of cvStore.skills"
              :key="index"
              class="bg-card px-4 py-2 rounded-3xl"
            >
              {{ skill }}
            </li>
          </ul>
        </div>
      </aside>
      <div class="col-span-3 flex flex-col gap-4">
        <h3 class="text-4xl font-bold text-secondary">
          {{ cvStore.name }} {{ cvStore.surname }}
        </h3>
        <h4 class="text-3xl font-semibold">{{ cvStore.job_title }}</h4>
        <p>{{ cvStore.summary }}</p>
      </div>
    </article>
  </div>
</template>
