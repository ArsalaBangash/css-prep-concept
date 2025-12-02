<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-black">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>