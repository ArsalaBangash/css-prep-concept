<script setup lang="ts">
useSeoMeta({
  title: 'CSS Subject Scoring Trends & FPSC Targeting Patterns (2020-2024)',
  description: 'Understand FPSC\'s "targeting" phenomenon - why popular subjects like Gender Studies face stricter marking. Historical scoring data, year-over-year volatility, and hidden gem subjects.',
  ogTitle: 'CSS Scoring Trends & FPSC Targeting Explained',
  ogDescription: 'Learn how FPSC "targets" popular optional subjects with strict marking. Discover safe subjects, volatile subjects, and hidden gems for CSS 2025.',
})
</script>

<template>
  <div class="bg-clean min-h-screen">
    <UContainer class="py-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Scoring Trends & FPSC Targeting</h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Historical scoring patterns, year-over-year volatility, and the controversial "targeting" phenomenon (2020-2024)
        </p>

        <!-- Disclaimer -->
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-8">
          <p class="text-blue-700 dark:text-blue-300 text-sm">
            <strong>Note:</strong> These trends are based on analysis of past results, topper interviews, and CSS community data. 
            Individual performance varies. FPSC does not officially confirm targeting; patterns are inferred from results.
          </p>
        </div>

        <!-- The Targeting Phenomenon -->
        <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
            <UIcon name="i-lucide-target" class="text-red-500" />
            The "Targeting" Phenomenon
          </h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            CSS aspirants widely discuss <strong>"targeting"</strong> — the observation that when a subject becomes too popular, 
            FPSC appears to mark it more strictly in subsequent years. While officially unconfirmed, the pattern is consistent enough 
            that strategic candidates factor it into subject selection.
          </p>
          
          <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div class="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 class="font-semibold text-red-600 dark:text-red-400 mb-2">Recently Targeted Subjects</h3>
              <ul class="text-sm space-y-2">
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span><strong>Gender Studies</strong> — Once 80-90/100, now 55-65/100</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span><strong>USA History</strong> — Heavily targeted after 2021 surge</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span><strong>IR</strong> — Variable; strict marking in 2023-24</span>
                </li>
              </ul>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 class="font-semibold text-green-600 dark:text-green-400 mb-2">Why It Happens (Theories)</h3>
              <ul class="text-sm space-y-2">
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Oversaturation leads to identical answers</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Examiners penalize rote-memorized content</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>FPSC may intentionally balance subject popularity</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-3">
            <p class="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Strategic Takeaway:</strong> If everyone at your academy is choosing the same subject, 
              consider that a warning sign. Diversify or ensure your preparation is exceptional.
            </p>
          </div>
        </div>

        <!-- Year-over-Year Volatility -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4">Year-over-Year Volatility</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Some subjects show wild scoring swings between years. Understanding volatility helps manage risk.
          </p>
          
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="text-left py-2 font-semibold">Subject</th>
                  <th class="text-center py-2 font-semibold">2022</th>
                  <th class="text-center py-2 font-semibold">2023</th>
                  <th class="text-center py-2 font-semibold">2024</th>
                  <th class="text-center py-2 font-semibold">Volatility</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
                <tr>
                  <td class="py-3 font-medium">International Relations</td>
                  <td class="py-3 text-center text-green-600">Safe</td>
                  <td class="py-3 text-center text-yellow-600">Medium</td>
                  <td class="py-3 text-center text-red-600">Risky</td>
                  <td class="py-3 text-center"><span class="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded text-xs font-medium">HIGH</span></td>
                </tr>
                <tr>
                  <td class="py-3 font-medium">Gender Studies</td>
                  <td class="py-3 text-center text-yellow-600">Medium</td>
                  <td class="py-3 text-center text-red-600">Targeted</td>
                  <td class="py-3 text-center text-red-600">Targeted</td>
                  <td class="py-3 text-center"><span class="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded text-xs font-medium">HIGH</span></td>
                </tr>
                <tr>
                  <td class="py-3 font-medium">Political Science</td>
                  <td class="py-3 text-center text-green-600">Good</td>
                  <td class="py-3 text-center text-green-600">Good</td>
                  <td class="py-3 text-center text-yellow-600">Medium</td>
                  <td class="py-3 text-center"><span class="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded text-xs font-medium">MEDIUM</span></td>
                </tr>
                <tr>
                  <td class="py-3 font-medium">Criminology</td>
                  <td class="py-3 text-center text-green-600">Good</td>
                  <td class="py-3 text-center text-green-600">Good</td>
                  <td class="py-3 text-center text-green-600">Good</td>
                  <td class="py-3 text-center"><span class="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs font-medium">LOW</span></td>
                </tr>
                <tr>
                  <td class="py-3 font-medium">Regional Languages</td>
                  <td class="py-3 text-center text-green-600">High</td>
                  <td class="py-3 text-center text-green-600">High</td>
                  <td class="py-3 text-center text-green-600">High</td>
                  <td class="py-3 text-center"><span class="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs font-medium">LOW</span></td>
                </tr>
                <tr>
                  <td class="py-3 font-medium">Environmental Science</td>
                  <td class="py-3 text-center text-green-600">Rising</td>
                  <td class="py-3 text-center text-green-600">Good</td>
                  <td class="py-3 text-center text-green-600">Good</td>
                  <td class="py-3 text-center"><span class="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs font-medium">LOW</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Hidden Gems -->
        <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
            <UIcon name="i-lucide-gem" class="text-green-500" />
            Hidden Gem Subjects
          </h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            These subjects consistently score well but remain under the radar, avoiding the targeting phenomenon.
          </p>
          
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
              <div class="text-3xl font-bold text-green-600 mb-1">70-80</div>
              <div class="text-sm text-gray-500">out of 100</div>
              <div class="font-medium mt-2">Regional Languages</div>
              <p class="text-xs text-gray-500 mt-1">Urdu, Punjabi, Sindhi, Pashto</p>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
              <div class="text-3xl font-bold text-green-600 mb-1">105-120</div>
              <div class="text-sm text-gray-500">out of 200</div>
              <div class="font-medium mt-2">Criminology</div>
              <p class="text-xs text-gray-500 mt-1">Stable, limited competition</p>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
              <div class="text-3xl font-bold text-green-600 mb-1">110-125</div>
              <div class="text-sm text-gray-500">out of 200</div>
              <div class="font-medium mt-2">Environmental Science</div>
              <p class="text-xs text-gray-500 mt-1">Rising but not overcrowded</p>
            </div>
          </div>
        </div>

        <!-- Compulsory Subjects Trends -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4">Compulsory Subjects</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
              <div>
                <span class="font-medium">English Essay</span>
                <p class="text-sm text-gray-500">Average: 45-55 marks</p>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-yellow-500 rounded-full" style="width: 50%"></div>
                </div>
                <span class="text-sm text-yellow-600 dark:text-yellow-400">Medium</span>
              </div>
            </div>
            <div class="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
              <div>
                <span class="font-medium">English Precis & Composition</span>
                <p class="text-sm text-gray-500">Average: 40-50 marks</p>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-red-500 rounded-full" style="width: 35%"></div>
                </div>
                <span class="text-sm text-red-600 dark:text-red-400">Strict</span>
              </div>
            </div>
            <div class="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
              <div>
                <span class="font-medium">General Science & Ability</span>
                <p class="text-sm text-gray-500">Average: 45-55 marks</p>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-yellow-500 rounded-full" style="width: 50%"></div>
                </div>
                <span class="text-sm text-yellow-600 dark:text-yellow-400">Medium</span>
              </div>
            </div>
            <div class="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
              <div>
                <span class="font-medium">Current Affairs</span>
                <p class="text-sm text-gray-500">Average: 50-60 marks</p>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-green-500 rounded-full" style="width: 60%"></div>
                </div>
                <span class="text-sm text-green-600 dark:text-green-400">Good</span>
              </div>
            </div>
            <div class="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
              <div>
                <span class="font-medium">Pakistan Affairs</span>
                <p class="text-sm text-gray-500">Average: 50-60 marks</p>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-green-500 rounded-full" style="width: 60%"></div>
                </div>
                <span class="text-sm text-green-600 dark:text-green-400">Good</span>
              </div>
            </div>
            <div class="flex items-center justify-between py-3">
              <div>
                <span class="font-medium">Islamic Studies</span>
                <p class="text-sm text-gray-500">Average: 55-65 marks</p>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-green-500 rounded-full" style="width: 65%"></div>
                </div>
                <span class="text-sm text-green-600 dark:text-green-400">Good</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Optional Subjects Trends -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4">Top Scoring Optional Subjects</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
              <div>
                <span class="font-medium">Political Science</span>
                <p class="text-sm text-gray-500">Average: 110-130 / 200</p>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-green-500 rounded-full" style="width: 65%"></div>
                </div>
                <span class="text-sm text-green-600 dark:text-green-400">High</span>
              </div>
            </div>
            <div class="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
              <div>
                <span class="font-medium">International Relations</span>
                <p class="text-sm text-gray-500">Average: 100-120 / 200</p>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-green-500 rounded-full" style="width: 60%"></div>
                </div>
                <span class="text-sm text-green-600 dark:text-green-400">Good</span>
              </div>
            </div>
            <div class="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
              <div>
                <span class="font-medium">Environmental Science</span>
                <p class="text-sm text-gray-500">Average: 110-125 / 200</p>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-green-500 rounded-full" style="width: 62%"></div>
                </div>
                <span class="text-sm text-green-600 dark:text-green-400">Rising</span>
              </div>
            </div>
            <div class="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
              <div>
                <span class="font-medium">Criminology</span>
                <p class="text-sm text-gray-500">Average: 105-120 / 200</p>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-green-500 rounded-full" style="width: 58%"></div>
                </div>
                <span class="text-sm text-green-600 dark:text-green-400">Good</span>
              </div>
            </div>
            <div class="flex items-center justify-between py-3">
              <div>
                <span class="font-medium">Regional Languages (Urdu, Punjabi, etc.)</span>
                <p class="text-sm text-gray-500">Average: 70-80 / 100</p>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-green-500 rounded-full" style="width: 75%"></div>
                </div>
                <span class="text-sm text-green-600 dark:text-green-400">Very High</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Insights -->
        <div class="bg-accent/10 rounded-xl p-6">
          <h2 class="text-xl font-semibold mb-4">Key Insights</h2>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-trending-up" class="text-green-500 mt-1 flex-shrink-0" />
              <span>English Precis has the highest failure rate - focus heavily on this subject</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-trending-up" class="text-green-500 mt-1 flex-shrink-0" />
              <span>Regional languages consistently score high - consider if you're fluent</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-trending-up" class="text-green-500 mt-1 flex-shrink-0" />
              <span>Science subjects have predictable marking but require strong fundamentals</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-trending-up" class="text-green-500 mt-1 flex-shrink-0" />
              <span>Essay and Precis together can make or break your result</span>
            </li>
          </ul>
        </div>

        <div class="mt-8 flex gap-4">
          <UButton to="/syllabus/selection" variant="outline" icon="i-lucide-arrow-left">
            Selection Guide
          </UButton>
          <UButton to="/syllabus" icon="i-lucide-arrow-right" trailing>
            Back to Syllabus
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>