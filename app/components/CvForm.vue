<script lang="ts" setup>
import useCvStore from "../stores/cv"

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
        @click="cvStore.phone = ``"
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

    <label for="skills" class="flex flex-col gap-4">
      <textarea
        id="skills"
        placeholder="Skills (comma-separated)"
        rows="2"
        v-model="cvStore.skills"
        class="w-full p-3 rounded-lg bg-background text-text"
      />
      <button
        type="button"
        @click="cvStore.skills = ''"
        :class="
          cvStore.skills.length > 0
            ? 'bg-background text-secondary rounded-lg px-4 py-2 hover:bg-secondary hover:text-background transition-colors duration-300 cursor-pointer'
            : 'hidden'
        "
      >
        <Icon name="pajamas:clear-all" />
      </button>
    </label>
    <label for="langs" class="flex flex-col gap-4">
      <textarea
        id="langs"
        placeholder="Languages (comma-separated)"
        rows="2"
        v-model="cvStore.langs"
        class="w-full p-3 rounded-lg bg-background text-text"
      />
      <button
        type="button"
        @click="cvStore.langs = ''"
        :class="
          cvStore.langs.length > 0
            ? 'bg-background text-secondary rounded-lg px-4 py-2 hover:bg-secondary hover:text-background transition-colors duration-300 cursor-pointer'
            : 'hidden'
        "
      >
        <Icon name="pajamas:clear-all" />
      </button>
    </label>

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

    <textarea
      placeholder="Work Experience"
      v-model="cvStore.works"
      rows="4"
      class="w-full p-3 rounded-lg bg-background text-text"
    ></textarea>

    <textarea
      placeholder="Education"
      v-model="cvStore.education"
      rows="4"
      class="w-full p-3 rounded-lg bg-background text-text"
    ></textarea>
    <textarea
      placeholder="Languages"
      v-model="cvStore.langs"
      rows="4"
      class="w-full p-3 rounded-lg bg-background text-text"
    ></textarea>
  </form>
</template>
