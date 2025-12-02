<template>
  <div class="bg-clean min-h-screen">
    <UContainer class="py-16">
      <div class="max-w-4xl mx-auto">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm font-medium mb-4">
          <UIcon name="i-lucide-pen-tool" />
          Stage 2
        </div>
        <h1 class="text-4xl font-bold mb-4">Written Examination</h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
          The main CSS examination - 12 papers over multiple days
        </p>

        <!-- Overview -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4">Examination Structure</h2>
          <div class="grid md:grid-cols-4 gap-4">
            <div class="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="text-3xl font-bold text-accent">12</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Papers</div>
            </div>
            <div class="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="text-3xl font-bold text-accent">1200</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Total Marks</div>
            </div>
            <div class="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="text-3xl font-bold text-accent">6</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Compulsory</div>
            </div>
            <div class="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="text-3xl font-bold text-accent">6</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Optional</div>
            </div>
          </div>
        </div>

        <!-- Compulsory Papers -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4">Compulsory Papers (600 Marks)</h2>
          <div class="space-y-3">
            <div class="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
              <span>English Essay</span>
              <span class="font-medium">100 marks</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
              <span>English Precis & Composition</span>
              <span class="font-medium">100 marks</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
              <span>General Science & Ability</span>
              <span class="font-medium">100 marks</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
              <span>Current Affairs</span>
              <span class="font-medium">100 marks</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
              <span>Pakistan Affairs</span>
              <span class="font-medium">100 marks</span>
            </div>
            <div class="flex justify-between items-center py-3">
              <span>Islamic Studies / Ethics</span>
              <span class="font-medium">100 marks</span>
            </div>
          </div>
        </div>

        <!-- Optional Papers -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4">Optional Papers (600 Marks)</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Choose 6 optional subjects from 7 groups. You can select maximum 2 subjects from any single group.
          </p>
          <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p class="text-blue-800 dark:text-blue-200">
              <strong>Important:</strong> Subject selection is crucial for your success. 
              Choose subjects based on your background, interest, and scoring trends.
            </p>
          </div>
          <UButton to="/syllabus/selection" class="mt-4" variant="outline">
            View Subject Selection Guide →
          </UButton>
        </div>

        <!-- Passing Criteria -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4">Passing Criteria</h2>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 flex-shrink-0" />
              <span><strong>40% in each paper</strong> - Minimum 40 marks out of 100 in every paper</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 flex-shrink-0" />
              <span><strong>50% aggregate</strong> - Minimum 600 marks out of 1200 total</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-alert-circle" class="text-yellow-500 mt-1 flex-shrink-0" />
              <span>Failing even one paper means failing the entire examination</span>
            </li>
          </ul>
        </div>

        <!-- Exam Schedule -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 class="text-2xl font-semibold mb-4">Examination Schedule</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            The written examination typically spans over 2-3 weeks with papers scheduled on alternate days.
          </p>
          <ul class="space-y-2 text-gray-600 dark:text-gray-400">
            <li>• Morning session: 9:00 AM - 12:00 PM</li>
            <li>• Each paper is 3 hours long</li>
            <li>• One paper per day</li>
            <li>• Conducted in major cities across Pakistan</li>
          </ul>
        </div>

        <div class="mt-8 flex gap-4">
          <UButton to="/exam/mpt" variant="outline" icon="i-lucide-arrow-left">
            MPT Details
          </UButton>
          <UButton to="/exam/interview" icon="i-lucide-arrow-right" trailing>
            Interview Stage
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>