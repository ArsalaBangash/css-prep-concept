<script setup lang="ts">
useSeoMeta({
  title: 'European History CSS Guide - Syllabus, Books & Scoring Trends 2025',
  description: 'European History is replacing USA History as CSS toppers’ favorite. Get the full syllabus breakdown, scoring data, and book list to secure 60+ marks.',
  ogTitle: 'CSS European History - Trending High Scorer',
  ogDescription: 'Logical timeline, predictable marking, and rich essay overlap make European History a safe optional for CSS 2025.'
})

const subjectMeta = {
  name: 'European History',
  marks: 100,
  papers: 1,
  passThreshold: 33,
  trendStatus: 'Rising',
  trendColor: 'green',
  popularity: 'Trending',
  targetingRisk: 'Low-Medium',
}

const syllabus = [
  { topic: 'Renaissance & Reformation (1450-1648): Humanism, Luther, Calvin, Counter-Reformation', weight: 'High' },
  { topic: 'Age of Enlightenment & Scientific Revolution', weight: 'Medium' },
  { topic: 'French Revolution & Napoleonic Era', weight: 'Very High' },
  { topic: 'Congress System, Metternich, Revolutions of 1830 & 1848', weight: 'Medium' },
  { topic: 'Nationalism: Unification of Italy & Germany, Bismarckian diplomacy', weight: 'High' },
  { topic: 'Industrial Revolution & Social Question (Marxism, trade unions)', weight: 'Medium' },
  { topic: 'Imperialism, Scramble for Africa, Eastern Question', weight: 'High' },
  { topic: 'World War I: Causes, course, Paris Peace Settlement, League of Nations', weight: 'Very High' },
  { topic: 'Inter-War Europe: Russian Revolution, Fascism, Nazism, appeasement', weight: 'High' },
  { topic: 'World War II & Aftermath: Cold War origins, Marshall Plan, European Union integration', weight: 'Medium' },
]

const books = [
  { title: 'Europe Since Napoleon', author: 'David Thomson', type: 'Primary', note: 'Single volume covering 1789 onwards' },
  { title: 'Mastering Modern European History', author: 'Stuart Miller', type: 'Primary', note: 'Exam-friendly summaries + timelines' },
  { title: 'A History of Modern Europe', author: 'C.D.M. Ketelbey', type: 'Reference', note: 'Classic narrative for essays' },
  { title: 'JWT European History Notes', author: 'Jahangir World Times', type: 'CSS Guide', note: 'Condensed Pakistani context, ready-made headings' },
]

const onlineResources = [
  { name: 'CrashCourse European History', type: 'YouTube', description: 'Animated 50-episode playlist for quick revision' },
  { name: 'The Great War / Real Time History', type: 'YouTube', description: 'Detailed WWI chronology' },
  { name: 'HistoryHit', type: 'Podcast', description: 'Expert interviews on key events' },
  { name: 'DW & BBC Documentaries', type: 'Video', description: 'Use for visual understanding of revolutions & WWII' },
]

const commonMistakes = [
  { mistake: 'Dumping facts without analysis', fix: 'Always link events to causes, consequences, and historiography' },
  { mistake: 'Ignoring maps & timelines', fix: 'Add mini timelines or arrows to show progression' },
  { mistake: 'Treating Europe as monolithic', fix: 'Contrast Western vs Eastern Europe, Catholic vs Protestant blocks' },
  { mistake: 'Skipping post-1945 section', fix: 'EU integration + Cold War provide fresh, high-yield content' },
]

const scoringHistory = [
  { year: '2022', status: 'Medium', avg: '55-68', notes: 'Marked fairly; limited attempts meant less competition' },
  { year: '2023', status: 'Improving', avg: '58-72', notes: 'Examiners rewarded comparative answers' },
  { year: '2024', status: 'High', avg: '62-78', notes: 'Became safe alternative to USA History (which was targeted)' },
]

const whyChoose = [
  { icon: 'i-lucide-timeline', title: 'Logical Flow', desc: 'Chronological syllabus = easy to structure answers with timelines' },
  { icon: 'i-lucide-shield-check', title: 'Lower Risk', desc: 'Less targeting than US History, still prestigious' },
  { icon: 'i-lucide-book-open-check', title: 'Essay Booster', desc: 'European political history feeds democracy, fascism, governance essays' },
  { icon: 'i-lucide-clock-3', title: 'Predictable Questions', desc: 'French Revolution, WWI, WWII, EU appear repeatedly' },
]

const examTips = [
  'Use sub-headings by timeline: Causes → Events → Consequences → Critical perspective.',
  'Quote historians (e.g., Eric Hobsbawm on nationalism, A.J.P. Taylor on WWI).',
  'Include at least one map/timeline sketch to stand out.',
  'Connect European events to global repercussions (colonies, Muslim world) to stay relevant for Pakistani examiner.'
]

const synergy = {
  helps: ['Essay (democracy, fascism, global wars)', 'Current Affairs (NATO/EU, Russia-Ukraine context)', 'Pakistan Affairs (parallels for constitutional debates)'],
  pairs: ['Political Science', 'International Relations', 'History of USA (if you dare mix)'],
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
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">Trending Choice</span>
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
            <UIcon name="i-lucide-trending-up" class="text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
            <div>
              <p class="font-medium text-green-800 dark:text-green-200">Replacing USA History for 2025-26</p>
              <p class="text-sm text-green-700 dark:text-green-300 mt-1">
                CSS 2024 results showed USA History being "targeted" while European History remained lenient. Toppers are
                switching to this chronological, essay-friendly subject for predictable scoring.
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
            European History tracks the transformation of Europe from the Renaissance to the rise of the European Union.
            You study revolutions, ideologies, wars, and diplomacy in one coherent narrative, which makes outlining answers
            intuitive and examiner-friendly.
          </p>
          <p class="text-gray-700 dark:text-gray-300">
            <strong>Best for:</strong> Candidates who enjoy storytelling, already read Political Science/IR, or feel more
            comfortable with cause-effect analysis than memorizing constitutional minutiae.
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
              <strong>Timeline Hack:</strong> Divide notebook by blocks (1450-1648, 1648-1789, 1789-1871, 1871-1945, 1945+).
              Revise each block with cause → event → impact tables.
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
                      row.status === 'High'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                        : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
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
                :name="resource.type === 'YouTube' ? 'i-lucide-youtube' : resource.type === 'Podcast' ? 'i-lucide-mic' : 'i-lucide-video'"
                class="text-accent flex-shrink-0"
              />
              <div>
                <div class="font-medium text-sm">{{ resource.name }}</div>
                <div class="text-xs text-gray-500">{{ resource.description }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Exam Tips -->
        <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Answer Writing Playbook</h2>
          <ul class="space-y-2 text-sm text-yellow-900 dark:text-yellow-100">
            <li v-for="tip in examTips" :key="tip" class="flex items-start gap-2">
              <UIcon name="i-lucide-check" class="text-yellow-600 mt-0.5" />
              <span>{{ tip }}</span>
            </li>
          </ul>
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
          <UButton to="/subjects/political-science" variant="outline" icon="i-lucide-arrow-left">
            Political Science
          </UButton>
          <UButton to="/subjects/history-of-usa" variant="outline" icon="i-lucide-arrow-right" trailing>
            History of USA
          </UButton>
          <UButton to="/syllabus/trends" icon="i-lucide-trending-up">
            View Scoring Trends
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>
