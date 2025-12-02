<template>
  <div class="bg-clean min-h-screen">
    <UContainer class="py-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Subject Selection Guide</h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Strategic guidance for choosing your optional subjects wisely
        </p>

        <!-- Warning -->
        <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 mb-8">
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-alert-triangle" class="text-yellow-600 dark:text-yellow-400 text-xl flex-shrink-0 mt-1" />
            <div>
              <h3 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Critical Decision</h3>
              <p class="text-yellow-700 dark:text-yellow-300 text-sm">
                Subject selection can make or break your CSS journey. Choose based on your background, 
                interest, and scoring trends - not just popularity.
              </p>
            </div>
          </div>
        </div>

        <!-- Selection Rules -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4">Selection Rules</h2>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 flex-shrink-0" />
              <span>Choose exactly 6 optional subjects totaling 600 marks</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 flex-shrink-0" />
              <span>Maximum 2 subjects from any single group</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 flex-shrink-0" />
              <span>Group VII subjects are 100 marks each (need 2 to make 200)</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 flex-shrink-0" />
              <span>Some subject combinations are restricted</span>
            </li>
          </ul>
        </div>

        <!-- High Scoring Subjects -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
            <UIcon name="i-lucide-trending-up" class="text-green-500" />
            High Scoring Subjects (2020-2024)
          </h2>
          <div class="space-y-3">
            <div class="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
              <span>Political Science</span>
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-sm">Consistent High Scores</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
              <span>Environmental Science</span>
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-sm">Rising Trend</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
              <span>Criminology</span>
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-sm">Good Scoring</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
              <span>Regional Languages</span>
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-sm">High Marks</span>
            </div>
            <div class="flex justify-between items-center py-3">
              <span>International Relations</span>
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-sm">Popular & Scoring</span>
            </div>
          </div>
        </div>

        <!-- Risky Subjects -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
            <UIcon name="i-lucide-alert-circle" class="text-red-500" />
            Subjects with Strict Marking
          </h2>
          <div class="space-y-3">
            <div class="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
              <span>History of Pakistan & India</span>
              <span class="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded text-sm">Strict Checking</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
              <span>Philosophy</span>
              <span class="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded text-sm">Unpredictable</span>
            </div>
            <div class="flex justify-between items-center py-3">
              <span>Pure Mathematics</span>
              <span class="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded text-sm">High Failure Rate</span>
            </div>
          </div>
        </div>

        <!-- Recommended Combinations -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4">Popular Combinations</h2>
          <div class="space-y-4">
            <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 class="font-semibold mb-2">For Arts/Humanities Background</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Political Science + IR + Criminology + Sociology + Urdu + Psychology
              </p>
            </div>
            <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 class="font-semibold mb-2">For Science Background</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Physics + Chemistry + Applied Math + Statistics + Environmental Science + Gender Studies
              </p>
            </div>
            <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 class="font-semibold mb-2">For Commerce Background</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Accountancy + Economics + Mercantile Law + Public Administration + Criminology + Sociology
              </p>
            </div>
          </div>
        </div>

        <!-- Tips -->
        <div class="bg-accent/10 rounded-xl p-6">
          <h2 class="text-xl font-semibold mb-4">Selection Tips</h2>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-lightbulb" class="text-accent mt-1 flex-shrink-0" />
              <span>Choose subjects you're genuinely interested in - you'll study them for 12-18 months</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-lightbulb" class="text-accent mt-1 flex-shrink-0" />
              <span>Consider overlap between subjects to reduce study load</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-lightbulb" class="text-accent mt-1 flex-shrink-0" />
              <span>Check availability of study materials and coaching for your subjects</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-lightbulb" class="text-accent mt-1 flex-shrink-0" />
              <span>Talk to recent CSS qualifiers about their subject experience</span>
            </li>
          </ul>
        </div>

        <div class="mt-8 flex gap-4">
          <UButton to="/syllabus/optional" variant="outline" icon="i-lucide-arrow-left">
            Optional Subjects
          </UButton>
          <UButton to="/syllabus/trends" icon="i-lucide-arrow-right" trailing>
            Scoring Trends
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>