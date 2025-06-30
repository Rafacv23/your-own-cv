<template>
  <div>
    <header>
      <h1 class="text-2xl font-bold mb-8 text-center">Create Your CV</h1>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card p-8 rounded-xl">
      <!-- Form Section -->
      <section id="form" class="space-y-6">
        <CvForm />
      </section>

      <!-- Preview Section -->
      <section id="preview" class="bg-background p-6 rounded-3xl text-text">
        <CvPreview />
      </section>
    </div>

    <footer class="mt-8 text-center">
      <button
        type="submit"
        class="bg-secondary w-full cursor-pointer font-bold px-6 py-3 rounded-lg hover:bg-secondary/80 transition"
      >
        Generate CV
      </button>
    </footer>
  </div>
</template>
