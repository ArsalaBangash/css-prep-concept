<template>
  <div class="bg-clean min-h-screen">
    <UContainer class="py-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">About CSS Prep Pakistan</h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Your comprehensive guide to CSS examination success
        </p>

        <!-- Mission -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4">Our Mission</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            CSS Prep Pakistan is dedicated to democratizing access to quality CSS examination 
            preparation resources. We believe that every Pakistani student, regardless of their 
            background or location, deserves access to the best preparation materials and guidance.
          </p>
          <p class="text-gray-600 dark:text-gray-400">
            Our platform curates the most effective study resources, provides structured preparation 
            roadmaps, and connects aspirants with a supportive community of fellow candidates and 
            successful officers.
          </p>
        </div>

        <!-- What We Offer -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4">What We Offer</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="flex items-start gap-3">
              <UIcon name="i-lucide-book-open" class="text-accent text-xl flex-shrink-0 mt-1" />
              <div>
                <h3 class="font-semibold">Curated Resources</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">Handpicked books, notes, and study materials</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-lucide-map" class="text-accent text-xl flex-shrink-0 mt-1" />
              <div>
                <h3 class="font-semibold">Preparation Roadmaps</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">Structured timelines for effective preparation</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-lucide-file-text" class="text-accent text-xl flex-shrink-0 mt-1" />
              <div>
                <h3 class="font-semibold">Past Papers</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">Archive of previous years' exam papers</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-lucide-users" class="text-accent text-xl flex-shrink-0 mt-1" />
              <div>
                <h3 class="font-semibold">Community Support</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">Connect with fellow aspirants and mentors</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Team -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h2 class="text-2xl font-semibold mb-4">Our Team</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            CSS Prep Pakistan is built by a team of passionate individuals who understand the 
            challenges of CSS preparation. Our team includes:
          </p>
          <ul class="space-y-2 text-gray-600 dark:text-gray-400">
            <li class="flex items-center gap-2">
              <UIcon name="i-lucide-check" class="text-green-500" />
              CSS qualified officers who share their experience
            </li>
            <li class="flex items-center gap-2">
              <UIcon name="i-lucide-check" class="text-green-500" />
              Education technology experts
            </li>
            <li class="flex items-center gap-2">
              <UIcon name="i-lucide-check" class="text-green-500" />
              Content curators and researchers
            </li>
            <li class="flex items-center gap-2">
              <UIcon name="i-lucide-check" class="text-green-500" />
              Web developers and designers
            </li>
          </ul>
        </div>

        <!-- Disclaimer -->
        <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 mb-6">
          <h2 class="text-xl font-semibold mb-2 text-yellow-800 dark:text-yellow-200">Disclaimer</h2>
          <p class="text-sm text-yellow-700 dark:text-yellow-300">
            CSS Prep Pakistan is an independent educational platform and is not affiliated with 
            FPSC (Federal Public Service Commission) or any government body. All information 
            provided is for educational purposes only. Please verify official information from 
            FPSC's official website.
          </p>
        </div>

        <!-- CTA -->
        <div class="bg-accent/10 rounded-xl p-6 text-center">
          <h2 class="text-xl font-semibold mb-2">Start Your CSS Journey Today</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Explore our resources and begin your preparation with confidence.
          </p>
          <div class="flex justify-center gap-4">
            <UButton to="/roadmap">
              View Roadmap
            </UButton>
            <UButton to="/resources" variant="outline">
              Browse Resources
            </UButton>
          </div>
        </div>

        <div class="mt-8 flex gap-4">
          <UButton to="/" variant="outline" icon="i-lucide-arrow-left">
            Back to Home
          </UButton>
          <UButton to="/contact" icon="i-lucide-arrow-right" trailing>
            Contact Us
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>