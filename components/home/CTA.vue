<!-- components/home/CTA.vue -->
<template>
  <div class="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
    <UContainer class="py-20 sm:py-28">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
          Ready to begin your CSS journey?
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Join thousands of aspirants preparing strategically for Pakistan's most prestigious examination.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <UButton 
            to="/roadmap" 
            size="xl" 
            class="bg-accent hover:bg-accent/90 text-white px-8 py-3 font-medium"
          >
            Start Your Preparation
          </UButton>
          <UButton 
            to="/syllabus" 
            size="xl" 
            variant="outline"
            class="border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 px-8 py-3 font-medium"
          >
            Explore Syllabus
          </UButton>
        </div>

        <!-- Key Dates Reminder -->
        <div class="inline-flex items-center gap-3 px-4 py-2 bg-accent/10 dark:bg-accent/20 rounded-full text-sm">
          <span class="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
          <span class="text-gray-700 dark:text-gray-300">
            <strong>CSS 2026:</strong> MPT on Nov 9, 2025 • Written Exam Feb 4, 2026
          </span>
        </div>

        <!-- Stats -->
        <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-sm text-gray-500 dark:text-gray-400">
          <span class="flex items-center gap-1">
            <UIcon name="i-lucide-book-open" class="w-4 h-4" />
            Complete Syllabus Coverage
          </span>
          <span class="hidden sm:inline">•</span>
          <span class="flex items-center gap-1">
            <UIcon name="i-lucide-file-text" class="w-4 h-4" />
            Past Papers Archive
          </span>
          <span class="hidden sm:inline">•</span>
          <span class="flex items-center gap-1">
            <UIcon name="i-lucide-users" class="w-4 h-4" />
            Community Support
          </span>
        </div>
      </div>
    </UContainer>
  </div>
</template>