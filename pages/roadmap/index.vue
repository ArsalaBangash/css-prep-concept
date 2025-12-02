<!-- pages/roadmap/index.vue -->
<script setup lang="ts">
useSeoMeta({
  title: 'CSS Preparation Roadmap - 18-Month Strategic Plan',
  description: 'Complete 18-month CSS exam preparation roadmap with phase-wise breakdown, daily routines, and milestone tracking for CSS 2026.',
})

// Preparation phases
const phases = [
  {
    id: 1,
    name: 'Foundation Building',
    duration: 'Months 1-4',
    color: 'blue',
    goals: [
      'Master English grammar fundamentals',
      'Select and finalize optional subjects',
      'Build daily newspaper reading habit',
      'Develop vocabulary systematically',
      'Understand exam pattern and syllabus',
    ],
    dailyRoutine: [
      { time: '6:00 - 8:00 AM', activity: 'English Grammar (Wren & Martin)', hours: 2 },
      { time: '9:00 - 12:00 PM', activity: 'Compulsory Subject Study', hours: 3 },
      { time: '2:00 - 5:00 PM', activity: 'Optional Subject Introduction', hours: 3 },
      { time: '6:00 - 7:00 PM', activity: 'Newspaper Reading & Notes', hours: 1 },
      { time: '8:00 - 9:00 PM', activity: 'Vocabulary Building', hours: 1 },
    ],
    milestones: [
      'Complete Wren & Martin grammar book',
      'Read "Pakistan: A Hard Country"',
      'Finalize 6 optional subjects',
      'Create subject-wise topic lists',
      'Start vocabulary register (500+ words)',
    ],
    resources: [
      'High School English Grammar - Wren & Martin',
      'Pakistan: A Hard Country - Anatol Lieven',
      'Dawn Newspaper (Daily)',
      'FPSC Official Syllabus PDF',
    ],
  },
  {
    id: 2,
    name: 'Subject Mastery',
    duration: 'Months 5-10',
    color: 'purple',
    goals: [
      'Complete syllabus coverage for all subjects',
      'Create concise revision notes',
      'Join academy or online course',
      'Start monthly magazine reading',
      'Practice MCQs for MPT preparation',
    ],
    dailyRoutine: [
      { time: '6:00 - 9:00 AM', activity: 'Compulsory Subject Deep Study', hours: 3 },
      { time: '10:00 - 1:00 PM', activity: 'Optional Subject Study', hours: 3 },
      { time: '3:00 - 5:00 PM', activity: 'Note Making & Revision', hours: 2 },
      { time: '6:00 - 7:00 PM', activity: 'Current Affairs Update', hours: 1 },
      { time: '8:00 - 9:00 PM', activity: 'MCQ Practice (MPT Prep)', hours: 1 },
    ],
    milestones: [
      'Complete all compulsory subject books',
      'Finish 4 optional subject syllabi',
      'Create 2-4 page notes per topic',
      'Read 6 months of JWT magazines',
      'Solve 2000+ MCQs for MPT',
    ],
    resources: [
      'General Science & Ability - Mian Shafiq',
      'Foreign Policy of Pakistan - Abdul Sattar',
      'Jahangir\'s World Times (Monthly)',
      'Subject-specific textbooks',
    ],
  },
  {
    id: 3,
    name: 'Writing Intensive',
    duration: 'Months 11-14',
    color: 'orange',
    goals: [
      'Master essay writing technique',
      'Practice answer writing under time',
      'Solve past 5 years papers',
      'Get essays evaluated by mentors',
      'Attempt MPT (if scheduled)',
    ],
    dailyRoutine: [
      { time: '6:00 - 9:00 AM', activity: 'Essay/Answer Writing Practice', hours: 3 },
      { time: '10:00 - 12:00 PM', activity: 'Past Paper Solving', hours: 2 },
      { time: '2:00 - 4:00 PM', activity: 'Subject Revision', hours: 2 },
      { time: '5:00 - 6:00 PM', activity: 'Essay Outline Practice', hours: 1 },
      { time: '7:00 - 8:00 PM', activity: 'Current Affairs & News', hours: 1 },
    ],
    milestones: [
      'Write 20+ full-length essays',
      'Solve all past papers (2016-2025)',
      'Get 10+ essays professionally evaluated',
      'Master précis writing technique',
      'Clear MPT with 70%+ marks',
    ],
    resources: [
      'High Scoring CSS Essays - Abrahim Shah',
      'FPSC Past Papers (2016-2025)',
      'Essay evaluation service/mentor',
      'The Economist (for essay style)',
    ],
  },
  {
    id: 4,
    name: 'Revision & Mocks',
    duration: 'Months 15-18',
    color: 'green',
    goals: [
      'Intensive revision of all subjects',
      'Full-length mock examinations',
      'Update current affairs data',
      'Build exam-day stamina',
      'Mental preparation and confidence',
    ],
    dailyRoutine: [
      { time: '6:00 - 9:00 AM', activity: 'Mock Exam / Timed Writing', hours: 3 },
      { time: '10:00 - 1:00 PM', activity: 'Subject Revision (Notes)', hours: 3 },
      { time: '3:00 - 5:00 PM', activity: 'Weak Areas Focus', hours: 2 },
      { time: '6:00 - 7:00 PM', activity: 'Latest Current Affairs', hours: 1 },
      { time: '8:00 - 9:00 PM', activity: 'Quick Revision / Flashcards', hours: 1 },
    ],
    milestones: [
      'Complete 10+ full mock exams',
      'Revise all notes 3 times',
      'Update stats from Economic Survey',
      'Memorize key dates, articles, quotes',
      'Achieve consistent mock scores',
    ],
    resources: [
      'Your own revision notes',
      'Economic Survey of Pakistan (Latest)',
      'Mock exam papers',
      'Flashcard apps (Anki)',
    ],
  },
]

// Weekly schedule template
const weeklySchedule = [
  { day: 'Monday', focus: 'English Essay + Pakistan Affairs', hours: 8 },
  { day: 'Tuesday', focus: 'Current Affairs + Optional 1', hours: 8 },
  { day: 'Wednesday', focus: 'GSA + Optional 2', hours: 8 },
  { day: 'Thursday', focus: 'Islamic Studies + Optional 3', hours: 8 },
  { day: 'Friday', focus: 'English Precis + Review', hours: 6 },
  { day: 'Saturday', focus: 'Mock Test / Past Papers', hours: 6 },
  { day: 'Sunday', focus: 'Rest + Light Reading', hours: 3 },
]

// Key tips
const keyTips = [
  {
    icon: 'i-lucide-pen-tool',
    title: 'Writing > Reading',
    description: 'After month 6, spend 60% of time on writing practice. CSS is a writing exam.',
  },
  {
    icon: 'i-lucide-newspaper',
    title: 'Daily Newspaper',
    description: 'Read Dawn for 1 hour daily. Note vocabulary, editorial arguments, and current issues.',
  },
  {
    icon: 'i-lucide-notebook',
    title: 'Concise Notes',
    description: 'Keep notes to 2-4 pages per topic. Long notes are impossible to revise.',
  },
  {
    icon: 'i-lucide-users',
    title: 'Get Evaluated',
    description: 'Have your essays checked by mentors. Self-evaluation has blind spots.',
  },
  {
    icon: 'i-lucide-brain',
    title: 'Analyze, Don\'t Memorize',
    description: 'CSS tests analysis and expression, not rote learning. Understand concepts deeply.',
  },
  {
    icon: 'i-lucide-heart',
    title: 'Mental Health',
    description: 'Take breaks, exercise, and maintain social connections. Burnout kills preparation.',
  },
]

function getPhaseColor(color: string) {
  const colors: Record<string, { bg: string; text: string; border: string }> = {
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      text: 'text-blue-600 dark:text-blue-400',
      border: 'border-blue-200 dark:border-blue-800',
    },
    purple: {
      bg: 'bg-purple-100 dark:bg-purple-900/30',
      text: 'text-purple-600 dark:text-purple-400',
      border: 'border-purple-200 dark:border-purple-800',
    },
    orange: {
      bg: 'bg-orange-100 dark:bg-orange-900/30',
      text: 'text-orange-600 dark:text-orange-400',
      border: 'border-orange-200 dark:border-orange-800',
    },
    green: {
      bg: 'bg-green-100 dark:bg-green-900/30',
      text: 'text-green-600 dark:text-green-400',
      border: 'border-green-200 dark:border-green-800',
    },
  }
  return colors[color] || colors.blue
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <!-- Header -->
    <div class="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <UContainer class="py-12">
        <h1 class="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
          18-Month Preparation Roadmap
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mb-6">
          A strategic, phase-wise plan to maximize your chances of success in CSS 2026. 
          Adapt this roadmap to your schedule and learning pace.
        </p>
        
        <!-- Timeline Overview -->
        <div class="flex flex-wrap gap-4">
          <div v-for="phase in phases" :key="phase.id" class="flex items-center gap-2">
            <div :class="['w-3 h-3 rounded-full', getPhaseColor(phase.color).bg]"></div>
            <span class="text-sm text-gray-600 dark:text-gray-400">
              Phase {{ phase.id }}: {{ phase.duration }}
            </span>
          </div>
        </div>
      </UContainer>
    </div>

    <UContainer class="py-8">
      <!-- Phases -->
      <div class="space-y-8 mb-12">
        <div
          v-for="phase in phases"
          :key="phase.id"
          :class="['bg-white dark:bg-gray-900 border rounded-xl overflow-hidden', getPhaseColor(phase.color).border]"
        >
          <!-- Phase Header -->
          <div :class="['px-6 py-4 border-b', getPhaseColor(phase.color).bg, getPhaseColor(phase.color).border]">
            <div class="flex items-center gap-3">
              <div :class="['w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg', getPhaseColor(phase.color).bg, getPhaseColor(phase.color).text]">
                {{ phase.id }}
              </div>
              <div>
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white">{{ phase.name }}</h2>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ phase.duration }}</p>
              </div>
            </div>
          </div>

          <div class="p-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <!-- Goals -->
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <UIcon name="i-lucide-target" class="w-5 h-5 text-accent" />
                  Goals
                </h3>
                <ul class="space-y-2">
                  <li v-for="goal in phase.goals" :key="goal" class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    {{ goal }}
                  </li>
                </ul>
              </div>

              <!-- Milestones -->
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <UIcon name="i-lucide-flag" class="w-5 h-5 text-accent" />
                  Milestones
                </h3>
                <ul class="space-y-2">
                  <li v-for="milestone in phase.milestones" :key="milestone" class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <UIcon name="i-lucide-circle" class="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                    {{ milestone }}
                  </li>
                </ul>
              </div>
            </div>

            <!-- Daily Routine -->
            <div class="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-clock" class="w-5 h-5 text-accent" />
                Suggested Daily Routine
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div 
                  v-for="slot in phase.dailyRoutine" 
                  :key="slot.time"
                  class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div class="text-xs font-medium text-gray-500 dark:text-gray-400 w-24">
                    {{ slot.time }}
                  </div>
                  <div class="flex-1 text-sm text-gray-700 dark:text-gray-300">
                    {{ slot.activity }}
                  </div>
                  <div class="text-xs text-gray-400">
                    {{ slot.hours }}h
                  </div>
                </div>
              </div>
            </div>

            <!-- Resources -->
            <div class="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-book-open" class="w-5 h-5 text-accent" />
                Key Resources
              </h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="resource in phase.resources" 
                  :key="resource"
                  class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {{ resource }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Weekly Schedule -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Sample Weekly Schedule
        </h2>
        <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="bg-gray-50 dark:bg-gray-800">
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Day</th>
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Focus Areas</th>
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Hours</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
                <tr v-for="day in weeklySchedule" :key="day.day" class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td class="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{{ day.day }}</td>
                  <td class="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{{ day.focus }}</td>
                  <td class="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{{ day.hours }} hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- Key Tips -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Key Preparation Tips
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div 
            v-for="tip in keyTips" 
            :key="tip.title"
            class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5"
          >
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <UIcon :name="tip.icon" class="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white mb-1">{{ tip.title }}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ tip.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <div class="bg-accent/10 dark:bg-accent/20 border border-accent/20 rounded-xl p-6 text-center">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Ready to start your journey?
        </h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Download the complete roadmap PDF or explore our curated resources.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <UButton 
            to="/resources" 
            class="bg-accent hover:bg-accent/90 text-white px-6 py-2 font-medium"
          >
            Browse Resources
          </UButton>
          <UButton 
            to="/syllabus" 
            variant="outline"
            class="border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 px-6 py-2 font-medium"
          >
            View Syllabus
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>