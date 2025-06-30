<script lang="ts" setup>
import useCvStore from "../stores/cv"
import type { LangKnowledge } from "../models/cvStore"

const LangKnowledgeOptions: LangKnowledge[] = [
  "Native",
  "Fluent",
  "Conversational",
]
const cvStore = useCvStore()

function handleAvatarUpload(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      cvStore.avatar = reader.result as string
    }
    reader.readAsDataURL(file)
  }
}
</script>

<template>
  <form class="space-y-4">
    <label for="name" class="flex gap-4">
      <input
        type="text"
        placeholder="Name"
        name="name"
        required
        v-model="cvStore.name"
        class="w-full p-3 rounded-lg bg-background text-text"
      />
      <button
        type="button"
        @click="cvStore.name = ``"
        :class="
          cvStore.name
            ? 'bg-background text-secondary rounded-lg px-4 hover:bg-secondary hover:text-background transition-colors duration-300 cursor-pointer'
            : 'hidden'
        "
      >
        <Icon name="pajamas:clear-all" />
      </button>
    </label>
    <label for="surname" class="flex gap-4">
      <input
        type="text"
        placeholder="Surname"
        name="surnameme"
        required
        v-model="cvStore.surname"
        class="w-full p-3 rounded-lg bg-background text-text"
      />
      <button
        type="button"
        @click="cvStore.surname = ``"
        :class="
          cvStore.surname
            ? 'bg-background text-secondary rounded-lg px-4 hover:bg-secondary hover:text-background transition-colors duration-300 cursor-pointer'
            : 'hidden'
        "
      >
        <Icon name="pajamas:clear-all" />
      </button>
    </label>

    <label for="job_title" class="flex gap-4">
      <input
        type="text"
        placeholder="Job Title"
        name="job_title"
        required
        v-model="cvStore.job_title"
        class="w-full p-3 rounded-lg bg-background text-text"
      />
      <button
        type="button"
        @click="cvStore.job_title = ``"
        :class="
          cvStore.job_title
            ? 'bg-background text-secondary rounded-lg px-4 hover:bg-secondary hover:text-background transition-colors duration-300 cursor-pointer'
            : 'hidden'
        "
      >
        <Icon name="pajamas:clear-all" />
      </button>
    </label>

    <label for="phone" class="flex gap-4">
      <input
        type="tel"
        placeholder="Phone"
        name="phone"
        required
        v-model="cvStore.phone"
        class="w-full p-3 rounded-lg bg-background text-text"
      />
      <button
        type="button"
        @click="cvStore.phone = 0"
        :class="
          cvStore.phone
            ? 'bg-background text-secondary rounded-lg px-4 hover:bg-secondary hover:text-background transition-colors duration-300 cursor-pointer'
            : 'hidden'
        "
      >
        <Icon name="pajamas:clear-all" />
      </button>
    </label>

    <label for="email" class="flex gap-4">
      <input
        type="email"
        placeholder="example@example.com"
        name="email"
        required
        v-model="cvStore.email"
        class="w-full p-3 rounded-lg bg-background text-text"
      />
      <button
        type="button"
        @click="cvStore.email = ``"
        :class="
          cvStore.email
            ? 'bg-background text-secondary rounded-lg px-4 hover:bg-secondary hover:text-background transition-colors duration-300 cursor-pointer'
            : 'hidden'
        "
      >
        <Icon name="pajamas:clear-all" />
      </button>
    </label>

    <label for="summary" class="flex flex-col gap-4">
      <textarea
        placeholder="Summary"
        name="summary"
        v-model="cvStore.summary"
        rows="4"
        class="w-full p-3 rounded-lg bg-background text-text"
      />
      <button
        type="button"
        @click="cvStore.summary = ``"
        :class="
          cvStore.summary
            ? 'bg-background text-secondary rounded-lg px-4 py-2 hover:bg-secondary hover:text-background transition-colors duration-300 cursor-pointer'
            : 'hidden'
        "
      >
        <Icon name="pajamas:clear-all" />
      </button>
    </label>

    <section>
      <h3 class="text-lg font-semibold mb-2">Skills</h3>
      <div
        v-for="(skill, index) in cvStore.skills"
        :key="index"
        class="mb-4 space-y-2"
      >
        <input
          v-model="cvStore.skills[index]"
          placeholder="Skill (e.g. JavaScript, Figma)"
          class="w-full p-2 rounded-lg bg-background text-text"
        />

        <button
          type="button"
          class="text-red-500 text-sm hover:underline"
          @click="cvStore.skills.splice(index, 1)"
        >
          Remove
        </button>
      </div>

      <button
        type="button"
        class="bg-secondary px-4 py-2 rounded-lg hover:bg-secondary/80 transition"
        @click="cvStore.skills.push('')"
      >
        + Add Skill
      </button>
    </section>

    <section>
      <h3 class="text-lg font-semibold mb-2">Languages</h3>
      <div
        v-for="(lang, index) in cvStore.langs"
        :key="index"
        class="border border-zinc-600 rounded-lg p-4 mb-4 space-y-2"
      >
        <input
          v-model="lang.lang"
          placeholder="Job Name"
          class="w-full p-2 rounded bg-background text-text"
        />
        <label for="lang_knowledge" class="block">
          <select
            v-model="lang.knowledge"
            class="w-full p-2 rounded bg-background text-text"
          >
            <option
              v-for="option in LangKnowledgeOptions"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
        </label>
        <button
          type="button"
          class="text-red-500 text-sm hover:underline"
          @click="cvStore.langs.splice(index, 1)"
        >
          Remove
        </button>
      </div>

      <button
        type="button"
        class="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/80 transition"
        @click="
          cvStore.langs.push({
            lang: '',
            knowledge: 'Conversational',
          })
        "
      >
        + Add Language
      </button>
    </section>

    <label for="avatar" class="flex gap-4">
      <input
        type="file"
        name="avatar"
        id="avatar"
        @change="handleAvatarUpload"
        accept="image/"
        class="w-full p-3 rounded-lg bg-background text-text"
      />
      <button
        type="button"
        @click="cvStore.avatar = ``"
        :class="
          cvStore.avatar
            ? 'bg-background text-secondary rounded-lg px-4 py-2 hover:bg-secondary hover:text-background transition-colors duration-300 cursor-pointer'
            : 'hidden'
        "
      >
        <Icon name="pajamas:clear-all" />
      </button>
    </label>

    <section>
      <h3 class="text-lg font-semibold mb-2">Work Experience</h3>
      <div
        v-for="(work, index) in cvStore.works"
        :key="index"
        class="mb-4 space-y-4"
      >
        <input
          v-model="work.name"
          placeholder="Job Name"
          class="w-full p-2 rounded bg-background text-text"
        />
        <input
          v-model="work.company"
          placeholder="Company"
          class="w-full p-2 rounded-lg bg-background text-text"
        />
        <textarea
          v-model="work.description"
          placeholder="Description"
          rows="2"
          class="w-full p-2 rounded-lg bg-background text-text"
        />
        <input
          type="date"
          v-model="work.start_date"
          class="w-full p-2 rounded-lg bg-background text-text"
        />
        <input
          type="date"
          v-model="work.end_date"
          class="w-full p-2 rounded-lg bg-background text-text"
        />
        <button
          type="button"
          class="text-red-500 text-sm hover:underline"
          @click="cvStore.works.splice(index, 1)"
        >
          Remove
        </button>
      </div>

      <button
        type="button"
        class="bg-secondary px-4 py-2 rounded-lg hover:bg-secondary/80 transition"
        @click="
          cvStore.works.push({
            name: '',
            company: '',
            description: '',
            start_date: new Date(),
            end_date: undefined,
          })
        "
      >
        + Add Work
      </button>
    </section>

    <section>
      <h3 class="text-lg font-semibold mb-2">Studies</h3>
      <div
        v-for="(study, index) in cvStore.education"
        :key="index"
        class="mb-4 space-y-4"
      >
        <input
          v-model="study.title"
          placeholder="Job Name"
          class="w-full p-2 rounded bg-background text-text"
        />
        <input
          v-model="study.school"
          placeholder="Company"
          class="w-full p-2 rounded bg-background text-text"
        />
        <textarea
          v-model="study.description"
          placeholder="Description"
          rows="2"
          class="w-full p-2 rounded bg-background text-text"
        />
        <input
          type="date"
          v-model="study.start_date"
          class="w-full p-2 rounded bg-background text-text"
        />
        <input
          type="date"
          v-model="study.end_date"
          class="w-full p-2 rounded bg-background text-text"
        />
        <button
          type="button"
          class="text-red-500 text-sm hover:underline"
          @click="cvStore.education.splice(index, 1)"
        >
          Remove
        </button>
      </div>

      <button
        type="button"
        class="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/80 transition"
        @click="
          cvStore.education.push({
            title: '',
            school: '',
            description: '',
            start_date: new Date(),
            end_date: undefined,
          })
        "
      >
        + Add Study
      </button>
    </section>
  </form>
</template>
