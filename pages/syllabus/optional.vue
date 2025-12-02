<template>
  <div class="bg-clean min-h-screen">
    <!-- Header -->
    <div class="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <UContainer class="py-12">
        <h1 class="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
          Optional Subjects Selection
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mb-6">
          Choose 6 subjects from 7 groups totaling 600 marks. Your optional subject selection 
          can make or break your CSS journey - choose wisely based on your background and scoring potential.
        </p>
        
        <!-- Quick Stats -->
        <div class="flex flex-wrap gap-6 text-sm">
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-book-open" class="w-5 h-5 text-accent" />
            <span class="text-gray-600 dark:text-gray-400">6 Subjects Required</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-layers" class="w-5 h-5 text-accent" />
            <span class="text-gray-600 dark:text-gray-400">7 Groups Available</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-trophy" class="w-5 h-5 text-accent" />
            <span class="text-gray-600 dark:text-gray-400">600 Total Marks</span>
          </div>
        </div>
      </UContainer>
    </div>

    <UContainer class="py-8">
      <!-- Golden Combination Alert -->
      <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 mb-8">
        <div class="flex items-start gap-3">
          <UIcon name="i-lucide-star" class="text-yellow-600 dark:text-yellow-400 text-xl flex-shrink-0 mt-1" />
          <div>
            <h3 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">The "Golden Combination" Strategy</h3>
            <p class="text-yellow-700 dark:text-yellow-300 text-sm mb-3">
              Most CSS toppers choose subjects with <strong>overlapping content</strong> to maximize preparation efficiency. 
              The most successful combinations include:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="p-3 bg-yellow-100 dark:bg-yellow-900/40 rounded-lg">
                <h4 class="font-semibold text-yellow-800 dark:text-yellow-200 text-sm mb-1">Humanities Track</h4>
                <p class="text-xs text-yellow-700 dark:text-yellow-300">
                  International Relations + Political Science + History of Pak & India + Constitutional Law
                </p>
              </div>
              <div class="p-3 bg-yellow-100 dark:bg-yellow-900/40 rounded-lg">
                <h4 class="font-semibold text-yellow-800 dark:text-yellow-200 text-sm mb-1">Science Track</h4>
                <p class="text-xs text-yellow-700 dark:text-yellow-300">
                  Physics + Chemistry + Pure Mathematics + Applied Mathematics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scoring Trends -->
      <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4">Subject Scoring Trends (2020-2024)</h2>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-6">
          Based on analysis of CSS results, some subjects consistently yield higher average scores:
        </p>
        
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h3 class="font-semibold text-green-800 dark:text-green-200 mb-2">High Scoring Subjects</h3>
            <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
              <li>• International Relations</li>
              <li>• Political Science</li>
              <li>• Criminology</li>
              <li>• Psychology</li>
              <li>• Journalism</li>
            </ul>
          </div>
          <div class="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <h3 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Moderate Scoring</h3>
            <ul class="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
              <li>• Economics</li>
              <li>• Public Administration</li>
              <li>• Sociology</li>
              <li>• History subjects</li>
              <li>• Law subjects</li>
            </ul>
          </div>
          <div class="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <h3 class="font-semibold text-red-800 dark:text-red-200 mb-2">Challenging Subjects</h3>
            <ul class="text-sm text-red-700 dark:text-red-300 space-y-1">
              <li>• Accountancy & Auditing</li>
              <li>• Pure Sciences (Physics, Chemistry)</li>
              <li>• Mathematics</li>
              <li>• Philosophy</li>
            </ul>
          </div>
        </div>

        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <p class="text-sm text-blue-700 dark:text-blue-300">
            <strong>Note:</strong> "Challenging" doesn't mean avoid - science subjects have less competition 
            and can yield excellent scores if you have a strong background. Choose based on your strengths, not trends.
          </p>
        </div>
      </div>

      <!-- Selection Rules -->
      <div class="bg-accent/10 rounded-xl p-6 mb-8">
        <h2 class="text-xl font-semibold mb-4">Selection Rules & Restrictions</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-check-circle" class="text-accent flex-shrink-0 mt-0.5" />
            <span class="text-sm">Must select from at least 3 different groups</span>
          </div>
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-check-circle" class="text-accent flex-shrink-0 mt-0.5" />
            <span class="text-sm">Maximum 2 subjects from any single group</span>
          </div>
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-check-circle" class="text-accent flex-shrink-0 mt-0.5" />
            <span class="text-sm">Group VII subjects are 100 marks each (others 200)</span>
          </div>
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-check-circle" class="text-accent flex-shrink-0 mt-0.5" />
            <span class="text-sm">Total must equal exactly 600 marks</span>
          </div>
        </div>
      </div>

      <!-- Groups -->
      <h2 class="text-2xl font-semibold mb-6">Subject Groups</h2>
      <div class="space-y-6">
        <!-- Group I -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-xl font-semibold">Group I - Social Sciences</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">Most popular group among CSS aspirants</p>
            </div>
            <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">200 marks each</span>
          </div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="flex justify-between items-center">
                <span class="font-medium">Accountancy & Auditing</span>
                <span class="text-xs px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded">Technical</span>
              </div>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="flex justify-between items-center">
                <span class="font-medium">Economics</span>
                <span class="text-xs px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded">Moderate</span>
              </div>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="flex justify-between items-center">
                <span class="font-medium">Political Science</span>
                <span class="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded">Popular</span>
              </div>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="flex justify-between items-center">
                <span class="font-medium">International Relations</span>
                <span class="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded">Most Popular</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Group II -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-xl font-semibold">Group II - Pure Sciences</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">Best for science graduates - less competition</p>
            </div>
            <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm">200 marks each</span>
          </div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Physics</div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Chemistry</div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Applied Mathematics</div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Pure Mathematics</div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Statistics</div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Geology</div>
          </div>
        </div>

        <!-- Group III -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-xl font-semibold">Group III - Life Sciences</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">Ideal for medical/biology background</p>
            </div>
            <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm">200 marks each</span>
          </div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Zoology</div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Botany</div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Agriculture & Forestry</div>
          </div>
        </div>

        <!-- Group IV -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-xl font-semibold">Group IV - Humanities</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">Overlaps with Pakistan Affairs & Essay</p>
            </div>
            <span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full text-sm">200 marks each</span>
          </div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="flex justify-between items-center">
                <span class="font-medium">History of Pakistan & India</span>
                <span class="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded">Recommended</span>
              </div>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Islamic History & Culture</div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">British History</div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">European History</div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Muslim Law & Jurisprudence</div>
          </div>
        </div>

        <!-- Group V -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-xl font-semibold">Group V - Social Studies</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">Emerging subjects with good scoring potential</p>
            </div>
            <span class="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 rounded-full text-sm">200 marks each</span>
          </div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Gender Studies</div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Environmental Science</div>
          </div>
        </div>

        <!-- Group VI -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-xl font-semibold">Group VI - Law & Social Sciences</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">Largest group with diverse options</p>
            </div>
            <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-sm">200 marks each</span>
          </div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="flex justify-between items-center">
                <span class="font-medium">Criminology</span>
                <span class="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded">High Scoring</span>
              </div>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Sociology</div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Philosophy</div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Public Administration</div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Governance & Public Policies</div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Mercantile Law</div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="flex justify-between items-center">
                <span class="font-medium">Constitutional Law</span>
                <span class="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded">Recommended</span>
              </div>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">International Law</div>
          </div>
        </div>

        <!-- Group VII -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-xl font-semibold">Group VII - Languages & Others</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">100 marks each - can take 2 to make 200</p>
            </div>
            <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 rounded-full text-sm">100 marks each</span>
          </div>
          <div class="grid md:grid-cols-3 gap-3">
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Urdu</div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Punjabi</div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Sindhi</div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Pashto</div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Balochi</div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Persian</div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">Arabic</div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="flex justify-between items-center">
                <span class="font-medium">Psychology</span>
                <span class="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded">Popular</span>
              </div>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="flex justify-between items-center">
                <span class="font-medium">Journalism & Mass Comm.</span>
                <span class="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded">Popular</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sample Combinations -->
      <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mt-8">
        <h2 class="text-2xl font-semibold mb-4">Sample Winning Combinations</h2>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-6">
          These combinations have been used by CSS toppers. Choose based on your academic background:
        </p>
        
        <div class="space-y-4">
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 class="font-semibold mb-2">For Arts/Humanities Graduates</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">International Relations</span>
              <span class="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Political Science</span>
              <span class="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">History of Pak & India</span>
              <span class="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Constitutional Law</span>
              <span class="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Criminology</span>
              <span class="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Psychology</span>
            </div>
          </div>
          
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 class="font-semibold mb-2">For Commerce/Business Graduates</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">Economics</span>
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">Accountancy & Auditing</span>
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">Public Administration</span>
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">Mercantile Law</span>
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">International Relations</span>
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">Journalism</span>
            </div>
          </div>
          
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 class="font-semibold mb-2">For Science/Engineering Graduates</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm">Physics</span>
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm">Chemistry</span>
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm">Applied Mathematics</span>
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm">Statistics</span>
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm">Environmental Science</span>
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm">Psychology</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div class="mt-8 flex flex-wrap gap-4">
        <UButton to="/syllabus/compulsory" variant="outline" icon="i-lucide-arrow-left">
          Compulsory Subjects
        </UButton>
        <UButton to="/syllabus/selection" icon="i-lucide-arrow-right" trailing>
          Selection Guide
        </UButton>
        <UButton to="/syllabus/trends" variant="outline">
          Scoring Trends
        </UButton>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'CSS Optional Subjects - Selection Guide & Scoring Trends',
  description: 'Complete guide to CSS optional subjects. Learn about the 7 groups, scoring trends, golden combinations, and how to select subjects based on your background.',
})
</script>