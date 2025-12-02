<!-- components/home/Hero.vue -->
<template>
  <div class="relative overflow-hidden bg-white dark:bg-black">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-grid opacity-50"></div>
    
    <UContainer class="relative py-16 sm:py-24">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium bg-accent/10 text-accent rounded-full animate-fade-in">
          <span class="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
          CSS 2026 Applications Open - MPT on Nov 9, 2025
        </div>

        <!-- Main Heading -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6 animate-fade-in animate-delay-100">
          Your Path to
          <br />
          <span class="text-accent">Pakistan's Civil Services</span>
        </h1>
        
        <!-- Description -->
        <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in animate-delay-200">
          Comprehensive resources, strategic guidance, and community support for CSS aspirants. 
          From syllabus to success—we've got you covered.
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 animate-fade-in animate-delay-300">
          <UButton 
            to="/roadmap" 
            size="xl" 
            class="bg-accent hover:bg-accent/90 text-white px-6 py-3 font-medium"
          >
            Start Your Preparation →
          </UButton>
          <UButton 
            to="/syllabus" 
            size="xl" 
            variant="outline"
            class="border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 px-6 py-3 font-medium"
          >
            Explore Syllabus
          </UButton>
        </div>

        <!-- Quick Stats -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in animate-delay-400">
          <div class="text-center">
            <div class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">1200</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Total Marks</div>
          </div>
          <div class="text-center">
            <div class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">12</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Papers</div>
          </div>
          <div class="text-center">
            <div class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">300</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Interview Marks</div>
          </div>
          <div class="text-center">
            <div class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">12</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Service Groups</div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>