<script setup lang="ts">
useSeoMeta({
  title: 'Psychology CSS Syllabus, Books & Scoring Trends 2025',
  description: 'Psychology stays high scoring for CSS if you use precise terminology. Get the FPSC syllabus, recommended books, and study plan tailored to the viva and psychological assessment.',
  ogTitle: 'CSS Psychology - Technical Yet Scoring',
  ogDescription: 'Complete Psychology strategy: syllabus breakdown, resources, scoring history, and why it boosts Essay and Interview performance.'
})

const subjectMeta = {
  name: 'Psychology',
  marks: 100,
  papers: 1,
  passThreshold: 33,
  trendStatus: 'High Scoring',
  trendColor: 'green',
  popularity: 'Popular',
  targetingRisk: 'Low-Medium',
}

const syllabus = [
  { topic: 'Introduction & Schools: Structuralism, Functionalism, Behaviorism, Gestalt, Psychoanalysis, Humanistic', weight: 'Medium' },
  { topic: 'Research Methods & Statistics: Experimental design, sampling, reliability, validity, descriptive stats', weight: 'High' },
  { topic: 'Biological Basis of Behavior: Neurons, brain structures, endocrine system, sensation & perception', weight: 'High' },
  { topic: 'Learning & Memory: Classical/operant conditioning, cognitive learning, forgetting theories', weight: 'High' },
  { topic: 'Motivation & Emotion: Drives, incentives, theories (Maslow, Herzberg, Cannon-Bard)', weight: 'Medium' },
  { topic: 'Cognition & Intelligence: Thinking, problem solving, creativity, intelligence testing, IQ controversies', weight: 'Medium' },
  { topic: 'Personality: Trait, psychoanalytic, humanistic, social-cognitive schools, assessment techniques', weight: 'Very High' },
  { topic: 'Abnormal Psychology & Therapies: DSM categories (anxiety, mood, psychotic), psychotherapy, CBT', weight: 'High' },
  { topic: 'Social Psychology: Attitudes, prejudice, group dynamics, leadership, crowd behavior', weight: 'Medium' },
  { topic: 'Applied & Pakistani Context: Educational, industrial, health psychology, FPSC psychological assessment expectations', weight: 'Very High' },
]

const books = [
  { title: 'Introduction to Psychology', author: 'Atkinson & Hilgard', type: 'Primary', note: 'Complete coverage with diagrams; best core text' },
  { title: 'Understanding Psychology', author: 'Robert Feldman', type: 'Primary', note: 'CSS-friendly narrative with Pakistani editions available' },
  { title: 'Psychology (CSS Edition)', author: 'Rakhshanda Shahnaz / JWT', type: 'CSS Guide', note: 'Condensed notes aligned with FPSC outline' },
  { title: 'Abnormal Psychology', author: 'Neil Davison', type: 'Reference', note: 'Use for clinical examples and therapy frameworks' },
  { title: 'Social Psychology', author: 'David Myers', type: 'Reference', note: 'Supports Essay and Interview answers on behavior' },
]

const onlineResources = [
  { name: 'CrashCourse Psychology', type: 'YouTube', description: '40-episode playlist covering core concepts in 10 minutes each' },
  { name: 'Simply Psychology', type: 'Website', description: 'Concise summaries of theories + researcher quotes' },
  { name: 'Khan Academy - Psychology', type: 'Course', description: 'Short concept videos with formative quizzes' },
  { name: 'APA Monitor on Psychology', type: 'Magazine', description: 'Use for contemporary examples and terminology' },
]

const studyPlan = [
  { title: 'Weeks 1-2', detail: 'Finish biological basis + learning/memory chapters. Build flashcards for terminology.' },
  { title: 'Weeks 3-4', detail: 'Cover personality, abnormal psychology, and therapies with Pakistani case studies.' },
  { title: 'Weeks 5-6', detail: 'Write 10 past paper answers, integrate diagrams, and map concepts to Essay/Interview prompts.' },
]

const commonMistakes = [
  { mistake: 'Writing generic “common sense” answers', fix: 'Use psychological vocabulary (e.g., “operant conditioning”, “cognitive schema”) every paragraph' },
  { mistake: 'Skipping diagrams and experiments', fix: 'Reference landmark studies (Pavlov, Milgram, Bandura) and draw simple process flows' },
  { mistake: 'No Pakistani examples', fix: 'Relate theories to CSS psychological assessment, national mental health stats, or education reforms' },
  { mistake: 'Ignoring statistics', fix: 'Mention DSM-5 prevalence ranges or Economic Survey health indicators for credibility' },
]

const scoringHistory = [
  { year: '2022', status: 'High', avg: '62-75', notes: 'Rewarded candidates who used scientific vocabulary' },
  { year: '2023', status: 'Stable', avg: '60-73', notes: 'Minor deductions for rote answers but still safe' },
  { year: '2024', status: 'High', avg: '58-72', notes: 'Research noted it “gives good scores but needs precise terminology”' },
]

const synergy = {
  helps: ['Essay (mental health, education, human capital topics)', 'Interview & Psychological Assessment (self-awareness, leadership traits)', 'Current Affairs (youth bulge, social cohesion)', 'Public Policy answers (health, education reforms)'],
  pairs: ['Sociology', 'Criminology', 'Public Administration', 'Gender Studies'],
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
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">Behavioral Science</span>
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
            <UIcon name="i-lucide-brain" class="text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
            <div>
              <p class="font-medium text-green-800 dark:text-green-200">Best Bridge Between Written & Viva</p>
              <p class="text-sm text-green-700 dark:text-green-300 mt-1">
                Psychology content directly supports the psychological assessment day and Interview questions on leadership,
                motivation, and stress management. Research specifically labels it “good scoring but terminology heavy”, so
                treat it like a science subject with precise labels.
              </p>
            </div>
          </div>
        </div>

        <!-- Study Plan -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Six-Week Precision Plan</h2>
          <div class="grid sm:grid-cols-3 gap-3">
            <div v-for="item in studyPlan" :key="item.title" class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm">
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
              <strong>Examiner hint:</strong> Questions often pair a theory with an applied Pakistani scenario (e.g., “Explain
              motivation theories for civil servants”). Practice converting theory → policy answer in bullet form.
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
          <UButton to="/subjects/public-administration" variant="outline" icon="i-lucide-arrow-left">
            Public Administration
          </UButton>
          <UButton to="/subjects/economics" variant="outline" icon="i-lucide-arrow-right" trailing>
            Economics
          </UButton>
          <UButton to="/exam/psychological" icon="i-lucide-brain">
            Psychological Assessment Guide
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>
