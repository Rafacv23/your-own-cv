<script lang="ts" setup>
import useCvStore from "../stores/cv"
import { format } from "date-fns"
import { ref } from "vue"
const pdfContent = ref<HTMLElement | null>(null)

const cvStore = useCvStore()

const downloadPdf = async () => {
  if (!process.client || !pdfContent.value) return

  const html2pdf = (await import("html2pdf.js")).default

  html2pdf()
    .set({
      margin: 0,
      filename: `${cvStore.name || "cv"}-resume.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    })
    .from(pdfContent.value)
    .save()
}

const formatDate = (date: string | Date) => {
  if (!date) return ""
  return format(new Date(date), "MMM yyyy") // e.g., "Jun 2025"
}
</script>

<template>
  <div>
    <header class="flex items-center justify-end mb-4">
      <nav class="space-x-4 flex items-center">
        <button
          @click="downloadPdf"
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
    <article
      ref="pdfContent"
      class="grid grid-cols-1 gap-16 bg-background p-8 rounded-xl"
    >
      <header class="flex items-center flex-col gap-4">
        <img
          v-if="cvStore.avatar"
          :src="cvStore.avatar"
          :alt="cvStore.name"
          class="object-cover rounded-full mb-4 w-30 h-30"
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
            class="bg-card p-8 rounded-3xl grid grid-cols-1 gap-4"
          >
            <span class="flex items-end gap-2">
              <h5 class="font-bold text-xl">{{ work.name }}</h5>
              at
              <h6>{{ work.company }}</h6>
            </span>
            <p>{{ work.description }}</p>

            <p class="text-text/60 text-sm">
              From {{ formatDate(work.start_date) }} until
              {{ formatDate(work.end_date) }}
            </p>
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
            class="bg-card p-8 rounded-3xl grid grid-cols-1 gap-4"
          >
            <span class="flex items-end gap-2">
              <h5 class="font-bold text-xl">{{ study.title }}</h5>
              at
              <h6>{{ study.school }}</h6>
            </span>
            <p>{{ study.description }}</p>
            <p class="text-text/60 text-sm">
              From {{ formatDate(study.start_date) }} until
              {{ formatDate(study.end_date) }}
            </p>
          </li>
        </ul>
      </div>
      <div class="bg-secondary p-4 rounded-xl flex flex-col gap-4">
        <h5 class="text-xl font-semibold text-background">Contact</h5>
        <div>
          <p class="flex items-center gap-2 text-background">
            <Icon name="material-symbols:phone-android-outline" />
            {{ cvStore.phone }}
          </p>
          <p class="flex items-center gap-2 text-background">
            <Icon name="material-symbols:alternate-email" /> {{ cvStore.email }}
          </p>
        </div>
        <div
          id="languages"
          :class="cvStore.langs.length > 0 ? 'flex flex-col gap-4' : 'hidden'"
        >
          <h5 class="text-background font-semibold">Languages</h5>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="(lang, index) of cvStore.langs"
              :key="index"
              class="bg-card px-4 py-2 rounded-xl"
            >
              {{ lang.lang }}
            </li>
          </ul>
        </div>
        <div
          id="skills"
          :class="cvStore.skills.length > 0 ? 'flex flex-col gap-4' : 'hidden'"
        >
          <h5 class="text-background font-semibold">Skills</h5>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="(skill, index) of cvStore.skills"
              :key="index"
              class="bg-card px-4 py-2 rounded-xl"
            >
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </article>
  </div>
</template>
