<template>
  <div class="bg-clean min-h-screen">
    <UContainer class="py-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Contact Us</h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Have questions or suggestions? We'd love to hear from you.
        </p>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Contact Form -->
          <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
            <h2 class="text-xl font-semibold mb-4">Send us a Message</h2>
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <label class="block text-sm font-medium mb-1">Name</label>
                <UInput v-model="form.name" placeholder="Your name" required />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Email</label>
                <UInput v-model="form.email" type="email" placeholder="your@email.com" required />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Subject</label>
                <USelect v-model="form.subject" :options="subjects" placeholder="Select a subject" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Message</label>
                <UTextarea v-model="form.message" placeholder="Your message..." rows="4" required />
              </div>
              <UButton type="submit" block>
                Send Message
              </UButton>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="space-y-6">
            <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
              <h2 class="text-xl font-semibold mb-4">Other Ways to Reach Us</h2>
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <UIcon name="i-lucide-mail" class="text-accent text-xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 class="font-medium">Email</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400">contact@cssprep.pk</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <UIcon name="i-lucide-message-circle" class="text-accent text-xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 class="font-medium">WhatsApp Community</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Join our discussion group</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <UIcon name="i-lucide-users" class="text-accent text-xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 class="font-medium">Community Forum</h3>
                    <NuxtLink to="/community" class="text-sm text-accent hover:underline">
                      Visit our community forum
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
              <h2 class="text-xl font-semibold mb-4">Follow Us</h2>
              <div class="flex gap-4">
                <a href="#" class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <UIcon name="i-lucide-facebook" class="text-xl" />
                </a>
                <a href="#" class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <UIcon name="i-lucide-twitter" class="text-xl" />
                </a>
                <a href="#" class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <UIcon name="i-lucide-youtube" class="text-xl" />
                </a>
                <a href="#" class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <UIcon name="i-lucide-instagram" class="text-xl" />
                </a>
              </div>
            </div>

            <div class="bg-accent/10 rounded-xl p-6">
              <h2 class="text-lg font-semibold mb-2">Response Time</h2>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                We typically respond to inquiries within 24-48 hours. For urgent matters, 
                please reach out through our WhatsApp community.
              </p>
            </div>
          </div>
        </div>

        <div class="mt-8">
          <UButton to="/about" variant="outline" icon="i-lucide-arrow-left">
            About Us
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const subjects = [
  'General Inquiry',
  'Resource Suggestion',
  'Technical Issue',
  'Partnership Opportunity',
  'Feedback',
  'Other'
]

const handleSubmit = () => {
  // Form submission logic would go here
  alert('Thank you for your message! We will get back to you soon.')
  form.value = { name: '', email: '', subject: '', message: '' }
}
</script>