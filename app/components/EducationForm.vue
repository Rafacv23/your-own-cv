<script lang="ts" setup>
import useCvStore from "../stores/cv"

const cvStore = useCvStore()
</script>

<template>
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
        @click="cvStore.education.splice(index, 1)"
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
