<!-- components/AppFooter.vue -->
<script setup lang="ts">
const appConfig = useAppConfig()

// Exam column links
const examLinks = [
  { label: 'Exam Overview', to: '/exam' },
  { label: 'Eligibility', to: '/exam/eligibility' },
  { label: 'MPT (Preliminary)', to: '/exam/mpt' },
  { label: 'Written Exam', to: '/exam/written' },
  { label: 'Important Dates', to: '/exam/dates' }
]

// Syllabus column links
const syllabusLinks = [
  { label: 'Complete Syllabus', to: '/syllabus' },
  { label: 'Compulsory Subjects', to: '/syllabus/compulsory' },
  { label: 'Optional Subjects', to: '/syllabus/optional' },
  { label: 'Subject Selection', to: '/syllabus/selection' },
  { label: 'Scoring Trends', to: '/syllabus/trends' }
]

// Resources column links
const resourceLinks = [
  { label: 'All Resources', to: '/resources' },
  { label: 'Books', to: '/resources?type=book' },
  { label: 'Past Papers', to: '/resources/past-papers' },
  { label: 'Video Lectures', to: '/resources?type=video' },
  { label: 'Academies', to: '/resources/academies' }
]

// Preparation column links
const prepLinks = [
  { label: 'Preparation Roadmap', to: '/roadmap' },
  { label: 'Current Affairs', to: '/current-affairs' },
  { label: 'Essay Writing', to: '/prep/essay' },
  { label: 'Mock Tests', to: '/prep/mock-tests' },
  { label: 'Community', to: '/community' }
]

// Social links
const socialLinks = [
  { label: 'YouTube', icon: 'i-simple-icons-youtube', to: 'https://youtube.com/@csspreppakistan' },
  { label: 'Twitter', icon: 'i-simple-icons-x', to: 'https://twitter.com/csspreppk' },
  { label: 'Facebook', icon: 'i-simple-icons-facebook', to: 'https://facebook.com/csspreppakistan' },
  { label: 'WhatsApp', icon: 'i-simple-icons-whatsapp', to: 'https://wa.me/923001234567' }
]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer
    class="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950"
    role="contentinfo"
  >
    <UContainer>
      <div class="py-12">
        <!-- Brand Section -->
        <div class="mb-10">
          <NuxtLink to="/" class="inline-block mb-4">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">CSS</span>
              </div>
              <span class="font-semibold text-lg text-gray-900 dark:text-white">CSS Prep Pakistan</span>
            </div>
          </NuxtLink>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 max-w-md">
            Your comprehensive hub for CSS exam preparation. Curated resources, strategic guidance, 
            and community support for Pakistani civil service aspirants.
          </p>
          <div class="flex items-center gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.to"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              :aria-label="social.label"
            >
              <UIcon :name="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- 4-Column Navigation Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <!-- Exam Column -->
          <nav aria-labelledby="footer-exam">
            <h3 id="footer-exam" class="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Exam
            </h3>
            <ul class="space-y-3">
              <li v-for="link in examLinks" :key="link.to + link.label">
                <NuxtLink
                  :to="link.to"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>

          <!-- Syllabus Column -->
          <nav aria-labelledby="footer-syllabus">
            <h3 id="footer-syllabus" class="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Syllabus
            </h3>
            <ul class="space-y-3">
              <li v-for="link in syllabusLinks" :key="link.to + link.label">
                <NuxtLink
                  :to="link.to"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>

          <!-- Resources Column -->
          <nav aria-labelledby="footer-resources">
            <h3 id="footer-resources" class="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Resources
            </h3>
            <ul class="space-y-3">
              <li v-for="link in resourceLinks" :key="link.to + link.label">
                <NuxtLink
                  :to="link.to"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>

          <!-- Preparation Column -->
          <nav aria-labelledby="footer-prep">
            <h3 id="footer-prep" class="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Preparation
            </h3>
            <ul class="space-y-3">
              <li v-for="link in prepLinks" :key="link.to + link.label">
                <NuxtLink
                  :to="link.to"
                  class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Important Dates Banner -->
        <div class="mb-8 p-4 bg-accent/10 dark:bg-accent/20 rounded-lg border border-accent/20">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white mb-1">CSS 2026 Important Dates</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                MPT: November 9, 2025 • Written Exam: February 4, 2026
              </p>
            </div>
            <NuxtLink 
              to="/exam/dates"
              class="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline whitespace-nowrap"
            >
              View Full Schedule
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <p>© {{ new Date().getFullYear() }} CSS Prep Pakistan. All rights reserved.</p>
            <div class="flex items-center gap-4">
              <NuxtLink to="/about" class="hover:text-gray-900 dark:hover:text-white transition-colors">
                About
              </NuxtLink>
              <NuxtLink to="/contact" class="hover:text-gray-900 dark:hover:text-white transition-colors">
                Contact
              </NuxtLink>
              <NuxtLink to="/privacy" class="hover:text-gray-900 dark:hover:text-white transition-colors">
                Privacy
              </NuxtLink>
            </div>
          </div>
          
          <button
            @click="scrollToTop"
            class="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-3 py-1.5"
            aria-label="Back to top"
          >
            Back to top
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </UContainer>
  </footer>
</template>