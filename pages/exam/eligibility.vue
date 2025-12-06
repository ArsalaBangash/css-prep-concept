<template>
  <div class="bg-clean min-h-screen">
    <UContainer class="py-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">CSS Eligibility Criteria</h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Complete guide to CSS examination eligibility requirements as per CSS Rules 2019
        </p>

        <!-- Age Requirements -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
            <UIcon name="i-lucide-calendar" class="text-accent" />
            Age Requirements
          </h2>
          <div class="space-y-4 mb-6">
            <div class="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
              <span class="font-medium">Minimum Age</span>
              <span class="text-gray-600 dark:text-gray-400">21 years</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
              <span class="font-medium">Maximum Age (General)</span>
              <span class="text-gray-600 dark:text-gray-400">30 years</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
              <span class="font-medium">Maximum Age (Govt Servants with 2+ yrs service)</span>
              <span class="text-gray-600 dark:text-gray-400">32 years</span>
            </div>
            <div class="flex justify-between items-center py-3">
              <span class="font-medium">Maximum Age (Recognized Categories)</span>
              <span class="text-gray-600 dark:text-gray-400">Up to 32 years</span>
            </div>
          </div>
          
          <!-- Age Calculation Clarification -->
          <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h3 class="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
              <UIcon name="i-lucide-info" class="w-4 h-4" />
              How Age is Calculated
            </h3>
            <p class="text-sm text-blue-700 dark:text-blue-300 mb-3">
              Your age is determined on <strong>December 31 of the year preceding the exam</strong>.
            </p>
            <div class="bg-white dark:bg-gray-900 rounded-lg p-3 text-sm">
              <p class="font-medium text-gray-900 dark:text-white mb-2">Example for CSS 2026:</p>
              <ul class="space-y-1 text-gray-600 dark:text-gray-400">
                <li>• Cutoff date: <strong>December 31, 2025</strong></li>
                <li>• If you turn 31 on January 1, 2026 → You're <strong>eligible</strong> (you were 30 on Dec 31, 2025)</li>
                <li>• If you turned 31 on December 30, 2025 → You're <strong>ineligible</strong></li>
              </ul>
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
              <span>Bachelor's degree (minimum 2nd division or equivalent CGPA) from HEC-recognized university</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 flex-shrink-0" />
              <span>Minimum 14 years of education required</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 flex-shrink-0" />
              <span>Professional degrees (MBBS, LLB, Engineering, etc.) are accepted</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 flex-shrink-0" />
              <span>Final year students can apply (degree must be complete before Viva Voce)</span>
            </li>
          </ul>
        </div>

        <!-- Nationality & Dual Nationality -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
            <UIcon name="i-lucide-flag" class="text-accent" />
            Nationality & Domicile
          </h2>
          <ul class="space-y-3 mb-4">
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 flex-shrink-0" />
              <span>Must be a citizen of Pakistan</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 flex-shrink-0" />
              <span>Valid provincial/regional domicile certificate required</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 flex-shrink-0" />
              <span>Provincial quota system applies for allocation</span>
            </li>
          </ul>
          
          <!-- Dual Nationality Warning -->
          <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <h3 class="font-semibold text-red-800 dark:text-red-200 mb-2 flex items-center gap-2">
              <UIcon name="i-lucide-alert-triangle" class="w-4 h-4" />
              Dual Nationality Rules
            </h3>
            <p class="text-sm text-red-700 dark:text-red-300 mb-2">
              <strong>Dual nationals must renounce their foreign nationality</strong> before appointment to CSS.
            </p>
            <ul class="text-sm text-red-700 dark:text-red-300 space-y-1">
              <li>• You CAN apply and take the exam as a dual national</li>
              <li>• You MUST renounce foreign nationality before joining service</li>
              <li>• Failure to renounce will result in cancellation of appointment</li>
              <li>• Start the renunciation process early—it can take months</li>
            </ul>
          </div>
        </div>

        <!-- Attempts -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
            <UIcon name="i-lucide-repeat" class="text-accent" />
            Number of Attempts
          </h2>
          <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
            <p class="text-yellow-800 dark:text-yellow-200 font-medium">
              Maximum <strong>3 attempts</strong> are allowed within the age limits.
            </p>
          </div>
          
          <h3 class="font-semibold mb-3">What Counts as an Attempt?</h3>
          <div class="space-y-3 text-sm">
            <div class="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <UIcon name="i-lucide-check" class="text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Counts as attempt:</strong> Appearing in the Written Examination (regardless of pass/fail)
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <UIcon name="i-lucide-x" class="text-red-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Does NOT count:</strong> Applying but not appearing, or failing only the MPT
              </div>
            </div>
          </div>
          
          <div class="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">Example Scenarios:</h4>
            <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-2">
              <li>• Ali is 25 and failed written exam twice → Has <strong>1 attempt left</strong></li>
              <li>• Sara is 29 and this is her first attempt → Has <strong>3 attempts</strong> but only 1-2 years of age left</li>
              <li>• Ahmed is 30 with 0 attempts → Has <strong>1 year left</strong>, so effectively 1 attempt</li>
            </ul>
          </div>
        </div>

        <!-- Quick Eligibility Check -->
        <div class="bg-accent/10 dark:bg-accent/20 border border-accent/30 rounded-xl p-6">
          <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <UIcon name="i-lucide-clipboard-check" class="text-accent" />
            Quick Eligibility Checklist
          </h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="space-y-2">
              <div class="flex items-center gap-2 text-sm">
                <input type="checkbox" class="rounded border-gray-300" disabled />
                <span>Age 21-30 (as of Dec 31, preceding year)</span>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <input type="checkbox" class="rounded border-gray-300" disabled />
                <span>Bachelor's degree (min 2nd division)</span>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <input type="checkbox" class="rounded border-gray-300" disabled />
                <span>Pakistani citizen</span>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex items-center gap-2 text-sm">
                <input type="checkbox" class="rounded border-gray-300" disabled />
                <span>Valid domicile certificate</span>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <input type="checkbox" class="rounded border-gray-300" disabled />
                <span>Less than 3 written exam attempts</span>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <input type="checkbox" class="rounded border-gray-300" disabled />
                <span>No disqualifying criminal record</span>
              </div>
            </div>
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

<script setup lang="ts">
useSeoMeta({
  title: 'CSS Eligibility Criteria 2026 - Age, Education & Requirements',
  description: 'Complete guide to CSS exam eligibility: age limits (21-30), educational requirements, dual nationality rules, and attempt counting explained with examples.',
})
</script>