<!-- pages/index.vue -->
<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: 'CSS Prep Pakistan - Your Path to Civil Services',
  description: 'Comprehensive CSS exam preparation hub for Pakistani aspirants. Curated resources, strategic guidance, syllabus coverage, and community support for CSS 2026.',
  ogTitle: 'CSS Prep Pakistan - Your Path to Civil Services',
  ogDescription: 'Comprehensive CSS exam preparation hub for Pakistani aspirants. Curated resources, strategic guidance, and community support.',
  ogImage: '/images/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <!-- Section 1: Hero -->
    <HomeHero />

    <!-- Section 2: Quick Start Decision Tool -->
    <HomeQuickStart />

    <!-- Section 3: Exam Stages Overview -->
    <HomeExamStages />

    <!-- Section 4: Subject Groups & Selection -->
    <HomeSubjectGroups />

    <!-- Section 5: Featured Resources -->
    <HomeFeaturedResources />

    <!-- Section 6: Preparation Timeline -->
    <HomeTimeline />

    <!-- Section 7: Final CTA -->
    <HomeCTA />
  </div>
</template>