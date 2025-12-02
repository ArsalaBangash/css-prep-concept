<!-- pages/current-affairs/index.vue -->
<script setup lang="ts">
useSeoMeta({
  title: 'Current Affairs for CSS 2026 - Daily Updates & Analysis',
  description: 'Stay updated with curated current affairs for CSS exam. Daily news analysis, monthly digests, and issue-wise coverage for Pakistan and international affairs.',
})

// Categories
const categories = [
  { id: 'all', label: 'All Topics', icon: 'i-lucide-layout-grid' },
  { id: 'pakistan', label: 'Pakistan', icon: 'i-lucide-landmark' },
  { id: 'international', label: 'International', icon: 'i-lucide-globe' },
  { id: 'economy', label: 'Economy', icon: 'i-lucide-trending-up' },
  { id: 'security', label: 'Security', icon: 'i-lucide-shield' },
  { id: 'environment', label: 'Environment', icon: 'i-lucide-leaf' },
  { id: 'science', label: 'Science & Tech', icon: 'i-lucide-cpu' },
]

const selectedCategory = ref('all')

// Sample current affairs topics
const topics = ref([
  {
    id: 1,
    title: 'Pakistan-IMF Relations: The 24th Stand-By Arrangement',
    category: 'economy',
    date: '2025-11-28',
    summary: 'Analysis of Pakistan\'s ongoing IMF program, conditionalities, and economic reforms required for the $7 billion bailout package.',
    importance: 'high',
    tags: ['IMF', 'Economy', 'Fiscal Policy'],
    keyPoints: [
      'SBA approved in July 2024 for $7 billion',
      'Key conditions: tax reforms, energy tariffs, privatization',
      'Impact on inflation and growth projections',
    ],
  },
  {
    id: 2,
    title: 'CPEC Phase II: New Projects and Strategic Implications',
    category: 'pakistan',
    date: '2025-11-25',
    summary: 'Overview of China-Pakistan Economic Corridor Phase II focusing on industrialization, agriculture, and IT sectors.',
    importance: 'high',
    tags: ['CPEC', 'China', 'Infrastructure'],
    keyPoints: [
      'Special Economic Zones development',
      'ML-1 railway project status',
      'Agricultural cooperation initiatives',
    ],
  },
  {
    id: 3,
    title: 'US-China Strategic Competition: Implications for South Asia',
    category: 'international',
    date: '2025-11-22',
    summary: 'How the great power rivalry between US and China affects Pakistan\'s foreign policy options and regional dynamics.',
    importance: 'high',
    tags: ['US-China', 'Geopolitics', 'Foreign Policy'],
    keyPoints: [
      'AUKUS and Indo-Pacific strategy',
      'Pakistan\'s balancing act',
      'Economic and security implications',
    ],
  },
  {
    id: 4,
    title: 'Climate Change and Water Security in Pakistan',
    category: 'environment',
    date: '2025-11-20',
    summary: 'Analysis of Pakistan\'s vulnerability to climate change, water scarcity challenges, and adaptation strategies.',
    importance: 'high',
    tags: ['Climate', 'Water', 'Environment'],
    keyPoints: [
      '2022 floods aftermath and lessons',
      'Indus Water Treaty concerns',
      'National Climate Change Policy',
    ],
  },
  {
    id: 5,
    title: 'Afghanistan Under Taliban: Regional Security Dynamics',
    category: 'security',
    date: '2025-11-18',
    summary: 'Impact of Taliban rule on Pakistan\'s security, TTP resurgence, and border management challenges.',
    importance: 'high',
    tags: ['Afghanistan', 'Security', 'TTP'],
    keyPoints: [
      'TTP attacks and negotiations',
      'Border fencing and management',
      'Refugee repatriation issues',
    ],
  },
  {
    id: 6,
    title: 'Digital Pakistan: IT Exports and Tech Ecosystem',
    category: 'science',
    date: '2025-11-15',
    summary: 'Growth of Pakistan\'s IT sector, freelancing economy, and government initiatives for digital transformation.',
    importance: 'medium',
    tags: ['IT', 'Digital Economy', 'Technology'],
    keyPoints: [
      'IT exports crossing $3 billion',
      'Freelancing growth statistics',
      'Challenges: internet infrastructure, taxation',
    ],
  },
  {
    id: 7,
    title: 'Middle East Crisis: Gaza Conflict and Regional Implications',
    category: 'international',
    date: '2025-11-12',
    summary: 'Analysis of the ongoing Gaza conflict, humanitarian crisis, and its impact on Muslim world politics.',
    importance: 'high',
    tags: ['Middle East', 'Gaza', 'OIC'],
    keyPoints: [
      'Humanitarian situation in Gaza',
      'Pakistan\'s diplomatic stance',
      'Impact on Muslim world unity',
    ],
  },
  {
    id: 8,
    title: 'Constitutional Amendments: 26th Amendment Analysis',
    category: 'pakistan',
    date: '2025-11-10',
    summary: 'Detailed analysis of the 26th Constitutional Amendment, judicial reforms, and political implications.',
    importance: 'high',
    tags: ['Constitution', 'Judiciary', 'Politics'],
    keyPoints: [
      'Key provisions of the amendment',
      'Impact on judicial independence',
      'Political reactions and debate',
    ],
  },
])

// Filtered topics
const filteredTopics = computed(() => {
  if (selectedCategory.value === 'all') return topics.value
  return topics.value.filter(t => t.category === selectedCategory.value)
})

// Important issues for essay/current affairs
const keyIssues = [
  {
    title: 'Economy & Development',
    topics: ['IMF Program', 'Debt Crisis', 'Tax Reforms', 'Energy Crisis', 'CPEC', 'Trade Deficit'],
  },
  {
    title: 'Governance & Politics',
    topics: ['Constitutional Amendments', 'Civil-Military Relations', 'Electoral Reforms', 'Provincial Autonomy'],
  },
  {
    title: 'Foreign Policy',
    topics: ['US-Pakistan Relations', 'China Partnership', 'India Relations', 'Afghanistan Policy', 'Middle East'],
  },
  {
    title: 'Security',
    topics: ['Terrorism', 'TTP', 'Balochistan', 'Hybrid Warfare', 'Nuclear Deterrence'],
  },
  {
    title: 'Social Issues',
    topics: ['Education Crisis', 'Healthcare', 'Population', 'Gender Equality', 'Youth Unemployment'],
  },
  {
    title: 'Environment',
    topics: ['Climate Change', 'Water Scarcity', 'Deforestation', 'Urban Pollution', 'Food Security'],
  },
]

// Resources
const resources = [
  { name: 'Dawn Newspaper', url: 'https://dawn.com', type: 'Daily' },
  { name: 'Jahangir\'s World Times', url: 'https://jworldtimes.com', type: 'Monthly' },
  { name: 'The Economist', url: 'https://economist.com', type: 'Weekly' },
  { name: 'Foreign Affairs', url: 'https://foreignaffairs.com', type: 'Bi-monthly' },
  { name: 'Al Jazeera', url: 'https://aljazeera.com', type: 'Daily' },
  { name: 'PIDE Reports', url: 'https://pide.org.pk', type: 'Research' },
]

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  })
}

function getCategoryIcon(category: string) {
  const cat = categories.find(c => c.id === category)
  return cat?.icon || 'i-lucide-file'
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <!-- Header -->
    <div class="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <UContainer class="py-12">
        <div class="flex items-start justify-between gap-4">
          <div>
            <h1 class="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
              Current Affairs Hub
            </h1>
            <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
              Stay updated with curated current affairs analysis for CSS exam. 
              Issue-wise coverage of national and international affairs.
            </p>
          </div>
          <div class="hidden sm:block">
            <div class="px-4 py-2 bg-accent/10 rounded-lg">
              <p class="text-sm text-accent font-medium">Last Updated</p>
              <p class="text-lg font-semibold text-gray-900 dark:text-white">Nov 28, 2025</p>
            </div>
          </div>
        </div>
      </UContainer>
    </div>

    <UContainer class="py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Main Content -->
        <main class="flex-1">
          <!-- Category Tabs -->
          <div class="flex flex-wrap gap-2 mb-6">
            <button
              v-for="category in categories"
              :key="category.id"
              @click="selectedCategory = category.id"
              :class="[
                'inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                selectedCategory === category.id
                  ? 'bg-accent text-white'
                  : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-accent'
              ]"
            >
              <UIcon :name="category.icon" class="w-4 h-4" />
              {{ category.label }}
            </button>
          </div>

          <!-- Topics List -->
          <div class="space-y-4">
            <div
              v-for="topic in filteredTopics"
              :key="topic.id"
              class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:border-accent dark:hover:border-accent transition-colors"
            >
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UIcon :name="getCategoryIcon(topic.category)" class="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </div>
                
                <div class="flex-1">
                  <div class="flex items-start justify-between gap-2 mb-2">
                    <h3 class="font-semibold text-gray-900 dark:text-white">
                      {{ topic.title }}
                    </h3>
                    <span 
                      :class="[
                        'px-2 py-0.5 text-xs font-medium rounded-full flex-shrink-0',
                        topic.importance === 'high' 
                          ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                      ]"
                    >
                      {{ topic.importance === 'high' ? 'High Priority' : 'Medium' }}
                    </span>
                  </div>
                  
                  <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {{ formatDate(topic.date) }}
                  </p>
                  
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {{ topic.summary }}
                  </p>

                  <!-- Key Points -->
                  <div class="mb-3">
                    <p class="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Key Points:</p>
                    <ul class="space-y-1">
                      <li 
                        v-for="point in topic.keyPoints" 
                        :key="point"
                        class="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400"
                      >
                        <UIcon name="i-lucide-check" class="w-3 h-3 text-accent flex-shrink-0 mt-0.5" />
                        {{ point }}
                      </li>
                    </ul>
                  </div>

                  <!-- Tags -->
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="tag in topic.tags" 
                      :key="tag"
                      class="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <!-- Sidebar -->
        <aside class="lg:w-80 flex-shrink-0">
          <div class="sticky top-24 space-y-6">
            <!-- Key Issues for CSS -->
            <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <UIcon name="i-lucide-bookmark" class="w-5 h-5 text-accent" />
                Key Issues for CSS
              </h3>
              <div class="space-y-4">
                <div v-for="issue in keyIssues" :key="issue.title">
                  <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {{ issue.title }}
                  </h4>
                  <div class="flex flex-wrap gap-1">
                    <span 
                      v-for="topic in issue.topics" 
                      :key="topic"
                      class="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                    >
                      {{ topic }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Recommended Resources -->
            <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <UIcon name="i-lucide-newspaper" class="w-5 h-5 text-accent" />
                Recommended Sources
              </h3>
              <div class="space-y-3">
                <a 
                  v-for="resource in resources" 
                  :key="resource.name"
                  :href="resource.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <span class="text-sm text-gray-700 dark:text-gray-300">{{ resource.name }}</span>
                  <span class="text-xs text-gray-500 dark:text-gray-400">{{ resource.type }}</span>
                </a>
              </div>
            </div>

            <!-- Study Tips -->
            <div class="bg-accent/10 dark:bg-accent/20 border border-accent/20 rounded-xl p-5">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-3">
                💡 Current Affairs Tips
              </h3>
              <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  Read Dawn newspaper daily (1 hour)
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  Maintain issue-wise notes
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  Focus on analysis, not just facts
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  Link issues to Pakistan's context
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </UContainer>
  </div>
</template>