<!-- components/home/ExamStages.vue -->
<template>
  <div class="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
    <UContainer class="py-16 sm:py-20">
      <div class="text-center mb-12">
        <h2 class="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
          CSS Exam Journey
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Understand the complete examination process from application to allocation.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <!-- Stage 1: MPT -->
        <div class="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-accent dark:hover:border-accent hover:shadow-lg transition-all">
          <div class="absolute top-4 right-4">
            <span class="stage-mpt px-2 py-1 text-xs font-medium rounded-full">Stage 1</span>
          </div>
          <div class="mb-4">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <UIcon name="i-lucide-file-check" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              MPT (Preliminary Test)
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
              MCQ-based screening test covering English, Urdu, General Knowledge, and Islamic Studies.
            </p>
          </div>
          <div class="space-y-2 text-sm">
            <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <UIcon name="i-lucide-clock" class="w-4 h-4" />
              <span>200 MCQs • 3 Hours</span>
            </div>
            <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <UIcon name="i-lucide-target" class="w-4 h-4" />
              <span>33% Passing Marks</span>
            </div>
          </div>
          <NuxtLink 
            to="/exam/mpt"
            class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:underline"
          >
            Learn More
            <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>

        <!-- Stage 2: Written Exam -->
        <div class="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-accent dark:hover:border-accent hover:shadow-lg transition-all">
          <div class="absolute top-4 right-4">
            <span class="stage-written px-2 py-1 text-xs font-medium rounded-full">Stage 2</span>
          </div>
          <div class="mb-4">
            <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <UIcon name="i-lucide-pen-tool" class="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Written Examination
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
              12 papers including 6 compulsory and 6 optional subjects over multiple days.
            </p>
          </div>
          <div class="space-y-2 text-sm">
            <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <UIcon name="i-lucide-book-open" class="w-4 h-4" />
              <span>1200 Total Marks</span>
            </div>
            <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <UIcon name="i-lucide-target" class="w-4 h-4" />
              <span>40% in Compulsory, 33% in Optional</span>
            </div>
          </div>
          <NuxtLink 
            to="/exam/written"
            class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:underline"
          >
            Learn More
            <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>

        <!-- Stage 3: Interview -->
        <div class="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-accent dark:hover:border-accent hover:shadow-lg transition-all">
          <div class="absolute top-4 right-4">
            <span class="stage-interview px-2 py-1 text-xs font-medium rounded-full">Stage 3</span>
          </div>
          <div class="mb-4">
            <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
              <UIcon name="i-lucide-users" class="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Psychological & Viva Voce
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Psychological assessment and interview by FPSC panel to evaluate personality and aptitude.
            </p>
          </div>
          <div class="space-y-2 text-sm">
            <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <UIcon name="i-lucide-award" class="w-4 h-4" />
              <span>300 Interview Marks</span>
            </div>
            <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <UIcon name="i-lucide-target" class="w-4 h-4" />
              <span>100 Minimum Required</span>
            </div>
          </div>
          <NuxtLink 
            to="/exam/interview"
            class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:underline"
          >
            Learn More
            <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <NuxtLink 
          to="/exam"
          class="inline-flex items-center gap-2 text-accent hover:underline font-medium"
        >
          View Complete Exam Guide
          <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
        </NuxtLink>
      </div>
    </UContainer>
  </div>
</template>