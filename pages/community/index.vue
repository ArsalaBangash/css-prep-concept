<!-- pages/community/index.vue -->
<script setup lang="ts">
useSeoMeta({
  title: 'CSS Aspirants Community - Connect, Learn, Succeed',
  description: 'Join the CSS Prep Pakistan community. Connect with fellow aspirants, share resources, get mentorship, and stay motivated on your CSS journey.',
})

// Community features
const features = [
  {
    icon: 'i-lucide-users',
    title: 'Discussion Forums',
    description: 'Engage in subject-wise discussions, ask questions, and share insights with fellow aspirants.',
    status: 'coming-soon',
  },
  {
    icon: 'i-lucide-message-circle',
    title: 'Study Groups',
    description: 'Join or create study groups based on your optional subjects or preparation phase.',
    status: 'coming-soon',
  },
  {
    icon: 'i-lucide-graduation-cap',
    title: 'Mentorship Program',
    description: 'Connect with CSS qualifiers and experienced mentors for guidance and essay evaluation.',
    status: 'coming-soon',
  },
  {
    icon: 'i-lucide-calendar',
    title: 'Mock Test Sessions',
    description: 'Participate in community-organized mock tests and get peer feedback on your answers.',
    status: 'coming-soon',
  },
  {
    icon: 'i-lucide-share-2',
    title: 'Resource Sharing',
    description: 'Share and access notes, summaries, and study materials contributed by the community.',
    status: 'coming-soon',
  },
  {
    icon: 'i-lucide-trophy',
    title: 'Success Stories',
    description: 'Read inspiring stories from CSS qualifiers and learn from their preparation strategies.',
    status: 'active',
  },
]

// Social platforms
const socialPlatforms = [
  {
    name: 'WhatsApp Groups',
    icon: 'i-simple-icons-whatsapp',
    description: 'Join subject-wise WhatsApp groups for daily discussions and updates.',
    link: '#',
    members: '5,000+',
  },
  {
    name: 'Telegram Channel',
    icon: 'i-simple-icons-telegram',
    description: 'Get daily current affairs updates and study tips on our Telegram channel.',
    link: '#',
    members: '12,000+',
  },
  {
    name: 'Facebook Group',
    icon: 'i-simple-icons-facebook',
    description: 'Join our Facebook community for discussions, resources, and motivation.',
    link: '#',
    members: '25,000+',
  },
  {
    name: 'YouTube Channel',
    icon: 'i-simple-icons-youtube',
    description: 'Watch free video lectures, topper interviews, and preparation guides.',
    link: '#',
    members: '50,000+',
  },
]

// Success stories preview
const successStories = [
  {
    name: 'Ahmed Khan',
    batch: 'CSS 2024',
    rank: '15th Position',
    group: 'PAS',
    quote: 'Consistent daily effort and smart subject selection made all the difference.',
    avatar: null,
  },
  {
    name: 'Fatima Zahra',
    batch: 'CSS 2024',
    rank: '23rd Position',
    group: 'FSP',
    quote: 'Focus on English and answer writing. These are the real game changers.',
    avatar: null,
  },
  {
    name: 'Muhammad Ali',
    batch: 'CSS 2023',
    rank: '8th Position',
    group: 'PSP',
    quote: 'Read less, write more. Practice is the key to CSS success.',
    avatar: null,
  },
]

// FAQ
const faqs = [
  {
    question: 'How can I join the community?',
    answer: 'You can join our WhatsApp groups, Telegram channel, or Facebook group using the links provided above. All platforms are free to join.',
  },
  {
    question: 'Is there any fee for mentorship?',
    answer: 'Basic community support is free. Premium mentorship programs with personalized guidance and essay evaluation may have nominal fees.',
  },
  {
    question: 'Can I share my own notes and resources?',
    answer: 'Absolutely! We encourage community members to share their notes, summaries, and study materials to help fellow aspirants.',
  },
  {
    question: 'How do I find study partners for my optional subjects?',
    answer: 'Join our subject-specific WhatsApp groups or post in the Facebook group to find study partners with similar optional subjects.',
  },
]
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <!-- Header -->
    <div class="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <UContainer class="py-12">
        <div class="max-w-3xl">
          <h1 class="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
            CSS Aspirants Community
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Connect with thousands of CSS aspirants across Pakistan. Share resources, 
            get mentorship, and stay motivated on your journey to civil services.
          </p>
          <div class="flex flex-wrap gap-4 text-sm">
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-users" class="w-5 h-5 text-accent" />
              <span class="text-gray-600 dark:text-gray-400">50,000+ Members</span>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-message-circle" class="w-5 h-5 text-accent" />
              <span class="text-gray-600 dark:text-gray-400">Active Daily Discussions</span>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-award" class="w-5 h-5 text-accent" />
              <span class="text-gray-600 dark:text-gray-400">100+ CSS Qualifiers</span>
            </div>
          </div>
        </div>
      </UContainer>
    </div>

    <UContainer class="py-8">
      <!-- Community Features -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Community Features
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5"
          >
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <UIcon :name="feature.icon" class="w-5 h-5 text-accent" />
              </div>
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <h3 class="font-semibold text-gray-900 dark:text-white">{{ feature.title }}</h3>
                  <span 
                    v-if="feature.status === 'coming-soon'"
                    class="px-2 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full"
                  >
                    Coming Soon
                  </span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Join Our Platforms -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Join Our Platforms
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            v-for="platform in socialPlatforms"
            :key="platform.name"
            :href="platform.link"
            class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:border-accent dark:hover:border-accent transition-colors"
          >
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <UIcon :name="platform.icon" class="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between mb-1">
                  <h3 class="font-semibold text-gray-900 dark:text-white group-hover:text-accent transition-colors">
                    {{ platform.name }}
                  </h3>
                  <span class="text-sm text-gray-500 dark:text-gray-400">{{ platform.members }}</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ platform.description }}</p>
              </div>
            </div>
          </a>
        </div>
      </section>

      <!-- Success Stories -->
      <section class="mb-12">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
            Success Stories
          </h2>
          <NuxtLink 
            to="/community/stories"
            class="text-sm font-medium text-accent hover:underline"
          >
            View All Stories →
          </NuxtLink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            v-for="story in successStories"
            :key="story.name"
            class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5"
          >
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <span class="text-lg font-semibold text-accent">{{ story.name.charAt(0) }}</span>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white">{{ story.name }}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ story.batch }} • {{ story.rank }}</p>
              </div>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 italic mb-3">
              "{{ story.quote }}"
            </p>
            <span class="inline-block px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded">
              {{ story.group }}
            </span>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Frequently Asked Questions
        </h2>
        <div class="space-y-4">
          <div
            v-for="faq in faqs"
            :key="faq.question"
            class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5"
          >
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">{{ faq.question }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ faq.answer }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <div class="bg-accent/10 dark:bg-accent/20 border border-accent/20 rounded-xl p-8 text-center">
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
          Ready to join the community?
        </h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Connect with fellow aspirants, get your questions answered, and stay motivated 
          throughout your CSS preparation journey.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a 
            href="#"
            class="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium"
          >
            <UIcon name="i-simple-icons-whatsapp" class="w-5 h-5" />
            Join WhatsApp Group
          </a>
          <a 
            href="#"
            class="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white rounded-lg hover:border-accent transition-colors font-medium"
          >
            <UIcon name="i-simple-icons-telegram" class="w-5 h-5" />
            Join Telegram Channel
          </a>
        </div>
      </div>
    </UContainer>
  </div>
</template>