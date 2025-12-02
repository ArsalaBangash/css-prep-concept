<template>
  <div class="bg-clean min-h-screen">
    <UContainer class="py-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Past Papers Archive</h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
          FPSC official past papers and solved MCQs for CSS preparation
        </p>

        <!-- MPT Papers -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
            <UIcon name="i-lucide-clipboard-check" class="text-blue-500" />
            MPT Past Papers
          </h2>
          <div class="space-y-3">
            <div v-for="year in [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016]" :key="year" 
                 class="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800 last:border-0">
              <span>MPT {{ year }}</span>
              <div class="flex gap-2">
                <UButton size="xs" variant="outline">View Paper</UButton>
                <UButton size="xs" variant="outline">Solved MCQs</UButton>
              </div>
            </div>
          </div>
        </div>

        <!-- Written Exam Papers -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
            <UIcon name="i-lucide-pen-tool" class="text-purple-500" />
            Written Exam Papers
          </h2>
          <div class="space-y-4">
            <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 class="font-semibold mb-2">Compulsory Subjects</h3>
              <div class="grid md:grid-cols-2 gap-2 text-sm">
                <a href="#" class="text-accent hover:underline">English Essay (2016-2024)</a>
                <a href="#" class="text-accent hover:underline">English Precis (2016-2024)</a>
                <a href="#" class="text-accent hover:underline">General Science (2016-2024)</a>
                <a href="#" class="text-accent hover:underline">Current Affairs (2016-2024)</a>
                <a href="#" class="text-accent hover:underline">Pakistan Affairs (2016-2024)</a>
                <a href="#" class="text-accent hover:underline">Islamic Studies (2016-2024)</a>
              </div>
            </div>
            <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 class="font-semibold mb-2">Optional Subjects</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Past papers available for all optional subjects from 2016-2024
              </p>
              <UButton size="sm" variant="outline">Browse All Optional Papers →</UButton>
            </div>
          </div>
        </div>

        <!-- Model Answer Sheets -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
            <UIcon name="i-lucide-file-check" class="text-green-500" />
            Model Answer Sheets
          </h2>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            High-scoring answer sheets from CSS toppers for reference and learning.
          </p>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg flex justify-between items-center">
              <span>Essay Model Answers</span>
              <UButton size="xs" variant="outline">View</UButton>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg flex justify-between items-center">
              <span>Precis Model Answers</span>
              <UButton size="xs" variant="outline">View</UButton>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg flex justify-between items-center">
              <span>Pakistan Affairs Answers</span>
              <UButton size="xs" variant="outline">View</UButton>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg flex justify-between items-center">
              <span>Current Affairs Answers</span>
              <UButton size="xs" variant="outline">View</UButton>
            </div>
          </div>
        </div>

        <!-- Download Section -->
        <div class="bg-accent/10 rounded-xl p-6">
          <h2 class="text-xl font-semibold mb-4">Download Resources</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            All past papers are available in PDF format. You can also find these on the official FPSC website.
          </p>
          <div class="flex gap-4">
            <UButton to="https://www.fpsc.gov.pk" target="_blank" variant="outline" icon="i-lucide-external-link">
              FPSC Official Website
            </UButton>
            <UButton to="/resources" variant="outline" icon="i-lucide-arrow-left">
              Back to Resources
            </UButton>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>