<template>
  <div class="bg-clean min-h-screen">
    <!-- Header -->
    <div class="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <UContainer class="py-12">
        <h1 class="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
          CSS Preparation Hub
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          Master the skills that separate CSS toppers from the rest. Access comprehensive guides 
          on essay writing, answer techniques, and practice resources.
        </p>
      </UContainer>
    </div>

    <UContainer class="py-8">
      <!-- Preparation Modules -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <!-- Essay Writing -->
        <NuxtLink to="/prep/essay" class="block group">
          <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 h-full hover:border-accent transition-colors">
            <div class="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-4">
              <UIcon name="i-lucide-pen-tool" class="text-2xl text-red-600 dark:text-red-400" />
            </div>
            <h2 class="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">Essay Writing</h2>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Master the most lethal paper with 90% failure rate. Learn structure, thesis development, and quotations.
            </p>
            <div class="flex items-center gap-2 text-sm text-accent">
              <span>Start Learning</span>
              <UIcon name="i-lucide-arrow-right" />
            </div>
          </div>
        </NuxtLink>

        <!-- Answer Writing -->
        <NuxtLink to="/prep/answer-writing" class="block group">
          <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 h-full hover:border-accent transition-colors">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
              <UIcon name="i-lucide-file-text" class="text-2xl text-blue-600 dark:text-blue-400" />
            </div>
            <h2 class="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">Answer Writing</h2>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Knowledge is 50%, presentation is 50%. Learn techniques to maximize your scores.
            </p>
            <div class="flex items-center gap-2 text-sm text-accent">
              <span>Start Learning</span>
              <UIcon name="i-lucide-arrow-right" />
            </div>
          </div>
        </NuxtLink>

        <!-- Mock Tests -->
        <NuxtLink to="/prep/mock-tests" class="block group">
          <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 h-full hover:border-accent transition-colors">
            <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4">
              <UIcon name="i-lucide-clipboard-check" class="text-2xl text-green-600 dark:text-green-400" />
            </div>
            <h2 class="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">Mock Tests</h2>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Practice under exam conditions. Test your knowledge and time management skills.
            </p>
            <div class="flex items-center gap-2 text-sm text-accent">
              <span>Take Tests</span>
              <UIcon name="i-lucide-arrow-right" />
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Quick Tips -->
      <div class="bg-accent/10 rounded-xl p-6 mb-8">
        <h2 class="text-xl font-semibold mb-4">Quick Preparation Tips</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-check-circle" class="text-accent flex-shrink-0 mt-0.5" />
            <span class="text-sm">Write at least 2-3 answers daily under timed conditions</span>
          </div>
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-check-circle" class="text-accent flex-shrink-0 mt-0.5" />
            <span class="text-sm">Practice one full essay every week with evaluation</span>
          </div>
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-check-circle" class="text-accent flex-shrink-0 mt-0.5" />
            <span class="text-sm">Memorize 50-100 quotations for essay and Pak Affairs</span>
          </div>
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-check-circle" class="text-accent flex-shrink-0 mt-0.5" />
            <span class="text-sm">Read Dawn editorials daily for writing style</span>
          </div>
        </div>
      </div>

      <!-- Related Links -->
      <div class="flex flex-wrap gap-4">
        <UButton to="/roadmap" variant="outline" icon="i-lucide-map">
          Preparation Roadmap
        </UButton>
        <UButton to="/resources/past-papers" variant="outline" icon="i-lucide-file-stack">
          Past Papers
        </UButton>
        <UButton to="/syllabus" variant="outline" icon="i-lucide-book-open">
          Syllabus
        </UButton>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'CSS Preparation Hub - Essay Writing, Answer Techniques & Mock Tests',
  description: 'Comprehensive CSS preparation resources. Master essay writing, answer techniques, and practice with mock tests to maximize your CSS exam scores.',
})
</script>