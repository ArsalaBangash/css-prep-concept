<template>
  <div class="bg-clean min-h-screen">
    <UContainer class="py-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Mock Tests & Practice</h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Test your preparation with timed mock exams and practice questions
        </p>

        <!-- Coming Soon Banner -->
        <div class="bg-accent/10 border border-accent/30 rounded-xl p-8 mb-8 text-center">
          <UIcon name="i-lucide-construction" class="text-4xl text-accent mb-4" />
          <h2 class="text-2xl font-semibold mb-2">Mock Test Platform Coming Soon</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            We're building an interactive mock test platform with timed exams, 
            instant scoring, and detailed analytics.
          </p>
          <UButton disabled>
            Notify Me When Ready
          </UButton>
        </div>

        <!-- Current Resources -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4">Available Practice Resources</h2>
          <div class="space-y-4">
            <NuxtLink to="/resources/past-papers" class="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-semibold">Past Papers Archive</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Practice with actual CSS exam papers from previous years</p>
                </div>
                <UIcon name="i-lucide-arrow-right" />
              </div>
            </NuxtLink>
            <a href="https://www.fpsc.gov.pk" target="_blank" class="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-semibold">FPSC Official Papers</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Download official papers from FPSC website</p>
                </div>
                <UIcon name="i-lucide-external-link" />
              </div>
            </a>
          </div>
        </div>

        <!-- Self-Assessment Tips -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4">Self-Assessment Strategy</h2>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <span class="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
              <span>Attempt one full paper per week under exam conditions (3 hours)</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
              <span>Get your answers evaluated by a CSS mentor or academy</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
              <span>Compare your answers with model answers and toppers' copies</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">4</span>
              <span>Identify weak areas and focus on improvement</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">5</span>
              <span>Track your progress over time with a score log</span>
            </li>
          </ul>
        </div>

        <!-- Recommended Schedule -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 class="text-2xl font-semibold mb-4">Mock Test Schedule</h2>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b dark:border-gray-700">
                  <th class="text-left py-2">Phase</th>
                  <th class="text-left py-2">Frequency</th>
                  <th class="text-left py-2">Focus</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b dark:border-gray-700">
                  <td class="py-2">6+ months before</td>
                  <td class="py-2">1 per month</td>
                  <td class="py-2">Baseline assessment</td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <td class="py-2">3-6 months before</td>
                  <td class="py-2">2 per month</td>
                  <td class="py-2">Subject-wise practice</td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <td class="py-2">1-3 months before</td>
                  <td class="py-2">1 per week</td>
                  <td class="py-2">Full paper simulation</td>
                </tr>
                <tr>
                  <td class="py-2">Final month</td>
                  <td class="py-2">2-3 per week</td>
                  <td class="py-2">Exam simulation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="mt-8 flex gap-4">
          <UButton to="/prep/essay" variant="outline" icon="i-lucide-arrow-left">
            Essay Writing
          </UButton>
          <UButton to="/resources" icon="i-lucide-arrow-right" trailing>
            All Resources
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>