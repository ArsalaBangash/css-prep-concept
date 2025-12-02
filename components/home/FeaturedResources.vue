<!-- components/home/FeaturedResources.vue -->
<template>
  <div class="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
    <UContainer class="py-16 sm:py-20">
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
        <div>
          <h2 class="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-2">
            Essential Resources
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Curated books, guides, and materials recommended by toppers.
          </p>
        </div>
        <NuxtLink 
          to="/resources" 
          class="inline-flex items-center gap-1 text-accent hover:underline font-medium whitespace-nowrap"
        >
          Browse All Resources
          <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- English Resources -->
        <div class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-accent dark:hover:border-accent hover:shadow-lg transition-all">
          <div class="flex items-start gap-4 mb-4">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <UIcon name="i-lucide-book-open" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-1">English Essay & Precis</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">The make-or-break subject</p>
            </div>
          </div>
          
          <ul class="space-y-2 mb-4">
            <li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>High School English Grammar - Wren & Martin</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Exploring the World of English - Saadat Ali Shah</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>High Scoring CSS Essays - Abrahim Shah</span>
            </li>
          </ul>

          <NuxtLink 
            to="/resources?subject=english"
            class="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:underline"
          >
            View English Resources
            <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>

        <!-- Pakistan Affairs -->
        <div class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-accent dark:hover:border-accent hover:shadow-lg transition-all">
          <div class="flex items-start gap-4 mb-4">
            <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <UIcon name="i-lucide-landmark" class="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Pakistan Affairs</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">History, politics & economy</p>
            </div>
          </div>
          
          <ul class="space-y-2 mb-4">
            <li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Pakistan: A Hard Country - Anatol Lieven</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Foreign Policy of Pakistan - Abdul Sattar</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Constitutional History - Hamid Khan</span>
            </li>
          </ul>

          <NuxtLink 
            to="/resources?subject=pakistan-affairs"
            class="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:underline"
          >
            View PA Resources
            <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>

        <!-- General Science & Ability -->
        <div class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-accent dark:hover:border-accent hover:shadow-lg transition-all">
          <div class="flex items-start gap-4 mb-4">
            <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <UIcon name="i-lucide-flask-conical" class="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-1">General Science & Ability</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">Science + Math + Reasoning</p>
            </div>
          </div>
          
          <ul class="space-y-2 mb-4">
            <li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>General Science & Ability - Mian Shafiq (JWT)</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Everyday Science - Dr. Akram Kashmiri</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>YouTube: Study River GSA Course</span>
            </li>
          </ul>

          <NuxtLink 
            to="/resources?subject=gsa"
            class="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:underline"
          >
            View GSA Resources
            <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>

        <!-- Current Affairs -->
        <div class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-accent dark:hover:border-accent hover:shadow-lg transition-all">
          <div class="flex items-start gap-4 mb-4">
            <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <UIcon name="i-lucide-newspaper" class="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Current Affairs</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">Stay updated daily</p>
            </div>
          </div>
          
          <ul class="space-y-2 mb-4">
            <li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Jahangir's World Times (Monthly)</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Dawn Newspaper (Daily)</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>The Economist / Foreign Affairs</span>
            </li>
          </ul>

          <NuxtLink 
            to="/current-affairs"
            class="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:underline"
          >
            Current Affairs Hub
            <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>

        <!-- Islamic Studies -->
        <div class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-accent dark:hover:border-accent hover:shadow-lg transition-all">
          <div class="flex items-start gap-4 mb-4">
            <div class="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <UIcon name="i-lucide-book" class="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Islamic Studies</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">Theology & modern issues</p>
            </div>
          </div>
          
          <ul class="space-y-2 mb-4">
            <li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Islam: Its Meaning & Message - Khurshid Ahmad</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Islamic Studies - Hafiz Karim Dad Chughtai</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Introduction to Islam - Dr. Hamidullah</span>
            </li>
          </ul>

          <NuxtLink 
            to="/resources?subject=islamic-studies"
            class="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:underline"
          >
            View Islamiat Resources
            <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>

        <!-- Past Papers -->
        <div class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-accent dark:hover:border-accent hover:shadow-lg transition-all">
          <div class="flex items-start gap-4 mb-4">
            <div class="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <UIcon name="i-lucide-file-text" class="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Past Papers</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">Practice with real exams</p>
            </div>
          </div>
          
          <ul class="space-y-2 mb-4">
            <li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>FPSC Official Past Papers (2016-2025)</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Solved MCQs for MPT</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <UIcon name="i-lucide-check" class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Model Answer Sheets</span>
            </li>
          </ul>

          <NuxtLink 
            to="/resources/past-papers"
            class="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:underline"
          >
            Download Past Papers
            <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </div>
</template>