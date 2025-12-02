<template>
  <div class="bg-clean min-h-screen">
    <UContainer class="py-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">CSS Eligibility Criteria</h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Complete guide to CSS examination eligibility requirements
        </p>

        <!-- Age Requirements -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
            <UIcon name="i-lucide-calendar" class="text-accent" />
            Age Requirements
          </h2>
          <div class="space-y-4">
            <div class="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
              <span class="font-medium">Minimum Age</span>
              <span class="text-gray-600 dark:text-gray-400">21 years</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
              <span class="font-medium">Maximum Age (General)</span>
              <span class="text-gray-600 dark:text-gray-400">30 years</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
              <span class="font-medium">Maximum Age (In-Service)</span>
              <span class="text-gray-600 dark:text-gray-400">35 years</span>
            </div>
            <div class="flex justify-between items-center py-3">
              <span class="font-medium">Age Relaxation (Recognized Areas)</span>
              <span class="text-gray-600 dark:text-gray-400">Up to 5 years</span>
            </div>
          </div>
        </div>

        <!-- Educational Requirements -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
            <UIcon name="i-lucide-graduation-cap" class="text-accent" />
            Educational Qualifications
          </h2>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 flex-shrink-0" />
              <span>Bachelor's degree (minimum 2nd division) from a recognized university</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 flex-shrink-0" />
              <span>Professional degrees (MBBS, LLB, Engineering, etc.) are also accepted</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 flex-shrink-0" />
              <span>Final year students can apply (subject to degree completion before interview)</span>
            </li>
          </ul>
        </div>

        <!-- Nationality -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
            <UIcon name="i-lucide-flag" class="text-accent" />
            Nationality & Domicile
          </h2>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 flex-shrink-0" />
              <span>Must be a citizen of Pakistan</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 flex-shrink-0" />
              <span>Valid domicile certificate required</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 flex-shrink-0" />
              <span>Quota system applies based on provincial domicile</span>
            </li>
          </ul>
        </div>

        <!-- Attempts -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
            <UIcon name="i-lucide-repeat" class="text-accent" />
            Number of Attempts
          </h2>
          <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <p class="text-yellow-800 dark:text-yellow-200">
              <strong>Maximum 3 attempts</strong> are allowed for the CSS examination. 
              Each appearance at the written examination counts as one attempt, 
              regardless of whether you pass or fail.
            </p>
          </div>
        </div>

        <div class="mt-8 flex gap-4">
          <UButton to="/exam" variant="outline" icon="i-lucide-arrow-left">
            Back to Exam Overview
          </UButton>
          <UButton to="/exam/mpt" icon="i-lucide-arrow-right" trailing>
            MPT Details
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>