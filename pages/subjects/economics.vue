<script setup lang="ts">
useSeoMeta({
  title: 'Economics CSS Syllabus, Scoring Trends & Preparation Guide 2025',
  description: 'Economics has been low-scoring in recent CSS exams. Learn why, get the FPSC syllabus breakdown, recommended books, and strategies to maximize safety.',
  ogTitle: 'CSS Economics - High-Risk Optional',
  ogDescription: 'Complete Economics strategy: macro/micro syllabus, scoring history, Pakistan-focused data sources, and why this subject demands specialist preparation.'
})

const subjectMeta = {
  name: 'Economics',
  marks: 200,
  papers: 2,
  passThreshold: 66,
  trendStatus: 'Low Scoring',
  trendColor: 'red',
  popularity: 'Formerly Popular',
  targetingRisk: 'High',
}

const syllabus = {
  paper1: [
    { topic: 'Microeconomics: Demand-supply, elasticity, consumer theory, production & costs', weight: 'Very High' },
    { topic: 'Market Structures: Perfect competition, monopoly, oligopoly, monopolistic competition', weight: 'High' },
    { topic: 'Factor Pricing: Wage, rent, interest, profit theories', weight: 'Medium' },
    { topic: 'Welfare Economics: Pareto optimality, market failure, externalities, public goods', weight: 'High' },
    { topic: 'International Trade: Comparative advantage, trade policies, WTO, Pakistan's trade dynamics', weight: 'Very High' },
  ],
  paper2: [
    { topic: 'Macroeconomics: National income, GDP/GNP, inflation, unemployment, business cycles', weight: 'Very High' },
    { topic: 'Fiscal & Monetary Policy: Budget, taxation, SBP policy, money supply, interest rates', weight: 'Very High' },
    { topic: 'Development Economics: Growth models (Solow, Harrod-Domar), poverty, inequality, HDI', weight: 'High' },
    { topic: 'Public Finance: Government expenditure, debt, PSDP, NFC awards', weight: 'High' },
    { topic: 'Pakistan Economy: Current account, remittances, CPEC, IMF programs, Economic Survey data', weight: 'Very High' },
  ],
}

const books = [
  { title: 'Principles of Economics', author: 'N. Gregory Mankiw', type: 'Primary', note: 'Best for micro + macro foundations; CSS-friendly narrative' },
  { title: 'Economics', author: 'Paul Samuelson & William Nordhaus', type: 'Primary', note: 'Comprehensive but lengthy; use selectively' },
  { title: 'Economics for CSS/PMS', author: 'Ali Raza Bhatti / JWT', type: 'CSS Guide', note: 'Condensed notes with Pakistan examples' },
  { title: 'Pakistan Economy', author: 'Shahid Javed Burki', type: 'Reference', note: 'Historical context + reforms since 1947' },
  { title: 'Economic Survey of Pakistan', author: 'Ministry of Finance (Annual)', type: 'Essential', note: 'Must-read for statistics and policy updates' },
]

const onlineResources = [
  { name: 'Khan Academy Economics', type: 'Course', description: 'Micro + Macro playlists with visual explanations' },
  { name: 'PIDE Policy Briefs', type: 'Website', description: 'Latest data on Pakistan's debt, inflation, trade' },
  { name: 'State Bank of Pakistan Annual Report', type: 'Document', description: 'Monetary policy, banking stats, inflation targets' },
  { name: 'The Economist Magazine', type: 'Magazine', description: 'Use for global economic trends and terminology' },
]

const studyPlan = [
  { title: 'Weeks 1-3', detail: 'Cover micro foundations (demand-supply, elasticity) and market structures with graphs.' },
  { title: 'Weeks 4-6', detail: 'Macro topics: national income, inflation, fiscal/monetary policy; annotate Economic Survey.' },
  { title: 'Weeks 7-9', detail: 'Focus on Pakistan economy chapters, trade dynamics, CPEC, and IMF conditions.' },
  { title: 'Weeks 10-12', detail: 'Past papers x15, graph practice, and integrate data points (GDP, CPI, FDI) into every answer.' },
]

const commonMistakes = [
  { mistake: 'Using outdated Economic Survey data', fix: 'Quote the latest Economic Survey (June 2025) GDP, inflation, and trade figures' },
  { mistake: 'Writing theory without Pakistan examples', fix: 'Every macro answer must mention SBP policy, CPEC, or IMF conditions' },
  { mistake: 'Skipping graphs and diagrams', fix: 'Draw supply-demand curves, IS-LM, AD-AS for visual clarity' },
  { mistake: 'Ignoring global context', fix: 'Relate Pakistan's economy to WTO, oil prices, China-US trade tensions' },
]

const scoringHistory = [
  { year: '2022', status: 'Low', avg: '48-58', notes: 'Sharp decline from previous years; targeting suspected' },
  { year: '2023', status: 'Low', avg: '45-55', notes: 'Research confirms "low-scoring recently"; examiners strict on graphs' },
  { year: '2024', status: 'Low', avg: '42-54', notes: 'Continued pattern; non-specialists struggled with micro theory' },
]

const riskWarning = {
  severity: 'High',
  reasons: [
    'Consistently low scoring in recent CSS exams (2022-2024)',
    'Examiners demand advanced graphs and mathematical rigor',
    'Pakistan-specific data mandatory but often outdated in guidebooks',
    'Not recommended unless you have a strong economics degree or professional background',
  ],
  alternatives: ['Political Science (safer 200-mark anchor)', 'Public Administration (governance overlap)', 'Business Administration (lighter theory load)'],
}

const synergy = {
  helps: ['Essay (poverty, trade, development topics)', 'Current Affairs (IMF, inflation, budget)', 'Interview (CSP roles involve economic policy)', 'Public Administration answers'],
  pairs: ['Business Administration', 'Public Administration', 'International Relations', 'Political Science'],
}

const dataSources = [
  { source: 'Economic Survey of Pakistan', frequency: 'Annual (June)', use: 'GDP, inflation, debt, exports' },
  { source: 'State Bank Annual Report', frequency: 'Annual', use: 'Monetary policy, banking sector, currency' },
  { source: 'Pakistan Bureau of Statistics', frequency: 'Quarterly', use: 'CPI, unemployment, industrial growth' },
  { source: 'PIDE Policy Briefs', frequency: 'Ongoing', use: 'Reforms, debt analysis, trade deficits' },
  { source: 'World Bank Pakistan Reports', frequency: 'Annual', use: 'HDI, poverty rates, international comparisons' },
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
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">Group I</span>
            </div>
          </div>
          <div class="text-right">
            <div class="text-red-600 dark:text-red-400 font-semibold">
              {{ subjectMeta.trendStatus }}
            </div>
            <div class="text-sm text-gray-500">Targeting Risk: {{ subjectMeta.targetingRisk }}</div>
          </div>
        </div>

        <!-- High-Risk Warning Banner -->
        <div class="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-xl p-5 mb-8">
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-alert-triangle" class="text-red-600 dark:text-red-400 text-2xl mt-1 flex-shrink-0" />
            <div>
              <p class="font-bold text-red-800 dark:text-red-200 text-lg mb-2">⚠️ High-Risk Optional Subject</p>
              <p class="text-sm text-red-700 dark:text-red-300 mb-3">
                Economics has been <strong>consistently low-scoring in CSS 2022-2024</strong>. Research specifically warns it
                is "only recommended for candidates with strong academic background" and has "been low-scoring recently."
              </p>
              <div class="space-y-1 text-sm text-red-700 dark:text-red-300">
                <div v-for="reason in riskWarning.reasons" :key="reason" class="flex items-start gap-2">
                  <UIcon name="i-lucide-x-circle" class="mt-0.5 flex-shrink-0" />
                  <span>{{ reason }}</span>
                </div>
              </div>
              <div class="mt-3 pt-3 border-t border-red-200 dark:border-red-800">
                <p class="text-sm font-medium text-red-800 dark:text-red-200 mb-1">Safer Alternatives:</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="alt in riskWarning.alternatives"
                    :key="alt"
                    class="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded"
                  >
                    {{ alt }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Study Plan -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">12-Week Intensive Plan (Specialists Only)</h2>
          <div class="grid sm:grid-cols-2 gap-3">
            <div v-for="item in studyPlan" :key="item.title" class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm">
              <div class="font-medium mb-1">{{ item.title }}</div>
              <p class="text-gray-600 dark:text-gray-400">{{ item.detail }}</p>
            </div>
          </div>
        </div>

        <!-- Syllabus Paper 1 -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-6">Paper I: Microeconomics & Trade</h2>
          <div class="space-y-2">
            <div
              v-for="item in syllabus.paper1"
              :key="item.topic"
              class="flex items-center justify-between py-2 px-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <span class="text-sm">{{ item.topic }}</span>
              <span
                :class="[
                  'text-xs px-2 py-0.5 rounded',
                  item.weight === 'Very High'
                    ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                    : item.weight === 'High'
                      ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                ]"
              >
                {{ item.weight }}
              </span>
            </div>
          </div>
        </div>

        <!-- Syllabus Paper 2 -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-6">Paper II: Macroeconomics & Pakistan Economy</h2>
          <div class="space-y-2">
            <div
              v-for="item in syllabus.paper2"
              :key="item.topic"
              class="flex items-center justify-between py-2 px-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <span class="text-sm">{{ item.topic }}</span>
              <span
                :class="[
                  'text-xs px-2 py-0.5 rounded',
                  item.weight === 'Very High'
                    ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                    : item.weight === 'High'
                      ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                ]"
              >
                {{ item.weight }}
              </span>
            </div>
          </div>
          <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p class="text-sm text-blue-700 dark:text-blue-300">
              <strong>Examiner hint:</strong> Paper II requires heavy Pakistan data integration. Every macro answer should
              cite Economic Survey 2025 statistics (GDP, inflation, exports) to demonstrate up-to-date knowledge.
            </p>
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
                    <span class="px-2 py-1 rounded text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300">
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

        <!-- Pakistan Data Sources -->
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Essential Pakistan Data Sources</h2>
          <p class="text-sm text-blue-700 dark:text-blue-300 mb-4">
            Examiners expect updated statistics from official Pakistani sources. Generic textbook examples won't suffice.
          </p>
          <div class="space-y-3">
            <div
              v-for="item in dataSources"
              :key="item.source"
              class="flex items-start gap-4 p-3 bg-white dark:bg-blue-950/30 rounded-lg"
            >
              <UIcon name="i-lucide-database" class="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
              <div class="flex-1">
                <div class="font-medium text-blue-900 dark:text-blue-100">{{ item.source }}</div>
                <div class="text-xs text-blue-600 dark:text-blue-400">{{ item.frequency }}</div>
                <div class="text-sm text-blue-700 dark:text-blue-300 mt-1">Use for: {{ item.use }}</div>
              </div>
            </div>
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
                  'text-xs px-2 py-1 rounded whitespace-nowrap',
                  book.type === 'Primary'
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                    : book.type === 'Essential'
                      ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                      : book.type === 'CSS Guide'
                        ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
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
                :name="resource.type === 'Course' ? 'i-lucide-graduation-cap' : resource.type === 'Document' ? 'i-lucide-file-text' : resource.type === 'Magazine' ? 'i-lucide-newspaper' : 'i-lucide-globe'"
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
        <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-8">
          <h2 class="text-xl font-semibold mb-3">Subject Synergy (If You Choose It Anyway)</h2>
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <h3 class="font-medium text-green-800 dark:text-green-200 mb-2">Helps with Compulsories</h3>
              <ul class="text-sm space-y-1">
                <li v-for="item in synergy.helps" :key="item" class="flex items-center gap-2">
                  <UIcon name="i-lucide-arrow-right" class="text-green-500" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-medium text-green-800 dark:text-green-200 mb-2">Best Paired With</h3>
              <ul class="text-sm space-y-1">
                <li v-for="item in synergy.pairs" :key="item" class="flex items-center gap-2">
                  <UIcon name="i-lucide-star" class="text-yellow-500" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap gap-4">
          <UButton to="/subjects/psychology" variant="outline" icon="i-lucide-arrow-left">
            Psychology
          </UButton>
          <UButton to="/subjects/political-science" variant="outline" icon="i-lucide-arrow-right" trailing>
            Political Science (Safer Alternative)
          </UButton>
          <UButton to="/syllabus/selection" icon="i-lucide-compass">
            Subject Selection Guide
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>
