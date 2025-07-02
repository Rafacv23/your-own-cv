<script lang="ts" setup>
import useCvStore from "../stores/cv"
import { computed, ref } from "vue"

const cvStore = useCvStore()
const activeTab = ref(0)

const totalFields = computed(() => {
  return (
    Number(!!cvStore.name) +
    Number(!!cvStore.surname) +
    Number(!!cvStore.job_title) +
    Number(!!cvStore.summary) +
    Number(!!cvStore.phone) +
    Number(!!cvStore.email) +
    cvStore.skills.filter((s) => s.trim() !== "").length +
    cvStore.langs.filter((l) => l.lang.trim() !== "").length +
    cvStore.works.filter((w) => w.name && w.company && w.start_date).length +
    cvStore.education.filter((e) => e.title && e.school && e.start_date).length
  )
})

const maxFields = 10
const progress = computed(() =>
  Math.min(Math.round((totalFields.value / maxFields) * 100), 100)
)

const tabs = [
  { label: "About", slot: "AboutForm" },
  { label: "Contact", slot: "ContactForm" },
  { label: "Work Experience", slot: "WorkExperienceForm" },
  { label: "Studies", slot: "EducationForm" },
]
</script>

<template>
  <form class="space-y-4">
    <header id="progression" class="space-y-2">
      <p class="text-sm font-semibold text-secondary">
        {{ progress }}% Completed
      </p>
      <div class="w-full h-3 bg-zinc-700 rounded-full overflow-hidden">
        <div
          class="h-full bg-secondary transition-all duration-300"
          :style="{ width: progress + '%' }"
        />
      </div>
    </header>

    <Tabs
      :tabs="tabs"
      :activeTab="activeTab"
      @update:activeTab="(i) => (activeTab = i)"
    >
      <template #AboutForm>
        <AboutForm />
      </template>
      <template #ContactForm>
        <ContactForm />
      </template>
      <template #WorkExperienceForm>
        <WorkExperienceForm />
      </template>
      <template #EducationForm>
        <EducationForm />
      </template>
    </Tabs>
  </form>
</template>
