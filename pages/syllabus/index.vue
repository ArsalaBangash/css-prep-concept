<!-- pages/syllabus/index.vue -->
<script setup lang="ts">
useSeoMeta({
  title: 'CSS Exam Syllabus 2026 - Complete Subject Guide',
  description: 'Complete CSS exam syllabus for 2026 including compulsory and optional subjects, marks distribution, and strategic subject selection guide.',
})

// Compulsory subjects
const compulsorySubjects = [
  {
    name: 'English Essay',
    marks: 100,
    description: 'Write one essay from a choice of topics. Tests analytical thinking, coherent argumentation, and English proficiency.',
    tips: 'Practice weekly essays, master thesis statements, read Dawn editorials',
    difficulty: 'high',
    passRate: '~10%',
  },
  {
    name: 'English Precis & Composition',
    marks: 100,
    description: 'Précis writing, comprehension, grammar, vocabulary, idioms, and sentence correction.',
    tips: 'Complete Wren & Martin, practice daily précis, build vocabulary',
    difficulty: 'medium',
    passRate: '~25%',
  },
  {
    name: 'General Science & Ability',
    marks: 100,
    description: 'Everyday science (60 marks) and quantitative/analytical ability (40 marks).',
    tips: 'Use Mian Shafiq book, practice math daily, understand scientific concepts',
    difficulty: 'medium',
    passRate: '~35%',
  },
  {
    name: 'Current Affairs',
    marks: 100,
    description: 'National and international affairs of the last 2-3 years. Requires analysis, not just facts.',
    tips: 'Read Dawn daily, JWT monthly, maintain issue-wise notes',
    difficulty: 'medium',
    passRate: '~40%',
  },
  {
    name: 'Pakistan Affairs',
    marks: 100,
    description: 'History, politics, economy, foreign policy, and contemporary challenges of Pakistan.',
    tips: 'Read Anatol Lieven, Abdul Sattar, understand constitutional history',
    difficulty: 'medium',
    passRate: '~45%',
  },
  {
    name: 'Islamic Studies / Ethics',
    marks: 100,
    description: 'Islamic theology, history, and application to modern issues. Non-Muslims can opt for Comparative Religion.',
    tips: 'Use Khurshid Ahmad book, prepare issue-based answers',
    difficulty: 'low',
    passRate: '~55%',
  },
]

// Optional subject groups
const optionalGroups = [
  {
    id: 'I',
    name: 'Group I',
    marks: 200,
    subjects: [
      { name: 'Accountancy & Auditing', marks: 200, scoring: 'low', risk: 'high' },
      { name: 'Economics', marks: 200, scoring: 'medium', risk: 'medium' },
      { name: 'Political Science', marks: 200, scoring: 'high', risk: 'low' },
      { name: 'International Relations', marks: 200, scoring: 'variable', risk: 'medium' },
    ],
    recommendation: 'Political Science is currently the safest choice with consistent scoring.',
  },
  {
    id: 'II',
    name: 'Group II',
    marks: '200/100',
    subjects: [
      { name: 'Physics', marks: 200, scoring: 'variable', risk: 'high' },
      { name: 'Chemistry', marks: 200, scoring: 'variable', risk: 'high' },
      { name: 'Applied Mathematics', marks: 200, scoring: 'high', risk: 'medium' },
      { name: 'Pure Mathematics', marks: 200, scoring: 'high', risk: 'medium' },
      { name: 'Statistics', marks: 200, scoring: 'medium', risk: 'medium' },
      { name: 'Geology', marks: 200, scoring: 'medium', risk: 'medium' },
      { name: 'Computer Science', marks: 200, scoring: 'medium', risk: 'medium' },
      { name: 'Town Planning', marks: 100, scoring: 'medium', risk: 'low' },
      { name: 'Public Administration', marks: 100, scoring: 'medium', risk: 'low' },
    ],
    recommendation: 'Only for STEM graduates. Public Admin is popular for non-science backgrounds.',
  },
  {
    id: 'III',
    name: 'Group III',
    marks: 100,
    subjects: [
      { name: 'Business Administration', marks: 100, scoring: 'medium', risk: 'low' },
      { name: 'Governance & Public Policies', marks: 100, scoring: 'medium', risk: 'low' },
    ],
    recommendation: 'Good overlap with Public Administration and Current Affairs.',
  },
  {
    id: 'IV',
    name: 'Group IV',
    marks: 100,
    subjects: [
      { name: 'History of Pakistan & India', marks: 100, scoring: 'medium', risk: 'medium' },
      { name: 'Islamic History & Culture', marks: 100, scoring: 'medium', risk: 'low' },
      { name: 'British History', marks: 100, scoring: 'medium', risk: 'low' },
      { name: 'European History', marks: 100, scoring: 'high', risk: 'low' },
      { name: 'History of USA', marks: 100, scoring: 'low', risk: 'high' },
    ],
    recommendation: 'European History is trending as a safer alternative to US History.',
  },
  {
    id: 'V',
    name: 'Group V',
    marks: 100,
    subjects: [
      { name: 'Gender Studies', marks: 100, scoring: 'low', risk: 'high' },
      { name: 'Environmental Science', marks: 100, scoring: 'high', risk: 'low' },
    ],
    recommendation: 'Environmental Science is highly recommended - short syllabus, objective marking.',
  },
  {
    id: 'VI',
    name: 'Group VI',
    marks: 100,
    subjects: [
      { name: 'Agriculture & Forestry', marks: 100, scoring: 'medium', risk: 'low' },
      { name: 'Sociology', marks: 100, scoring: 'high', risk: 'low' },
      { name: 'Journalism & Mass Communication', marks: 100, scoring: 'medium', risk: 'low' },
      { name: 'Philosophy', marks: 100, scoring: 'medium', risk: 'medium' },
      { name: 'Psychology', marks: 100, scoring: 'medium', risk: 'low' },
      { name: 'Criminology', marks: 100, scoring: 'high', risk: 'low' },
      { name: 'Constitutional Law', marks: 100, scoring: 'medium', risk: 'low' },
      { name: 'International Law', marks: 100, scoring: 'medium', risk: 'low' },
      { name: 'Muslim Law & Jurisprudence', marks: 100, scoring: 'medium', risk: 'low' },
      { name: 'Mercantile Law', marks: 100, scoring: 'medium', risk: 'low' },
    ],
    recommendation: 'Criminology and Sociology are high-scoring favorites.',
  },
  {
    id: 'VII',
    name: 'Group VII',
    marks: 100,
    subjects: [
      { name: 'Punjabi', marks: 100, scoring: 'very high', risk: 'very low' },
      { name: 'Sindhi', marks: 100, scoring: 'very high', risk: 'very low' },
      { name: 'Pashto', marks: 100, scoring: 'very high', risk: 'very low' },
      { name: 'Balochi', marks: 100, scoring: 'very high', risk: 'very low' },
      { name: 'Persian', marks: 100, scoring: 'high', risk: 'low' },
      { name: 'Arabic', marks: 100, scoring: 'high', risk: 'low' },
      { name: 'English Literature', marks: 100, scoring: 'medium', risk: 'medium' },
      { name: 'Urdu Literature', marks: 100, scoring: 'medium', risk: 'low' },
    ],
    recommendation: 'Regional languages are the highest scoring subjects in CSS. Must-opt if fluent.',
  },
]

function getScoringColor(scoring: string) {
  const colors: Record<string, string> = {
    'very high': 'text-green-600 dark:text-green-400',
    'high': 'text-green-600 dark:text-green-400',
    'medium': 'text-yellow-600 dark:text-yellow-400',
    'low': 'text-red-600 dark:text-red-400',
    'variable': 'text-orange-600 dark:text-orange-400',
  }
  return colors[scoring] || 'text-gray-600 dark:text-gray-400'
}

function getRiskBadge(risk: string) {
  const badges: Record<string, string> = {
    'very low': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    'low': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    'medium': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    'high': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  }
  return badges[risk] || 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400'
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <!-- Header -->
    <div class="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <UContainer class="py-12">
        <h1 class="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
          CSS Exam Syllabus 2026
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mb-6">
          Complete breakdown of compulsory and optional subjects with marks distribution, 
          scoring trends, and strategic recommendations.
        </p>
        
        <!-- Quick Stats -->
        <div class="flex flex-wrap gap-6 text-sm">
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-book-open" class="w-5 h-5 text-accent" />
            <span class="text-gray-600 dark:text-gray-400">12 Papers Total</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-target" class="w-5 h-5 text-accent" />
            <span class="text-gray-600 dark:text-gray-400">1200 Written Marks</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-users" class="w-5 h-5 text-accent" />
            <span class="text-gray-600 dark:text-gray-400">300 Interview Marks</span>
          </div>
        </div>
      </UContainer>
    </div>

    <UContainer class="py-8">
      <!-- Compulsory Subjects Section -->
      <section class="mb-12">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
            <UIcon name="i-lucide-bookmark" class="w-5 h-5 text-red-600 dark:text-red-400" />
          </div>
          <div>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Compulsory Subjects</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400">600 Marks • 6 Papers • 40% Passing Required</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="subject in compulsorySubjects"
            :key="subject.name"
            class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5"
          >
            <div class="flex items-start justify-between mb-3">
              <h3 class="font-semibold text-gray-900 dark:text-white">{{ subject.name }}</h3>
              <span class="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded">
                {{ subject.marks }} marks
              </span>
            </div>
            
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {{ subject.description }}
            </p>

            <div class="flex items-center gap-2 mb-3">
              <span 
                :class="[
                  'px-2 py-0.5 text-xs font-medium rounded-full',
                  subject.difficulty === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                  subject.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                  'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                ]"
              >
                {{ subject.difficulty }} difficulty
              </span>
              <span class="text-xs text-gray-500 dark:text-gray-400">
                Pass rate: {{ subject.passRate }}
              </span>
            </div>

            <div class="pt-3 border-t border-gray-100 dark:border-gray-800">
              <p class="text-xs text-gray-500 dark:text-gray-400">
                <strong class="text-gray-700 dark:text-gray-300">Tip:</strong> {{ subject.tips }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Optional Subjects Section -->
      <section>
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
            <UIcon name="i-lucide-layers" class="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Optional Subjects</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400">600 Marks • Choose from 7 Groups • 33% Passing Required</p>
          </div>
        </div>

        <div class="space-y-6">
          <div
            v-for="group in optionalGroups"
            :key="group.id"
            class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden"
          >
            <!-- Group Header -->
            <div class="px-5 py-4 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">{{ group.name }}</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ group.marks }} marks per subject</p>
                </div>
              </div>
              <p class="mt-2 text-sm text-accent">
                💡 {{ group.recommendation }}
              </p>
            </div>

            <!-- Subjects Table -->
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    <th class="px-5 py-3">Subject</th>
                    <th class="px-5 py-3">Marks</th>
                    <th class="px-5 py-3">Scoring Trend</th>
                    <th class="px-5 py-3">Risk Level</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
                  <tr v-for="subject in group.subjects" :key="subject.name" class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td class="px-5 py-3 text-sm text-gray-900 dark:text-white">{{ subject.name }}</td>
                    <td class="px-5 py-3 text-sm text-gray-600 dark:text-gray-400">{{ subject.marks }}</td>
                    <td class="px-5 py-3 text-sm">
                      <span :class="getScoringColor(subject.scoring)">{{ subject.scoring }}</span>
                    </td>
                    <td class="px-5 py-3">
                      <span :class="['px-2 py-0.5 text-xs font-medium rounded-full', getRiskBadge(subject.risk)]">
                        {{ subject.risk }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <!-- Subject Selection CTA -->
      <div class="mt-12 bg-accent/10 dark:bg-accent/20 border border-accent/20 rounded-xl p-6">
        <div class="flex flex-col md:flex-row md:items-center gap-4">
          <div class="flex-1">
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Need help choosing subjects?</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Our subject selection guide helps you pick the optimal combination based on your background, 
              interests, and current scoring trends.
            </p>
          </div>
          <NuxtLink 
            to="/syllabus/selection"
            class="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium whitespace-nowrap"
          >
            Subject Selection Guide
            <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </div>
</template>