<script setup lang="ts">
useSeoMeta({
  title: 'International Relations CSS Syllabus, Books & Scoring Trends 2025',
  description: 'Complete guide to CSS International Relations: FPSC syllabus, recommended books (Goldstein, Abdul Sattar), scoring trends, targeting warnings, and preparation strategy.',
  ogTitle: 'CSS International Relations - Syllabus, Books & Strategy',
  ogDescription: 'Everything you need for CSS IR: syllabus breakdown, best books, YouTube channels, scoring volatility, and why it\'s high-risk high-reward.',
})

const subjectMeta = {
  name: 'International Relations',
  marks: 200,
  papers: 2,
  passThreshold: 40,
  trendStatus: 'Variable',
  trendColor: 'yellow',
  popularity: 'Most Popular',
  targetingRisk: 'Medium-High',
}

const syllabusP1 = [
  { topic: 'Meaning, Nature & Scope of IR', weight: 'Medium' },
  { topic: 'Major Theories: Realism, Liberalism, Constructivism, Marxism', weight: 'High' },
  { topic: 'Power in International Politics', weight: 'High' },
  { topic: 'National Interest and Foreign Policy', weight: 'High' },
  { topic: 'History of International Relations (WWI, WWII, Cold War)', weight: 'Medium' },
  { topic: 'Major Powers: USA, China, Russia, EU', weight: 'High' },
  { topic: 'Balance of Power, Collective Security', weight: 'Medium' },
]

const syllabusP2 = [
  { topic: 'International Organizations: UN, WTO, IMF, World Bank', weight: 'High' },
  { topic: 'Regional Organizations: SAARC, SCO, OIC, ASEAN', weight: 'Medium' },
  { topic: 'South Asia: India-Pakistan Relations, Kashmir, Afghanistan', weight: 'Very High' },
  { topic: 'Middle East: Arab-Israel Conflict, Gulf Politics', weight: 'High' },
  { topic: 'Nuclear Politics and Arms Control', weight: 'High' },
  { topic: 'Contemporary Issues: Terrorism, Climate Change, Cyber Security', weight: 'Medium' },
  { topic: 'Pakistan\'s Foreign Policy', weight: 'Very High' },
]

const books = [
  { title: 'International Relations', author: 'Joshua Goldstein & Jon Pevehouse', type: 'Primary', note: 'Comprehensive Western textbook' },
  { title: 'Foreign Policy of Pakistan', author: 'Abdul Sattar', type: 'Primary', note: 'Essential for Paper II' },
  { title: 'World Politics', author: 'Kegley & Wittkopf', type: 'Reference', note: 'Alternative to Goldstein' },
  { title: 'International Relations Since 1945', author: 'John Young', type: 'Reference', note: 'Historical depth' },
  { title: 'The Globalization of World Politics', author: 'Baylis & Smith', type: 'Advanced', note: 'For distinction-level answers' },
]

const onlineResources = [
  { name: 'CaspianReport', type: 'YouTube', description: 'Geopolitics explained visually' },
  { name: 'TLDR News Global', type: 'YouTube', description: 'Current events analysis' },
  { name: 'VisualPolitik', type: 'YouTube', description: 'International politics' },
  { name: 'Foreign Affairs', type: 'Magazine', description: 'Premium analysis (essential)' },
  { name: 'The Diplomat', type: 'Website', description: 'Asia-Pacific focus' },
  { name: 'Al Jazeera', type: 'News', description: 'Non-Western perspective' },
]

const commonMistakes = [
  { mistake: 'Memorizing theories without application', fix: 'Practice applying Realism/Liberalism to current events' },
  { mistake: 'One-sided arguments (always anti-West or pro-West)', fix: 'Present balanced analysis; examiners reward nuance' },
  { mistake: 'Ignoring Pakistan\'s perspective', fix: 'Paper II heavily tests Pakistan\'s foreign policy stance' },
  { mistake: 'Outdated examples', fix: 'Read daily news; use examples from last 6-12 months' },
  { mistake: 'Neglecting regional organizations', fix: 'SCO, SAARC questions are frequent—don\'t skip them' },
]

const scoringHistory = [
  { year: '2022', status: 'Safe', avg: '100-120', notes: 'Predictable marking' },
  { year: '2023', status: 'Medium', avg: '90-115', notes: 'Stricter than 2022' },
  { year: '2024', status: 'Risky', avg: '80-110', notes: 'High variance, some toppers failed' },
]
</script>

<template>
  <div class="bg-clean min-h-screen">
    <UContainer class="py-16">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <h1 class="text-4xl font-bold mb-2">{{ subjectMeta.name }}</h1>
            <div class="flex flex-wrap items-center gap-3 text-sm">
              <span class="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">{{ subjectMeta.marks }} Marks</span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{{ subjectMeta.papers }} Papers</span>
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">{{ subjectMeta.popularity }}</span>
            </div>
          </div>
          <div class="text-right">
            <div :class="`text-${subjectMeta.trendColor}-600 dark:text-${subjectMeta.trendColor}-400 font-semibold`">
              {{ subjectMeta.trendStatus }} Scoring
            </div>
            <div class="text-sm text-gray-500">Targeting Risk: {{ subjectMeta.targetingRisk }}</div>
          </div>
        </div>

        <!-- Warning Banner -->
        <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4 mb-8">
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-alert-triangle" class="text-yellow-600 dark:text-yellow-400 mt-1 flex-shrink-0" />
            <div>
              <p class="font-medium text-yellow-800 dark:text-yellow-200">High Popularity = Higher Risk</p>
              <p class="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                IR is the most chosen optional. In 2024, some candidates with strong preparation still scored below 80. 
                Consider pairing with a "safe" subject like Political Science to balance risk.
              </p>
            </div>
          </div>
        </div>

        <!-- Overview -->
        <div class="bg-accent/10 rounded-xl p-6 mb-8">
          <h2 class="text-xl font-semibold mb-3">Why Choose IR?</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            International Relations offers <strong>60%+ overlap with Current Affairs</strong>, making it efficient for overall preparation. 
            It suits candidates who enjoy reading newspapers, following geopolitics, and analyzing global events.
          </p>
          <div class="grid sm:grid-cols-3 gap-4">
            <div class="bg-white dark:bg-gray-800 rounded-lg p-3 text-center">
              <UIcon name="i-lucide-check-circle" class="text-green-500 text-xl mb-1" />
              <div class="text-sm font-medium">Current Affairs overlap</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-3 text-center">
              <UIcon name="i-lucide-check-circle" class="text-green-500 text-xl mb-1" />
              <div class="text-sm font-medium">Helps with Essay topics</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-3 text-center">
              <UIcon name="i-lucide-alert-circle" class="text-yellow-500 text-xl mb-1" />
              <div class="text-sm font-medium">Needs daily reading</div>
            </div>
          </div>
        </div>

        <!-- Syllabus -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-6">FPSC Syllabus Breakdown</h2>
          
          <div class="mb-6">
            <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-accent/10 text-accent rounded-lg flex items-center justify-center text-sm font-bold">I</span>
              Paper I: Theory & History (100 Marks)
            </h3>
            <div class="space-y-2">
              <div 
                v-for="item in syllabusP1" 
                :key="item.topic"
                class="flex items-center justify-between py-2 px-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <span class="text-sm">{{ item.topic }}</span>
                <span 
                  :class="[
                    'text-xs px-2 py-0.5 rounded',
                    item.weight === 'Very High' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' :
                    item.weight === 'High' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300' :
                    'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  ]"
                >
                  {{ item.weight }}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-accent/10 text-accent rounded-lg flex items-center justify-center text-sm font-bold">II</span>
              Paper II: Regional & Contemporary (100 Marks)
            </h3>
            <div class="space-y-2">
              <div 
                v-for="item in syllabusP2" 
                :key="item.topic"
                class="flex items-center justify-between py-2 px-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <span class="text-sm">{{ item.topic }}</span>
                <span 
                  :class="[
                    'text-xs px-2 py-0.5 rounded',
                    item.weight === 'Very High' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' :
                    item.weight === 'High' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300' :
                    'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  ]"
                >
                  {{ item.weight }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Scoring History -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Recent Scoring Trends</h2>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="text-left py-2 font-semibold">Year</th>
                  <th class="text-center py-2 font-semibold">Status</th>
                  <th class="text-center py-2 font-semibold">Typical Range</th>
                  <th class="text-left py-2 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
                <tr v-for="row in scoringHistory" :key="row.year">
                  <td class="py-3 font-medium">CSS {{ row.year }}</td>
                  <td class="py-3 text-center">
                    <span 
                      :class="[
                        'px-2 py-1 rounded text-xs font-medium',
                        row.status === 'Safe' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                        row.status === 'Risky' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' :
                        'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                      ]"
                    >
                      {{ row.status }}
                    </span>
                  </td>
                  <td class="py-3 text-center">{{ row.avg }}/200</td>
                  <td class="py-3 text-gray-500">{{ row.notes }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Books -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Recommended Books</h2>
          <div class="space-y-3">
            <div 
              v-for="book in books" 
              :key="book.title"
              class="flex items-start gap-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <UIcon name="i-lucide-book-open" class="text-accent mt-1 flex-shrink-0" />
              <div class="flex-1">
                <div class="font-medium">{{ book.title }}</div>
                <div class="text-sm text-gray-500">by {{ book.author }}</div>
                <div class="text-xs text-gray-400 mt-1">{{ book.note }}</div>
              </div>
              <span 
                :class="[
                  'text-xs px-2 py-1 rounded',
                  book.type === 'Primary' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                  book.type === 'Advanced' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' :
                  'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                ]"
              >
                {{ book.type }}
              </span>
            </div>
          </div>
        </div>

        <!-- Online Resources -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Online Resources</h2>
          <div class="grid sm:grid-cols-2 gap-3">
            <div 
              v-for="resource in onlineResources" 
              :key="resource.name"
              class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <UIcon 
                :name="resource.type === 'YouTube' ? 'i-lucide-youtube' : resource.type === 'Magazine' ? 'i-lucide-book-text' : 'i-lucide-globe'" 
                class="text-accent flex-shrink-0" 
              />
              <div>
                <div class="font-medium text-sm">{{ resource.name }}</div>
                <div class="text-xs text-gray-500">{{ resource.description }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Common Mistakes -->
        <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Common Mistakes to Avoid</h2>
          <div class="space-y-4">
            <div v-for="(item, idx) in commonMistakes" :key="idx" class="flex gap-4">
              <div class="w-8 h-8 bg-red-200 dark:bg-red-800 text-red-700 dark:text-red-300 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                {{ idx + 1 }}
              </div>
              <div>
                <div class="font-medium text-red-800 dark:text-red-200">{{ item.mistake }}</div>
                <div class="text-sm text-green-700 dark:text-green-300 mt-1">
                  <UIcon name="i-lucide-check" class="inline" /> {{ item.fix }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Subject Synergy -->
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
          <h2 class="text-xl font-semibold mb-3">Subject Synergy</h2>
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <h3 class="font-medium text-blue-800 dark:text-blue-200 mb-2">Helps with Compulsories</h3>
              <ul class="text-sm space-y-1">
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-arrow-right" class="text-blue-500" />
                  <span>Current Affairs (60%+ overlap)</span>
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-arrow-right" class="text-blue-500" />
                  <span>Essay (international topics)</span>
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-arrow-right" class="text-blue-500" />
                  <span>Pakistan Affairs (foreign policy)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-medium text-blue-800 dark:text-blue-200 mb-2">Best Paired With</h3>
              <ul class="text-sm space-y-1">
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-star" class="text-yellow-500" />
                  <span><strong>Political Science</strong> (stable anchor)</span>
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-star" class="text-yellow-500" />
                  <span>Criminology (100-mark safe bet)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap gap-4">
          <UButton to="/subjects/political-science" variant="outline" icon="i-lucide-arrow-right" trailing>
            Political Science
          </UButton>
          <UButton to="/syllabus/selection" variant="outline" icon="i-lucide-compass">
            Subject Selection Guide
          </UButton>
          <UButton to="/syllabus/trends" icon="i-lucide-trending-up">
            Scoring Trends
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>
