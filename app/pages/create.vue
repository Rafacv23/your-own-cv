<template>
  <div>
    <header>
      <h1 class="text-2xl font-bold mb-8 text-center sr-only">
        Create Your CV
      </h1>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <!-- Form Section -->
      <section id="form" class="space-y-6 bg-card rounded-xl p-4">
        <CvForm />
      </section>

      <!-- Preview Section -->
      <section id="preview" class="space-y-6 bg-card rounded-xl p-4 h-fit">
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
