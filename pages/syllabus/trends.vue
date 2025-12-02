<template>
  <div class="bg-clean min-h-screen">
    <UContainer class="py-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Scoring Trends</h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Historical scoring patterns and trends for CSS subjects (2020-2024)
        </p>

        <!-- Disclaimer -->
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-8">
          <p class="text-blue-700 dark:text-blue-300 text-sm">
            <strong>Note:</strong> These trends are based on analysis of past results and topper interviews. 
            Individual performance may vary based on preparation quality and examiner.
          </p>
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