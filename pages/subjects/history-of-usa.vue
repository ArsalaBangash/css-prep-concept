<script setup lang="ts">
useSeoMeta({
  title: 'History of USA CSS Guide - Syllabus, Books, Targeting Risk 2025',
  description: 'Before picking History of USA, understand the FPSC syllabus, recent targeting warnings, recommended books, and mitigation strategies for CSS 2025.',
  ogTitle: 'CSS History of USA - High-Risk Optional',
  ogDescription: 'Complete guide with syllabus breakdown, risk alerts, and smart preparation tactics to survive the strict marking trend.'
})

const subjectMeta = {
  name: 'History of USA',
  marks: 100,
  papers: 1,
  passThreshold: 33,
  trendStatus: 'Volatile',
  trendColor: 'yellow',
  popularity: 'Once Dominant',
  targetingRisk: 'High',
}

const syllabus = [
  { topic: 'Colonial America (1607-1775): Thirteen colonies, economic systems, religious movements', weight: 'Medium' },
  { topic: 'War of Independence & Constitution (1775-1789): Key battles, Articles of Confederation, Federalist vs Anti-Federalist debate', weight: 'High' },
  { topic: 'Early Republic (1789-1828): Washington to Jackson, expansion, Supreme Court decisions', weight: 'Medium' },
  { topic: 'Sectionalism, Civil War & Reconstruction (1828-1877): Slavery debate, secession, 13th-15th Amendments', weight: 'Very High' },
  { topic: 'Industrialization & Progressive Era (1877-1919): Big business, labor, Populists, reforms', weight: 'High' },
  { topic: 'US as a World Power (1898-1945): Spanish-American War, WWI, New Deal, WWII', weight: 'High' },
  { topic: 'Cold War Era (1945-1991): Containment, Korea, Vietnam, détente, Reaganomics', weight: 'High' },
  { topic: 'Post-Cold War to Present: 9/11, War on Terror, economic crises, domestic polarization', weight: 'Medium' },
]

const books = [
  { title: 'A History of the United States', author: 'Majumdar & Bhargava', type: 'Primary', note: 'Most cited CSS text; covers syllabus chronologically' },
  { title: 'The American Pageant', author: 'David M. Kennedy et al.', type: 'Primary', note: 'Rich narrative + visuals for deeper understanding' },
  { title: 'A People’s History of the United States', author: 'Howard Zinn', type: 'Reference', note: 'Use for alternate viewpoints/quotes' },
  { title: 'JWT History of USA Notes', author: 'Jahangir World Times', type: 'CSS Guide', note: 'Condensed handout for last-month revision' },
]

const onlineResources = [
  { name: 'CrashCourse US History', type: 'YouTube', description: '40-episode series covering pre-Columbus to present' },
  { name: 'Khan Academy US History', type: 'Course', description: 'Free timeline-based lessons with quizzes' },
  { name: 'PBS / American Experience', type: 'Documentary', description: 'Feature-length docs for Civil Rights, Cold War, etc.' },
  { name: 'Foreign Affairs Archives', type: 'Magazine', description: 'Use for contemporary US foreign policy analysis' },
]

const commonMistakes = [
  { mistake: 'Retelling events without analysis', fix: 'Examiner wants causes, consequences, historiography, and relevance to global order' },
  { mistake: 'Ignoring targeting risk', fix: 'If you keep the subject, your answers must be data-rich, critical, and original' },
  { mistake: 'Weak link to Pakistan', fix: 'Compare US policies with Pakistani interests (Afghanistan, Indo-Pacific, IMF)' },
  { mistake: 'No visuals', fix: 'Add timelines or policy charts to stand out in a crowded subject' },
]

const scoringHistory = [
  { year: '2022', status: 'Good', avg: '60-75', notes: 'Still a darling subject pre-targeting' },
  { year: '2023', status: 'Risky', avg: '50-65', notes: 'Marking tightened; average dropped ~10 marks' },
  { year: '2024', status: 'Targeted', avg: '45-60', notes: 'Multiple high-profile failures despite strong backgrounds' },
]

const mitigation = [
  { title: 'Why FPSC targeted it', points: ['Most opted 100-mark paper for a decade', 'Flood of generic, copy-paste notes answers', 'Examiners want original argumentation'] },
  { title: 'When to still choose it', points: ['Academic background in US/International History', 'Already teaching or writing on US foreign policy', 'Ready to produce data-backed, critical answers'] },
  { title: 'Risk Mitigation Plan', points: ['Blend political, economic, cultural angles in every answer', 'Add Pakistani/Global lens to show relevance', 'Practice with 10 latest past papers under time'] },
]

const synergy = {
  helps: ['Essay (democracy, capitalism, foreign policy themes)', 'Current Affairs (US-China, Indo-Pacific)', 'International Relations (Paper II case studies)'],
  pairs: ['Political Science', 'International Relations', 'Public Administration'],
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
              <span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full">High Risk</span>
            </div>
          </div>
          <div class="text-right">
            <div class="text-yellow-600 dark:text-yellow-400 font-semibold">
              {{ subjectMeta.trendStatus }} Scoring
            </div>
            <div class="text-sm text-gray-500">Targeting Risk: {{ subjectMeta.targetingRisk }}</div>
          </div>
        </div>

        <!-- Warning Banner -->
        <div class="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl p-4 mb-8">
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-alert-triangle" class="text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
            <div>
              <p class="font-medium text-red-800 dark:text-red-200">Read Before Selecting</p>
              <p class="text-sm text-red-700 dark:text-red-200 mt-1">
                CSS 2024 DMC analysis confirmed History of USA was <strong>explicitly targeted</strong>. Only retain it if you have
                prior mastery or a compelling reason (academic background, existing notes). Otherwise, switch to European
                History or another low-risk 100-mark paper.
              </p>
            </div>
          </div>
        </div>

        <!-- Why still consider -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">When Keeping USA History Still Makes Sense</h2>
          <div class="grid sm:grid-cols-3 gap-4 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <h3 class="font-semibold mb-2">Leverage Existing Strength</h3>
              <p>Graduates in American Studies, IR, or journalism can produce richer analysis than generic notes.</p>
            </div>
            <div>
              <h3 class="font-semibold mb-2">Essay Advantage</h3>
              <p>Deep knowledge of capitalism, democracy, civil rights helps you ace governance and world order essays.</p>
            </div>
            <div>
              <h3 class="font-semibold mb-2">Foreign Policy Insight</h3>
              <p>Offers ready-made case studies for Pakistan-US relations, IMF politics, and global power shifts.</p>
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
          <div class="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <p class="text-sm text-yellow-700 dark:text-yellow-200">
              <strong>Examiner hint:</strong> The Civil War + Reconstruction combo and US foreign policy (1898 onwards) are never ignored.
              Expect at least one question from each block.
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
                    <span :class="[
                      'px-2 py-1 rounded text-xs font-medium',
                      row.status === 'Good'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                        : row.status === 'Risky'
                          ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                          : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                    ]">
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

        <!-- Mitigation Strategies -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Targeting Response Plan</h2>
          <div class="grid md:grid-cols-3 gap-4">
            <div
              v-for="item in mitigation"
              :key="item.title"
              class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm"
            >
              <h3 class="font-semibold mb-2">{{ item.title }}</h3>
              <ul class="space-y-1 text-gray-600 dark:text-gray-400">
                <li v-for="point in item.points" :key="point" class="flex items-start gap-2">
                  <UIcon name="i-lucide-dot" class="text-accent mt-0.5" />
                  <span>{{ point }}</span>
                </li>
              </ul>
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
                :name="resource.type === 'YouTube' ? 'i-lucide-youtube' : resource.type === 'Course' ? 'i-lucide-graduation-cap' : 'i-lucide-globe'"
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
          <UButton to="/subjects/european-history" variant="outline" icon="i-lucide-arrow-left">
            European History
          </UButton>
          <UButton to="/subjects/public-administration" variant="outline" icon="i-lucide-arrow-right" trailing>
            Public Administration
          </UButton>
          <UButton to="/syllabus/trends" icon="i-lucide-trending-up">
            Scoring Trends
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>
