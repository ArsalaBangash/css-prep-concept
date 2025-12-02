<template>
  <div class="bg-clean min-h-screen">
    <!-- Header -->
    <div class="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <UContainer class="py-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium mb-4">
          <UIcon name="i-lucide-clipboard-check" />
          Stage 1 - Screening Test
        </div>
        <h1 class="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
          MPT (Mandatory Preliminary Test)
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mb-6">
          The gateway to CSS written examination. An MCQ-based screening test that filters 
          candidates before the main exam. Pass this to proceed to the written stage.
        </p>
        
        <!-- Quick Stats -->
        <div class="flex flex-wrap gap-6 text-sm">
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-file-question" class="w-5 h-5 text-accent" />
            <span class="text-gray-600 dark:text-gray-400">200 MCQs</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-clock" class="w-5 h-5 text-accent" />
            <span class="text-gray-600 dark:text-gray-400">3 Hours Duration</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-target" class="w-5 h-5 text-accent" />
            <span class="text-gray-600 dark:text-gray-400">33% Pass Marks</span>
          </div>
        </div>
      </UContainer>
    </div>

    <UContainer class="py-8">
      <!-- Key Insight -->
      <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-8">
        <div class="flex items-start gap-3">
          <UIcon name="i-lucide-info" class="text-green-600 dark:text-green-400 text-xl flex-shrink-0 mt-1" />
          <div>
            <h3 class="font-semibold text-green-800 dark:text-green-200 mb-2">Good News: MPT is Qualifying Only</h3>
            <p class="text-green-700 dark:text-green-300 text-sm">
              MPT marks are <strong>NOT added</strong> to your final merit. It's purely a screening test. 
              You just need to score 33% (66/200) to qualify. Focus on clearing it, not topping it. 
              Save your energy for the written exam where marks actually count.
            </p>
          </div>
        </div>
      </div>

      <!-- Detailed Syllabus -->
      <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-6">MPT Syllabus & Distribution</h2>
        
        <div class="space-y-4">
          <!-- English -->
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div class="flex justify-between items-center mb-3">
              <h3 class="font-semibold text-lg">English</h3>
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">20 MCQs</span>
            </div>
            <div class="grid md:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
              <div>• Synonyms & Antonyms</div>
              <div>• Sentence Correction</div>
              <div>• Fill in the Blanks</div>
              <div>• Reading Comprehension</div>
              <div>• Idioms & Phrases</div>
              <div>• One-word Substitution</div>
            </div>
          </div>

          <!-- Urdu -->
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div class="flex justify-between items-center mb-3">
              <h3 class="font-semibold text-lg">Urdu</h3>
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">20 MCQs</span>
            </div>
            <div class="grid md:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
              <div>• محاورے اور ضرب الامثال</div>
              <div>• مترادفات و متضادات</div>
              <div>• اردو ادب کی تاریخ</div>
              <div>• مشہور شعراء و ادباء</div>
              <div>• درست جملے</div>
              <div>• خالی جگہ پُر کریں</div>
            </div>
          </div>

          <!-- Current Affairs -->
          <div class="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <div class="flex justify-between items-center mb-3">
              <h3 class="font-semibold text-lg">Current Affairs</h3>
              <span class="px-3 py-1 bg-yellow-200 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300 rounded-full text-sm font-medium">40 MCQs ⭐</span>
            </div>
            <div class="grid md:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
              <div>• International Organizations (UN, IMF, WB)</div>
              <div>• Recent Summits & Conferences</div>
              <div>• Awards & Achievements</div>
              <div>• Sports Events</div>
              <div>• Science & Technology Updates</div>
              <div>• Global Political Developments</div>
              <div>• Economic News</div>
              <div>• Environmental Issues</div>
            </div>
            <p class="text-xs text-yellow-700 dark:text-yellow-300 mt-3">
              <strong>Tip:</strong> Focus on events from the last 12-18 months. Read Dawn, The News, and monthly current affairs magazines.
            </p>
          </div>

          <!-- Pakistan Affairs -->
          <div class="p-4 bg-accent/10 rounded-lg border border-accent/30">
            <div class="flex justify-between items-center mb-3">
              <h3 class="font-semibold text-lg">Pakistan Affairs</h3>
              <span class="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">40 MCQs ⭐</span>
            </div>
            <div class="grid md:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
              <div>• Pakistan Movement History</div>
              <div>• Constitutional Development</div>
              <div>• Geography of Pakistan</div>
              <div>• Economy & Resources</div>
              <div>• Foreign Policy</div>
              <div>• Important Dates & Events</div>
              <div>• Government Structure</div>
              <div>• National Symbols & Landmarks</div>
            </div>
            <p class="text-xs text-accent mt-3">
              <strong>Tip:</strong> This overlaps heavily with written exam. Master it once, benefit twice.
            </p>
          </div>

          <!-- Islamic Studies -->
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div class="flex justify-between items-center mb-3">
              <h3 class="font-semibold text-lg">Islamic Studies / Ethics</h3>
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-medium">20 MCQs</span>
            </div>
            <div class="grid md:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
              <div>• Basic Islamic Beliefs</div>
              <div>• Pillars of Islam</div>
              <div>• Life of Prophet (PBUH)</div>
              <div>• Khulafa-e-Rashideen</div>
              <div>• Famous Islamic Scholars</div>
              <div>• Islamic History</div>
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-3">
              Non-Muslim candidates attempt Ethics paper instead.
            </p>
          </div>

          <!-- General Science & Ability -->
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div class="flex justify-between items-center mb-3">
              <h3 class="font-semibold text-lg">General Science & Ability</h3>
              <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-sm font-medium">40 MCQs</span>
            </div>
            <div class="grid md:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
              <div>• Basic Physics Concepts</div>
              <div>• Chemistry Fundamentals</div>
              <div>• Biology & Human Body</div>
              <div>• Computer & IT Basics</div>
              <div>• Environmental Science</div>
              <div>• Scientific Inventions</div>
              <div>• Everyday Science</div>
              <div>• Health & Nutrition</div>
            </div>
          </div>

          <!-- Mathematics -->
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div class="flex justify-between items-center mb-3">
              <h3 class="font-semibold text-lg">Arithmetic / Mathematics</h3>
              <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 rounded-full text-sm font-medium">20 MCQs</span>
            </div>
            <div class="grid md:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
              <div>• Percentages & Ratios</div>
              <div>• Profit & Loss</div>
              <div>• Time & Work</div>
              <div>• Speed & Distance</div>
              <div>• Simple & Compound Interest</div>
              <div>• Basic Algebra</div>
              <div>• Number Series</div>
              <div>• Data Interpretation</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Passing Criteria -->
      <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4">Passing Criteria</h2>
        
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <div class="text-3xl font-bold text-green-600 dark:text-green-400">33%</div>
            <div class="text-sm text-green-700 dark:text-green-300">Minimum Pass Marks</div>
          </div>
          <div class="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">66/200</div>
            <div class="text-sm text-blue-700 dark:text-blue-300">Marks Required</div>
          </div>
          <div class="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <div class="text-3xl font-bold text-purple-600 dark:text-purple-400">0</div>
            <div class="text-sm text-purple-700 dark:text-purple-300">Negative Marking</div>
          </div>
        </div>

        <div class="space-y-2">
          <div class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
            <UIcon name="i-lucide-check-circle" class="text-green-500 mt-0.5 flex-shrink-0" />
            <span>No negative marking - attempt all questions</span>
          </div>
          <div class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
            <UIcon name="i-lucide-check-circle" class="text-green-500 mt-0.5 flex-shrink-0" />
            <span>MPT marks NOT added to final merit - qualifying only</span>
          </div>
          <div class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
            <UIcon name="i-lucide-check-circle" class="text-green-500 mt-0.5 flex-shrink-0" />
            <span>Results announced within 2-3 weeks</span>
          </div>
          <div class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
            <UIcon name="i-lucide-check-circle" class="text-green-500 mt-0.5 flex-shrink-0" />
            <span>Qualified candidates proceed to written examination</span>
          </div>
        </div>
      </div>

      <!-- Preparation Strategy -->
      <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4">Preparation Strategy</h2>
        
        <div class="space-y-4">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="font-bold text-accent">1</span>
            </div>
            <div>
              <h3 class="font-semibold mb-1">Solve Past Papers (2016-2024)</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                FPSC repeats questions. Solving past papers gives you 30-40% questions directly. 
                Available on FPSC website and various CSS prep platforms.
              </p>
            </div>
          </div>
          
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="font-bold text-accent">2</span>
            </div>
            <div>
              <h3 class="font-semibold mb-1">Focus on High-Weightage Subjects</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Current Affairs (40) + Pakistan Affairs (40) + GSA (40) = 120 MCQs (60% of paper). 
                Master these three and you're almost guaranteed to pass.
              </p>
            </div>
          </div>
          
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="font-bold text-accent">3</span>
            </div>
            <div>
              <h3 class="font-semibold mb-1">Daily Current Affairs Routine</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Read Dawn newspaper daily. Subscribe to CSS current affairs magazines. 
                Make notes of important events, dates, and figures.
              </p>
            </div>
          </div>
          
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="font-bold text-accent">4</span>
            </div>
            <div>
              <h3 class="font-semibold mb-1">Practice Time Management</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                200 MCQs in 180 minutes = 54 seconds per question. Take timed mock tests 
                to build speed. Don't spend more than 1 minute on any question.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Recommended Resources -->
      <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4">Recommended Resources</h2>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 class="font-semibold mb-2">Books</h3>
            <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Caravan General Knowledge</li>
              <li>• Dogar's Unique CSS MPT Guide</li>
              <li>• Jahangir World Times</li>
              <li>• Pakistan Affairs by Ikram Rabbani</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 class="font-semibold mb-2">Online Resources</h3>
            <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• FPSC Official Website (Past Papers)</li>
              <li>• CSS Forum MCQ Section</li>
              <li>• PakMCQs.com</li>
              <li>• YouTube CSS Prep Channels</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Common Mistakes -->
      <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-8">
        <h2 class="text-xl font-semibold text-red-800 dark:text-red-200 mb-4">Common Mistakes to Avoid</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
            <UIcon name="i-lucide-x-circle" class="flex-shrink-0 mt-0.5" />
            <span>Leaving questions unanswered (no negative marking!)</span>
          </div>
          <div class="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
            <UIcon name="i-lucide-x-circle" class="flex-shrink-0 mt-0.5" />
            <span>Spending too much time on difficult questions</span>
          </div>
          <div class="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
            <UIcon name="i-lucide-x-circle" class="flex-shrink-0 mt-0.5" />
            <span>Not practicing with past papers</span>
          </div>
          <div class="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
            <UIcon name="i-lucide-x-circle" class="flex-shrink-0 mt-0.5" />
            <span>Ignoring current affairs from last 6 months</span>
          </div>
          <div class="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
            <UIcon name="i-lucide-x-circle" class="flex-shrink-0 mt-0.5" />
            <span>Not filling OMR sheet properly</span>
          </div>
          <div class="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
            <UIcon name="i-lucide-x-circle" class="flex-shrink-0 mt-0.5" />
            <span>Overthinking simple questions</span>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex flex-wrap gap-4">
        <UButton to="/exam/eligibility" variant="outline" icon="i-lucide-arrow-left">
          Eligibility
        </UButton>
        <UButton to="/exam/written" icon="i-lucide-arrow-right" trailing>
          Written Exam
        </UButton>
        <UButton to="/resources/past-papers" variant="outline">
          Past Papers
        </UButton>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'CSS MPT (Preliminary Test) - Complete Syllabus & Preparation Guide',
  description: 'Complete guide to CSS MPT exam. Detailed syllabus breakdown, MCQ distribution, preparation strategy, and tips to clear the mandatory preliminary test.',
})
</script>