<!-- pages/exam/index.vue -->
<script setup lang="ts">
useSeoMeta({
  title: 'CSS Exam Overview - Complete Guide to Pakistan Civil Services',
  description: 'Complete guide to CSS examination including eligibility, exam stages, marking scheme, and service groups. Everything you need to know about Pakistan\'s civil services exam.',
})

// Exam stages
const examStages = [
  {
    stage: 1,
    name: 'MPT (Preliminary Test)',
    description: 'MCQ-based screening test to filter candidates for the written examination.',
    details: [
      '200 MCQs covering English, Urdu, General Knowledge, Islamic Studies',
      '3 hours duration',
      '33% minimum passing marks',
      'Marks not added to final aggregate',
    ],
    color: 'blue',
  },
  {
    stage: 2,
    name: 'Written Examination',
    description: 'Main examination consisting of 12 papers over multiple days.',
    details: [
      '6 Compulsory + 6 Optional papers',
      '1200 total marks',
      '40% required in compulsory, 33% in optional',
      'Conducted over 2-3 weeks',
    ],
    color: 'purple',
  },
  {
    stage: 3,
    name: 'Medical Examination',
    description: 'Physical and medical fitness assessment for selected candidates.',
    details: [
      'Standard medical tests',
      'Vision and hearing tests',
      'Physical fitness assessment',
      'Conducted at designated hospitals',
    ],
    color: 'green',
  },
  {
    stage: 4,
    name: 'Psychological Assessment',
    description: 'Two-day assessment to evaluate personality and leadership potential.',
    details: [
      'Intelligence tests (Raven\'s Matrices)',
      'Word Association Test (WAT)',
      'Thematic Apperception Test (TAT)',
      'Group discussions and command tasks',
    ],
    color: 'orange',
  },
  {
    stage: 5,
    name: 'Viva Voce (Interview)',
    description: 'Final interview by FPSC panel to assess personality and knowledge.',
    details: [
      '300 marks',
      '100 minimum required to pass',
      '20-45 minutes duration',
      'Panel includes FPSC Chairman and experts',
    ],
    color: 'red',
  },
]

// Service groups
const serviceGroups = [
  { name: 'Pakistan Administrative Service (PAS)', abbr: 'PAS', description: 'District management and administration' },
  { name: 'Police Service of Pakistan (PSP)', abbr: 'PSP', description: 'Law enforcement and public safety' },
  { name: 'Foreign Service of Pakistan (FSP)', abbr: 'FSP', description: 'Diplomatic missions and foreign affairs' },
  { name: 'Inland Revenue Service (IRS)', abbr: 'IRS', description: 'Tax collection and revenue management' },
  { name: 'Pakistan Audit & Accounts Service', abbr: 'PA&AS', description: 'Government auditing and accounts' },
  { name: 'Office Management Group (OMG)', abbr: 'OMG', description: 'Federal secretariat management' },
  { name: 'Postal Group', abbr: 'PG', description: 'Postal services management' },
  { name: 'Commerce & Trade Group', abbr: 'C&TG', description: 'Trade and commerce regulation' },
  { name: 'Information Group', abbr: 'IG', description: 'Media and information services' },
  { name: 'Military Lands & Cantonments', abbr: 'ML&C', description: 'Cantonment administration' },
  { name: 'Railways (Commercial & Transportation)', abbr: 'RC&T', description: 'Railway operations' },
  { name: 'Customs Group', abbr: 'CG', description: 'Customs and border control' },
]

// Eligibility criteria
const eligibility = [
  { label: 'Age Limit', value: '21-30 years (as of Dec 31 of preceding year)' },
  { label: 'Age Relaxation', value: 'Up to 2 years for government servants, specified tribes' },
  { label: 'Education', value: 'Bachelor\'s degree (minimum 2nd division)' },
  { label: 'Citizenship', value: 'Pakistani citizen (dual nationals must renounce)' },
  { label: 'Attempts', value: 'Maximum 3 attempts within age limit' },
  { label: 'Domicile', value: 'Valid provincial/regional domicile required' },
]

// Key dates for CSS 2026
const keyDates = [
  { event: 'MPT Public Notice', date: 'August 10, 2025' },
  { event: 'MPT Application Window', date: 'August 11-25, 2025' },
  { event: 'MPT Exam Date', date: 'November 9, 2025' },
  { event: 'Written Exam Application', date: 'December 15-30, 2025' },
  { event: 'Written Exam Commencement', date: 'February 4, 2026' },
]
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <!-- Header -->
    <div class="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <UContainer class="py-12">
        <h1 class="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
          CSS Examination Overview
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mb-6">
          The Central Superior Services (CSS) examination is Pakistan's premier competitive exam 
          for recruitment into the federal bureaucracy. Conducted annually by FPSC.
        </p>
        
        <!-- Quick Stats -->
        <div class="flex flex-wrap gap-6 text-sm">
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-users" class="w-5 h-5 text-accent" />
            <span class="text-gray-600 dark:text-gray-400">40,000+ Annual Applicants</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-percent" class="w-5 h-5 text-accent" />
            <span class="text-gray-600 dark:text-gray-400">~2% Success Rate</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-award" class="w-5 h-5 text-accent" />
            <span class="text-gray-600 dark:text-gray-400">12 Service Groups</span>
          </div>
        </div>
      </UContainer>
    </div>

    <UContainer class="py-8">
      <!-- Key Dates Banner -->
      <div class="mb-8 bg-accent/10 dark:bg-accent/20 border border-accent/20 rounded-xl p-6">
        <h2 class="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <UIcon name="i-lucide-calendar" class="w-5 h-5 text-accent" />
          CSS 2026 Important Dates
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div v-for="date in keyDates" :key="date.event" class="text-center">
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">{{ date.event }}</p>
            <p class="font-semibold text-gray-900 dark:text-white">{{ date.date }}</p>
          </div>
        </div>
      </div>

      <!-- Exam Stages -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Examination Stages
        </h2>
        <div class="space-y-4">
          <div
            v-for="stage in examStages"
            :key="stage.stage"
            class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6"
          >
            <div class="flex items-start gap-4">
              <div 
                :class="[
                  'w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0',
                  stage.color === 'blue' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' :
                  stage.color === 'purple' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' :
                  stage.color === 'green' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' :
                  stage.color === 'orange' ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' :
                  'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                ]"
              >
                {{ stage.stage }}
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {{ stage.name }}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 mb-3">
                  {{ stage.description }}
                </p>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li 
                    v-for="detail in stage.details" 
                    :key="detail"
                    class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <UIcon name="i-lucide-check" class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    {{ detail }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Eligibility -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Eligibility Criteria
        </h2>
        <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
          <div class="divide-y divide-gray-100 dark:divide-gray-800">
            <div 
              v-for="item in eligibility" 
              :key="item.label"
              class="flex flex-col sm:flex-row sm:items-center gap-2 p-4"
            >
              <span class="font-medium text-gray-900 dark:text-white sm:w-40">{{ item.label }}</span>
              <span class="text-gray-600 dark:text-gray-400">{{ item.value }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Service Groups -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Service Groups
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="group in serviceGroups"
            :key="group.abbr"
            class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4"
          >
            <div class="flex items-start gap-3">
              <span class="px-2 py-1 text-xs font-bold bg-accent/10 text-accent rounded">
                {{ group.abbr }}
              </span>
              <div>
                <h3 class="font-medium text-gray-900 dark:text-white text-sm mb-1">
                  {{ group.name }}
                </h3>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  {{ group.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick Links -->
      <section>
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Explore More
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <NuxtLink 
            to="/exam/mpt"
            class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:border-accent transition-colors"
          >
            <UIcon name="i-lucide-file-check" class="w-8 h-8 text-gray-400 group-hover:text-accent mb-3" />
            <h3 class="font-semibold text-gray-900 dark:text-white mb-1">MPT Guide</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">Preliminary test preparation</p>
          </NuxtLink>
          
          <NuxtLink 
            to="/exam/written"
            class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:border-accent transition-colors"
          >
            <UIcon name="i-lucide-pen-tool" class="w-8 h-8 text-gray-400 group-hover:text-accent mb-3" />
            <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Written Exam</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">Main examination details</p>
          </NuxtLink>

          <NuxtLink 
            to="/exam/psychological"
            class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:border-accent transition-colors"
          >
            <UIcon name="i-lucide-brain" class="w-8 h-8 text-gray-400 group-hover:text-accent mb-3" />
            <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Psych Assessment</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">WAT, TAT & group tasks</p>
          </NuxtLink>
          
          <NuxtLink 
            to="/exam/interview"
            class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:border-accent transition-colors"
          >
            <UIcon name="i-lucide-users" class="w-8 h-8 text-gray-400 group-hover:text-accent mb-3" />
            <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Interview Prep</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">Viva voce preparation</p>
          </NuxtLink>
          
          <NuxtLink 
            to="/syllabus"
            class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:border-accent transition-colors"
          >
            <UIcon name="i-lucide-book-open" class="w-8 h-8 text-gray-400 group-hover:text-accent mb-3" />
            <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Syllabus</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">Complete subject guide</p>
          </NuxtLink>
        </div>
      </section>
    </UContainer>
  </div>
</template>