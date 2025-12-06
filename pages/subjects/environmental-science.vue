<script setup lang="ts">
useSeoMeta({
  title: 'Environmental Science CSS Syllabus, Books & Scoring Trends 2025',
  description: 'Complete guide to CSS Environmental Science: FPSC syllabus, recommended books (Botkin & Keller), rising scoring trend, and why it\'s replacing Gender Studies as a safe option.',
  ogTitle: 'CSS Environmental Science - Rising Star Optional Subject',
  ogDescription: 'Environmental Science offers objective marking and helps with Essay. Learn the syllabus, books, and preparation strategy for CSS 2025.',
})

const subjectMeta = {
  name: 'Environmental Science',
  marks: 100,
  papers: 1,
  passThreshold: 33,
  trendStatus: 'Rising Star',
  trendColor: 'green',
  popularity: 'Growing',
  targetingRisk: 'Very Low',
}

const syllabus = [
  { topic: 'Introduction to Environmental Science', weight: 'Medium' },
  { topic: 'Ecosystems: Structure and Function', weight: 'High' },
  { topic: 'Biodiversity and Conservation', weight: 'High' },
  { topic: 'Environmental Pollution: Air, Water, Soil', weight: 'Very High' },
  { topic: 'Climate Change and Global Warming', weight: 'Very High' },
  { topic: 'Natural Resources Management', weight: 'High' },
  { topic: 'Environmental Policy and Law', weight: 'Medium' },
  { topic: 'Sustainable Development', weight: 'High' },
  { topic: 'Environmental Issues in Pakistan', weight: 'Very High' },
]

const books = [
  { title: 'Environmental Science', author: 'Botkin & Keller', type: 'Primary', note: 'Comprehensive standard textbook' },
  { title: 'Environmental Studies', author: 'Benny Joseph', type: 'Primary', note: 'Concise, exam-focused' },
  { title: 'IPCC Reports (Summary for Policymakers)', author: 'IPCC', type: 'Primary', note: 'Essential for climate change section' },
  { title: 'Pakistan\'s National Climate Change Policy', author: 'Govt of Pakistan', type: 'Reference', note: 'Must-read for Pakistan context' },
  { title: 'Economic Survey of Pakistan (Environment Chapter)', author: 'Finance Division', type: 'Reference', note: 'Latest statistics and initiatives' },
]

const onlineResources = [
  { name: 'Our Changing Climate', type: 'YouTube', description: 'Climate change explained visually' },
  { name: 'Kurzgesagt - Environment Videos', type: 'YouTube', description: 'Engaging animations on environmental issues' },
  { name: 'Yale Environment 360', type: 'Website', description: 'Environmental news and analysis' },
  { name: 'UNEP', type: 'Website', description: 'United Nations Environment Programme' },
  { name: 'Dawn Environment Coverage', type: 'News', description: 'Pakistan-specific environmental reporting' },
]

const commonMistakes = [
  { mistake: 'Ignoring Pakistan-specific content', fix: 'Questions on smog, water crisis, Indus delta are frequent' },
  { mistake: 'Outdated climate statistics', fix: 'Use latest IPCC data (AR6 report from 2021-2023)' },
  { mistake: 'Skipping environmental policy section', fix: 'Know Paris Agreement, SDGs, and Pakistan\'s climate commitments' },
  { mistake: 'Only memorizing problems, not solutions', fix: 'Examiners reward knowledge of mitigation and adaptation strategies' },
]

const scoringHistory = [
  { year: '2022', status: 'Rising', avg: '60-72', notes: 'Gaining popularity' },
  { year: '2023', status: 'Good', avg: '62-75', notes: 'Consistent and safe' },
  { year: '2024', status: 'Good', avg: '60-73', notes: 'Still under the radar' },
]

const whyChoose = [
  { icon: 'i-lucide-trending-up', title: 'Rising Trend', desc: 'Replacing Gender Studies as safe option' },
  { icon: 'i-lucide-file-check', title: 'Objective Marking', desc: 'Scientific content = more predictable scoring' },
  { icon: 'i-lucide-pen-tool', title: 'Essay Overlap', desc: 'Climate change is a frequent essay topic' },
  { icon: 'i-lucide-shield', title: 'Low Targeting Risk', desc: 'Not overcrowded yet' },
]

const essayTopics = [
  'Climate change and Pakistan\'s vulnerability',
  'Water crisis in South Asia',
  'Sustainable development goals and their implementation',
  'Urban environmental challenges',
  'Renewable energy transition',
  'Deforestation and biodiversity loss',
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
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{{ subjectMeta.papers }} Paper</span>
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">Rising Star</span>
            </div>
          </div>
          <div class="text-right">
            <div class="text-green-600 dark:text-green-400 font-semibold">
              {{ subjectMeta.trendStatus }}
            </div>
            <div class="text-sm text-gray-500">Targeting Risk: {{ subjectMeta.targetingRisk }}</div>
          </div>
        </div>

        <!-- Recommendation Banner -->
        <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 mb-8">
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-leaf" class="text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
            <div>
              <p class="font-medium text-green-800 dark:text-green-200">The "New Safe Option" Replacing Gender Studies</p>
              <p class="text-sm text-green-700 dark:text-green-300 mt-1">
                As Gender Studies faces targeting, Environmental Science is emerging as a safer alternative. 
                It has objective content, helps with Essay, and hasn't attracted enough candidates to trigger strict marking.
              </p>
            </div>
          </div>
        </div>

        <!-- Why Choose -->
        <div class="grid sm:grid-cols-2 gap-4 mb-8">
          <div 
            v-for="item in whyChoose" 
            :key="item.title"
            class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4"
          >
            <div class="flex items-center gap-3 mb-2">
              <UIcon :name="item.icon" class="text-accent text-xl" />
              <h3 class="font-semibold">{{ item.title }}</h3>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ item.desc }}</p>
          </div>
        </div>

        <!-- Overview -->
        <div class="bg-accent/10 rounded-xl p-6 mb-8">
          <h2 class="text-xl font-semibold mb-3">Subject Overview</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Environmental Science covers ecosystems, pollution, climate change, biodiversity, and environmental policy. 
            It's more <strong>scientific and objective</strong> than social science subjects, which leads to more predictable scoring.
          </p>
          <p class="text-gray-700 dark:text-gray-300">
            <strong>Best for:</strong> Candidates with basic science background who want a safe, predictable option. 
            If you're concerned about climate change or interested in sustainability, you'll find this subject engaging.
          </p>
        </div>

        <!-- Syllabus -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-6">FPSC Syllabus Breakdown</h2>
          
          <div class="space-y-2">
            <div 
              v-for="item in syllabus" 
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
          
          <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p class="text-sm text-blue-700 dark:text-blue-300">
              <strong>Pro Tip:</strong> Focus heavily on "Environmental Issues in Pakistan"—questions on smog, water scarcity, 
              and climate vulnerability appear regularly and are easy to prepare from news.
            </p>
          </div>
        </div>

        <!-- Essay Overlap -->
        <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6 mb-8">
          <h2 class="text-xl font-semibold mb-3 flex items-center gap-2">
            <UIcon name="i-lucide-pen-tool" class="text-purple-500" />
            Essay Overlap Advantage
          </h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Environmental topics appear frequently in Essay paper. Preparing this subject gives you ready-made content for common essay themes:
          </p>
          <div class="grid sm:grid-cols-2 gap-2">
            <div 
              v-for="topic in essayTopics" 
              :key="topic"
              class="flex items-center gap-2 text-sm bg-white dark:bg-gray-800 rounded-lg p-2"
            >
              <UIcon name="i-lucide-check-circle" class="text-purple-500 flex-shrink-0" />
              <span>{{ topic }}</span>
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
                    <span class="px-2 py-1 rounded text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                      {{ row.status }}
                    </span>
                  </td>
                  <td class="py-3 text-center">{{ row.avg }}/100</td>
                  <td class="py-3 text-gray-500">{{ row.notes }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Books -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Recommended Books & Resources</h2>
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
                :name="resource.type === 'YouTube' ? 'i-lucide-youtube' : 'i-lucide-globe'" 
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
                  <span>Essay (climate, sustainability topics)</span>
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-arrow-right" class="text-blue-500" />
                  <span>Current Affairs (environmental news)</span>
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-arrow-right" class="text-blue-500" />
                  <span>General Science & Ability</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-medium text-blue-800 dark:text-blue-200 mb-2">Best Paired With</h3>
              <ul class="text-sm space-y-1">
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-star" class="text-yellow-500" />
                  <span><strong>Political Science</strong> (policy connection)</span>
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-star" class="text-yellow-500" />
                  <span>IR (climate diplomacy topics)</span>
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-star" class="text-yellow-500" />
                  <span>Geography (if offered)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap gap-4">
          <UButton to="/subjects/criminology" variant="outline" icon="i-lucide-arrow-left">
            Criminology
          </UButton>
          <UButton to="/subjects/international-relations" variant="outline" icon="i-lucide-globe">
            International Relations
          </UButton>
          <UButton to="/syllabus/selection" icon="i-lucide-compass">
            Subject Selection Guide
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>
