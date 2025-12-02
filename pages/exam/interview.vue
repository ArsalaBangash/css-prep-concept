<template>
  <div class="bg-clean min-h-screen">
    <!-- Header -->
    <div class="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <UContainer class="py-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-sm font-medium mb-4">
          <UIcon name="i-lucide-users" />
          Final Stage
        </div>
        <h1 class="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
          Viva Voce (Interview) & Psychological Assessment
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mb-6">
          The final hurdle - 300 marks that can make or break your final ranking. 
          This stage assesses your personality, knowledge, and suitability for civil service.
        </p>
        
        <!-- Quick Stats -->
        <div class="flex flex-wrap gap-6 text-sm">
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-award" class="w-5 h-5 text-accent" />
            <span class="text-gray-600 dark:text-gray-400">300 Total Marks</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-clock" class="w-5 h-5 text-accent" />
            <span class="text-gray-600 dark:text-gray-400">20-30 Minutes</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-target" class="w-5 h-5 text-accent" />
            <span class="text-gray-600 dark:text-gray-400">100 Marks Minimum</span>
          </div>
        </div>
      </UContainer>
    </div>

    <UContainer class="py-8">
      <!-- Key Insight -->
      <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 mb-8">
        <div class="flex items-start gap-3">
          <UIcon name="i-lucide-lightbulb" class="text-yellow-600 dark:text-yellow-400 text-xl flex-shrink-0 mt-1" />
          <div>
            <h3 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">The Interview Paradox</h3>
            <p class="text-yellow-700 dark:text-yellow-300 text-sm">
              Many candidates who score well in written exams fail to secure good interview marks. 
              The interview tests <strong>different skills</strong> - confidence, articulation, presence of mind, 
              and the ability to think on your feet. Start preparing for it from Day 1, not after written results.
            </p>
          </div>
        </div>
      </div>

      <!-- Two Components -->
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <!-- Psychological Assessment -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
              <UIcon name="i-lucide-brain" class="text-2xl text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h2 class="text-xl font-semibold">Psychological Assessment</h2>
              <p class="text-sm text-gray-500">Conducted before the interview</p>
            </div>
          </div>
          
          <div class="space-y-3">
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 class="font-medium text-sm mb-1">Written Tests</h4>
              <p class="text-xs text-gray-600 dark:text-gray-400">
                Personality inventories, situational judgment tests, and aptitude assessments
              </p>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 class="font-medium text-sm mb-1">Group Discussion</h4>
              <p class="text-xs text-gray-600 dark:text-gray-400">
                Assesses leadership, teamwork, and communication in group settings
              </p>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 class="font-medium text-sm mb-1">Individual Assessment</h4>
              <p class="text-xs text-gray-600 dark:text-gray-400">
                One-on-one evaluation by psychologists to assess mental fitness
              </p>
            </div>
          </div>
          
          <div class="mt-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <p class="text-xs text-purple-700 dark:text-purple-300">
              <strong>Note:</strong> Psychological assessment is qualifying in nature. 
              Focus on being genuine rather than trying to game the system.
            </p>
          </div>
        </div>

        <!-- Viva Voce -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
              <UIcon name="i-lucide-mic" class="text-2xl text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <h2 class="text-xl font-semibold">Viva Voce (Interview)</h2>
              <p class="text-sm text-gray-500">Face-to-face with FPSC panel</p>
            </div>
          </div>
          
          <div class="space-y-3">
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 class="font-medium text-sm mb-1">Panel Composition</h4>
              <p class="text-xs text-gray-600 dark:text-gray-400">
                Chairman + 4-5 members including subject experts and senior bureaucrats
              </p>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 class="font-medium text-sm mb-1">Duration</h4>
              <p class="text-xs text-gray-600 dark:text-gray-400">
                20-30 minutes on average, can extend for exceptional candidates
              </p>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 class="font-medium text-sm mb-1">Scoring</h4>
              <p class="text-xs text-gray-600 dark:text-gray-400">
                300 marks total, minimum 100 required to qualify (33%)
              </p>
            </div>
          </div>
          
          <div class="mt-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
            <p class="text-xs text-orange-700 dark:text-orange-300">
              <strong>Average Score:</strong> Most candidates score between 120-180 marks. 
              Scores above 200 are exceptional and can significantly boost final ranking.
            </p>
          </div>
        </div>
      </div>

      <!-- Assessment Areas -->
      <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-6">What the Panel Assesses</h2>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">Personality Traits</h3>
            <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1">
              <li>• Confidence and composure under pressure</li>
              <li>• Body language and eye contact</li>
              <li>• Clarity of thought and expression</li>
              <li>• Emotional intelligence and maturity</li>
            </ul>
          </div>
          
          <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h3 class="font-semibold text-green-800 dark:text-green-200 mb-2">Knowledge Base</h3>
            <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
              <li>• Current national and international affairs</li>
              <li>• Your optional subjects in depth</li>
              <li>• Pakistan's history, geography, economy</li>
              <li>• Your hometown and province</li>
            </ul>
          </div>
          
          <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 class="font-semibold text-purple-800 dark:text-purple-200 mb-2">Analytical Ability</h3>
            <ul class="text-sm text-purple-700 dark:text-purple-300 space-y-1">
              <li>• Problem-solving approach</li>
              <li>• Logical reasoning</li>
              <li>• Ability to see multiple perspectives</li>
              <li>• Decision-making under uncertainty</li>
            </ul>
          </div>
          
          <div class="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <h3 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Suitability for Service</h3>
            <ul class="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
              <li>• Motivation for joining civil service</li>
              <li>• Understanding of bureaucratic role</li>
              <li>• Leadership potential</li>
              <li>• Integrity and ethical stance</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Common Questions -->
      <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-6">
          Prepare thorough answers for these common question categories:
        </p>
        
        <div class="space-y-4">
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 class="font-semibold mb-2 flex items-center gap-2">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs">1</span>
              Personal Introduction
            </h3>
            <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-8">
              <li>• Tell us about yourself (prepare a 2-minute crisp introduction)</li>
              <li>• Why do you want to join civil services?</li>
              <li>• What are your strengths and weaknesses?</li>
              <li>• Where do you see yourself in 10 years?</li>
            </ul>
          </div>
          
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 class="font-semibold mb-2 flex items-center gap-2">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs">2</span>
              Hometown & Province
            </h3>
            <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-8">
              <li>• History, geography, and culture of your hometown</li>
              <li>• Major problems facing your district/province</li>
              <li>• Famous personalities from your area</li>
              <li>• Economic activities and development projects</li>
            </ul>
          </div>
          
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 class="font-semibold mb-2 flex items-center gap-2">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs">3</span>
              Academic Background
            </h3>
            <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-8">
              <li>• Questions from your degree subjects</li>
              <li>• Why did you choose your optional subjects?</li>
              <li>• Current developments in your field of study</li>
              <li>• Your thesis/research work (if applicable)</li>
            </ul>
          </div>
          
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 class="font-semibold mb-2 flex items-center gap-2">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs">4</span>
              Current Affairs & Policy
            </h3>
            <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-8">
              <li>• Pakistan's foreign policy and relations with neighbors</li>
              <li>• Economic challenges (IMF, debt, inflation)</li>
              <li>• CPEC and regional connectivity</li>
              <li>• Climate change and water issues</li>
              <li>• Recent government policies and reforms</li>
            </ul>
          </div>
          
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 class="font-semibold mb-2 flex items-center gap-2">
              <span class="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs">5</span>
              Situational Questions
            </h3>
            <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-8">
              <li>• How would you handle political pressure as a DC?</li>
              <li>• What would you do if your senior asks you to do something unethical?</li>
              <li>• How would you manage a law and order situation?</li>
              <li>• Your approach to handling public grievances</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Preparation Strategy -->
      <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4">Interview Preparation Strategy</h2>
        
        <div class="space-y-4">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="font-bold text-accent">1</span>
            </div>
            <div>
              <h3 class="font-semibold mb-1">Start Early (6 months before)</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Begin mock interviews while preparing for written exam. Join a study group 
                and practice answering questions out loud.
              </p>
            </div>
          </div>
          
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="font-bold text-accent">2</span>
            </div>
            <div>
              <h3 class="font-semibold mb-1">Know Your Biodata Inside Out</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Every line in your application form is a potential question. Know your hometown, 
                hobbies, work experience, and family background thoroughly.
              </p>
            </div>
          </div>
          
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="font-bold text-accent">3</span>
            </div>
            <div>
              <h3 class="font-semibold mb-1">Take Professional Mock Interviews</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Get evaluated by CSS qualifiers, retired bureaucrats, or professional academies. 
                Record your sessions and analyze your body language.
              </p>
            </div>
          </div>
          
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="font-bold text-accent">4</span>
            </div>
            <div>
              <h3 class="font-semibold mb-1">Stay Updated Until Interview Day</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Read newspapers daily. Know what happened in the week before your interview. 
                Panel often asks about recent events.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Do's and Don'ts -->
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
          <h2 class="text-xl font-semibold text-green-800 dark:text-green-200 mb-4">✓ Do's</h2>
          <ul class="space-y-2">
            <li class="flex items-start gap-2 text-sm text-green-700 dark:text-green-300">
              <UIcon name="i-lucide-check" class="flex-shrink-0 mt-0.5" />
              <span>Dress formally - dark suit, polished shoes, minimal accessories</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-green-700 dark:text-green-300">
              <UIcon name="i-lucide-check" class="flex-shrink-0 mt-0.5" />
              <span>Maintain eye contact with all panel members</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-green-700 dark:text-green-300">
              <UIcon name="i-lucide-check" class="flex-shrink-0 mt-0.5" />
              <span>Admit gracefully if you don't know something</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-green-700 dark:text-green-300">
              <UIcon name="i-lucide-check" class="flex-shrink-0 mt-0.5" />
              <span>Give balanced, nuanced answers to controversial topics</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-green-700 dark:text-green-300">
              <UIcon name="i-lucide-check" class="flex-shrink-0 mt-0.5" />
              <span>Show enthusiasm for public service</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-green-700 dark:text-green-300">
              <UIcon name="i-lucide-check" class="flex-shrink-0 mt-0.5" />
              <span>Thank the panel before leaving</span>
            </li>
          </ul>
        </div>
        
        <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
          <h2 class="text-xl font-semibold text-red-800 dark:text-red-200 mb-4">✗ Don'ts</h2>
          <ul class="space-y-2">
            <li class="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
              <UIcon name="i-lucide-x" class="flex-shrink-0 mt-0.5" />
              <span>Don't argue with panel members or get defensive</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
              <UIcon name="i-lucide-x" class="flex-shrink-0 mt-0.5" />
              <span>Don't give one-word answers or ramble endlessly</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
              <UIcon name="i-lucide-x" class="flex-shrink-0 mt-0.5" />
              <span>Don't criticize political parties or institutions directly</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
              <UIcon name="i-lucide-x" class="flex-shrink-0 mt-0.5" />
              <span>Don't fidget, look at the floor, or slouch</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
              <UIcon name="i-lucide-x" class="flex-shrink-0 mt-0.5" />
              <span>Don't bluff - panel members are experts</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
              <UIcon name="i-lucide-x" class="flex-shrink-0 mt-0.5" />
              <span>Don't show desperation or overconfidence</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Pro Tips -->
      <div class="bg-accent/10 rounded-xl p-6 mb-8">
        <h2 class="text-xl font-semibold mb-4">Pro Tips from CSS Toppers</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-star" class="text-accent flex-shrink-0 mt-0.5" />
            <span class="text-sm">"The first 30 seconds set the tone. Enter with confidence, greet clearly, and sit only when offered."</span>
          </div>
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-star" class="text-accent flex-shrink-0 mt-0.5" />
            <span class="text-sm">"If asked about weaknesses, mention a genuine one but explain how you're working to improve it."</span>
          </div>
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-star" class="text-accent flex-shrink-0 mt-0.5" />
            <span class="text-sm">"Structure your answers: State your position, give 2-3 supporting points, conclude briefly."</span>
          </div>
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-star" class="text-accent flex-shrink-0 mt-0.5" />
            <span class="text-sm">"The panel tests how you handle pressure. Stay calm even if they challenge your views."</span>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex flex-wrap gap-4">
        <UButton to="/exam/written" variant="outline" icon="i-lucide-arrow-left">
          Written Exam
        </UButton>
        <UButton to="/exam" icon="i-lucide-arrow-right" trailing>
          Exam Overview
        </UButton>
        <UButton to="/prep/mock-tests" variant="outline">
          Mock Tests
        </UButton>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'CSS Interview & Psychological Assessment - Complete Guide',
  description: 'Comprehensive guide to CSS viva voce interview and psychological assessment. Learn common questions, preparation strategies, and tips from CSS toppers.',
})
</script>