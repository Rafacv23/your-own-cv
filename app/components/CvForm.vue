<script lang="ts" setup>
import useCvStore from "../stores/cv"

const cvStore = useCvStore()
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

    <input
      type="text"
      placeholder="Job Title"
      class="w-full p-3 rounded-lg bg-background text-text"
    />

    <input
      type="email"
      placeholder="Email"
      class="w-full p-3 rounded-lg bg-background text-text"
    />

    <input
      type="tel"
      placeholder="Phone"
      class="w-full p-3 rounded-lg bg-background text-text"
    />

    <textarea
      placeholder="Summary"
      rows="4"
      class="w-full p-3 rounded-lg bg-background text-text"
    ></textarea>

    <textarea
      placeholder="Skills (comma-separated)"
      rows="2"
      class="w-full p-3 rounded-lg bg-background text-text"
    ></textarea>

    <textarea
      placeholder="Work Experience"
      rows="4"
      class="w-full p-3 rounded-lg bg-background text-text"
    ></textarea>

    <textarea
      placeholder="Education"
      rows="4"
      class="w-full p-3 rounded-lg bg-background text-text"
    ></textarea>
  </form>
</template>
