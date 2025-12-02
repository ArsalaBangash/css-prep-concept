<template>
  <div class="bg-clean min-h-screen">
    <UContainer class="py-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">CSS 2026 Key Dates</h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Important dates and deadlines for CSS 2026 examination
        </p>

        <!-- Timeline -->
        <div class="space-y-6">
          <!-- MPT Phase -->
          <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <UIcon name="i-lucide-clipboard-check" class="text-blue-600 dark:text-blue-400" />
              </div>
              <h2 class="text-xl font-semibold">MPT Phase</h2>
            </div>
            <div class="space-y-4 ml-13">
              <div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                <span>Public Notice</span>
                <span class="font-medium text-accent">August 10, 2025</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                <span>Application Window</span>
                <span class="font-medium text-accent">August 11-25, 2025</span>
              </div>
              <div class="flex justify-between items-center py-2">
                <span>MPT Examination</span>
                <span class="font-medium text-accent">November 9, 2025</span>
              </div>
            </div>
          </div>

          <!-- Written Exam Phase -->
          <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <UIcon name="i-lucide-pen-tool" class="text-purple-600 dark:text-purple-400" />
              </div>
              <h2 class="text-xl font-semibold">Written Examination Phase</h2>
            </div>
            <div class="space-y-4 ml-13">
              <div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                <span>Application Window</span>
                <span class="font-medium text-accent">December 15-30, 2025</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                <span>Written Exam Begins</span>
                <span class="font-medium text-accent">February 4, 2026</span>
              </div>
              <div class="flex justify-between items-center py-2">
                <span>Results Expected</span>
                <span class="font-medium text-gray-500">June-July 2026</span>
              </div>
            </div>
          </div>

          <!-- Interview Phase -->
          <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                <UIcon name="i-lucide-users" class="text-orange-600 dark:text-orange-400" />
              </div>
              <h2 class="text-xl font-semibold">Interview & Final Phase</h2>
            </div>
            <div class="space-y-4 ml-13">
              <div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                <span>Medical Examination</span>
                <span class="font-medium text-gray-500">After Written Results</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                <span>Psychological Assessment</span>
                <span class="font-medium text-gray-500">August-September 2026</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                <span>Viva Voce (Interview)</span>
                <span class="font-medium text-gray-500">October-November 2026</span>
              </div>
              <div class="flex justify-between items-center py-2">
                <span>Final Results</span>
                <span class="font-medium text-gray-500">December 2026</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Important Notes -->
        <div class="mt-8 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
          <h3 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">Important Notes</h3>
          <ul class="space-y-2 text-yellow-700 dark:text-yellow-300 text-sm">
            <li>• Dates are based on historical patterns and official announcements</li>
            <li>• Always verify dates from FPSC official website</li>
            <li>• Keep checking for any schedule changes or updates</li>
            <li>• Set reminders for application deadlines</li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div class="mt-8 flex flex-wrap gap-4">
          <UButton to="https://www.fpsc.gov.pk" target="_blank" variant="outline" icon="i-lucide-external-link">
            FPSC Official Website
          </UButton>
          <UButton to="/exam" variant="outline" icon="i-lucide-arrow-left">
            Back to Exam Overview
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>