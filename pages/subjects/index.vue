<script setup lang="ts">
useSeoMeta({
  title: 'CSS Optional Subject Guides - Deep Dives & Preparation Strategies',
  description: 'In-depth guides for CSS optional subjects: IR, Political Science, Criminology, Environmental Science, Sociology, European History, History of USA, Public Administration.',
  ogTitle: 'CSS Subject Guides - Complete Preparation Strategies',
  ogDescription: 'Detailed guides for 8 CSS optional subjects with syllabus, books, scoring trends, and preparation strategies.',
})

const subjects = [
  {
    name: 'International Relations',
    slug: 'international-relations',
    marks: 200,
    papers: 2,
    icon: 'i-lucide-globe',
    color: 'blue',
    status: 'Variable',
    statusColor: 'yellow',
    description: 'Most popular optional. Heavy current affairs overlap. High-risk, high-reward.',
    tags: ['Group I', '200 Marks', 'Most Popular'],
  },
  {
    name: 'Political Science',
    slug: 'political-science',
    marks: 200,
    papers: 2,
    icon: 'i-lucide-landmark',
    color: 'purple',
    status: 'Consistent',
    statusColor: 'green',
    description: 'Safest anchor subject. Western & Muslim political thought. Predictable scoring.',
    tags: ['Group I', '200 Marks', 'Safest Option'],
  },
  {
    name: 'Criminology',
    slug: 'criminology',
    marks: 100,
    papers: 1,
    icon: 'i-lucide-shield',
    color: 'red',
    status: 'High Scoring',
    statusColor: 'green',
    description: 'Hidden gem. Short syllabus, interesting content, consistent 65-80 scoring.',
    tags: ['Group VI', '100 Marks', 'Hidden Gem'],
  },
  {
    name: 'Environmental Science',
    slug: 'environmental-science',
    marks: 100,
    papers: 1,
    icon: 'i-lucide-leaf',
    color: 'green',
    status: 'Rising Star',
    statusColor: 'green',
    description: 'Replacing Gender Studies as safe option. Objective marking, Essay overlap.',
    tags: ['Group V', '100 Marks', 'Rising Star'],
  },
  {
    name: 'Sociology',
    slug: 'sociology',
    marks: 100,
    papers: 1,
    icon: 'i-lucide-users',
    color: 'indigo',
    status: 'Stable',
    statusColor: 'green',
    description: 'Mother of social sciences. Essay + Current Affairs overlap, consistent 60+ scoring.',
    tags: ['Group VI', '100 Marks', 'Essay Support'],
  },
  {
    name: 'European History',
    slug: 'european-history',
    marks: 100,
    papers: 1,
    icon: 'i-lucide-book-open',
    color: 'orange',
    status: 'Rising',
    statusColor: 'green',
    description: 'Trending alternative to USA History. Chronological, predictable questions.',
    tags: ['Group IV', '100 Marks', 'Trending'],
  },
  {
    name: 'History of USA',
    slug: 'history-of-usa',
    marks: 100,
    papers: 1,
    icon: 'i-lucide-flag',
    color: 'rose',
    status: 'Volatile',
    statusColor: 'yellow',
    description: 'High-risk optional currently targeted by FPSC. Only for specialists.',
    tags: ['Group IV', '100 Marks', 'High Risk'],
  },
  {
    name: 'Public Administration',
    slug: 'public-administration',
    marks: 100,
    papers: 1,
    icon: 'i-lucide-building',
    color: 'cyan',
    status: 'Moderate',
    statusColor: 'yellow',
    description: 'Governance-focused subject; overlaps with Essay, Interview, and actual CSP work.',
    tags: ['Group II', '100 Marks', 'Governance'],
  },
]

const comingSoon = [
  { name: 'Economics', group: 'I' },
  { name: 'Psychology', group: 'VII' },
  { name: 'Gender Studies', group: 'V' },
  { name: 'Town Planning & Urban Management', group: 'II' },
]
</script>

<template>
  <div class="bg-clean min-h-screen">
    <UContainer class="py-16">
      <div class="max-w-5xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Subject Guides</h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
          In-depth preparation guides for popular CSS optional subjects. Each guide includes syllabus breakdown, 
          recommended books, scoring trends, and strategic advice.
        </p>

        <!-- Featured Subjects -->
        <div class="grid md:grid-cols-2 gap-6 mb-12">
          <NuxtLink
            v-for="subject in subjects"
            :key="subject.slug"
            :to="`/subjects/${subject.slug}`"
            class="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:border-accent dark:hover:border-accent transition-colors"
          >
            <div class="flex items-start justify-between mb-4">
              <div :class="`p-3 rounded-lg bg-${subject.color}-100 dark:bg-${subject.color}-900/30`">
                <UIcon :name="subject.icon" :class="`text-${subject.color}-600 dark:text-${subject.color}-400 text-2xl`" />
              </div>
              <span 
                :class="[
                  'text-xs px-2 py-1 rounded font-medium',
                  subject.statusColor === 'green' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                  'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                ]"
              >
                {{ subject.status }}
              </span>
            </div>

            <h2 class="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
              {{ subject.name }}
            </h2>
            
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {{ subject.description }}
            </p>

            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tag in subject.tags" 
                :key="tag"
                class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded"
              >
                {{ tag }}
              </span>
            </div>

            <div class="flex items-center text-sm text-accent font-medium">
              View Guide
              <UIcon name="i-lucide-arrow-right" class="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </NuxtLink>
        </div>

        <!-- Coming Soon -->
        <div class="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">More Guides Coming Soon</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            We're working on detailed guides for more subjects. Check back soon or 
            <NuxtLink to="/community" class="text-accent hover:underline">join our community</NuxtLink> 
            to be notified.
          </p>
          <div class="flex flex-wrap gap-3">
            <span 
              v-for="subject in comingSoon" 
              :key="subject.name"
              class="text-sm px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              {{ subject.name }} <span class="text-gray-400">(Group {{ subject.group }})</span>
            </span>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="grid sm:grid-cols-3 gap-4">
          <UButton to="/syllabus/selection" variant="outline" class="justify-center" icon="i-lucide-compass">
            Subject Selection Guide
          </UButton>
          <UButton to="/syllabus/trends" variant="outline" class="justify-center" icon="i-lucide-trending-up">
            Scoring Trends
          </UButton>
          <UButton to="/syllabus/optional" variant="outline" class="justify-center" icon="i-lucide-layers">
            All Optional Subjects
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>
