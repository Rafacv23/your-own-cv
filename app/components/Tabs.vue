<template>
  <div>
    <div class="flex gap-4 border-b border-zinc-600 mb-4">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click.prevent="$emit('update:activeTab', index)"
        :class="[
          'px-4 py-2 font-medium transition',
          activeTab === index
            ? 'text-secondary border-b-2 border-secondary'
            : 'text-zinc-400 hover:text-white',
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="p-4 rounded-xl bg-card/30">
      <slot :name="tabs[activeTab].slot" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  tabs: { label: string; slot: string }[]
  activeTab: number
}>()
</script>
