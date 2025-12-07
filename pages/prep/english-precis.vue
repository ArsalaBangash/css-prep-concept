<script setup lang="ts">
useSeoMeta({
  title: 'English Precis & Composition CSS Guide - Structure, Drills & Mistakes',
  description: 'English Precis & Composition is the technical filter. Learn the 1/3rd rule, grammar drills, comprehension tactics, and vocabulary strategies to avoid common pitfalls.',
  ogTitle: 'CSS English Precis & Composition - Complete Strategy',
  ogDescription: 'Master precis writing, grammar, vocabulary, and comprehension with proven drills, mistake analysis, and resource recommendations.'
})

const paperMeta = {
  name: 'English (Precis & Composition)',
  marks: 100,
  passThreshold: 33,
  failureRate: 'Very High',
  position: 'Compulsory',
}

const components = [
  { section: 'Precis Writing', marks: 20, weight: 'Very High', description: 'Condense passage to 1/3rd length; retain core message, tone, no examples' },
  { section: 'Comprehension', marks: 20, weight: 'High', description: 'Answer questions based on given text; test understanding, inference, vocabulary' },
  { section: 'Grammar & Correction', marks: 30, weight: 'Very High', description: 'Sentence correction, error identification, active-passive, direct-indirect' },
  { section: 'Vocabulary', marks: 30, weight: 'Very High', description: 'Synonyms, antonyms, pair of words, idioms, one-word substitutions (GRE/SAT level)' },
]

const precisRules = [
  { rule: '1/3rd Length Rule', detail: 'If passage is 300 words, precis must be ~100 words (±5%). Exceeding loses marks.' },
  { rule: 'Same Tone & Voice', detail: 'Keep original tone (analytical, persuasive, narrative). Use 3rd person, past tense if needed.' },
  { rule: 'No Examples/Illustrations', detail: 'Strip out anecdotes, quotes, examples. Keep only core argument or message.' },
  { rule: 'No Direct Quotations', detail: 'Paraphrase everything. Never use "the author says..." or quotation marks.' },
  { rule: 'Title Required', detail: 'Give a clear, concise title (3-6 words) summarizing the passage theme.' },
  { rule: 'Draft Count', detail: 'Write on alternate lines for clarity. Examiner expects rough + final draft.' },
]

const books = [
  { title: 'High School English Grammar & Composition', author: 'Wren & Martin', type: 'Primary', note: 'Bible for grammar rules; must-read for correction section' },
  { title: 'Exploring the World of English', author: 'Saadat Ali Shah', type: 'CSS Guide', note: 'Local favorite with CSS-specific precis, vocab, and drills' },
  { title: 'Practical English Usage', author: 'Michael Swan', type: 'Reference', note: 'For nuanced grammar doubts and advanced correction' },
  { title: 'English Grammar in Use', author: 'Raymond Murphy', type: 'Reference', note: 'Practical exercises for grammar mastery' },
  { title: 'Word Power Made Easy', author: 'Norman Lewis', type: 'Vocabulary', note: 'GRE/SAT-level vocab building with etymology' },
]

const onlineResources = [
  { name: 'JWT English Past Papers', type: 'Website', description: '10 years of CSS Precis papers with model answers' },
  { name: 'Vocabulary.com', type: 'Tool', description: 'Adaptive vocabulary drills with context and quizzes' },
  { name: 'Grammarly Blog', type: 'Website', description: 'Grammar rules, idioms, and correction techniques' },
  { name: 'CSS Point Precis Bank', type: 'Website', description: 'Practice passages with solutions and word counts' },
]

const studyPlan = [
  { title: 'Daily Routine (3-6 months)', detail: '1 precis, 20 grammar corrections, 30 vocab words, 1 comprehension passage' },
  { title: 'Week 1-4: Foundations', detail: 'Finish Wren & Martin grammar; build vocab list of 500 words; practice 10 precis' },
  { title: 'Week 5-8: Drills', detail: 'Daily timed precis (15 min); correction drills (50/day); idioms and pair-of-words' },
  { title: 'Week 9-12: Past Papers', detail: 'Solve 10 years of past papers under exam conditions; self-evaluate with model answers' },
]

const commonMistakes = [
  { mistake: 'Exceeding 1/3rd word limit', fix: 'Practice counting words. If passage is 270 words, target 90 (80-95 range acceptable).' },
  { mistake: 'Using first-person or changing tone', fix: 'Always write in 3rd person. If passage is serious, keep precis serious; if persuasive, stay persuasive.' },
  { mistake: 'Including examples from passage', fix: 'Strip all illustrations. Only keep the main argument or thesis statement.' },
  { mistake: 'Skipping Wren & Martin basics', fix: 'Even if you're fluent, review tenses, voice, narration rules—examiners expect technical accuracy.' },
  { mistake: 'Ignoring GRE/SAT-level vocabulary', fix: 'CSS vocab questions come from advanced lists. Use Exploring the World of English or Norman Lewis.' },
  { mistake: 'No title for precis', fix: 'Always provide a 3-6 word title summarizing the passage theme.' },
]

const vocabularyTopics = [
  'Synonyms & Antonyms (GRE/SAT level)',
  'Pair of Words (e.g., accept/except, affect/effect)',
  'Idioms & Phrases (e.g., "a blessing in disguise")',
  'One-word Substitutions (e.g., "omnipotent" = all-powerful)',
  'Confusing Words (e.g., disinterested vs. uninterested)',
]

const grammarTopics = [
  'Tenses (Present, Past, Future; Perfect, Continuous)',
  'Active & Passive Voice',
  'Direct & Indirect Speech (Narration)',
  'Subject-Verb Agreement',
  'Prepositions & Conjunctions',
  'Articles (a, an, the) Usage',
  'Error Identification & Sentence Correction',
]

const samplePrecisDrill = {
  passage: 'Democracy is not just a form of government; it is a way of life. It demands that citizens actively participate in decision-making, respect diverse opinions, and hold their representatives accountable. Without an informed electorate, democracy becomes a hollow ritual. Education, therefore, is the cornerstone of a functioning democracy.',
  wordCount: 54,
  targetLength: '18 words (1/3rd)',
  modelAnswer: 'Democracy requires active citizen participation, respect for diversity, and accountability. Education is essential for an informed electorate and functional democracy.',
  modelWordCount: 19,
  title: 'Education and Democracy',
}

const synergy = {
  helps: ['Essay (vocabulary, structure, coherence)', 'Interview (articulation, fluency)', 'General Science (comprehension section)', 'All written papers (grammar, clarity)'],
  tipsForEssay: 'Use precis skills to write concise introductions and conclusions. Grammar drills ensure your essay has no technical errors.',
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
              <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full">Technical Filter</span>
            </div>
          </div>
          <div class="text-right">
            <div class="text-red-600 dark:text-red-400 font-semibold">
              {{ paperMeta.failureRate }} Failure Rate
            </div>
            <div class="text-sm text-gray-500">Pass Threshold: {{ paperMeta.passThreshold }}/{{ paperMeta.marks }}</div>
          </div>
        </div>

        <!-- Critical Warning Banner -->
        <div class="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-xl p-5 mb-8">
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-alert-circle" class="text-red-600 dark:text-red-400 text-2xl mt-1 flex-shrink-0" />
            <div>
              <p class="font-bold text-red-800 dark:text-red-200 text-lg mb-2">🚨 The Single Biggest CSS Killer</p>
              <p class="text-sm text-red-700 dark:text-red-300 mb-2">
                Research confirms: <strong>"Almost every year, a huge number of candidates fail only due to Essay or English Precis & Composition."</strong>
                Unlike Essay, this paper tests <em>technical command</em> of English with mathematical objectivity—vocabulary is GRE/SAT level, and grammar requires
                nuanced understanding of Wren & Martin rules.
              </p>
              <p class="text-sm text-red-700 dark:text-red-300">
                Many candidates neglect this paper, assuming their English is "good enough." They discover too late that CSS English demands <strong>daily drills</strong>,
                not passive fluency.
              </p>
            </div>
          </div>
        </div>

        <!-- Paper Components -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-6">Paper Structure (100 Marks)</h2>
          <div class="space-y-3">
            <div
              v-for="item in components"
              :key="item.section"
              class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div class="flex-1">
                <div class="font-semibold text-lg">{{ item.section }}</div>
                <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">{{ item.description }}</div>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-sm font-medium px-3 py-1 bg-accent/10 text-accent rounded-full">{{ item.marks }} marks</span>
                <span
                  :class="[
                    'text-xs px-2 py-0.5 rounded',
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
        </div>

        <!-- Precis Rules -->
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Precis Writing: The 6 Golden Rules</h2>
          <div class="space-y-3">
            <div
              v-for="(item, idx) in precisRules"
              :key="item.rule"
              class="flex items-start gap-4 p-3 bg-white dark:bg-blue-950/30 rounded-lg"
            >
              <div class="w-8 h-8 bg-blue-200 dark:bg-blue-800 text-blue-700 dark:text-blue-300 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                {{ idx + 1 }}
              </div>
              <div>
                <div class="font-medium text-blue-900 dark:text-blue-100">{{ item.rule }}</div>
                <div class="text-sm text-blue-700 dark:text-blue-300 mt-1">{{ item.detail }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sample Precis Drill -->
        <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Sample Precis Drill</h2>
          <div class="space-y-4">
            <div>
              <h3 class="font-medium text-green-800 dark:text-green-200 mb-2">Original Passage ({{ samplePrecisDrill.wordCount }} words)</h3>
              <p class="text-sm text-gray-700 dark:text-gray-300 italic p-3 bg-white dark:bg-green-950/30 rounded">
                "{{ samplePrecisDrill.passage }}"
              </p>
            </div>
            <div>
              <h3 class="font-medium text-green-800 dark:text-green-200 mb-2">Target: {{ samplePrecisDrill.targetLength }}</h3>
            </div>
            <div>
              <h3 class="font-medium text-green-800 dark:text-green-200 mb-2">Model Answer ({{ samplePrecisDrill.modelWordCount }} words)</h3>
              <p class="text-sm font-medium text-green-900 dark:text-green-100 p-3 bg-white dark:bg-green-950/30 rounded">
                <strong>Title:</strong> {{ samplePrecisDrill.title }}<br>
                {{ samplePrecisDrill.modelAnswer }}
              </p>
            </div>
          </div>
          <div class="mt-4 p-3 bg-green-100 dark:bg-green-900/40 rounded-lg">
            <p class="text-sm text-green-700 dark:text-green-300">
              <strong>Notice:</strong> Stripped examples, kept core message, stayed within 1/3rd limit, added title, maintained analytical tone.
            </p>
          </div>
        </div>

        <!-- Study Plan -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">12-Week Drill Schedule</h2>
          <div class="space-y-3">
            <div v-for="item in studyPlan" :key="item.title" class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="font-medium mb-1">{{ item.title }}</div>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ item.detail }}</p>
            </div>
          </div>
        </div>

        <!-- Grammar Topics -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Grammar & Correction Topics</h2>
          <div class="grid sm:grid-cols-2 gap-2">
            <div
              v-for="topic in grammarTopics"
              :key="topic"
              class="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded text-sm"
            >
              <UIcon name="i-lucide-check-circle" class="text-green-500 flex-shrink-0" />
              <span>{{ topic }}</span>
            </div>
          </div>
        </div>

        <!-- Vocabulary Topics -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Vocabulary Coverage (GRE/SAT Level)</h2>
          <div class="grid sm:grid-cols-2 gap-2">
            <div
              v-for="topic in vocabularyTopics"
              :key="topic"
              class="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded text-sm"
            >
              <UIcon name="i-lucide-book-marked" class="text-purple-500 flex-shrink-0" />
              <span>{{ topic }}</span>
            </div>
          </div>
        </div>

        <!-- Books -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Essential Books</h2>
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
                    : book.type === 'CSS Guide'
                      ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                      : book.type === 'Vocabulary'
                        ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
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
                :name="resource.type === 'Tool' ? 'i-lucide-wrench' : 'i-lucide-globe'"
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
          <h2 class="text-xl font-semibold mb-3">How This Paper Helps Other Components</h2>
          <div class="mb-4">
            <h3 class="font-medium text-purple-800 dark:text-purple-200 mb-2">Direct Support For:</h3>
            <ul class="text-sm space-y-1">
              <li v-for="item in synergy.helps" :key="item" class="flex items-center gap-2">
                <UIcon name="i-lucide-arrow-right" class="text-purple-500" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
          <div class="p-3 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
            <p class="text-sm text-purple-700 dark:text-purple-300">
              <strong>Pro Tip:</strong> {{ synergy.tipsForEssay }}
            </p>
          </div>
        </div>

        <div class="flex flex-wrap gap-4">
          <UButton to="/prep/essay" variant="outline" icon="i-lucide-pen">
            Essay Writing Guide
          </UButton>
          <UButton to="/prep/answer-writing" variant="outline" icon="i-lucide-edit">
            Answer Writing Techniques
          </UButton>
          <UButton to="/syllabus/compulsory" icon="i-lucide-book-open">
            All Compulsory Papers
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>
