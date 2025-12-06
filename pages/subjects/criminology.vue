<script setup lang="ts">
useSeoMeta({
  title: 'Criminology CSS Syllabus, Books & Scoring Trends 2025',
  description: 'Complete guide to CSS Criminology: FPSC syllabus, recommended books (Larry Siegel, Farhan Khan), high scoring potential (65-80), and why it\'s a hidden gem optional.',
  ogTitle: 'CSS Criminology - High Scoring 100-Mark Hidden Gem',
  ogDescription: 'Criminology offers consistent 65-80/100 scoring with a short syllabus. Learn the preparation strategy for CSS 2025.',
})

const subjectMeta = {
  name: 'Criminology',
  marks: 100,
  papers: 1,
  passThreshold: 33,
  trendStatus: 'High Scoring',
  trendColor: 'green',
  popularity: 'Growing',
  targetingRisk: 'Very Low',
}

const syllabus = [
  { topic: 'Nature and Scope of Criminology', weight: 'Medium' },
  { topic: 'Schools of Criminology: Classical, Positivist, Chicago', weight: 'High' },
  { topic: 'Theories of Crime: Biological, Psychological, Sociological', weight: 'Very High' },
  { topic: 'Types of Crimes: White-collar, Organized, Cybercrime', weight: 'High' },
  { topic: 'Criminal Justice System in Pakistan', weight: 'Very High' },
  { topic: 'Penology: Theories of Punishment', weight: 'High' },
  { topic: 'Forensic Science Basics', weight: 'Medium' },
  { topic: 'Juvenile Delinquency', weight: 'Medium' },
  { topic: 'Victimology', weight: 'Medium' },
]

const books = [
  { title: 'Criminology', author: 'Larry J. Siegel', type: 'Primary', note: 'Comprehensive Western textbook' },
  { title: 'Criminology', author: 'Farhan Khan', type: 'Primary', note: 'CSS-specific, covers Pakistan context' },
  { title: 'Principles of Criminology', author: 'Edwin Sutherland', type: 'Reference', note: 'Classic, theoretical depth' },
  { title: 'Criminal Justice in Pakistan', author: 'Various', type: 'Reference', note: 'For local system understanding' },
]

const onlineResources = [
  { name: 'CrashCourse Sociology', type: 'YouTube', description: 'Crime & deviance episodes' },
  { name: 'JCS - Criminal Psychology', type: 'YouTube', description: 'Case studies and analysis' },
  { name: 'Oxford Bibliographies - Criminology', type: 'Website', description: 'Academic resource lists' },
]

const commonMistakes = [
  { mistake: 'Ignoring Pakistan\'s criminal justice system', fix: 'Questions on local police, courts, and prison system are frequent' },
  { mistake: 'Only memorizing theories without application', fix: 'Practice applying theories to real crime cases' },
  { mistake: 'Skipping forensic science section', fix: 'Basic forensic concepts appear regularly—don\'t skip' },
  { mistake: 'Not relating to current crime issues', fix: 'Connect to cybercrime, terrorism, and organized crime in Pakistan' },
]

const scoringHistory = [
  { year: '2022', status: 'High', avg: '65-75', notes: 'Consistent as expected' },
  { year: '2023', status: 'High', avg: '65-78', notes: 'Some scored 80+' },
  { year: '2024', status: 'High', avg: '62-75', notes: 'Slightly stricter but still good' },
]

const whyChoose = [
  { icon: 'i-lucide-trending-up', title: 'High Scoring', desc: '65-80/100 is achievable with good prep' },
  { icon: 'i-lucide-clock', title: 'Short Syllabus', desc: 'Can be covered in 2-3 months' },
  { icon: 'i-lucide-sparkles', title: 'Interesting Content', desc: 'Crime psychology, forensics, case studies' },
  { icon: 'i-lucide-shield', title: 'Low Competition', desc: 'Not as crowded as IR or Pol Science' },
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
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{{ subjectMeta.papers }} Paper</span>
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">Hidden Gem</span>
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
            <UIcon name="i-lucide-gem" class="text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
            <div>
              <p class="font-medium text-green-800 dark:text-green-200">Hidden Gem: High ROI Subject</p>
              <p class="text-sm text-green-700 dark:text-green-300 mt-1">
                Criminology offers one of the best return-on-investment ratios. Short syllabus + high scoring + interesting content. 
                Perfect as a 100-mark complement to your 200-mark anchor.
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
            Criminology studies the nature, causes, and control of criminal behavior. It covers theories of crime (from classical to modern), 
            the criminal justice system, forensic basics, and contemporary crime issues like cybercrime and terrorism.
          </p>
          <p class="text-gray-700 dark:text-gray-300">
            <strong>Best for:</strong> Candidates interested in psychology, sociology, law enforcement, or true crime. 
            If you find crime documentaries fascinating, you'll enjoy this subject.
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
                  item.weight === 'Very High' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' :
                  item.weight === 'High' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300' :
                  'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                ]"
              >
                {{ item.weight }}
              </span>
            </div>
          </div>
          
          <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p class="text-sm text-blue-700 dark:text-blue-300">
              <strong>Pro Tip:</strong> The syllabus is compact compared to 200-mark subjects. 
              A focused 2-3 month preparation with one good book can yield 70+ marks.
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
                  <span>Essay (crime, justice, social issues)</span>
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-arrow-right" class="text-blue-500" />
                  <span>Current Affairs (terrorism, cybercrime)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-medium text-blue-800 dark:text-blue-200 mb-2">Best Paired With</h3>
              <ul class="text-sm space-y-1">
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-star" class="text-yellow-500" />
                  <span><strong>Sociology</strong> (theory overlap)</span>
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-star" class="text-yellow-500" />
                  <span>Political Science (different skill set)</span>
                </li>
                <li class="flex items-center gap-2">
                  <UIcon name="i-lucide-star" class="text-yellow-500" />
                  <span>IR (balances risk)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap gap-4">
          <UButton to="/subjects/political-science" variant="outline" icon="i-lucide-arrow-left">
            Political Science
          </UButton>
          <UButton to="/subjects/environmental-science" variant="outline" icon="i-lucide-arrow-right" trailing>
            Environmental Science
          </UButton>
          <UButton to="/syllabus/selection" icon="i-lucide-compass">
            Subject Selection Guide
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>
