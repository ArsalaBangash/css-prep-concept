<!-- components/home/SubjectGroups.vue -->
<template>
  <div class="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
    <UContainer class="py-16 sm:py-20">
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
        <div>
          <h2 class="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-2">
            Subject Selection Strategy
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Choose wisely—your optional subjects can make or break your merit position.
          </p>
        </div>
        <NuxtLink 
          to="/syllabus/selection" 
          class="inline-flex items-center gap-1 text-accent hover:underline font-medium whitespace-nowrap"
        >
          Subject Selection Guide
          <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
        </NuxtLink>
      </div>

      <!-- Compulsory vs Optional -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <!-- Compulsory Subjects -->
        <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
              <UIcon name="i-lucide-bookmark" class="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white">Compulsory Subjects</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">600 Marks • 6 Papers</p>
            </div>
          </div>
          
          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span class="text-sm text-gray-700 dark:text-gray-300">English Essay</span>
              <span class="text-sm font-medium text-gray-900 dark:text-white">100 marks</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span class="text-sm text-gray-700 dark:text-gray-300">English Precis & Composition</span>
              <span class="text-sm font-medium text-gray-900 dark:text-white">100 marks</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span class="text-sm text-gray-700 dark:text-gray-300">General Science & Ability</span>
              <span class="text-sm font-medium text-gray-900 dark:text-white">100 marks</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span class="text-sm text-gray-700 dark:text-gray-300">Current Affairs</span>
              <span class="text-sm font-medium text-gray-900 dark:text-white">100 marks</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span class="text-sm text-gray-700 dark:text-gray-300">Pakistan Affairs</span>
              <span class="text-sm font-medium text-gray-900 dark:text-white">100 marks</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span class="text-sm text-gray-700 dark:text-gray-300">Islamic Studies / Ethics</span>
              <span class="text-sm font-medium text-gray-900 dark:text-white">100 marks</span>
            </div>
          </div>

          <NuxtLink 
            to="/syllabus/compulsory"
            class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
          >
            View Compulsory Syllabus
            <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>

        <!-- Optional Subjects -->
        <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
              <UIcon name="i-lucide-layers" class="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white">Optional Subjects</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">600 Marks • Choose from 7 Groups</p>
            </div>
          </div>
          
          <div class="space-y-3">
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="flex items-center justify-between mb-1">
                <span class="text-sm font-medium text-gray-900 dark:text-white">Group I</span>
                <span class="text-xs text-gray-500">200 marks</span>
              </div>
              <p class="text-xs text-gray-600 dark:text-gray-400">Political Science, IR, Economics, Accountancy</p>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="flex items-center justify-between mb-1">
                <span class="text-sm font-medium text-gray-900 dark:text-white">Group II</span>
                <span class="text-xs text-gray-500">200/100 marks</span>
              </div>
              <p class="text-xs text-gray-600 dark:text-gray-400">Physics, Chemistry, Computer Science, Public Admin</p>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="flex items-center justify-between mb-1">
                <span class="text-sm font-medium text-gray-900 dark:text-white">Group V</span>
                <span class="text-xs text-gray-500">100 marks</span>
              </div>
              <p class="text-xs text-gray-600 dark:text-gray-400">Gender Studies, Environmental Science</p>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="flex items-center justify-between mb-1">
                <span class="text-sm font-medium text-gray-900 dark:text-white">Group VI</span>
                <span class="text-xs text-gray-500">100 marks</span>
              </div>
              <p class="text-xs text-gray-600 dark:text-gray-400">Criminology, Sociology, Law subjects</p>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="flex items-center justify-between mb-1">
                <span class="text-sm font-medium text-gray-900 dark:text-white">Group VII</span>
                <span class="text-xs text-gray-500">100 marks</span>
              </div>
              <p class="text-xs text-gray-600 dark:text-gray-400">Regional Languages, Psychology, Journalism</p>
            </div>
          </div>

          <NuxtLink 
            to="/syllabus/optional"
            class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
          >
            View All Optional Subjects
            <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>

      <!-- High Scoring Tip -->
      <div class="bg-accent/10 dark:bg-accent/20 border border-accent/20 rounded-xl p-6">
        <div class="flex flex-col md:flex-row md:items-center gap-4">
          <div class="flex-shrink-0">
            <div class="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
              <UIcon name="i-lucide-lightbulb" class="w-6 h-6 text-accent" />
            </div>
          </div>
          <div class="flex-1">
            <h4 class="font-semibold text-gray-900 dark:text-white mb-1">2026 Strategy Tip</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Based on recent trends, <strong>Political Science</strong>, <strong>Environmental Science</strong>, 
              <strong>Criminology</strong>, and <strong>Regional Languages</strong> are showing consistent high scores. 
              Avoid subjects that have been "targeted" with strict marking.
            </p>
          </div>
          <NuxtLink 
            to="/syllabus/trends"
            class="flex-shrink-0 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline whitespace-nowrap"
          >
            View Scoring Trends
            <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </div>
</template>