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
    <header id="progression">
      50% Completed
      <span class="bg-secondary py-4 rounded-xl"></span>
    </header>
    <div id="name_section" class="grid grid-cols-2 gap-4">
      <label for="name">
        Name
        <span>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            v-model="cvStore.name"
          />
          <button
            type="button"
            @click="cvStore.name = ``"
            :class="
              cvStore.name
                ? 'text-secondary px-4 hover:bg-secondary rounded-r-xl hover:text-background transition-colors duration-300 cursor-pointer'
                : 'hidden'
            "
          >
            <Icon name="pajamas:clear-all" />
          </button>
        </span>
      </label>
      <label for="surname" class="flex gap-4">
        Surname
        <span>
          <input
            type="text"
            placeholder="Surname"
            name="surname"
            required
            v-model="cvStore.surname"
          />
          <button
            type="button"
            @click="cvStore.surname = ``"
            :class="
              cvStore.surname
                ? 'text-secondary px-4 hover:bg-secondary rounded-r-xl hover:text-background transition-colors duration-300 cursor-pointer'
                : 'hidden'
            "
          >
            <Icon name="pajamas:clear-all" />
          </button>
        </span>
      </label>
    </div>

    <label for="job_title" class="flex gap-4">
      Job
      <span>
        <input
          type="text"
          placeholder="Job Title"
          name="job_title"
          required
          v-model="cvStore.job_title"
        />
        <button
          type="button"
          @click="cvStore.job_title = ``"
          :class="
            cvStore.job_title
              ? 'text-secondary px-4 hover:bg-secondary rounded-r-xl hover:text-background transition-colors duration-300 cursor-pointer'
              : 'hidden'
          "
        >
          <Icon name="pajamas:clear-all" />
        </button>
      </span>
    </label>

    <label for="summary" class="flex flex-col gap-4">
      Summary
      <span>
        <textarea
          placeholder="Summary"
          name="summary"
          v-model="cvStore.summary"
          rows="4"
        />
        <button
          type="button"
          @click="cvStore.summary = ``"
          :class="
            cvStore.summary
              ? 'text-secondary px-4 hover:bg-secondary rounded-r-xl hover:text-background transition-colors duration-300 cursor-pointer'
              : 'hidden'
          "
        >
          <Icon name="pajamas:clear-all" />
        </button>
      </span>
    </label>

    <div id="contact_section" class="grid grid-cols-2 gap-4">
      <label for="phone" class="flex gap-4">
        Phone
        <span>
          <input
            type="tel"
            placeholder="Phone"
            name="phone"
            required
            v-model="cvStore.phone"
          />
          <button
            type="button"
            @click="cvStore.phone = 0"
            :class="
              cvStore.phone
                ? 'text-secondary px-4 hover:bg-secondary rounded-r-xl hover:text-background transition-colors duration-300 cursor-pointer'
                : 'hidden'
            "
          >
            <Icon name="pajamas:clear-all" />
          </button>
        </span>
      </label>

      <label for="email" class="flex gap-4">
        Email
        <span>
          <input
            type="email"
            placeholder="example@example.com"
            name="email"
            required
            v-model="cvStore.email"
          />
          <button
            type="button"
            @click="cvStore.email = ``"
            :class="
              cvStore.email
                ? 'text-secondary px-4 hover:bg-secondary rounded-r-xl hover:text-background transition-colors duration-300 cursor-pointer'
                : 'hidden'
            "
          >
            <Icon name="pajamas:clear-all" />
          </button>
        </span>
      </label>
    </div>

    <section>
      <h3 class="text-lg font-semibold mb-2">Skills</h3>
      <div
        v-for="(skill, index) in cvStore.skills"
        :key="index"
        class="mb-4 space-y-2"
      >
        <label for="skill">
          <span>
            <input
              v-model="cvStore.skills[index]"
              name="skill"
              placeholder="Skill (e.g. JavaScript, Figma)"
              class="w-full p-2 rounded-lg bg-background text-text"
            />

            <button
              type="button"
              class="text-secondary px-4 hover:bg-secondary rounded-r-xl hover:text-background transition-colors duration-300 cursor-pointer"
              @click="cvStore.skills.splice(index, 1)"
            >
              <Icon name="pajamas:clear-all" />
            </button>
          </span>
        </label>
      </div>

      <button
        type="button"
        class="bg-secondary px-4 py-2 rounded-lg hover:bg-secondary/80 transition cursor-pointer"
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
        class="mb-4 space-y-4"
      >
        <label for="languages">
          <span>
            <input
              v-model="lang.lang"
              placeholder="English, Spanish, etc"
              class="w-full p-2 rounded-lg bg-background text-text"
            />
            <label for="lang_knowledge">
              <select
                v-model="lang.knowledge"
                class="rounded-lg bg-background text-text p-2 mr-4"
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
              class="text-secondary px-4 hover:bg-secondary rounded-r-xl hover:text-background transition-colors duration-300 cursor-pointer"
              @click="cvStore.langs.splice(index, 1)"
            >
              <Icon name="pajamas:clear-all" />
            </button>
          </span>
        </label>
      </div>

      <button
        type="button"
        class="bg-secondary px-4 py-2 rounded-lg hover:bg-secondary/80 transition"
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

    <label for="avatar">
      <span>
        <input
          type="file"
          name="avatar"
          id="avatar"
          @change="handleAvatarUpload"
          accept="image/"
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
      </span>
    </label>

    <section>
      <h3 class="text-lg font-semibold mb-2">Work Experience</h3>
      <div
        v-for="(work, index) in cvStore.works"
        :key="index"
        class="mb-4 space-y-4"
      >
        <div class="grid grid-cols-2 gap-4">
          <label for="job">
            Job
            <input
              v-model="work.name"
              placeholder="Job Name"
              class="w-full p-2 rounded bg-background text-text"
            />
          </label>
          <label for="company">
            Company
            <input
              v-model="work.company"
              placeholder="Company"
              class="w-full p-2 rounded-lg bg-background text-text"
            />
          </label>
        </div>
        <textarea
          v-model="work.description"
          placeholder="Description"
          rows="2"
          class="w-full p-2 rounded-lg bg-background text-text"
        />
        <div class="grid grid-cols-2 gap-4">
          <label for="start_date">
            Start date
            <input
              type="date"
              v-model="work.start_date"
              min="1950-01-01"
              class="w-full p-2 rounded-lg bg-background text-text placeholder:text-gray-500 focus:border-secondary"
            />
          </label>
          <label for="end_date">
            End date
            <input
              type="date"
              v-model="work.end_date"
              class="w-full p-2 rounded-lg bg-background text-text"
            />
          </label>
        </div>
        <button
          type="button"
          class="text-secondary flex items-center gap-2 bg-background px-4 py-2 hover:bg-secondary rounded-xl hover:text-background transition-colors duration-300 cursor-pointer"
          @click="cvStore.works.splice(index, 1)"
        >
          <Icon name="pajamas:clear-all" />
          Delete
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
        <div class="grid grid-cols-2 gap-4">
          <label for="study">
            Title
            <input
              v-model="study.title"
              placeholder="Title"
              class="w-full p-2 rounded bg-background text-text"
            />
          </label>
          <label for="school">
            School
            <input
              v-model="study.school"
              placeholder="School"
              class="w-full p-2 rounded bg-background text-text"
            />
          </label>
        </div>
        <textarea
          v-model="study.description"
          placeholder="Description"
          rows="2"
          class="w-full p-2 rounded bg-background text-text"
        />
        <div class="grid grid-cols-2 gap-4">
          <label for="start_date">
            Start date
            <input
              type="date"
              v-model="study.start_date"
              class="w-full p-2 rounded bg-background text-text"
            />
          </label>
          <label for="end_date">
            End date
            <input
              type="date"
              v-model="study.end_date"
              class="w-full p-2 rounded bg-background text-text"
            />
          </label>
        </div>
        <button
          type="button"
          class="text-secondary flex items-center gap-2 bg-background px-4 py-2 hover:bg-secondary rounded-xl hover:text-background transition-colors duration-300 cursor-pointer"
          @click="cvStore.works.splice(index, 1)"
        >
          <Icon name="pajamas:clear-all" />
          Delete
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

<style scoped>
label {
  color: gray;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
label > span {
  background-color: var(--color-background);
  color: var(--color-text);
  display: flex;
  border-radius: 0.75rem;
}

input {
  width: 100%;
  padding: 0.75rem;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: border-color 0.3s ease;
}

input:focus {
  outline: none;
  border-color: var(--color-secondary);
}

input[type="date"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 100%;
  padding: 0.75rem;
  background-color: var(--color-background);
  color: var(--color-text);
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: border-color 0.3s ease;

  /* Optional: Custom font & placeholder alignment */
  font-family: inherit;
  text-align: left;
}

input[type="date"]:focus {
  outline: none;
  border-color: var(--color-secondary);
  background-color: var(--color-background);
}

input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1); /* or any color styling */
  cursor: pointer;
  margin-left: 0.5rem;
}

textarea {
  width: 100%;
  padding: 0.75rem;
}
</style>
