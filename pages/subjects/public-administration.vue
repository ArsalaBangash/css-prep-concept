<script setup lang="ts">
useSeoMeta({
  title: 'Public Administration CSS Guide - Syllabus, Books & Strategy 2025',
  description: 'Public Administration explains how the Pakistani state actually works. Get the FPSC syllabus, book list, governance data points, and prep plan.',
  ogTitle: 'CSS Public Administration - Governance Optional',
  ogDescription: 'Consistent 55-65 scoring with direct relevance to your future cadre. Learn how to prepare Public Administration for CSS 2025.'
})

const subjectMeta = {
  name: 'Public Administration',
  marks: 100,
  papers: 1,
  passThreshold: 33,
  trendStatus: 'Moderate',
  trendColor: 'blue',
  popularity: 'Popular',
  targetingRisk: 'Medium',
}

const syllabus = [
  { topic: 'Meaning, Scope & Importance of Public Administration', weight: 'Medium' },
  { topic: 'Classical, Neo-Classical & Modern Organizational Theories (Taylor, Fayol, Weber, Simon)', weight: 'High' },
  { topic: 'Decision Making & Leadership in Public Organizations', weight: 'Medium' },
  { topic: 'Human Resource Management: Recruitment, training, motivation, performance appraisal', weight: 'High' },
  { topic: 'Financial Administration: Budgeting, auditing, accountability, PPRA rules', weight: 'Very High' },
  { topic: 'Public Policy: Formulation, implementation, evaluation, policy instruments', weight: 'High' },
  { topic: 'Administrative Law & Ethics: Rule of law, ombudsman, anti-corruption bodies', weight: 'Medium' },
  { topic: 'Development Administration & Good Governance (UNDP, World Bank frameworks)', weight: 'Medium' },
  { topic: 'Comparative Administration & New Public Management', weight: 'Medium' },
  { topic: 'Pakistan Focus: Civil service reforms, devolution, local government, digital governance', weight: 'Very High' },
]

const books = [
  { title: 'Public Administration & Public Affairs', author: 'Nicholas Henry', type: 'Primary', note: 'Covers theory + modern reforms' },
  { title: 'Public Administration in Pakistan', author: 'Dr. Sultan Khan', type: 'Primary', note: 'Pakistan-specific case studies' },
  { title: 'Administrative Thinkers', author: 'Prasad & Prasad', type: 'Reference', note: 'Ready quotes for Taylor, Weber, Follett' },
  { title: 'Reinventing Government', author: 'David Osborne & Ted Gaebler', type: 'Reference', note: 'Use for New Public Management arguments' },
  { title: 'Good Governance in Pakistan', author: 'Dr. Ishrat Husain', type: 'Reference', note: 'Latest reform recommendations' },
]

const onlineResources = [
  { name: 'World Bank Worldwide Governance Indicators', type: 'Data', description: 'Trustworthy stats for accountability & service delivery' },
  { name: 'ADB & UNDP Governance Reports', type: 'Reports', description: 'Use to quote reform roadmaps and SDG16 data' },
  { name: 'Pakistan Institute of Development Economics', type: 'Think Tank', description: 'Policy briefs on civil service reforms' },
  { name: 'MIT OpenCourseWare - Public Policy', type: 'Course', description: 'Free lectures on policy cycles & evaluation' },
]

const commonMistakes = [
  { mistake: 'Writing generic essay-style answers', fix: 'Structure answers with headings like Definition → Theory → Pakistani example' },
  { mistake: 'Ignoring Pakistani reforms', fix: 'Quote devolution plans (2001, 2013), CST reforms, E-governance initiatives' },
  { mistake: 'No diagrams/flows', fix: 'Add organograms, policy cycle charts, PPRA process flows' },
  { mistake: 'Memorizing only theorists', fix: 'Blend theory with current affairs (SOE privatization, digital governance)' },
]

const scoringHistory = [
  { year: '2022', status: 'Medium', avg: '55-68', notes: 'Rewarded governance data + Pakistani examples' },
  { year: '2023', status: 'Medium', avg: '53-66', notes: 'Slight trimming but still fair for structured answers' },
  { year: '2024', status: 'Slight Dip', avg: '50-64', notes: 'Examiner tightened marking for rote theory' },
]

const whyChoose = [
  { icon: 'i-lucide-briefcase', title: 'Career Relevance', desc: 'Explains the bureaucracy you want to join—great for interviews too' },
  { icon: 'i-lucide-git-merge', title: 'Overlap with Essay & CA', desc: 'Governance, reforms, public policy essays become easier' },
  { icon: 'i-lucide-gauge', title: 'Manageable Syllabus', desc: 'One paper, repeatable headings, easy to revise' },
  { icon: 'i-lucide-target', title: 'Pairs with Political Science', desc: 'Complements Group I anchor subjects' },
]

const actionPlan = [
  { title: 'Weeks 1-2', detail: 'Cover organizational theories + administrative thinkers. Make flashcards for quotes.' },
  { title: 'Weeks 3-4', detail: 'Prepare Pakistan-focused notes: civil service reforms, devolution, budgeting issues.' },
  { title: 'Weeks 5-6', detail: 'Write timed answers, integrate governance indicators, revise diagrams.' },
]

const synergy = {
  helps: ['Essay (governance, reforms, social contract)', 'Current Affairs (public policy, budgets, IMF conditionalities)', 'Interview (questions on bureaucracy & service delivery)'],
  pairs: ['Political Science', 'Sociology', 'Public Policy/IR combinations'],
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
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">Governance Focus</span>
            </div>
          </div>
          <div class="text-right">
            <div class="text-blue-600 dark:text-blue-400 font-semibold">
              {{ subjectMeta.trendStatus }} Scoring
            </div>
            <div class="text-sm text-gray-500">Targeting Risk: {{ subjectMeta.targetingRisk }}</div>
          </div>
        </div>

        <!-- Recommendation Banner -->
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-8">
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-building" class="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
            <div>
              <p class="font-medium text-blue-800 dark:text-blue-200">Most Relevant Optional for CSP Life</p>
              <p class="text-sm text-blue-700 dark:text-blue-300 mt-1">
                Public Administration mirrors the actual work of Assistant Commissioners, PMS officers, and policy analysts.
                It also gives you ready content for Interview questions on governance, reforms, and service delivery.
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

        <!-- Action Plan -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">6-Week Governance Sprint</h2>
          <div class="grid sm:grid-cols-3 gap-3">
            <div v-for="item in actionPlan" :key="item.title" class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm">
              <div class="font-medium mb-1">{{ item.title }}</div>
              <p class="text-gray-600 dark:text-gray-400">{{ item.detail }}</p>
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
              <strong>Examiner hint:</strong> Pakistani reforms (Civil Service Reform Committee, Local Government Acts, Public Financial Management Act 2019)
              appear in every other question. Don’t skip them.
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
                    <span class="px-2 py-1 rounded text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300">
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
                :name="resource.type === 'Data' ? 'i-lucide-bar-chart-3' : resource.type === 'Think Tank' ? 'i-lucide-lightbulb' : 'i-lucide-globe'"
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
          <UButton to="/subjects/sociology" variant="outline" icon="i-lucide-arrow-left">
            Sociology
          </UButton>
          <UButton to="/prep/essay" variant="outline" icon="i-lucide-arrow-right" trailing>
            Essay Masterclass
          </UButton>
          <UButton to="/syllabus/selection" icon="i-lucide-compass">
            Subject Selection Guide
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>
