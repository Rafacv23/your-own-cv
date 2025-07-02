<script lang="ts" setup>
import useCvStore from "../stores/cv"

const cvStore = useCvStore()
</script>

<template>
  <div>
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
  </div>
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
