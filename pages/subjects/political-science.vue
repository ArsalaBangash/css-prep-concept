<script setup lang="ts">
useSeoMeta({
  title: 'Political Science CSS Syllabus, Books & Scoring Trends 2025',
  description: 'Complete guide to CSS Political Science: FPSC syllabus, recommended books (Mazhar ul Haq, OP Gauba), consistent 110-130 scoring, and why it\'s the safest 200-mark optional.',
  ogTitle: 'CSS Political Science - The Safest 200-Mark Optional',
  ogDescription: 'Political Science offers consistent, predictable scoring. Learn the syllabus, best books, and preparation strategy for CSS 2025.',
})

const subjectMeta = {
  name: 'Political Science',
  marks: 200,
  papers: 2,
  passThreshold: 40,
  trendStatus: 'Consistent',
  trendColor: 'green',
  popularity: 'Very Popular',
  targetingRisk: 'Low',
}

const syllabusP1 = [
  { topic: 'Meaning, Nature & Scope of Political Science', weight: 'Medium' },
  { topic: 'Western Political Thought: Plato, Aristotle', weight: 'High' },
  { topic: 'Western Political Thought: Machiavelli, Hobbes, Locke', weight: 'High' },
  { topic: 'Western Political Thought: Rousseau, Bentham, Mill', weight: 'High' },
  { topic: 'Western Political Thought: Hegel, Marx', weight: 'Very High' },
  { topic: 'Political Ideologies: Liberalism, Socialism, Fascism', weight: 'High' },
  { topic: 'State, Sovereignty, Law', weight: 'Medium' },
]

const syllabusP2 = [
  { topic: 'Muslim Political Thought: Al-Farabi, Al-Mawardi', weight: 'High' },
  { topic: 'Muslim Political Thought: Ghazali, Ibn Khaldun', weight: 'High' },
  { topic: 'Iqbal\'s Political Philosophy', weight: 'Very High' },
  { topic: 'Political System of Pakistan', weight: 'Very High' },
  { topic: 'Constitutional Development in Pakistan', weight: 'Very High' },
  { topic: 'Comparative Politics: Presidential vs Parliamentary', weight: 'Medium' },
  { topic: 'Democracy, Dictatorship, Political Parties', weight: 'Medium' },
]

const books = [
  { title: 'Political Science', author: 'Mazhar ul Haq', type: 'Primary', note: 'Best for Pakistan context, CSS-focused' },
  { title: 'An Introduction to Political Theory', author: 'OP Gauba', type: 'Primary', note: 'Comprehensive Western thought' },
  { title: 'Western Political Thought', author: 'Subrata Mukherjee', type: 'Primary', note: 'Deep coverage of thinkers' },
  { title: 'Constitutional & Political History of Pakistan', author: 'Hamid Khan', type: 'Primary', note: 'Essential for Paper II' },
  { title: 'History of Political Thought', author: 'George Sabine', type: 'Reference', note: 'Classic but dense' },
]

const onlineResources = [
  { name: 'CrashCourse Philosophy', type: 'YouTube', description: 'Accessible introductions to thinkers' },
  { name: 'Academy of Ideas', type: 'YouTube', description: 'Deep dives into political philosophers' },
  { name: 'School of Life', type: 'YouTube', description: 'Engaging philosophy explanations' },
  { name: 'Stanford Encyclopedia of Philosophy', type: 'Website', description: 'Academic reference for concepts' },
]

const commonMistakes = [
  { mistake: 'Treating it like history (just memorizing thinkers)', fix: 'Understand and compare philosophies; examiners want analysis' },
  { mistake: 'Ignoring Iqbal\'s political thought', fix: 'Iqbal questions appear almost every year—prepare thoroughly' },
  { mistake: 'Weak on Pakistani constitutional history', fix: 'Know all constitutions (1956, 1962, 1973) and amendments' },
  { mistake: 'Not connecting thinkers to modern issues', fix: 'Link Marx to inequality debates, Locke to human rights, etc.' },
]

const scoringHistory = [
  { year: '2022', status: 'Good', avg: '110-130', notes: 'Consistent as always' },
  { year: '2023', status: 'Good', avg: '105-125', notes: 'Slight dip but stable' },
  { year: '2024', status: 'Medium', avg: '100-120', notes: 'Still reliable' },
]

const whyChoose = [
  { icon: 'i-lucide-shield-check', title: 'Predictable Marking', desc: 'Scoring trends are stable year-over-year' },
  { icon: 'i-lucide-book-open', title: 'Static Syllabus', desc: 'Unlike IR, content doesn\'t change with news' },
  { icon: 'i-lucide-link', title: 'Pakistan Affairs Overlap', desc: 'Paper II helps with compulsory subject' },
  { icon: 'i-lucide-brain', title: 'Rewards Depth', desc: 'Thorough understanding beats surface coverage' },
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
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">Safest Anchor</span>
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
            <UIcon name="i-lucide-thumbs-up" class="text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
            <div>
              <p class="font-medium text-green-800 dark:text-green-200">Recommended as Your Anchor Subject</p>
              <p class="text-sm text-green-700 dark:text-green-300 mt-1">
                Political Science is currently the safest 200-mark option. Pair it with a higher-risk subject like IR 
                or a high-scoring 100-mark option like Criminology for a balanced combination.
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
            Political Science covers Western and Muslim political thought, from Plato to Iqbal. Unlike IR, it's more <strong>theoretical and static</strong>—you won't 
            need to read daily news. It rewards candidates who can analyze and compare different political philosophies.
          </p>
          <p class="text-gray-700 dark:text-gray-300">
            <strong>Best for:</strong> Candidates who enjoy philosophy, theory, and historical analysis. If you prefer reading Aristotle over Al Jazeera, this is your subject.
          </p>
        </div>

        <!-- Syllabus -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-6">FPSC Syllabus Breakdown</h2>
          
          <div class="mb-6">
            <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-accent/10 text-accent rounded-lg flex items-center justify-center text-sm font-bold">I</span>
              Paper I: Western Political Thought (100 Marks)
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
              Paper II: Muslim Thought & Pakistan Politics (100 Marks)
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
                        row.status === 'Good' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
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
                  <span>Pakistan Affairs (Paper II overlap)</span>
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-arrow-right" class="text-blue-500" />
                  <span>Essay (governance, democracy topics)</span>
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-arrow-right" class="text-blue-500" />
                  <span>Islamic Studies (Iqbal connection)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-medium text-blue-800 dark:text-blue-200 mb-2">Best Paired With</h3>
              <ul class="text-sm space-y-1">
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-star" class="text-yellow-500" />
                  <span><strong>International Relations</strong> (theory complement)</span>
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-star" class="text-yellow-500" />
                  <span>Criminology (different skill set)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap gap-4">
          <UButton to="/subjects/international-relations" variant="outline" icon="i-lucide-arrow-left">
            International Relations
          </UButton>
          <UButton to="/subjects/criminology" variant="outline" icon="i-lucide-arrow-right" trailing>
            Criminology
          </UButton>
          <UButton to="/syllabus/selection" icon="i-lucide-compass">
            Subject Selection Guide
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>
