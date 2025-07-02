<script lang="ts" setup>
import useCvStore from "../stores/cv"

const cvStore = useCvStore()
</script>

<template>
  <div>
    <header class="flex items-center justify-end mb-4">
      <nav class="space-x-4 flex items-center">
        <button
          class="flex cursor-pointer items-center gap-2 bg-secondary px-4 py-2 rounded-xl border border-transparent hover:bg-secondary/60 text-text transition-colors duration-300"
        >
          <Icon name="material-symbols:download" />
          Download
        </button>
        <button
          class="flex cursor-pointer items-center gap-2 bg-transparent px-4 py-2 rounded-xl border border-secondary hover:bg-secondary text-text transition-colors duration-300"
        >
          <Icon name="iconoir:magic-wand" />
          Generate Card
        </button>
      </nav>
    </header>
    <article class="grid grid-cols-1 gap-16 bg-background p-8 rounded-xl">
      <header class="flex items-center flex-col gap-4">
        <img
          v-if="cvStore.avatar"
          :src="cvStore.avatar"
          :alt="cvStore.name"
          width="120"
          class="object-cover rounded-full border mb-8 border-secondary"
        />
        <h3 class="text-4xl font-bold text-secondary">
          {{ cvStore.name }} {{ cvStore.surname }}
        </h3>
        <h4 class="text-3xl font-semibold">{{ cvStore.job_title }}</h4>
        <p>{{ cvStore.summary }}</p>
      </header>
      <div
        class="flex flex-col gap-4"
        id="work_experience"
        :class="cvStore.works.length > 0 ? 'flex flex-col gap-4' : 'hidden'"
      >
        <h4 class="text-xl font-semibold">Work Experience</h4>
        <ul class="flex flex-col gap-4">
          <li
            v-for="work of cvStore.works"
            :key="work.company"
            class="bg-card p-4 rounded-3xl"
          >
            <h5>{{ work.name }}</h5>
            <h6>{{ work.company }}</h6>
            <p>{{ work.description }}</p>
            <p>{{ work.start_date }} | {{ work.end_date }}</p>
          </li>
        </ul>
      </div>
      <div
        id="studies"
        :class="cvStore.education.length > 0 ? 'flex flex-col gap-4' : 'hidden'"
      >
        <h4 class="text-xl font-semibold">Studies</h4>
        <ul class="flex flex-col gap-4">
          <li
            v-for="study of cvStore.education"
            :key="study.title"
            class="bg-card p-4 rounded-3xl"
          >
            <h5>{{ study.title }}</h5>
            <h6>{{ study.school }}</h6>
            <p>{{ study.description }}</p>
            <p>{{ study.start_date }} | {{ study.end_date }}</p>
          </li>
        </ul>
      </div>
      <h5 class="text-xl font-semibold">Contact</h5>
      <div class="bg-secondary p-4 rounded-3xl flex flex-col gap-4">
        <div class="mb-8">
          <p>Phone {{ cvStore.phone }}</p>
          <p>Email {{ cvStore.email }}</p>
        </div>
        <div
          id="languages"
          :class="cvStore.langs.length > 0 ? 'flex flex-col gap-4' : 'hidden'"
        >
          <h5 class="text-background font-semibold mb-4">Languages</h5>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="(lang, index) of cvStore.langs"
              :key="index"
              class="bg-card px-4 py-2 rounded-3xl"
            >
              {{ lang.lang }} {{ lang.knowledge }}
            </li>
          </ul>
        </div>
        <div
          id="skills"
          :class="cvStore.skills.length > 0 ? 'flex flex-col gap-4' : 'hidden'"
        >
          <h5 class="text-background font-semibold mb-4">Skills</h5>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="(skill, index) of cvStore.skills"
              :key="index"
              class="bg-card px-4 py-2 rounded-3xl"
            >
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </article>
  </div>
</template>
