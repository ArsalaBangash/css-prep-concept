<!-- pages/resources/index.vue -->
<script setup lang="ts">
useSeoMeta({
  title: 'CSS Exam Resources - Books, Past Papers & Study Materials',
  description: 'Curated collection of CSS exam preparation resources including recommended books, past papers, video lectures, and study guides for all subjects.',
})

// Resource categories
const categories = [
  { id: 'all', label: 'All Resources', icon: 'i-lucide-layout-grid' },
  { id: 'book', label: 'Books', icon: 'i-lucide-book' },
  { id: 'past-paper', label: 'Past Papers', icon: 'i-lucide-file-text' },
  { id: 'video', label: 'Video Lectures', icon: 'i-lucide-video' },
  { id: 'notes', label: 'Notes & Guides', icon: 'i-lucide-notebook' },
  { id: 'website', label: 'Websites', icon: 'i-lucide-globe' },
  { id: 'youtube', label: 'YouTube', icon: 'i-lucide-youtube' },
  { id: 'think-tank', label: 'Think Tanks', icon: 'i-lucide-landmark' },
  { id: 'official', label: 'Official', icon: 'i-lucide-shield-check' },
]

// Subject filters
const subjects = [
  { id: 'all', label: 'All Subjects' },
  { id: 'english', label: 'English Essay & Precis' },
  { id: 'pakistan-affairs', label: 'Pakistan Affairs' },
  { id: 'current-affairs', label: 'Current Affairs' },
  { id: 'gsa', label: 'General Science & Ability' },
  { id: 'islamic-studies', label: 'Islamic Studies' },
  { id: 'political-science', label: 'Political Science' },
  { id: 'international-relations', label: 'International Relations' },
  { id: 'economics', label: 'Economics' },
  { id: 'sociology', label: 'Sociology' },
  { id: 'criminology', label: 'Criminology' },
]

const selectedCategory = ref('all')
const selectedSubject = ref('all')
const searchQuery = ref('')

// Sample resources data
const resources = ref([
  {
    id: 1,
    title: 'High School English Grammar & Composition',
    author: 'Wren & Martin',
    type: 'book',
    subject: 'english',
    description: 'The definitive grammar reference for CSS English preparation. Covers all grammar rules comprehensively.',
    rating: 4.9,
    reviews: 1250,
    isFree: false,
    isRecommended: true,
  },
  {
    id: 2,
    title: 'Exploring the World of English',
    author: 'Saadat Ali Shah',
    type: 'book',
    subject: 'english',
    description: 'Comprehensive guide for CSS English Precis & Composition with vocabulary, idioms, and practice exercises.',
    rating: 4.7,
    reviews: 890,
    isFree: false,
    isRecommended: true,
  },
  {
    id: 3,
    title: 'Pakistan: A Hard Country',
    author: 'Anatol Lieven',
    type: 'book',
    subject: 'pakistan-affairs',
    description: 'In-depth analysis of Pakistan\'s society, politics, and challenges. Essential for understanding modern Pakistan.',
    rating: 4.8,
    reviews: 720,
    isFree: false,
    isRecommended: true,
  },
  {
    id: 4,
    title: 'Foreign Policy of Pakistan',
    author: 'Abdul Sattar',
    type: 'book',
    subject: 'pakistan-affairs',
    description: 'Comprehensive coverage of Pakistan\'s diplomatic history and foreign relations from independence to present.',
    rating: 4.6,
    reviews: 540,
    isFree: false,
    isRecommended: true,
  },
  {
    id: 5,
    title: 'General Science & Ability',
    author: 'Mian Shafiq (JWT)',
    type: 'book',
    subject: 'gsa',
    description: 'Complete coverage of GSA syllabus including everyday science, math, and analytical reasoning.',
    rating: 4.8,
    reviews: 1100,
    isFree: false,
    isRecommended: true,
  },
  {
    id: 6,
    title: 'CSS Past Papers (2016-2025)',
    author: 'FPSC Official',
    type: 'past-paper',
    subject: 'all',
    description: 'Official FPSC past papers for all compulsory and optional subjects from 2016 onwards.',
    rating: 5.0,
    reviews: 2500,
    isFree: true,
    isRecommended: true,
  },
  {
    id: 7,
    title: 'GSA Crash Course',
    author: 'Mian Shafiq - Study River',
    type: 'video',
    subject: 'gsa',
    description: 'Complete video course covering General Science & Ability with practice problems and explanations.',
    rating: 4.7,
    reviews: 650,
    isFree: true,
    isRecommended: true,
  },
  {
    id: 8,
    title: 'Jahangir\'s World Times',
    author: 'JWT Publications',
    type: 'website',
    subject: 'current-affairs',
    description: 'Monthly magazine and online portal for current affairs, CSS news, and exam updates.',
    rating: 4.6,
    reviews: 1800,
    isFree: false,
    isRecommended: true,
  },
  {
    id: 9,
    title: 'Islam: Its Meaning and Message',
    author: 'Khurshid Ahmad',
    type: 'book',
    subject: 'islamic-studies',
    description: 'Comprehensive introduction to Islamic principles, suitable for English-medium CSS aspirants.',
    rating: 4.5,
    reviews: 420,
    isFree: false,
    isRecommended: true,
  },
  {
    id: 10,
    title: 'CSS Prep Forum',
    author: 'Community',
    type: 'website',
    subject: 'all',
    description: 'Online community for CSS aspirants with past papers, solved MCQs, and discussion forums.',
    rating: 4.4,
    reviews: 3200,
    isFree: true,
    isRecommended: false,
  },
  {
    id: 11,
    title: 'The Globalization of World Politics',
    author: 'Baylis, Smith & Owens',
    type: 'book',
    subject: 'international-relations',
    description: 'Standard textbook for International Relations covering theories, issues, and global politics.',
    rating: 4.7,
    reviews: 380,
    isFree: false,
    isRecommended: true,
  },
  {
    id: 12,
    title: 'High Scoring CSS Essays',
    author: 'Abrahim Shah',
    type: 'book',
    subject: 'english',
    description: 'Collection of model essays with outlines and analysis for CSS Essay paper preparation.',
    rating: 4.5,
    reviews: 560,
    isFree: false,
    isRecommended: true,
  },
  // YouTube Channels
  {
    id: 13,
    title: 'Study River',
    author: 'Mian Shafiq',
    type: 'youtube',
    subject: 'gsa',
    description: 'Complete GSA video course by the author of JWT\'s General Science & Ability book. Excellent for visual learners.',
    rating: 4.8,
    reviews: 2100,
    isFree: true,
    isRecommended: true,
  },
  {
    id: 14,
    title: 'CSS Club',
    author: 'Dr. Hina Sikander',
    type: 'youtube',
    subject: 'english',
    description: 'Focused on Essay structure, English writing techniques, and CSS preparation strategy.',
    rating: 4.6,
    reviews: 1500,
    isFree: true,
    isRecommended: true,
  },
  {
    id: 15,
    title: 'Suno Jano (Faisal Warraich)',
    author: 'Faisal Warraich',
    type: 'youtube',
    subject: 'pakistan-affairs',
    description: 'Excellent for Pakistan and world history. Engaging storytelling style makes complex topics easy to understand.',
    rating: 4.7,
    reviews: 3200,
    isFree: true,
    isRecommended: true,
  },
  {
    id: 16,
    title: 'Al Jazeera "Start Here"',
    author: 'Al Jazeera',
    type: 'youtube',
    subject: 'current-affairs',
    description: 'Short explainer videos on complex global issues. Perfect for understanding international current affairs quickly.',
    rating: 4.5,
    reviews: 890,
    isFree: true,
    isRecommended: false,
  },
  {
    id: 17,
    title: 'CaspianReport',
    author: 'Shirvan Neftchi',
    type: 'youtube',
    subject: 'international-relations',
    description: 'In-depth geopolitical analysis. Excellent for IR optional and understanding global power dynamics.',
    rating: 4.7,
    reviews: 1200,
    isFree: true,
    isRecommended: true,
  },
  {
    id: 18,
    title: 'Vox',
    author: 'Vox Media',
    type: 'youtube',
    subject: 'current-affairs',
    description: 'Explainer videos on complex topics - politics, science, culture. Great for building diverse knowledge base.',
    rating: 4.4,
    reviews: 780,
    isFree: true,
    isRecommended: false,
  },
  {
    id: 19,
    title: 'TLDR News Global',
    author: 'TLDR News',
    type: 'youtube',
    subject: 'current-affairs',
    description: 'Daily global news analysis. Keeps you updated on international developments relevant to CSS.',
    rating: 4.3,
    reviews: 650,
    isFree: true,
    isRecommended: false,
  },
  // Think Tanks
  {
    id: 20,
    title: 'PIDE (Pakistan Institute of Development Economics)',
    author: 'Government of Pakistan',
    type: 'think-tank',
    subject: 'current-affairs',
    description: 'Premier economic research institute. Essential for data on Pakistan\'s economy, poverty, and development.',
    rating: 4.8,
    reviews: 420,
    isFree: true,
    isRecommended: true,
  },
  {
    id: 21,
    title: 'IPRI (Islamabad Policy Research Institute)',
    author: 'IPRI',
    type: 'think-tank',
    subject: 'international-relations',
    description: 'Strategic and security studies research. Great for defense, foreign policy, and regional analysis.',
    rating: 4.6,
    reviews: 380,
    isFree: true,
    isRecommended: true,
  },
  {
    id: 22,
    title: 'ISSI (Institute of Strategic Studies Islamabad)',
    author: 'ISSI',
    type: 'think-tank',
    subject: 'international-relations',
    description: 'Security and strategic affairs analysis. Reports on regional dynamics, nuclear issues, and defense.',
    rating: 4.5,
    reviews: 290,
    isFree: true,
    isRecommended: false,
  },
  {
    id: 23,
    title: 'IPS (Institute of Policy Studies)',
    author: 'IPS Islamabad',
    type: 'think-tank',
    subject: 'pakistan-affairs',
    description: 'Public policy research covering governance, education, and social issues in Pakistan.',
    rating: 4.4,
    reviews: 210,
    isFree: true,
    isRecommended: false,
  },
  // Official Resources
  {
    id: 24,
    title: 'FPSC Official Syllabus (PDF)',
    author: 'Federal Public Service Commission',
    type: 'official',
    subject: 'all',
    description: 'The definitive source - official CSS syllabus from FPSC. Download and print for every subject.',
    rating: 5.0,
    reviews: 4500,
    isFree: true,
    isRecommended: true,
  },
  {
    id: 25,
    title: 'FPSC Descriptive Papers Archive',
    author: 'Federal Public Service Commission',
    type: 'official',
    subject: 'all',
    description: 'Official past papers uploaded by FPSC. The most authentic source for question patterns.',
    rating: 5.0,
    reviews: 3800,
    isFree: true,
    isRecommended: true,
  },
  {
    id: 26,
    title: 'Economic Survey of Pakistan',
    author: 'Ministry of Finance',
    type: 'official',
    subject: 'current-affairs',
    description: 'Annual government report with latest statistics on GDP, inflation, trade, and sectors. MUST READ for data.',
    rating: 4.9,
    reviews: 1200,
    isFree: true,
    isRecommended: true,
  },
  {
    id: 27,
    title: 'Pakistan Statistical Yearbook',
    author: 'PBS (Pakistan Bureau of Statistics)',
    type: 'official',
    subject: 'pakistan-affairs',
    description: 'Comprehensive statistics on demographics, economy, education, and more. Essential for factual answers.',
    rating: 4.6,
    reviews: 450,
    isFree: true,
    isRecommended: false,
  },
  // Periodicals
  {
    id: 28,
    title: 'The Economist',
    author: 'The Economist Group',
    type: 'website',
    subject: 'current-affairs',
    description: 'Global perspective on politics, economics, and business. Helps develop analytical writing style for essays.',
    rating: 4.7,
    reviews: 890,
    isFree: false,
    isRecommended: true,
  },
  {
    id: 29,
    title: 'Foreign Affairs',
    author: 'Council on Foreign Relations',
    type: 'website',
    subject: 'international-relations',
    description: 'Premier journal on international relations and foreign policy. Bi-monthly in-depth analysis.',
    rating: 4.6,
    reviews: 520,
    isFree: false,
    isRecommended: true,
  },
  {
    id: 30,
    title: 'Dawn Newspaper',
    author: 'Dawn Media Group',
    type: 'website',
    subject: 'current-affairs',
    description: 'Pakistan\'s premier English daily. Read editorials and op-eds daily for writing style and current affairs.',
    rating: 4.8,
    reviews: 2800,
    isFree: true,
    isRecommended: true,
  },
])

// Filtered resources
const filteredResources = computed(() => {
  return resources.value.filter(resource => {
    const matchesCategory = selectedCategory.value === 'all' || resource.type === selectedCategory.value
    const matchesSubject = selectedSubject.value === 'all' || resource.subject === selectedSubject.value || resource.subject === 'all'
    const matchesSearch = !searchQuery.value || 
      resource.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      resource.author.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSubject && matchesSearch
  })
})

// Get type icon
function getTypeIcon(type: string) {
  const icons: Record<string, string> = {
    'book': 'i-lucide-book',
    'past-paper': 'i-lucide-file-text',
    'video': 'i-lucide-video',
    'notes': 'i-lucide-notebook',
    'website': 'i-lucide-globe',
    'youtube': 'i-lucide-youtube',
    'think-tank': 'i-lucide-landmark',
    'official': 'i-lucide-shield-check',
  }
  return icons[type] || 'i-lucide-file'
}

// Get type color
function getTypeColor(type: string) {
  const colors: Record<string, string> = {
    'book': 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    'past-paper': 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
    'video': 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
    'notes': 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
    'website': 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
    'youtube': 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
    'think-tank': 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
    'official': 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
  }
  return colors[type] || 'bg-gray-100 text-gray-600 dark:bg-gray-900/30 dark:text-gray-400'
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <!-- Header -->
    <div class="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <UContainer class="py-12">
        <h1 class="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
          CSS Exam Resources
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          Curated collection of books, past papers, video lectures, and study materials 
          recommended by toppers and mentors.
        </p>
      </UContainer>
    </div>

    <UContainer class="py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Sidebar Filters -->
        <aside class="lg:w-64 flex-shrink-0">
          <div class="sticky top-24 space-y-6">
            <!-- Search -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Search
              </label>
              <div class="relative">
                <UIcon name="i-lucide-search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search resources..."
                  class="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
            </div>

            <!-- Category Filter -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Type
              </label>
              <div class="space-y-1">
                <button
                  v-for="category in categories"
                  :key="category.id"
                  @click="selectedCategory = category.id"
                  :class="[
                    'w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors',
                    selectedCategory === category.id
                      ? 'bg-accent/10 text-accent font-medium'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900'
                  ]"
                >
                  <UIcon :name="category.icon" class="w-4 h-4" />
                  {{ category.label }}
                </button>
              </div>
            </div>

            <!-- Subject Filter -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </label>
              <select
                v-model="selectedSubject"
                class="w-full px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option v-for="subject in subjects" :key="subject.id" :value="subject.id">
                  {{ subject.label }}
                </option>
              </select>
            </div>

            <!-- Quick Links -->
            <div class="pt-4 border-t border-gray-200 dark:border-gray-800">
              <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Quick Links</h3>
              <div class="space-y-2">
                <NuxtLink 
                  to="/resources/past-papers"
                  class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-accent transition-colors"
                >
                  <UIcon name="i-lucide-file-text" class="w-4 h-4" />
                  Past Papers Archive
                </NuxtLink>
                <NuxtLink 
                  to="/resources/academies"
                  class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-accent transition-colors"
                >
                  <UIcon name="i-lucide-graduation-cap" class="w-4 h-4" />
                  CSS Academies
                </NuxtLink>
                <NuxtLink 
                  to="/syllabus"
                  class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-accent transition-colors"
                >
                  <UIcon name="i-lucide-book-open" class="w-4 h-4" />
                  View Syllabus
                </NuxtLink>
              </div>
            </div>
          </div>
        </aside>

        <!-- Resources Grid -->
        <main class="flex-1">
          <!-- Results Count -->
          <div class="flex items-center justify-between mb-6">
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Showing {{ filteredResources.length }} resources
            </p>
          </div>

          <!-- Resources List -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="resource in filteredResources"
              :key="resource.id"
              class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:border-accent dark:hover:border-accent hover:shadow-lg transition-all"
            >
              <div class="flex items-start gap-4">
                <!-- Type Icon -->
                <div :class="['w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0', getTypeColor(resource.type)]">
                  <UIcon :name="getTypeIcon(resource.type)" class="w-5 h-5" />
                </div>

                <div class="flex-1 min-w-0">
                  <!-- Title & Author -->
                  <div class="flex items-start justify-between gap-2 mb-1">
                    <h3 class="font-semibold text-gray-900 dark:text-white line-clamp-1">
                      {{ resource.title }}
                    </h3>
                    <div class="flex items-center gap-1 flex-shrink-0">
                      <span v-if="resource.isFree" class="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full">
                        Free
                      </span>
                      <span v-if="resource.isRecommended" class="px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded-full">
                        Recommended
                      </span>
                    </div>
                  </div>
                  
                  <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    by {{ resource.author }}
                  </p>

                  <!-- Description -->
                  <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                    {{ resource.description }}
                  </p>

                  <!-- Rating & Reviews -->
                  <div class="flex items-center gap-4 text-sm">
                    <div class="flex items-center gap-1">
                      <UIcon name="i-lucide-star" class="w-4 h-4 text-yellow-500" />
                      <span class="font-medium text-gray-900 dark:text-white">{{ resource.rating }}</span>
                    </div>
                    <span class="text-gray-500 dark:text-gray-400">
                      {{ resource.reviews.toLocaleString() }} reviews
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="filteredResources.length === 0" class="text-center py-12">
            <UIcon name="i-lucide-search-x" class="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">No resources found</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Try adjusting your filters or search query.
            </p>
          </div>
        </main>
      </div>
    </UContainer>
  </div>
</template>