<!-- pages/roadmap/index.vue -->
<script setup lang="ts">
useSeoMeta({
  title: 'CSS Preparation Roadmap - Realistic Plans for Every Aspirant',
  description: 'Honest CSS prep roadmaps for working professionals, students, and full-time aspirants. Multiple schedule options adapted to your real-world constraints.',
})

// Aspirant profiles with realistic expectations
const aspirantProfiles = [
  {
    id: 'fulltime',
    name: 'Full-Time Dropper',
    reality: 'Can dedicate 8-10 hours/day',
    challenges: ['Maintaining discipline without structure', 'Financial pressure', 'Social stigma', 'Burnout risk'],
    advantage: 'Can follow textbook timelines if disciplined',
    dailyHours: '8-10 hours',
  },
  {
    id: 'student',
    name: 'University Student',
    reality: 'Can manage 3-5 hours/day during semester',
    challenges: ['Competing priorities (exams, assignments)', 'Limited deep-work time', 'Social distractions', 'Energy depletion'],
    advantage: 'Fresh learning mindset, academic rigor habit',
    dailyHours: '3-5 hours (7-8 on weekends)',
  },
  {
    id: 'job',
    name: 'Working Professional',
    reality: 'Can realistically manage 2-3 hours/day',
    challenges: ['Job fatigue', 'Family obligations', 'Limited revision time', 'Exam leave constraints'],
    advantage: 'Financial stability, real-world perspective',
    dailyHours: '2-3 hours (5-6 on weekends)',
  },
]

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
    dailyRoutines: {
      fulltime: [
        { time: '6:00 - 8:00 AM', activity: 'English Grammar (Wren & Martin)', hours: 2 },
        { time: '9:00 - 12:00 PM', activity: 'Compulsory Subject Study', hours: 3 },
        { time: '2:00 - 5:00 PM', activity: 'Optional Subject Introduction', hours: 3 },
        { time: '6:00 - 7:00 PM', activity: 'Newspaper Reading & Notes', hours: 1 },
        { time: '8:00 - 9:00 PM', activity: 'Vocabulary Building', hours: 1 },
      ],
      student: [
        { time: '6:00 - 7:30 AM', activity: 'English Grammar + Vocabulary', hours: 1.5 },
        { time: '7:00 - 9:00 PM', activity: 'Compulsory Subject Study', hours: 2 },
        { time: '9:30 - 11:00 PM', activity: 'Optional Subject Introduction', hours: 1.5 },
        { time: 'Weekend AM', activity: 'Newspaper + Extended Study', hours: 4 },
      ],
      job: [
        { time: '5:30 - 7:00 AM', activity: 'English Grammar (Before Work)', hours: 1.5 },
        { time: '9:00 - 10:30 PM', activity: 'Compulsory Subject Study', hours: 1.5 },
        { time: 'Weekend', activity: 'Optional Subjects + Newspaper', hours: 6 },
      ],
    },
    milestones: [
      'Complete Wren & Martin grammar book (or 70% for working professionals)',
      'Read "Pakistan: A Hard Country" or equivalent',
      'Finalize 6 optional subjects (research thoroughly—no changes later)',
      'Create subject-wise topic lists',
      'Start vocabulary register (500+ words)',
    ],
    resources: [
      'High School English Grammar - Wren & Martin',
      'Pakistan: A Hard Country - Anatol Lieven',
      'Dawn Newspaper (Daily)',
      'FPSC Official Syllabus PDF',
    ],
    coachNotes: 'Reality check: Most aspirants underestimate how long grammar takes. If working, accept you\'ll need 24-30 months total, not 18.',
  },
  {
    id: 2,
    name: 'Subject Mastery',
    duration: 'Months 5-10 (Full-time) | 5-14 (Student) | 5-18 (Job)',
    color: 'purple',
    goals: [
      'Complete syllabus coverage for all subjects',
      'Create concise revision notes',
      'Join academy or online course (optional, not mandatory)',
      'Start monthly magazine reading',
      'Practice MCQs for MPT preparation',
    ],
    dailyRoutines: {
      fulltime: [
        { time: '6:00 - 9:00 AM', activity: 'Compulsory Subject Deep Study', hours: 3 },
        { time: '10:00 - 1:00 PM', activity: 'Optional Subject Study', hours: 3 },
        { time: '3:00 - 5:00 PM', activity: 'Note Making & Revision', hours: 2 },
        { time: '6:00 - 7:00 PM', activity: 'Current Affairs Update', hours: 1 },
        { time: '8:00 - 9:00 PM', activity: 'MCQ Practice (MPT Prep)', hours: 1 },
      ],
      student: [
        { time: '6:00 - 7:00 AM', activity: 'Compulsory Subject Study', hours: 1 },
        { time: '8:00 - 10:30 PM', activity: 'Optional Subject Study', hours: 2.5 },
        { time: 'Weekend', activity: 'Deep Study + Notes + Current Affairs', hours: 7 },
      ],
      job: [
        { time: '5:30 - 6:30 AM', activity: 'Compulsory Subject (Before Work)', hours: 1 },
        { time: '9:00 - 11:00 PM', activity: 'Optional Subject Study', hours: 2 },
        { time: 'Weekend', activity: 'Deep Study + Note Making + MCQs', hours: 8 },
      ],
    },
    milestones: [
      'Complete all compulsory subject books (full-time: 100%, students/job: aim for 80-90%)',
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
    coachNotes: 'Honest truth: Working professionals will need to extend this phase. Don\'t compete with droppers\' timelines—your constraint is time, not ability. Accept slower progress.',
  },
  {
    id: 3,
    name: 'Writing Intensive',
    duration: 'Months 11-14 (Full-time) | 15-20 (Student) | 19-24 (Job)',
    color: 'orange',
    goals: [
      'Master essay writing technique',
      'Practice answer writing under time',
      'Solve past 5 years papers',
      'Get essays evaluated by mentors',
      'Attempt MPT (if scheduled)',
    ],
    dailyRoutines: {
      fulltime: [
        { time: '6:00 - 9:00 AM', activity: 'Essay/Answer Writing Practice', hours: 3 },
        { time: '10:00 - 12:00 PM', activity: 'Past Paper Solving', hours: 2 },
        { time: '2:00 - 4:00 PM', activity: 'Subject Revision', hours: 2 },
        { time: '5:00 - 6:00 PM', activity: 'Essay Outline Practice', hours: 1 },
        { time: '7:00 - 8:00 PM', activity: 'Current Affairs & News', hours: 1 },
      ],
      student: [
        { time: '6:00 - 7:30 AM', activity: 'Essay Outline Practice', hours: 1.5 },
        { time: '8:00 - 10:00 PM', activity: 'Answer Writing Practice', hours: 2 },
        { time: 'Weekend', activity: 'Full Essay + Past Papers + Revision', hours: 6 },
      ],
      job: [
        { time: '5:30 - 6:30 AM', activity: 'Essay Reading/Outlines', hours: 1 },
        { time: '9:00 - 10:30 PM', activity: 'Answer Writing Practice', hours: 1.5 },
        { time: 'Weekend', activity: 'Full Essays + Past Papers', hours: 7 },
      ],
    },
    milestones: [
      'Write 20+ full-length essays (full-time) OR 15+ essays (students/job)',
      'Solve past 5-10 years papers',
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
    coachNotes: 'Critical phase. Essay writing needs DAILY practice, even 30 minutes. If you can\'t write daily due to job, extend this phase by 3-4 months. Quality > quantity.',
  },
  {
    id: 4,
    name: 'Revision & Mocks',
    duration: 'Months 15-18 (Full-time) | 21-24 (Student) | 25-30 (Job)',
    color: 'green',
    goals: [
      'Intensive revision of all subjects',
      'Full-length mock examinations',
      'Update current affairs data',
      'Build exam-day stamina',
      'Mental preparation and confidence',
    ],
    dailyRoutines: {
      fulltime: [
        { time: '6:00 - 9:00 AM', activity: 'Mock Exam / Timed Writing', hours: 3 },
        { time: '10:00 - 1:00 PM', activity: 'Subject Revision (Notes)', hours: 3 },
        { time: '3:00 - 5:00 PM', activity: 'Weak Areas Focus', hours: 2 },
        { time: '6:00 - 7:00 PM', activity: 'Latest Current Affairs', hours: 1 },
        { time: '8:00 - 9:00 PM', activity: 'Quick Revision / Flashcards', hours: 1 },
      ],
      student: [
        { time: '6:00 - 7:00 AM', activity: 'Quick Revision / Flashcards', hours: 1 },
        { time: '8:00 - 10:30 PM', activity: 'Subject Revision + Weak Areas', hours: 2.5 },
        { time: 'Weekend', activity: 'Full Mock Exam + Current Affairs', hours: 6 },
      ],
      job: [
        { time: '5:30 - 7:00 AM', activity: 'Note Revision (Before Work)', hours: 1.5 },
        { time: '9:00 - 10:30 PM', activity: 'Weak Area Focus', hours: 1.5 },
        { time: 'Weekend', activity: 'Mock Exams + Deep Revision', hours: 8 },
        { time: 'Leave Period', activity: 'Take 2-3 weeks leave before exam for intensive mocks', hours: 'Full days' },
      ],
    },
    milestones: [
      'Complete 10+ full mock exams (full-time) OR 6-8 mocks (students/job)',
      'Revise all notes 2-3 times',
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
    coachNotes: 'Working professionals: Try to negotiate 2-3 weeks leave before exam. Mock exams need uninterrupted time. If you can\'t get leave, you\'re competing at a disadvantage—be mentally prepared.',
  },
]

// Weekly schedule templates for different profiles
const weeklySchedules = {
  fulltime: [
    { day: 'Monday', focus: 'English Essay + Pakistan Affairs', hours: '8-10' },
    { day: 'Tuesday', focus: 'Current Affairs + Optional 1', hours: '8-10' },
    { day: 'Wednesday', focus: 'GSA + Optional 2', hours: '8-10' },
    { day: 'Thursday', focus: 'Islamic Studies + Optional 3', hours: '8-10' },
    { day: 'Friday', focus: 'English Precis + Review', hours: '6-8' },
    { day: 'Saturday', focus: 'Mock Test / Past Papers', hours: '6-8' },
    { day: 'Sunday', focus: 'Rest + Light Reading + Family', hours: '2-3' },
  ],
  student: [
    { day: 'Monday', focus: 'English Essay + GSA (Early Morning + Night)', hours: '3-4' },
    { day: 'Tuesday', focus: 'Pakistan Affairs + Current Affairs', hours: '3-4' },
    { day: 'Wednesday', focus: 'Optional 1 + English Precis', hours: '3-4' },
    { day: 'Thursday', focus: 'Islamic Studies + Optional 2', hours: '3-4' },
    { day: 'Friday', focus: 'Optional 3 + Review', hours: '3-4' },
    { day: 'Saturday', focus: 'Deep Study + Mock Tests + Catch-up', hours: '7-8' },
    { day: 'Sunday', focus: 'Past Papers + Newspaper + Family', hours: '5-6' },
  ],
  job: [
    { day: 'Monday', focus: 'English Essay (Morning) + Pakistan Affairs (Night)', hours: '2-3' },
    { day: 'Tuesday', focus: 'GSA (Morning) + Optional 1 (Night)', hours: '2-3' },
    { day: 'Wednesday', focus: 'Current Affairs (Morning) + Optional 2 (Night)', hours: '2-3' },
    { day: 'Thursday', focus: 'Islamic Studies (Morning) + Optional 3 (Night)', hours: '2-3' },
    { day: 'Friday', focus: 'English Precis + Review (Short Session)', hours: '2' },
    { day: 'Saturday', focus: 'Deep Study + Mock Tests (All Day)', hours: '8-10' },
    { day: 'Sunday', focus: 'Past Papers + Revision + Family Time', hours: '6-7' },
  ],
}

// Honest coaching tips
const honestTips = [
  {
    icon: 'i-lucide-clock',
    title: 'Accept Your Timeline',
    description: 'Full-time: 18 months. Student: 20-24 months. Job: 24-30 months. Don\'t compare your Chapter 3 to someone else\'s Chapter 20.',
  },
  {
    icon: 'i-lucide-pen-tool',
    title: 'Writing > Reading (Always)',
    description: 'After month 6, spend 60% of time writing. CSS rewards expression, not knowledge. Even 30 min daily writing beats 3 hours of passive reading.',
  },
  {
    icon: 'i-lucide-newspaper',
    title: 'Newspaper is Non-Negotiable',
    description: 'Read Dawn editorial + 2 news pieces daily. No exceptions. Even 20 minutes on busy days. This habit separates qualifiers from failures.',
  },
  {
    icon: 'i-lucide-notebook',
    title: 'Concise Notes or Die',
    description: 'Max 2-4 pages per topic. If you can\'t revise your notes in final month, they\'re useless. Ruthlessly summarize.',
  },
  {
    icon: 'i-lucide-users',
    title: 'Get Evaluated (Mandatory)',
    description: 'Your self-assessment is biased. Get essays checked by mentors. Budget 10-15K PKR for professional evaluation if no free mentors available.',
  },
  {
    icon: 'i-lucide-heart',
    title: 'Burnout is Real',
    description: 'Working 14 hours/day for 18 months is fantasy. Plan for rest, relationships, and recreation. Sustainable pace beats heroic sprints.',
  },
  {
    icon: 'i-lucide-target',
    title: 'Know Your Weak Subject NOW',
    description: 'Don\'t discover in final month that you hate your optional. Test all subjects in first 3 months with past papers. Switch early if needed.',
  },
  {
    icon: 'i-lucide-coins',
    title: 'Budget Realistically',
    description: 'Books (20-30K), Academy (optional, 40-100K), Evaluation (10-15K), Mock tests (5-10K). Plus opportunity cost if dropping job/studies.',
  },
]

const timelineMatrix = [
  {
    phase: 'Foundation',
    focus: 'English, vocabulary, subject selection',
    durations: {
      fulltime: 'Months 1-4',
      student: 'Months 1-6',
      job: 'Months 1-8',
    },
  },
  {
    phase: 'Subject Mastery',
    focus: 'Full syllabus coverage + note making',
    durations: {
      fulltime: 'Months 5-10',
      student: 'Months 5-14',
      job: 'Months 5-18',
    },
  },
  {
    phase: 'Writing Intensive',
    focus: 'Essay, past papers, evaluation',
    durations: {
      fulltime: 'Months 11-14',
      student: 'Months 15-20',
      job: 'Months 19-24',
    },
  },
  {
    phase: 'Revision & Mocks',
    focus: 'Mocks, data updates, memory work',
    durations: {
      fulltime: 'Months 15-18',
      student: 'Months 21-24',
      job: 'Months 25-30',
    },
  },
  {
    phase: 'Buffer & Recovery',
    focus: 'Unexpected delays, health, travel, retakes',
    durations: {
      fulltime: 'Add 4 spare weeks',
      student: 'Add 6 spare weeks',
      job: 'Add 8-10 spare weeks',
    },
  },
]

const recoveryPlaybook = [
  {
    scenario: 'University exam month blows up schedule',
    profile: 'Student',
    trigger: '3-4 weeks of internal assessments / finals',
    plan: 'Switch to maintenance mode: newspaper summaries + English drills only. Block two heavy catch-up weekends immediately after exams.',
  },
  {
    scenario: 'Corporate project with overtime',
    profile: 'Working Professional',
    trigger: '4-6 weeks of crunch with no evenings free',
    plan: 'Protect mornings for English + CA (45 mins). Shift optional subjects entirely to weekends. Apply for 5-day study leave once project ends.',
  },
  {
    scenario: 'Burnout / zero motivation',
    profile: 'All',
    trigger: 'No progress for 10 days, sleep + stress issues',
    plan: 'Take a deliberate 72-hour break. Reset with light reading, exercise, journaling. Re-enter with half-days for a week before full load.',
  },
  {
    scenario: 'Falling behind on writing practice',
    profile: 'All',
    trigger: 'Less than 1 essay/week for a month',
    plan: 'Introduce "Daily 30"—30-minute timed writing sprint every weekday morning. Full essay only on weekends until backlog resolves.',
  },
]

// Common mistakes aspirants make
const commonMistakes = [
  {
    mistake: 'Ignoring English until "later"',
    consequence: 'Then failing Essay/Precis despite good subject knowledge',
    fix: 'Start English from Day 1. Read daily, write weekly from month 1.',
  },
  {
    mistake: 'Over-focusing on 1-2 subjects',
    consequence: 'Neglecting others and failing compulsory papers',
    fix: 'Balance all subjects. Use the weekly rotation schedule above.',
  },
  {
    mistake: 'Treating CSS as a memory test',
    consequence: 'Writing answers that regurgitate facts without analysis',
    fix: 'Focus on understanding concepts. Practice analytical writing.',
  },
  {
    mistake: 'Changing optionals midway',
    consequence: 'Wasting months of preparation, starting from scratch',
    fix: 'Research thoroughly BEFORE committing. Lock subjects by month 3.',
  },
  {
    mistake: 'Making notes that are too long',
    consequence: 'Impossible to revise before exam, causing panic',
    fix: 'Max 2-4 pages per major topic. Use bullet points, not paragraphs.',
  },
  {
    mistake: 'No timed answer writing practice',
    consequence: 'Running out of time in exam, incomplete answers',
    fix: 'Practice with stopwatch from month 8. Write full papers under exam conditions.',
  },
  {
    mistake: 'Too much academy hopping',
    consequence: 'Confusion, inconsistent methodology, wasted money',
    fix: 'Choose ONE approach (academy or self-study) and commit to it.',
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
          Honest CSS Preparation Roadmaps
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mb-6">
          Multiple realistic timelines based on your life situation. A good coach tells you the truth, not fantasies. 
          Choose your profile below to see what's actually achievable.
        </p>
        
        <!-- Aspirant Profile Cards -->
        <div class="grid md:grid-cols-3 gap-4 mb-8">
          <div 
            v-for="profile in aspirantProfiles" 
            :key="profile.id"
            class="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5"
          >
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">{{ profile.name }}</h3>
            <div class="space-y-2 text-sm">
              <div>
                <span class="text-gray-500">Reality:</span>
                <span class="text-gray-700 dark:text-gray-300"> {{ profile.reality }}</span>
              </div>
              <div>
                <span class="text-gray-500">Timeline:</span>
                <span class="font-medium text-accent"> {{ profile.dailyHours }}</span>
              </div>
              <div>
                <span class="text-gray-500">Advantage:</span>
                <span class="text-gray-700 dark:text-gray-300"> {{ profile.advantage }}</span>
              </div>
              <div class="pt-2 border-t border-gray-200 dark:border-gray-700">
                <div class="text-xs text-gray-500 mb-1">Key Challenges:</div>
                <ul class="text-xs space-y-1">
                  <li v-for="challenge in profile.challenges.slice(0, 2)" :key="challenge" class="text-gray-600 dark:text-gray-400">
                    • {{ challenge }}
                  </li>
                </ul>
              </div>
            </div>
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

            <!-- Daily Routines by Profile -->
            <div class="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <UIcon name="i-lucide-clock" class="w-5 h-5 text-accent" />
                Daily Routines by Aspirant Type
              </h3>
              
              <!-- Full-time Routine -->
              <div class="mb-6">
                <h4 class="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">Full-Time Dropper Schedule</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  <div 
                    v-for="slot in phase.dailyRoutines.fulltime" 
                    :key="slot.time"
                    class="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded text-xs"
                  >
                    <div class="font-medium text-gray-600 dark:text-gray-400 w-20">{{ slot.time }}</div>
                    <div class="flex-1 text-gray-700 dark:text-gray-300">{{ slot.activity }}</div>
                    <div class="text-gray-400">{{ slot.hours }}h</div>
                  </div>
                </div>
              </div>

              <!-- Student Routine -->
              <div class="mb-6">
                <h4 class="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">University Student Schedule</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  <div 
                    v-for="slot in phase.dailyRoutines.student" 
                    :key="slot.time"
                    class="flex items-center gap-2 p-2 bg-purple-50 dark:bg-purple-900/20 rounded text-xs"
                  >
                    <div class="font-medium text-gray-600 dark:text-gray-400 w-20">{{ slot.time }}</div>
                    <div class="flex-1 text-gray-700 dark:text-gray-300">{{ slot.activity }}</div>
                    <div class="text-gray-400">{{ slot.hours }}h</div>
                  </div>
                </div>
              </div>

              <!-- Job Routine -->
              <div>
                <h4 class="text-sm font-medium text-orange-600 dark:text-orange-400 mb-2">Working Professional Schedule</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  <div 
                    v-for="slot in phase.dailyRoutines.job" 
                    :key="slot.time"
                    class="flex items-center gap-2 p-2 bg-orange-50 dark:bg-orange-900/20 rounded text-xs"
                  >
                    <div class="font-medium text-gray-600 dark:text-gray-400 w-20">{{ slot.time }}</div>
                    <div class="flex-1 text-gray-700 dark:text-gray-300">{{ slot.activity }}</div>
                    <div class="text-gray-400">{{ slot.hours }}h</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Coach's Notes -->
            <div v-if="phase.coachNotes" class="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
              <div class="flex items-start gap-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <UIcon name="i-lucide-message-circle" class="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div class="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-1">Coach's Honest Take:</div>
                  <p class="text-sm text-yellow-700 dark:text-yellow-300">{{ phase.coachNotes }}</p>
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

      <!-- Weekly Schedules by Profile -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          Sample Weekly Schedules
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Weekly rotation helps balance all subjects. Pick the schedule that matches your availability.
        </p>

        <div class="grid lg:grid-cols-3 gap-6">
          <!-- Full-time Schedule -->
          <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div class="bg-blue-50 dark:bg-blue-900/30 px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <h3 class="font-semibold text-blue-900 dark:text-blue-100">Full-Time Dropper</h3>
              <p class="text-xs text-blue-600 dark:text-blue-400">8-10 hours/day</p>
            </div>
            <div class="divide-y divide-gray-100 dark:divide-gray-800">
              <div 
                v-for="day in weeklySchedules.fulltime" 
                :key="day.day"
                class="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <div class="text-sm font-medium text-gray-900 dark:text-white">{{ day.day }}</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">{{ day.focus }}</div>
                  </div>
                  <div class="text-xs text-gray-400">{{ day.hours }}h</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Student Schedule -->
          <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div class="bg-purple-50 dark:bg-purple-900/30 px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <h3 class="font-semibold text-purple-900 dark:text-purple-100">University Student</h3>
              <p class="text-xs text-purple-600 dark:text-purple-400">3-5 hours/day + weekends</p>
            </div>
            <div class="divide-y divide-gray-100 dark:divide-gray-800">
              <div 
                v-for="day in weeklySchedules.student" 
                :key="day.day"
                class="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <div class="text-sm font-medium text-gray-900 dark:text-white">{{ day.day }}</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">{{ day.focus }}</div>
                  </div>
                  <div class="text-xs text-gray-400">{{ day.hours }}h</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Job Schedule -->
          <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div class="bg-orange-50 dark:bg-orange-900/30 px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <h3 class="font-semibold text-orange-900 dark:text-orange-100">Working Professional</h3>
              <p class="text-xs text-orange-600 dark:text-orange-400">2-3 hours/day + weekends</p>
            </div>
            <div class="divide-y divide-gray-100 dark:divide-gray-800">
              <div 
                v-for="day in weeklySchedules.job" 
                :key="day.day"
                class="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <div class="text-sm font-medium text-gray-900 dark:text-white">{{ day.day }}</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">{{ day.focus }}</div>
                  </div>
                  <div class="text-xs text-gray-400">{{ day.hours }}h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Phase Timeline Snapshot -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          Phase Timeline Snapshot
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Keep this matrix handy. It shows exactly how long each phase realistically lasts for every profile.
        </p>
        <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                  <th class="px-4 py-3 text-left font-medium">Phase</th>
                  <th class="px-4 py-3 text-left font-medium">Main Focus</th>
                  <th class="px-4 py-3 text-left font-medium">Full-Time Dropper</th>
                  <th class="px-4 py-3 text-left font-medium">University Student</th>
                  <th class="px-4 py-3 text-left font-medium">Working Professional</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
                <tr 
                  v-for="row in timelineMatrix" 
                  :key="row.phase"
                  class="hover:bg-gray-50 dark:hover:bg-gray-800/50"
                >
                  <td class="px-4 py-3 font-semibold text-gray-900 dark:text-white">{{ row.phase }}</td>
                  <td class="px-4 py-3 text-gray-600 dark:text-gray-400">{{ row.focus }}</td>
                  <td class="px-4 py-3 text-blue-700 dark:text-blue-300">{{ row.durations.fulltime }}</td>
                  <td class="px-4 py-3 text-purple-700 dark:text-purple-300">{{ row.durations.student }}</td>
                  <td class="px-4 py-3 text-orange-700 dark:text-orange-300">{{ row.durations.job }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- Honest Coaching Tips -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          8 Honest Tips from a Good Coach
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          No sugar-coating. These are the truths that separate successful aspirants from the rest.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            v-for="tip in honestTips" 
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

      <!-- Setback Playbook -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          Setback Playbook
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Life will interrupt this plan. Use these pre-defined responses to bounce back fast instead of improvising in panic.
        </p>
        <div class="grid md:grid-cols-2 gap-4">
          <div 
            v-for="item in recoveryPlaybook"
            :key="item.scenario"
            class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5"
          >
            <div class="text-xs uppercase tracking-wide text-accent font-semibold mb-1">{{ item.profile }}</div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">{{ item.scenario }}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
              <strong>Trigger:</strong> {{ item.trigger }}
            </p>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-300">
              <strong>Plan:</strong> {{ item.plan }}
            </div>
          </div>
        </div>
      </section>

      <!-- Common Mistakes -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          7 Common Mistakes to Avoid
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          These pitfalls derail thousands of CSS aspirants every year. Learn from their mistakes.
        </p>
        <div class="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-xl overflow-hidden">
          <div class="divide-y divide-red-200 dark:divide-red-900/30">
            <div 
              v-for="(item, index) in commonMistakes" 
              :key="index"
              class="p-5"
            >
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {{ index + 1 }}
                </div>
                <div class="flex-1">
                  <h3 class="font-semibold text-red-800 dark:text-red-200 mb-1">
                    {{ item.mistake }}
                  </h3>
                  <p class="text-sm text-red-700 dark:text-red-300 mb-2">
                    <strong>Result:</strong> {{ item.consequence }}
                  </p>
                  <div class="flex items-start gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-900/30">
                    <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <p class="text-sm text-green-700 dark:text-green-300">
                      <strong>Fix:</strong> {{ item.fix }}
                    </p>
                  </div>
                </div>
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