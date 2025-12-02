<template>
  <div class="bg-clean min-h-screen">
    <!-- Header -->
    <div class="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <UContainer class="py-12">
        <h1 class="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
          Compulsory Subjects - Complete Guide
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mb-6">
          6 compulsory papers worth 600 marks. These subjects are the primary filtration stage 
          where the majority of candidates fail. Master them first.
        </p>
        
        <!-- Quick Stats -->
        <div class="flex flex-wrap gap-6 text-sm">
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-book-open" class="w-5 h-5 text-accent" />
            <span class="text-gray-600 dark:text-gray-400">6 Papers</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-target" class="w-5 h-5 text-accent" />
            <span class="text-gray-600 dark:text-gray-400">600 Total Marks</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-percent" class="w-5 h-5 text-accent" />
            <span class="text-gray-600 dark:text-gray-400">40% Passing Required</span>
          </div>
        </div>
      </UContainer>
    </div>

    <UContainer class="py-8">
      <!-- Warning -->
      <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-8">
        <div class="flex items-start gap-3">
          <UIcon name="i-lucide-alert-triangle" class="text-red-600 dark:text-red-400 text-xl flex-shrink-0 mt-1" />
          <div>
            <h3 class="font-semibold text-red-800 dark:text-red-200 mb-2">Critical Information</h3>
            <p class="text-red-700 dark:text-red-300 text-sm">
              You must score at least <strong>40% (40 marks)</strong> in EACH compulsory paper to pass. 
              Failing even one compulsory paper means failing the entire CSS exam, regardless of your 
              performance in other subjects.
            </p>
          </div>
        </div>
      </div>

      <!-- Subject Cards -->
      <div class="space-y-8">
        <!-- English Essay -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
          <div class="p-6 bg-red-50 dark:bg-red-900/20 border-b border-red-200 dark:border-red-800">
            <div class="flex items-start justify-between">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">HIGHEST FAILURE</span>
                  <span class="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded">100 marks</span>
                </div>
                <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">English Essay</h2>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Pass Rate: ~10% | Difficulty: Very High</p>
              </div>
            </div>
          </div>
          <div class="p-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h3 class="font-semibold mb-3">Syllabus Coverage</h3>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Write ONE essay from 10 given topics</li>
                  <li>• Topics cover: socio-economic, political, philosophical, scientific themes</li>
                  <li>• Length: 2500-3000 words minimum</li>
                  <li>• Time: 3 hours</li>
                </ul>
              </div>
              <div>
                <h3 class="font-semibold mb-3">Key Skills Tested</h3>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Thesis statement formulation</li>
                  <li>• Logical argumentation</li>
                  <li>• Coherence and cohesion</li>
                  <li>• Critical analysis</li>
                  <li>• Language proficiency</li>
                </ul>
              </div>
            </div>
            <div class="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 class="font-semibold mb-2">Recommended Books</h3>
              <div class="grid md:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div>• High Scoring CSS Essays - Abrahim Shah</div>
                <div>• Better Writing Now - Francine Galko</div>
                <div>• How to Write Good Essays - Lauren Starkey</div>
                <div>• Dawn Editorials (daily reading)</div>
              </div>
            </div>
            <div class="mt-4">
              <NuxtLink to="/prep/essay" class="text-accent hover:underline text-sm font-medium">
                → View Complete Essay Writing Guide
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- English Precis & Composition -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
          <div class="p-6 bg-orange-50 dark:bg-orange-900/20 border-b border-orange-200 dark:border-orange-800">
            <div class="flex items-start justify-between">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded">HIGH FAILURE</span>
                  <span class="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded">100 marks</span>
                </div>
                <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">English Precis & Composition</h2>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Pass Rate: ~25% | Difficulty: High</p>
              </div>
            </div>
          </div>
          <div class="p-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h3 class="font-semibold mb-3">Syllabus Breakdown</h3>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><strong>Précis Writing (20 marks):</strong> Condense passage to 1/3rd length</li>
                  <li><strong>Reading Comprehension (20 marks):</strong> Answer questions from text</li>
                  <li><strong>Grammar (20 marks):</strong> Sentence correction, tenses</li>
                  <li><strong>Vocabulary (20 marks):</strong> Synonyms, antonyms, pair of words</li>
                  <li><strong>Translation/Composition (20 marks):</strong> Urdu to English, idioms</li>
                </ul>
              </div>
              <div>
                <h3 class="font-semibold mb-3">Common Mistakes</h3>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Assuming English is "good enough"</li>
                  <li>• Ignoring advanced vocabulary (GRE/SAT level)</li>
                  <li>• Not practicing précis daily</li>
                  <li>• Weak grammar fundamentals</li>
                </ul>
              </div>
            </div>
            <div class="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 class="font-semibold mb-2">Recommended Books</h3>
              <div class="grid md:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div>• High School English Grammar - Wren & Martin</div>
                <div>• Exploring the World of English - Saadat Ali Shah</div>
                <div>• English Grammar in Use - Raymond Murphy</div>
                <div>• Practical English Usage - Michael Swan</div>
              </div>
            </div>
          </div>
        </div>

        <!-- General Science & Ability -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
          <div class="p-6 bg-green-50 dark:bg-green-900/20 border-b border-green-200 dark:border-green-800">
            <div class="flex items-start justify-between">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded">HIGH SCORING</span>
                  <span class="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded">100 marks</span>
                </div>
                <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">General Science & Ability</h2>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Pass Rate: ~35% | Difficulty: Medium</p>
              </div>
            </div>
          </div>
          <div class="p-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h3 class="font-semibold mb-3">Section I: General Science (60 marks)</h3>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Physical Sciences: Astronomy, Physics basics</li>
                  <li>• Biological Sciences: Human body, diseases</li>
                  <li>• Environmental Science: Climate, pollution</li>
                  <li>• Food Science: Nutrition, preservation</li>
                  <li>• Information Technology: Basics of computers</li>
                </ul>
              </div>
              <div>
                <h3 class="font-semibold mb-3">Section II: General Ability (40 marks)</h3>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Quantitative Ability: Basic math, percentages</li>
                  <li>• Logical Reasoning: Patterns, sequences</li>
                  <li>• Analytical Reasoning: Data interpretation</li>
                  <li>• Mental Ability: IQ-type questions</li>
                </ul>
              </div>
            </div>
            <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 class="font-semibold mb-2 text-blue-800 dark:text-blue-200">The Resource Debate: Shafiq vs Kashmiri</h3>
              <div class="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p class="font-medium text-blue-700 dark:text-blue-300">Mian Shafiq (JWT)</p>
                  <p class="text-blue-600 dark:text-blue-400">Better for "Ability" section, updated frequently, recommended for arts students</p>
                </div>
                <div>
                  <p class="font-medium text-blue-700 dark:text-blue-300">Dr. Akram Kashmiri</p>
                  <p class="text-blue-600 dark:text-blue-400">Better for "Science" portion, more academic depth, classic choice</p>
                </div>
              </div>
            </div>
            <div class="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 class="font-semibold mb-2">Recommended Books</h3>
              <div class="grid md:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div>• General Science & Ability - Mian Shafiq (JWT)</div>
                <div>• Everyday Science - Dr. Akram Kashmiri</div>
                <div>• Caravan General Science</div>
                <div>• YouTube: Study River GSA Course</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Current Affairs -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
          <div class="p-6 bg-blue-50 dark:bg-blue-900/20 border-b border-blue-200 dark:border-blue-800">
            <div class="flex items-start justify-between">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="px-2 py-1 bg-blue-500 text-white text-xs font-bold rounded">DYNAMIC</span>
                  <span class="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded">100 marks</span>
                </div>
                <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Current Affairs</h2>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Pass Rate: ~40% | Difficulty: Medium</p>
              </div>
            </div>
          </div>
          <div class="p-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h3 class="font-semibold mb-3">Key Areas</h3>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Pakistan's internal politics & economy</li>
                  <li>• US-China relations & great power competition</li>
                  <li>• Middle East crisis & regional dynamics</li>
                  <li>• Climate change & global challenges</li>
                  <li>• International organizations (UN, IMF, WB)</li>
                </ul>
              </div>
              <div>
                <h3 class="font-semibold mb-3">Study Method</h3>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Maintain issue-wise registers</li>
                  <li>• For each issue: Summary, Causes, Impacts, Solutions</li>
                  <li>• Include 10-15 quotable stats per topic</li>
                  <li>• Update data monthly from Economic Survey</li>
                </ul>
              </div>
            </div>
            <div class="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 class="font-semibold mb-2">Essential Sources</h3>
              <div class="grid md:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div>• Jahangir's World Times (Monthly) - Primary</div>
                <div>• Dawn Newspaper (Daily)</div>
                <div>• Foreign Affairs Magazine</div>
                <div>• The Economist</div>
                <div>• IPRI & PIDE Reports</div>
                <div>• Economic Survey of Pakistan</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pakistan Affairs -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
          <div class="p-6 bg-purple-50 dark:bg-purple-900/20 border-b border-purple-200 dark:border-purple-800">
            <div class="flex items-start justify-between">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="px-2 py-1 bg-purple-500 text-white text-xs font-bold rounded">OVERLAPS WITH CA</span>
                  <span class="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded">100 marks</span>
                </div>
                <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Pakistan Affairs</h2>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Pass Rate: ~45% | Difficulty: Medium</p>
              </div>
            </div>
          </div>
          <div class="p-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h3 class="font-semibold mb-3">Syllabus Areas</h3>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Historical foundation (1857-1947)</li>
                  <li>• Constitutional development (1956, 1962, 1973)</li>
                  <li>• Political developments & democracy</li>
                  <li>• Foreign policy & diplomacy</li>
                  <li>• Economy & social issues</li>
                  <li>• Contemporary challenges</li>
                </ul>
              </div>
              <div>
                <h3 class="font-semibold mb-3">Trend Shift</h3>
                <div class="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg text-sm">
                  <p class="text-yellow-700 dark:text-yellow-300">
                    <strong>Important:</strong> Questions have shifted from pure history to 
                    "current issues with historical context." Example: "Evolution of Democracy 
                    in Pakistan" rather than just "Events of 1958."
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 class="font-semibold mb-2">Recommended Books</h3>
              <div class="grid md:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div>• Pakistan: A Hard Country - Anatol Lieven</div>
                <div>• Foreign Policy of Pakistan - Abdul Sattar</div>
                <div>• Constitutional History - Hamid Khan</div>
                <div>• Pakistan Affairs - Ikram Rabbani</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Islamic Studies -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
          <div class="p-6 bg-teal-50 dark:bg-teal-900/20 border-b border-teal-200 dark:border-teal-800">
            <div class="flex items-start justify-between">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="px-2 py-1 bg-teal-500 text-white text-xs font-bold rounded">RELATIVELY EASIER</span>
                  <span class="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded">100 marks</span>
                </div>
                <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Islamic Studies / Ethics</h2>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Pass Rate: ~55% | Difficulty: Low-Medium</p>
              </div>
            </div>
          </div>
          <div class="p-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h3 class="font-semibold mb-3">Syllabus Areas</h3>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Quranic teachings & principles</li>
                  <li>• Seerah (Life of Prophet PBUH)</li>
                  <li>• Islamic political system</li>
                  <li>• Islamic economic system</li>
                  <li>• Human rights in Islam</li>
                  <li>• Islam & contemporary issues</li>
                </ul>
              </div>
              <div>
                <h3 class="font-semibold mb-3">Preparation Strategy</h3>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Prepare issue-based answers</li>
                  <li>• Islam & democracy</li>
                  <li>• Islam & women's rights</li>
                  <li>• Islam & science</li>
                  <li>• Islam & modern challenges</li>
                </ul>
              </div>
            </div>
            <div class="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 class="font-semibold mb-2">Recommended Books</h3>
              <div class="grid md:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div>• Islam: Its Meaning & Message - Khurshid Ahmad</div>
                <div>• Islamic Studies - Hafiz Karim Dad Chughtai</div>
                <div>• Introduction to Islam - Dr. Hamidullah</div>
                <div>• Seerat-un-Nabi - Shibli Nomani</div>
              </div>
            </div>
            <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-sm">
              <p class="text-blue-700 dark:text-blue-300">
                <strong>Note:</strong> Non-Muslim candidates can opt for "Comparative Study of Major Religions" 
                or "Ethics" instead of Islamic Studies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div class="mt-8 flex flex-wrap gap-4">
        <UButton to="/syllabus" variant="outline" icon="i-lucide-arrow-left">
          Back to Syllabus
        </UButton>
        <UButton to="/syllabus/optional" icon="i-lucide-arrow-right" trailing>
          Optional Subjects
        </UButton>
        <UButton to="/resources" variant="outline">
          Browse Resources
        </UButton>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'CSS Compulsory Subjects - Complete Syllabus Guide',
  description: 'Detailed guide to all 6 CSS compulsory subjects including English Essay, Precis, GSA, Current Affairs, Pakistan Affairs, and Islamic Studies with recommended books.',
})
</script>