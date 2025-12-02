<!-- components/home/Timeline.vue -->
<template>
  <div class="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
    <UContainer class="py-16 sm:py-20">
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
        <div>
          <h2 class="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-2">
            18-Month Preparation Roadmap
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            A strategic timeline to maximize your chances of success.
          </p>
        </div>
        <NuxtLink 
          to="/roadmap" 
          class="inline-flex items-center gap-1 text-accent hover:underline font-medium whitespace-nowrap"
        >
          View Detailed Roadmap
          <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
        </NuxtLink>
      </div>

      <div class="relative">
        <!-- Timeline Line (Desktop) -->
        <div class="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-800"></div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <!-- Phase 1 -->
          <div class="relative">
            <div class="hidden md:flex absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-accent rounded-full items-center justify-center z-10">
              <span class="text-white text-xs font-bold">1</span>
            </div>
            <div class="md:pt-12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5">
              <div class="flex items-center gap-2 mb-3">
                <span class="md:hidden w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-xs font-bold">1</span>
                <h3 class="font-semibold text-gray-900 dark:text-white">Foundation</h3>
              </div>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">Months 1-4</p>
              <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Master English grammar basics</span>
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Select optional subjects</span>
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Start daily newspaper reading</span>
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Build vocabulary</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Phase 2 -->
          <div class="relative">
            <div class="hidden md:flex absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-accent rounded-full items-center justify-center z-10">
              <span class="text-white text-xs font-bold">2</span>
            </div>
            <div class="md:pt-12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5">
              <div class="flex items-center gap-2 mb-3">
                <span class="md:hidden w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-xs font-bold">2</span>
                <h3 class="font-semibold text-gray-900 dark:text-white">Subject Mastery</h3>
              </div>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">Months 5-10</p>
              <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Complete all subject syllabi</span>
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Join academy or online course</span>
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Create concise notes</span>
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Read JWT monthly</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Phase 3 -->
          <div class="relative">
            <div class="hidden md:flex absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-accent rounded-full items-center justify-center z-10">
              <span class="text-white text-xs font-bold">3</span>
            </div>
            <div class="md:pt-12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5">
              <div class="flex items-center gap-2 mb-3">
                <span class="md:hidden w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-xs font-bold">3</span>
                <h3 class="font-semibold text-gray-900 dark:text-white">Writing Intensive</h3>
              </div>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">Months 11-14</p>
              <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Weekly essay practice</span>
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Solve past 5 years papers</span>
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Get essays evaluated</span>
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Attempt MPT (if scheduled)</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Phase 4 -->
          <div class="relative">
            <div class="hidden md:flex absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-accent rounded-full items-center justify-center z-10">
              <span class="text-white text-xs font-bold">4</span>
            </div>
            <div class="md:pt-12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5">
              <div class="flex items-center gap-2 mb-3">
                <span class="md:hidden w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-xs font-bold">4</span>
                <h3 class="font-semibold text-gray-900 dark:text-white">Revision & Mocks</h3>
              </div>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">Months 15-18</p>
              <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Full-length mock exams</span>
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Revise short notes</span>
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Update current affairs data</span>
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Build exam stamina</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-12 text-center">
        <UButton 
          to="/roadmap" 
          size="lg" 
          class="bg-accent hover:bg-accent/90 text-white px-6 py-3 font-medium"
        >
          Get Your Personalized Roadmap
        </UButton>
      </div>
    </UContainer>
  </div>
</template>