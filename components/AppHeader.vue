<!-- components/AppHeader.vue -->
<script setup lang="ts">
const route = useRoute()
const isMobileMenuOpen = ref(false)

// Dropdown states
const activeDropdown = ref<string | null>(null)
let closeTimeout: ReturnType<typeof setTimeout> | null = null

// Navigation structure with dropdowns
const examDropdown = [
  { label: 'Exam Overview', to: '/exam', icon: 'i-lucide-info' },
  { label: 'Eligibility', to: '/exam/eligibility', icon: 'i-lucide-user-check' },
  { label: 'MPT (Preliminary)', to: '/exam/mpt', icon: 'i-lucide-file-check' },
  { label: 'Written Exam', to: '/exam/written', icon: 'i-lucide-pen-tool' },
  { label: 'Psychological Assessment', to: '/exam/psychological', icon: 'i-lucide-brain' },
  { label: 'Interview', to: '/exam/interview', icon: 'i-lucide-users' },
  { label: 'Important Dates', to: '/exam/dates', icon: 'i-lucide-calendar' },
]

const syllabusDropdown = [
  { label: 'Complete Syllabus', to: '/syllabus', icon: 'i-lucide-book-open' },
  { label: 'Compulsory Subjects', to: '/syllabus/compulsory', icon: 'i-lucide-bookmark' },
  { label: 'Optional Subjects', to: '/syllabus/optional', icon: 'i-lucide-layers' },
  { label: 'Subject Selection Guide', to: '/syllabus/selection', icon: 'i-lucide-compass' },
  { label: 'Scoring Trends', to: '/syllabus/trends', icon: 'i-lucide-trending-up' },
]

const subjectsDropdown = [
  { label: 'All Subjects', to: '/subjects', icon: 'i-lucide-layout-grid' },
  { label: 'International Relations', to: '/subjects/international-relations', icon: 'i-lucide-globe' },
  { label: 'Political Science', to: '/subjects/political-science', icon: 'i-lucide-landmark' },
  { label: 'Criminology', to: '/subjects/criminology', icon: 'i-lucide-shield' },
  { label: 'Environmental Science', to: '/subjects/environmental-science', icon: 'i-lucide-leaf' },
  { label: 'Sociology', to: '/subjects/sociology', icon: 'i-lucide-users' },
  { label: 'European History', to: '/subjects/european-history', icon: 'i-lucide-book-open' },
  { label: 'History of USA', to: '/subjects/history-of-usa', icon: 'i-lucide-flag' },
  { label: 'Public Administration', to: '/subjects/public-administration', icon: 'i-lucide-building' },
]

const resourcesDropdown = [
  { label: 'All Resources', to: '/resources', icon: 'i-lucide-library' },
  { label: 'Books', to: '/resources?type=book', icon: 'i-lucide-book' },
  { label: 'Past Papers', to: '/resources/past-papers', icon: 'i-lucide-file-text' },
  { label: 'Video Lectures', to: '/resources?type=video', icon: 'i-lucide-video' },
  { label: 'Notes & Guides', to: '/resources?type=notes', icon: 'i-lucide-notebook' },
  { label: 'Academies', to: '/resources/academies', icon: 'i-lucide-graduation-cap' },
]

const prepDropdown = [
  { label: 'Preparation Roadmap', to: '/roadmap', icon: 'i-lucide-map' },
  { label: '18-Month Plan', to: '/roadmap/18-month', icon: 'i-lucide-calendar-days' },
  { label: 'Current Affairs', to: '/current-affairs', icon: 'i-lucide-newspaper' },
  { label: 'Essay Writing', to: '/prep/essay', icon: 'i-lucide-pen' },
  { label: 'Answer Writing', to: '/prep/answer-writing', icon: 'i-lucide-edit' },
  { label: 'Mock Tests', to: '/prep/mock-tests', icon: 'i-lucide-clipboard-check' },
]

// Check if current route matches any dropdown item
function isDropdownActive(items: typeof examDropdown) {
  return items.some(item => {
    if (item.to.includes('?')) {
      return route.path === item.to.split('?')[0]
    }
    return route.path === item.to || route.path.startsWith(item.to + '/')
  })
}

// Dropdown handlers
function openDropdown(name: string) {
  if (closeTimeout) {
    clearTimeout(closeTimeout)
    closeTimeout = null
  }
  activeDropdown.value = name
}

function closeDropdown() {
  closeTimeout = setTimeout(() => {
    activeDropdown.value = null
  }, 150)
}

function closeDropdownImmediate() {
  if (closeTimeout) {
    clearTimeout(closeTimeout)
    closeTimeout = null
  }
  activeDropdown.value = null
}

// Close mobile menu on route change
watch(() => route.path, () => {
  isMobileMenuOpen.value = false
  closeDropdownImmediate()
})
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
    <UContainer>
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 font-semibold text-lg text-gray-900 dark:text-white hover:text-accent transition-colors">
          <div class="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-sm">CSS</span>
          </div>
          <span class="hidden sm:inline">CSS Prep Pakistan</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-1">
          <!-- Exam Dropdown -->
          <div 
            class="relative"
            @mouseenter="openDropdown('exam')"
            @mouseleave="closeDropdown"
          >
            <button
              :class="[
                'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isDropdownActive(examDropdown) || activeDropdown === 'exam'
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              ]"
              @click="activeDropdown = activeDropdown === 'exam' ? null : 'exam'"
            >
              Exam
              <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': activeDropdown === 'exam' }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <Transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div 
                v-if="activeDropdown === 'exam'"
                class="absolute left-0 top-full mt-1 w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg py-1 z-50"
              >
                <NuxtLink
                  v-for="item in examDropdown"
                  :key="item.to"
                  :to="item.to"
                  class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  @click="closeDropdownImmediate"
                >
                  <span :class="[item.icon, 'w-4 h-4 text-gray-500 dark:text-gray-400']" />
                  <span>{{ item.label }}</span>
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <!-- Syllabus Dropdown -->
          <div 
            class="relative"
            @mouseenter="openDropdown('syllabus')"
            @mouseleave="closeDropdown"
          >
            <button
              :class="[
                'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isDropdownActive(syllabusDropdown) || activeDropdown === 'syllabus'
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              ]"
              @click="activeDropdown = activeDropdown === 'syllabus' ? null : 'syllabus'"
            >
              Syllabus
              <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': activeDropdown === 'syllabus' }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <Transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div 
                v-if="activeDropdown === 'syllabus'"
                class="absolute left-0 top-full mt-1 w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg py-1 z-50"
              >
                <NuxtLink
                  v-for="item in syllabusDropdown"
                  :key="item.to"
                  :to="item.to"
                  class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  @click="closeDropdownImmediate"
                >
                  <span :class="[item.icon, 'w-4 h-4 text-gray-500 dark:text-gray-400']" />
                  <span>{{ item.label }}</span>
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <!-- Subjects Dropdown -->
          <div 
            class="relative"
            @mouseenter="openDropdown('subjects')"
            @mouseleave="closeDropdown"
          >
            <button
              :class="[
                'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isDropdownActive(subjectsDropdown) || activeDropdown === 'subjects'
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              ]"
              @click="activeDropdown = activeDropdown === 'subjects' ? null : 'subjects'"
            >
              Subjects
              <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': activeDropdown === 'subjects' }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <Transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div 
                v-if="activeDropdown === 'subjects'"
                class="absolute left-0 top-full mt-1 w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg py-1 z-50"
              >
                <NuxtLink
                  v-for="item in subjectsDropdown"
                  :key="item.to"
                  :to="item.to"
                  class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  @click="closeDropdownImmediate"
                >
                  <span :class="[item.icon, 'w-4 h-4 text-gray-500 dark:text-gray-400']" />
                  <span>{{ item.label }}</span>
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <!-- Resources Dropdown -->
          <div 
            class="relative"
            @mouseenter="openDropdown('resources')"
            @mouseleave="closeDropdown"
          >
            <button
              :class="[
                'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isDropdownActive(resourcesDropdown) || activeDropdown === 'resources'
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              ]"
              @click="activeDropdown = activeDropdown === 'resources' ? null : 'resources'"
            >
              Resources
              <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': activeDropdown === 'resources' }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <Transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div 
                v-if="activeDropdown === 'resources'"
                class="absolute left-0 top-full mt-1 w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg py-1 z-50"
              >
                <NuxtLink
                  v-for="item in resourcesDropdown"
                  :key="item.to"
                  :to="item.to"
                  class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  @click="closeDropdownImmediate"
                >
                  <span :class="[item.icon, 'w-4 h-4 text-gray-500 dark:text-gray-400']" />
                  <span>{{ item.label }}</span>
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <!-- Preparation Dropdown -->
          <div 
            class="relative"
            @mouseenter="openDropdown('prep')"
            @mouseleave="closeDropdown"
          >
            <button
              :class="[
                'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isDropdownActive(prepDropdown) || activeDropdown === 'prep'
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              ]"
              @click="activeDropdown = activeDropdown === 'prep' ? null : 'prep'"
            >
              Preparation
              <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': activeDropdown === 'prep' }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <Transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div 
                v-if="activeDropdown === 'prep'"
                class="absolute left-0 top-full mt-1 w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg py-1 z-50"
              >
                <NuxtLink
                  v-for="item in prepDropdown"
                  :key="item.to"
                  :to="item.to"
                  class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  @click="closeDropdownImmediate"
                >
                  <span :class="[item.icon, 'w-4 h-4 text-gray-500 dark:text-gray-400']" />
                  <span>{{ item.label }}</span>
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <!-- Community Link -->
          <NuxtLink 
            to="/community"
            :class="[
              'px-3 py-2 text-sm font-medium rounded-md transition-colors',
              route.path === '/community' || route.path.startsWith('/community/')
                ? 'text-gray-900 dark:text-white' 
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            ]"
          >
            Community
          </NuxtLink>
        </nav>

        <!-- Right Actions -->
        <div class="flex items-center gap-2">
          <!-- Start Prep CTA (Desktop) -->
          <NuxtLink 
            to="/roadmap"
            class="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-accent rounded-md hover:bg-accent/90 transition-colors"
          >
            Start Prep
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>

          <!-- Mobile Menu Button -->
          <button
            class="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-md"
            aria-label="Toggle mobile menu"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <nav 
          v-if="isMobileMenuOpen" 
          class="lg:hidden py-4 border-t border-gray-200 dark:border-gray-800"
        >
          <!-- Exam Section -->
          <div class="mb-4">
            <h3 class="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Exam
            </h3>
            <NuxtLink
              v-for="item in examDropdown"
              :key="item.to"
              :to="item.to"
              :class="[
                'flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors',
                route.path === item.to 
                  ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-900' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900/50'
              ]"
            >
              <span :class="[item.icon, 'w-4 h-4']" />
              <span>{{ item.label }}</span>
            </NuxtLink>
          </div>

          <!-- Syllabus Section -->
          <div class="mb-4">
            <h3 class="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Syllabus
            </h3>
            <NuxtLink
              v-for="item in syllabusDropdown"
              :key="item.to"
              :to="item.to"
              :class="[
                'flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors',
                route.path === item.to 
                  ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-900' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900/50'
              ]"
            >
              <span :class="[item.icon, 'w-4 h-4']" />
              <span>{{ item.label }}</span>
            </NuxtLink>
          </div>

          <!-- Subjects Section -->
          <div class="mb-4">
            <h3 class="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Subject Guides
            </h3>
            <NuxtLink
              v-for="item in subjectsDropdown"
              :key="item.to"
              :to="item.to"
              :class="[
                'flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors',
                route.path === item.to 
                  ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-900' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900/50'
              ]"
            >
              <span :class="[item.icon, 'w-4 h-4']" />
              <span>{{ item.label }}</span>
            </NuxtLink>
          </div>

          <!-- Resources Section -->
          <div class="mb-4">
            <h3 class="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Resources
            </h3>
            <NuxtLink
              v-for="item in resourcesDropdown"
              :key="item.to"
              :to="item.to"
              :class="[
                'flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors',
                route.path === item.to 
                  ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-900' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900/50'
              ]"
            >
              <span :class="[item.icon, 'w-4 h-4']" />
              <span>{{ item.label }}</span>
            </NuxtLink>
          </div>

          <!-- Preparation Section -->
          <div class="mb-4">
            <h3 class="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Preparation
            </h3>
            <NuxtLink
              v-for="item in prepDropdown"
              :key="item.to"
              :to="item.to"
              :class="[
                'flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors',
                route.path === item.to 
                  ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-900' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900/50'
              ]"
            >
              <span :class="[item.icon, 'w-4 h-4']" />
              <span>{{ item.label }}</span>
            </NuxtLink>
          </div>

          <!-- Community Link -->
          <div class="mb-4">
            <NuxtLink
              to="/community"
              :class="[
                'flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors',
                route.path === '/community' 
                  ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-900' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900/50'
              ]"
            >
              <span class="i-lucide-users w-4 h-4" />
              <span>Community</span>
            </NuxtLink>
          </div>

          <!-- Start Prep Button (Mobile) -->
          <div class="px-3 pt-4 border-t border-gray-200 dark:border-gray-800">
            <NuxtLink 
              to="/roadmap" 
              class="flex items-center justify-center gap-1.5 w-full px-3 py-2 text-sm font-medium text-white bg-accent rounded-md hover:bg-accent/90 transition-colors"
            >
              Start Your Preparation
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
          </div>
        </nav>
      </Transition>
    </UContainer>
  </header>
</template>