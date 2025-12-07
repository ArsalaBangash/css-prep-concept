<script setup lang="ts">
useSeoMeta({
  title: 'Sociology CSS Syllabus, Books & Scoring Trends 2025',
  description: 'CSS Sociology guide covering FPSC syllabus, high scoring potential, recommended books (Haralambos, Horton & Hunt), and how it boosts Essay and Current Affairs.',
  ogTitle: 'CSS Sociology - Mother of Social Sciences',
  ogDescription: 'Complete Sociology strategy: syllabus breakdown, resources, scoring history, and why it consistently delivers 60+ marks.'
})

const subjectMeta = {
  name: 'Sociology',
  marks: 100,
  papers: 1,
  passThreshold: 33,
  trendStatus: 'Stable',
  trendColor: 'green',
  popularity: 'High Demand',
  targetingRisk: 'Low',
}

const syllabus = [
  { topic: 'Introduction: Meaning, scope, method, comparison with other social sciences', weight: 'High' },
  { topic: 'Basic Concepts: Culture, society, status, role, norms, values, social control', weight: 'High' },
  { topic: 'Socialization & Personality: Agencies, theories (Freud, Mead, Piaget)', weight: 'Medium' },
  { topic: 'Social Groups & Institutions: Family, education, religion, economy, politics', weight: 'Very High' },
  { topic: 'Social Stratification: Class, caste, gender, mobility, power and authority', weight: 'High' },
  { topic: 'Deviance & Social Control: Theories (Durkheim, Merton, Becker), crime trends', weight: 'Medium' },
  { topic: 'Social Change & Development: Modernization, globalization, collective behavior', weight: 'Medium' },
  { topic: 'Research Methods: Quantitative vs qualitative, sampling, surveys, observation', weight: 'Medium' },
  { topic: 'Pakistani Society: Urbanization, demography, gender issues, social policy', weight: 'Very High' },
]

const books = [
  { title: 'Sociology: Themes and Perspectives', author: 'Haralambos & Holborn', type: 'Primary', note: 'Foundational text; use for definitions + thinkers' },
  { title: 'Sociology', author: 'Horton & Hunt', type: 'Primary', note: 'Concise explanations; perfect for quick revision' },
  { title: 'Introduction to Sociology', author: 'Shankar Rao', type: 'Reference', note: 'Easy language, great for Pakistani students' },
  { title: 'Sociology (CSS Edition)', author: 'Abdul Hameed Taga', type: 'CSS Guide', note: 'Maps FPSC syllabus and Pakistani society topics' },
]

const onlineResources = [
  { name: 'CrashCourse Sociology', type: 'YouTube', description: '50-part playlist covering full conceptual base' },
  { name: 'UNDP Human Development Reports', type: 'Reports', description: 'Updated stats for inequality, gender, SDGs' },
  { name: 'World Bank DataBank', type: 'Data', description: 'Download Pakistani social indicators with citations' },
  { name: 'Pakistan Economic Survey (Social Sector)', type: 'Official', description: 'Use for health, education, poverty data' },
]

const commonMistakes = [
  { mistake: 'Copying definitions without examples', fix: 'Pair every concept with a Pakistani illustration or stat' },
  { mistake: 'Ignoring key thinkers (Durkheim, Weber, Marx)', fix: 'Quote theorists + years to show conceptual command' },
  { mistake: 'Writing generic current affairs answers', fix: 'Use sociological vocabulary (anomie, stratification, social mobility)' },
  { mistake: 'Skipping diagrams and typologies', fix: 'Add class pyramids, socialization flowcharts, or comparison tables' },
]

const scoringHistory = [
  { year: '2022', status: 'Safe', avg: '62-75', notes: 'Consistent across attempts; toppers crossed 75' },
  { year: '2023', status: 'Stable', avg: '60-72', notes: 'Rewarded structured answers with Pakistani data' },
  { year: '2024', status: 'Stable', avg: '58-70', notes: 'Still “mother subject” with low targeting risk' },
]

const whyChoose = [
  { icon: 'i-lucide-link', title: 'Essay & CA Synergy', desc: 'Feeds social issue essays, Current Affairs, Pakistan Affairs' },
  { icon: 'i-lucide-layers', title: 'Short, Conceptual Syllabus', desc: 'One concise paper; definitions + thinkers repeat' },
  { icon: 'i-lucide-award', title: 'Predictable Scoring', desc: '60+ achievable with structured answers + data' },
  { icon: 'i-lucide-users', title: 'Pairs with Criminology', desc: 'Shared theories reduce total prep time' },
]

const studyPlan = [
  { phase: 'Weeks 1-2', focus: 'Read Haralambos or Horton & Hunt once; build glossary of 200 core terms.' },
  { phase: 'Weeks 3-4', focus: 'Prepare Pakistani society notes using Economic Survey + UNDP stats.' },
  { phase: 'Weeks 5-6', focus: 'Write 15 past-paper answers; add diagrams + theorist quotes.' },
]

const synergy = {
  helps: ['Essay (social justice, gender, education topics)', 'Current Affairs (society & governance sections)', 'Pakistan Affairs (social policy questions)'],
  pairs: ['Criminology', 'Gender Studies', 'Public Administration'],
}
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
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">Mother Subject</span>
            </div>
          </div>
          <div class="text-right">
            <div class="text-green-600 dark:text-green-400 font-semibold">
              {{ subjectMeta.trendStatus }} Scoring
            </div>
            <div class="text-sm text-gray-500">Targeting Risk: {{ subjectMeta.targetingRisk }}</div>
          </div>
        </div>

        <!-- Recommendation Banner -->
        <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 mb-8">
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-graduation-cap" class="text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
            <div>
              <p class="font-medium text-green-800 dark:text-green-200">Best Social Science Companion</p>
              <p class="text-sm text-green-700 dark:text-green-300 mt-1">
                Sociology builds the analytical vocabulary examiners expect in social issue essays. Research calls it the
                "mother of social sciences" because it overlaps with every governance, inequality, or reform debate.
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
            CSS Sociology compresses classical theories (Durkheim, Weber, Marx), social institutions, and Pakistani social
            policy into one 100-mark paper. Answers that connect theory with fresh Pakistani statistics routinely score 60+.
          </p>
          <p class="text-gray-700 dark:text-gray-300">
            <strong>Best for:</strong> Candidates who like conceptual subjects, want essay support, and are already preparing
            Criminology, Gender Studies, or Public Administration.
          </p>
        </div>

        <!-- Study Plan -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">6-Week Study Sprint</h2>
          <div class="space-y-3">
            <div
              v-for="phase in studyPlan"
              :key="phase.phase"
              class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div class="font-medium">{{ phase.phase }}</div>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ phase.focus }}</p>
            </div>
          </div>
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
              <strong>Examiner hint:</strong> Pakistani Society + Institutions contribute almost half the paper. Prepare
              localized examples (Lady Health Workers, Ehsaas, BISP, census data) with references.
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
                  book.type === 'Primary'
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
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
                :name="resource.type === 'YouTube' ? 'i-lucide-youtube' : resource.type === 'Official' ? 'i-lucide-file-text' : 'i-lucide-globe'"
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
                <li v-for="item in synergy.helps" :key="item" class="flex items-center gap-2">
                  <UIcon name="i-lucide-arrow-right" class="text-blue-500" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-medium text-blue-800 dark:text-blue-200 mb-2">Best Paired With</h3>
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
          <UButton to="/subjects/criminology" variant="outline" icon="i-lucide-arrow-left">
            Criminology
          </UButton>
          <UButton to="/subjects/public-administration" variant="outline" icon="i-lucide-arrow-right" trailing>
            Public Administration
          </UButton>
          <UButton to="/syllabus/selection" icon="i-lucide-compass">
            Subject Selection Guide
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>
