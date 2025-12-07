<script setup lang="ts">
useSeoMeta({
  title: 'GSA (General Science & Ability) CSS Strategy - 100% Scoring Guide',
  description: 'GSA is the high-scoring anchor of compulsory papers. Learn the Shafiq vs. Kashmiri debate, everyday science tactics, quantitative drills, and reasoning techniques.',
  ogTitle: 'CSS General Science & Ability - Complete Preparation',
  ogDescription: 'Master GSA with science process maps, quant shortcuts, logical reasoning drills, and resource recommendations for 100% scoring potential.'
})

const paperMeta = {
  name: 'General Science & Ability (GSA)',
  marks: 100,
  passThreshold: 33,
  scoringPotential: '100% (Objective)',
  position: 'Compulsory',
}

const sections = [
  { 
    name: 'Section I: General Science', 
    marks: 60, 
    weight: 'Very High', 
    description: 'Everyday Science—how things work (vaccines, greenhouse effect, fiber optics). Covers Physical, Biological, Environmental, Food Sciences.' 
  },
  { 
    name: 'Section II: General Ability', 
    marks: 40, 
    weight: 'High', 
    description: 'Quantitative Ability (basic math), Logical Reasoning (sequences, analogies), Analytical Reasoning (data interpretation).' 
  },
]

const scienceTopics = [
  { category: 'Physical Sciences', topics: 'Astronomy, Physics (mechanics, light, sound, electricity), Chemistry (acids, bases, reactions)', weight: 'Very High' },
  { category: 'Biological Sciences', topics: 'Human biology, genetics, diseases, vaccines, nutrition, photosynthesis', weight: 'Very High' },
  { category: 'Environmental Science', topics: 'Climate change, greenhouse effect, pollution, biodiversity, renewable energy', weight: 'High' },
  { category: 'Food Science & Health', topics: 'Vitamins, minerals, food preservation, pandemic responses (COVID lessons)', weight: 'Medium' },
]

const abilityTopics = [
  { category: 'Quantitative Ability', topics: 'Percentages, ratios, averages, profit/loss, time-distance, basic algebra', weight: 'Very High' },
  { category: 'Logical Reasoning', topics: 'Number/letter sequences, analogies, coding-decoding, blood relations', weight: 'High' },
  { category: 'Analytical Reasoning', topics: 'Data interpretation (tables, graphs), seating arrangements, syllogisms', weight: 'High' },
]

const bookDebate = {
  shafiq: {
    title: 'General Science & Ability',
    author: 'Mian Shafiq (JWT)',
    pros: ['Market leader', 'Lucid explanation of Ability section', 'Updated frequently to match syllabus', 'Best for arts students with weak math'],
    cons: ['Science section less detailed than Kashmiri', 'May require supplement for depth'],
    verdict: 'Recommended for balanced preparation, especially if math is weak.',
  },
  kashmiri: {
    title: 'Everyday Science',
    author: 'Dr. Akram Kashmiri',
    pros: ['Classic text with academic depth', 'Excellent for Science portion', 'Detailed process explanations'],
    cons: ['Less optimized for new Ability section', 'Overwhelming for quick revision'],
    verdict: 'Use for Science depth; pair with Shafiq for Ability.',
  },
}

const books = [
  { title: 'General Science & Ability', author: 'Mian Shafiq (JWT)', type: 'Primary', note: 'Market leader; best balance for both sections' },
  { title: 'Everyday Science', author: 'Dr. Akram Kashmiri', type: 'Reference', note: 'Use for Science depth and process diagrams' },
  { title: 'Quantitative Aptitude', author: 'R.S. Aggarwal', type: 'Ability Drills', note: 'For rigorous math practice and shortcuts' },
  { title: 'A Modern Approach to Logical Reasoning', author: 'R.S. Aggarwal', type: 'Reasoning', note: 'For logical and analytical reasoning drills' },
]

const onlineResources = [
  { name: 'Khan Academy Science', type: 'Course', description: 'Physics, biology, chemistry playlists for concept clarity' },
  { name: 'CrashCourse Science Playlists', type: 'YouTube', description: '10-min videos on vaccines, climate, physics processes' },
  { name: 'Quantitative Aptitude Practice (Indiabix)', type: 'Website', description: 'Free drills for percentages, ratios, time-distance' },
  { name: 'Logical Reasoning Practice (PrepInsta)', type: 'Website', description: 'Sequences, analogies, data interpretation' },
]

const studyPlan = [
  { title: 'Weeks 1-4: Science Foundation', detail: 'Cover physical + biological sciences from Shafiq/Kashmiri; draw process diagrams (photosynthesis, vaccine mechanism).' },
  { title: 'Weeks 5-6: Environmental & Food', detail: 'Focus on climate change, pandemics, nutrition; integrate with Current Affairs examples.' },
  { title: 'Weeks 7-8: Quantitative Drills', detail: 'Daily math practice (50 problems/day): percentages, ratios, profit/loss, time-distance.' },
  { title: 'Weeks 9-10: Reasoning Mastery', detail: 'Logical reasoning (sequences, analogies) + analytical (data interpretation, graphs).' },
  { title: 'Weeks 11-12: Past Papers', detail: 'Solve 10 years of GSA papers under timed conditions; identify weak areas and drill.' },
]

const commonMistakes = [
  { mistake: 'Treating GSA as "general knowledge"', fix: 'GSA is NOT current affairs. Focus on scientific processes and quantitative rigor, not news memorization.' },
  { mistake: 'Skipping Ability section drills', fix: 'Arts students often neglect math. Daily quantitative practice (30 min) is mandatory.' },
  { mistake: 'No process diagrams in Science', fix: 'Draw flowcharts for how vaccines work, photosynthesis steps, greenhouse effect—examiners reward clarity.' },
  { mistake: 'Ignoring data interpretation', fix: 'Analytical reasoning now includes tables/graphs. Practice reading charts under time pressure.' },
  { mistake: 'Using outdated books', fix: 'Shafiq updates frequently to match FPSC syllabus changes. Use latest edition or online updates.' },
]

const scoringStrategy = {
  target: '75-85+ marks',
  rationale: 'GSA is the ONLY compulsory paper where 100% scoring is possible (no subjectivity). Research confirms it "allows for mathematical certainty in scoring."',
  tactics: [
    'Prioritize Science section (60 marks) for quick wins—memorize processes with diagrams.',
    'Drill quant daily: arts students can master basic math shortcuts in 8 weeks.',
    'Logical reasoning is pattern recognition—solve 500+ problems to internalize.',
    'Data interpretation: practice reading tables/graphs in 30 seconds or less.',
    'Use flowcharts and bullet points in answers for clarity (even in descriptive questions).',
  ],
}

const synergy = {
  helps: ['Essay (climate, science, health topics)', 'Current Affairs (COVID, climate summits, tech)', 'Environmental Science optional', 'Interview (logical articulation)'],
  pairs: ['Environmental Science (direct overlap)', 'Any science optional (Biology, Chemistry)', 'Current Affairs (tech + health news)'],
}

const sampleQuestions = [
  { type: 'Science', question: 'Explain how mRNA vaccines work (COVID-19).', hint: 'Process flow: mRNA → ribosomes → spike protein → immune response → memory cells' },
  { type: 'Science', question: 'What is the greenhouse effect? Name three greenhouse gases.', hint: 'CO2, CH4, N2O; explain heat trapping mechanism with diagram' },
  { type: 'Quant', question: 'A car travels 120 km in 2 hours. What is its speed in m/s?', hint: '120 km/2 hr = 60 km/hr = 60×1000/3600 = 16.67 m/s' },
  { type: 'Logical', question: 'Complete the sequence: 2, 6, 12, 20, 30, __?', hint: 'Pattern: +4, +6, +8, +10 → next is +12 → 42' },
  { type: 'Analytical', question: 'A table shows exports from 2020-2024. Which year had highest growth rate?', hint: 'Calculate % change for each year; identify peak' },
]

const weeklyDrillSchedule = {
  science: 'Mon-Wed: Read 10 pages, draw 3 process diagrams, write 5 bullet-point explanations',
  ability: 'Thu-Fri: Solve 50 quant problems, 20 logical reasoning, 10 data interpretation',
  revision: 'Sat: Review flashcards (100 science facts), redo weak quant problems',
  testing: 'Sun: Full-length mock GSA paper (100 marks, 3 hours)',
}
</script>

<template>
  <div class="bg-clean min-h-screen">
    <UContainer class="py-16">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <h1 class="text-4xl font-bold mb-2">{{ paperMeta.name }}</h1>
            <div class="flex flex-wrap items-center gap-3 text-sm">
              <span class="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">{{ paperMeta.marks }} Marks</span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{{ paperMeta.position }}</span>
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">High-Scoring Anchor</span>
            </div>
          </div>
          <div class="text-right">
            <div class="text-green-600 dark:text-green-400 font-semibold">
              {{ paperMeta.scoringPotential }}
            </div>
            <div class="text-sm text-gray-500">Pass: {{ paperMeta.passThreshold }}/{{ paperMeta.marks }}</div>
          </div>
        </div>

        <!-- Opportunity Banner -->
        <div class="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-xl p-5 mb-8">
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-trophy" class="text-green-600 dark:text-green-400 text-2xl mt-1 flex-shrink-0" />
            <div>
              <p class="font-bold text-green-800 dark:text-green-200 text-lg mb-2">✨ The 100% Scoring Opportunity</p>
              <p class="text-sm text-green-700 dark:text-green-300 mb-2">
                Research confirms: <strong>"GSA is unique among compulsory subjects because it allows for mathematical certainty in scoring. 
                A candidate can theoretically score 100%, unlike in subjective papers."</strong>
              </p>
              <p class="text-sm text-green-700 dark:text-green-300">
                This is your merit-list anchor. While Essay and English Precis are subjective, GSA rewards process diagrams, 
                quantitative accuracy, and logical rigor. Arts students can master the Ability section in 8-10 weeks with daily drills.
              </p>
            </div>
          </div>
        </div>

        <!-- Paper Sections -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-6">Paper Structure (100 Marks)</h2>
          <div class="space-y-4">
            <div
              v-for="section in sections"
              :key="section.name"
              class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div class="flex items-start justify-between gap-4 mb-2">
                <div class="font-semibold text-lg">{{ section.name }}</div>
                <span class="text-sm font-medium px-3 py-1 bg-accent/10 text-accent rounded-full whitespace-nowrap">{{ section.marks }} marks</span>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ section.description }}</p>
            </div>
          </div>
        </div>

        <!-- Science Topics -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Section I: General Science Topics</h2>
          <div class="space-y-2">
            <div
              v-for="item in scienceTopics"
              :key="item.category"
              class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-3 px-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div class="flex-1">
                <div class="font-medium">{{ item.category }}</div>
                <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">{{ item.topics }}</div>
              </div>
              <span
                :class="[
                  'text-xs px-2 py-0.5 rounded self-start sm:self-center',
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

        <!-- Ability Topics -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Section II: General Ability Topics</h2>
          <div class="space-y-2">
            <div
              v-for="item in abilityTopics"
              :key="item.category"
              class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-3 px-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div class="flex-1">
                <div class="font-medium">{{ item.category }}</div>
                <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">{{ item.topics }}</div>
              </div>
              <span
                :class="[
                  'text-xs px-2 py-0.5 rounded self-start sm:self-center',
                  item.weight === 'Very High'
                    ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                    : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
                ]"
              >
                {{ item.weight }}
              </span>
            </div>
          </div>
        </div>

        <!-- Book Debate -->
        <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">The Resource Debate: Shafiq vs. Kashmiri</h2>
          <p class="text-sm text-purple-700 dark:text-purple-300 mb-4">
            There is a longstanding debate among CSS aspirants regarding the best GSA text. Here's the strategic breakdown:
          </p>
          <div class="grid md:grid-cols-2 gap-4">
            <!-- Shafiq -->
            <div class="bg-white dark:bg-purple-950/30 rounded-lg p-4">
              <div class="font-semibold text-lg mb-1">{{ bookDebate.shafiq.title }}</div>
              <div class="text-sm text-gray-500 mb-3">by {{ bookDebate.shafiq.author }}</div>
              
              <div class="mb-3">
                <div class="text-sm font-medium text-green-700 dark:text-green-300 mb-1">Pros:</div>
                <ul class="text-xs space-y-1">
                  <li v-for="pro in bookDebate.shafiq.pros" :key="pro" class="flex items-start gap-2">
                    <UIcon name="i-lucide-check" class="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{{ pro }}</span>
                  </li>
                </ul>
              </div>
              
              <div class="mb-3">
                <div class="text-sm font-medium text-red-700 dark:text-red-300 mb-1">Cons:</div>
                <ul class="text-xs space-y-1">
                  <li v-for="con in bookDebate.shafiq.cons" :key="con" class="flex items-start gap-2">
                    <UIcon name="i-lucide-x" class="text-red-500 mt-0.5 flex-shrink-0" />
                    <span>{{ con }}</span>
                  </li>
                </ul>
              </div>
              
              <div class="p-2 bg-green-100 dark:bg-green-900/30 rounded text-xs text-green-800 dark:text-green-200">
                <strong>Verdict:</strong> {{ bookDebate.shafiq.verdict }}
              </div>
            </div>

            <!-- Kashmiri -->
            <div class="bg-white dark:bg-purple-950/30 rounded-lg p-4">
              <div class="font-semibold text-lg mb-1">{{ bookDebate.kashmiri.title }}</div>
              <div class="text-sm text-gray-500 mb-3">by {{ bookDebate.kashmiri.author }}</div>
              
              <div class="mb-3">
                <div class="text-sm font-medium text-green-700 dark:text-green-300 mb-1">Pros:</div>
                <ul class="text-xs space-y-1">
                  <li v-for="pro in bookDebate.kashmiri.pros" :key="pro" class="flex items-start gap-2">
                    <UIcon name="i-lucide-check" class="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{{ pro }}</span>
                  </li>
                </ul>
              </div>
              
              <div class="mb-3">
                <div class="text-sm font-medium text-red-700 dark:text-red-300 mb-1">Cons:</div>
                <ul class="text-xs space-y-1">
                  <li v-for="con in bookDebate.kashmiri.cons" :key="con" class="flex items-start gap-2">
                    <UIcon name="i-lucide-x" class="text-red-500 mt-0.5 flex-shrink-0" />
                    <span>{{ con }}</span>
                  </li>
                </ul>
              </div>
              
              <div class="p-2 bg-blue-100 dark:bg-blue-900/30 rounded text-xs text-blue-800 dark:text-blue-200">
                <strong>Verdict:</strong> {{ bookDebate.kashmiri.verdict }}
              </div>
            </div>
          </div>
        </div>

        <!-- Study Plan -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">12-Week Mastery Plan</h2>
          <div class="space-y-3">
            <div v-for="item in studyPlan" :key="item.title" class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="font-medium mb-1">{{ item.title }}</div>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ item.detail }}</p>
            </div>
          </div>
        </div>

        <!-- Weekly Drill Schedule -->
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Weekly Drill Schedule</h2>
          <div class="space-y-3">
            <div class="flex items-start gap-3 p-3 bg-white dark:bg-blue-950/30 rounded-lg">
              <div class="px-2 py-1 bg-blue-200 dark:bg-blue-800 text-blue-700 dark:text-blue-300 rounded font-bold text-xs">MON-WED</div>
              <div class="text-sm">{{ weeklyDrillSchedule.science }}</div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-white dark:bg-blue-950/30 rounded-lg">
              <div class="px-2 py-1 bg-green-200 dark:bg-green-800 text-green-700 dark:text-green-300 rounded font-bold text-xs">THU-FRI</div>
              <div class="text-sm">{{ weeklyDrillSchedule.ability }}</div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-white dark:bg-blue-950/30 rounded-lg">
              <div class="px-2 py-1 bg-yellow-200 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300 rounded font-bold text-xs">SAT</div>
              <div class="text-sm">{{ weeklyDrillSchedule.revision }}</div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-white dark:bg-blue-950/30 rounded-lg">
              <div class="px-2 py-1 bg-red-200 dark:bg-red-800 text-red-700 dark:text-red-300 rounded font-bold text-xs">SUN</div>
              <div class="text-sm">{{ weeklyDrillSchedule.testing }}</div>
            </div>
          </div>
        </div>

        <!-- Scoring Strategy -->
        <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-8">
          <h2 class="text-xl font-semibold mb-3">Scoring Strategy: Target {{ scoringStrategy.target }}</h2>
          <p class="text-sm text-green-700 dark:text-green-300 mb-4">
            <strong>Rationale:</strong> {{ scoringStrategy.rationale }}
          </p>
          <div class="space-y-2">
            <div
              v-for="(tactic, idx) in scoringStrategy.tactics"
              :key="idx"
              class="flex items-start gap-3 p-3 bg-white dark:bg-green-950/30 rounded-lg"
            >
              <div class="w-6 h-6 bg-green-200 dark:bg-green-800 text-green-700 dark:text-green-300 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                {{ idx + 1 }}
              </div>
              <div class="text-sm text-green-800 dark:text-green-200">{{ tactic }}</div>
            </div>
          </div>
        </div>

        <!-- Sample Questions -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Sample Questions & Hints</h2>
          <div class="space-y-3">
            <div
              v-for="(q, idx) in sampleQuestions"
              :key="idx"
              class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div class="flex items-center gap-2 mb-2">
                <span
                  :class="[
                    'text-xs px-2 py-0.5 rounded font-medium',
                    q.type === 'Science' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' :
                    q.type === 'Quant' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                    q.type === 'Logical' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' :
                    'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
                  ]"
                >
                  {{ q.type }}
                </span>
              </div>
              <div class="font-medium text-sm mb-1">{{ q.question }}</div>
              <div class="text-xs text-gray-500 italic">Hint: {{ q.hint }}</div>
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
                    : book.type === 'Reference'
                      ? 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                      : book.type === 'Ability Drills'
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        : 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
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
                :name="resource.type === 'Course' ? 'i-lucide-graduation-cap' : resource.type === 'YouTube' ? 'i-lucide-youtube' : 'i-lucide-globe'"
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

        <!-- Synergy -->
        <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6 mb-8">
          <h2 class="text-xl font-semibold mb-3">Subject Synergy</h2>
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <h3 class="font-medium text-purple-800 dark:text-purple-200 mb-2">Helps with Compulsories</h3>
              <ul class="text-sm space-y-1">
                <li v-for="item in synergy.helps" :key="item" class="flex items-center gap-2">
                  <UIcon name="i-lucide-arrow-right" class="text-purple-500" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-medium text-purple-800 dark:text-purple-200 mb-2">Best Paired With</h3>
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
          <UButton to="/prep/english-precis" variant="outline" icon="i-lucide-arrow-left">
            English Precis Guide
          </UButton>
          <UButton to="/subjects/environmental-science" variant="outline" icon="i-lucide-leaf" trailing>
            Environmental Science (Overlap)
          </UButton>
          <UButton to="/syllabus/compulsory" icon="i-lucide-book-open">
            All Compulsory Papers
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>
