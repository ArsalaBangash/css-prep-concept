<!-- components/home/QuickStart.vue -->
<template>
  <div class="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
    <UContainer class="py-16 sm:py-20">
      <div class="text-center mb-12">
        <h2 class="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
          Where are you in your journey?
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Pick your situation and we'll guide you to the right resources.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <!-- Just Starting -->
        <NuxtLink 
          to="/roadmap?stage=beginner" 
          class="group block p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-accent dark:hover:border-accent hover:shadow-lg transition-all"
        >
          <div class="mb-4">
            <UIcon name="i-lucide-rocket" class="w-8 h-8 text-gray-600 dark:text-gray-400 group-hover:text-accent transition-colors" />
          </div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Just Starting</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            New to CSS? Learn the basics and build your foundation.
          </p>
          <span class="inline-flex items-center gap-1 text-sm font-medium text-accent">
            Get Started
            <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
          </span>
        </NuxtLink>

        <!-- Preparing for MPT -->
        <NuxtLink 
          to="/exam/mpt" 
          class="group block p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-accent dark:hover:border-accent hover:shadow-lg transition-all"
        >
          <div class="mb-4">
            <UIcon name="i-lucide-file-check" class="w-8 h-8 text-gray-600 dark:text-gray-400 group-hover:text-accent transition-colors" />
          </div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">MPT Preparation</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Focus on the preliminary test with MCQ practice.
          </p>
          <span class="inline-flex items-center gap-1 text-sm font-medium text-accent">
            MPT Resources
            <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
          </span>
        </NuxtLink>

        <!-- Written Exam Prep -->
        <NuxtLink 
          to="/syllabus" 
          class="group block p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-accent dark:hover:border-accent hover:shadow-lg transition-all"
        >
          <div class="mb-4">
            <UIcon name="i-lucide-pen-tool" class="w-8 h-8 text-gray-600 dark:text-gray-400 group-hover:text-accent transition-colors" />
          </div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Written Exam</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Deep dive into subjects and answer writing techniques.
          </p>
          <span class="inline-flex items-center gap-1 text-sm font-medium text-accent">
            Study Subjects
            <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
          </span>
        </NuxtLink>

        <!-- Interview Stage -->
        <NuxtLink 
          to="/exam/interview" 
          class="group block p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-accent dark:hover:border-accent hover:shadow-lg transition-all"
        >
          <div class="mb-4">
            <UIcon name="i-lucide-users" class="w-8 h-8 text-gray-600 dark:text-gray-400 group-hover:text-accent transition-colors" />
          </div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Interview Prep</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Prepare for psychological assessment and viva voce.
          </p>
          <span class="inline-flex items-center gap-1 text-sm font-medium text-accent">
            Interview Guide
            <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
          </span>
        </NuxtLink>
      </div>
    </UContainer>
  </div>
</template>