<template>
  <div class="bg-clean min-h-screen">
    <UContainer class="py-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">CSS Academies & Coaching</h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Recommended coaching centers and online platforms for CSS preparation
        </p>

        <!-- Disclaimer -->
        <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4 mb-8">
          <p class="text-yellow-700 dark:text-yellow-300 text-sm">
            <strong>Disclaimer:</strong> This is an informational list. We do not endorse any specific academy. 
            Please do your own research before enrolling.
          </p>
        </div>

        <!-- Top Academies -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4">Popular CSS Academies</h2>
          <div class="space-y-4">
            <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="flex justify-between items-start mb-2">
                <h3 class="font-semibold">NOA (National Officers Academy)</h3>
                <span class="text-sm text-gray-500">Lahore</span>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                One of the most reputed academies with experienced faculty and comprehensive programs.
              </p>
              <div class="flex gap-2">
                <span class="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-xs">Highly Rated</span>
                <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded text-xs">Full Program</span>
              </div>
            </div>

            <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="flex justify-between items-start mb-2">
                <h3 class="font-semibold">Sir Kazim's Academy</h3>
                <span class="text-sm text-gray-500">Lahore</span>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Known for English and Essay preparation with personalized feedback.
              </p>
              <div class="flex gap-2">
                <span class="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded text-xs">English Specialist</span>
              </div>
            </div>

            <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="flex justify-between items-start mb-2">
                <h3 class="font-semibold">Nearpeer</h3>
                <span class="text-sm text-gray-500">Online</span>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Online platform with video lectures, mock tests, and mentorship programs.
              </p>
              <div class="flex gap-2">
                <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded text-xs">Online</span>
                <span class="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-xs">Affordable</span>
              </div>
            </div>

            <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="flex justify-between items-start mb-2">
                <h3 class="font-semibold">World Times Institute</h3>
                <span class="text-sm text-gray-500">Lahore / Online</span>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Associated with Jahangir's World Times magazine. Strong in Current Affairs.
              </p>
              <div class="flex gap-2">
                <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded text-xs">Current Affairs</span>
              </div>
            </div>

            <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="flex justify-between items-start mb-2">
                <h3 class="font-semibold">CSS Prep Forum</h3>
                <span class="text-sm text-gray-500">Online</span>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Free online community with study materials, forums, and peer support.
              </p>
              <div class="flex gap-2">
                <span class="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-xs">Free</span>
                <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded text-xs">Community</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Self Study vs Academy -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4">Self Study vs Academy</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h3 class="font-semibold text-green-800 dark:text-green-200 mb-2">Self Study Pros</h3>
              <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>• Cost-effective</li>
                <li>• Flexible schedule</li>
                <li>• Self-paced learning</li>
                <li>• Many toppers are self-taught</li>
              </ul>
            </div>
            <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">Academy Pros</h3>
              <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>• Structured curriculum</li>
                <li>• Expert guidance</li>
                <li>• Regular mock tests</li>
                <li>• Peer motivation</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Tips -->
        <div class="bg-accent/10 rounded-xl p-6">
          <h2 class="text-xl font-semibold mb-4">Choosing an Academy</h2>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-lightbulb" class="text-accent mt-1 flex-shrink-0" />
              <span>Check the track record - how many students qualified in recent years?</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-lightbulb" class="text-accent mt-1 flex-shrink-0" />
              <span>Talk to former students about their experience</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-lightbulb" class="text-accent mt-1 flex-shrink-0" />
              <span>Consider online options if you can't relocate</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-lightbulb" class="text-accent mt-1 flex-shrink-0" />
              <span>Academy is not mandatory - many toppers are self-prepared</span>
            </li>
          </ul>
        </div>

        <div class="mt-8">
          <UButton to="/resources" variant="outline" icon="i-lucide-arrow-left">
            Back to Resources
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>