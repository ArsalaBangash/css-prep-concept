<script setup lang="ts">
useSeoMeta({
  title: 'CSS Psychological Assessment & ISSB Tests Guide 2025',
  description: 'Complete guide to CSS psychological assessment: Word Association Test (WAT), Thematic Apperception Test (TAT), Raven\'s Progressive Matrices, group discussions, and command tasks at ISSB.',
  ogTitle: 'CSS Psychological Assessment Guide - WAT, TAT, Command Tasks',
  ogDescription: 'Prepare for CSS psychological evaluation at ISSB. Understand what examiners assess and how to approach each test type.',
})

const tests = [
  {
    name: 'Word Association Test (WAT)',
    duration: '~15 minutes',
    description: 'You\'ll see 100 words flashed one at a time (10 seconds each). Write the first sentence that comes to mind for each word.',
    icon: 'i-lucide-type',
    color: 'blue',
    tips: [
      'Write complete sentences, not single words',
      'Be spontaneous — overthinking shows',
      'Avoid negative, violent, or pessimistic responses',
      'Show action-oriented thinking ("I will help..." not "Someone should help...")',
    ],
    example: {
      word: 'FAILURE',
      good: 'I learn valuable lessons from every setback.',
      bad: 'Failure is the worst thing that can happen.',
    }
  },
  {
    name: 'Thematic Apperception Test (TAT)',
    duration: '~30 minutes',
    description: 'You\'ll view 11 ambiguous pictures and write a story for each. The story should have a past (what led to this), present (what\'s happening), and future (outcome).',
    icon: 'i-lucide-image',
    color: 'purple',
    tips: [
      'Make yourself the hero of the story',
      'Include all three time elements (past, present, future)',
      'End stories positively — show problem-solving',
      'Avoid melodrama or tragic endings',
    ],
    example: {
      word: 'Man sitting alone at desk',
      good: 'Ali was working late to finish an important report. He organized his thoughts and completed it successfully, earning recognition from his team.',
      bad: 'A depressed man sits alone. He failed at work. His life is ruined.',
    }
  },
  {
    name: 'Self-Description Test',
    duration: '15 minutes',
    description: 'Write how you think your parents, teachers, and friends would describe you. Be consistent across all three.',
    icon: 'i-lucide-user',
    color: 'green',
    tips: [
      'Show self-awareness without arrogance',
      'Include both strengths and areas for growth',
      'Ensure all three descriptions align (no contradictions)',
      'Mention leadership qualities and teamwork naturally',
    ],
    example: null
  },
  {
    name: 'Raven\'s Progressive Matrices',
    duration: '40 minutes',
    description: 'Non-verbal intelligence test with pattern recognition puzzles. Find the missing piece from multiple options.',
    icon: 'i-lucide-grid-3x3',
    color: 'orange',
    tips: [
      'Practice pattern recognition beforehand',
      'If stuck, eliminate obviously wrong options first',
      'Time management is critical — don\'t get stuck on one puzzle',
      'Look for patterns in rows, columns, and diagonals',
    ],
    example: null
  },
]

const groupTasks = [
  {
    name: 'Group Discussion',
    icon: 'i-lucide-users',
    description: 'Discuss a topic with 8-10 candidates. Assessors observe leadership, communication, and teamwork.',
    keyBehaviors: [
      'Initiate without dominating',
      'Build on others\' points',
      'Bring quieter members into discussion',
      'Stay calm during disagreements',
    ]
  },
  {
    name: 'Group Planning Exercise (GPE)',
    icon: 'i-lucide-map',
    description: 'Given a scenario with constraints (time, resources), plan a solution as a group.',
    keyBehaviors: [
      'Listen to the problem carefully',
      'Offer practical solutions',
      'Prioritize tasks logically',
      'Volunteer for execution roles',
    ]
  },
  {
    name: 'Command Task',
    icon: 'i-lucide-flag',
    description: 'You lead a small group to complete a physical task (crossing obstacles, moving objects) within time limits.',
    keyBehaviors: [
      'Give clear, concise instructions',
      'Delegate based on team strengths',
      'Stay calm under pressure',
      'Take responsibility if things go wrong',
    ]
  },
  {
    name: 'Half Group Task / Progressive Group Task',
    icon: 'i-lucide-arrow-right-circle',
    description: 'Similar to command task but with rotating leadership or half the group working together.',
    keyBehaviors: [
      'Support the current leader fully',
      'Step up when it\'s your turn',
      'Adapt to changing conditions',
      'Encourage team members',
    ]
  },
]

const assessmentCriteria = [
  { trait: 'Emotional Stability', description: 'Handling stress, criticism, and setbacks calmly' },
  { trait: 'Leadership Potential', description: 'Taking initiative and guiding others effectively' },
  { trait: 'Decision Making', description: 'Making quick, sound judgments under pressure' },
  { trait: 'Social Adaptability', description: 'Working with diverse personalities' },
  { trait: 'Self-Confidence', description: 'Belief in own abilities without arrogance' },
  { trait: 'Sense of Responsibility', description: 'Ownership of tasks and outcomes' },
  { trait: 'Organizing Ability', description: 'Planning and structuring work effectively' },
  { trait: 'Integrity', description: 'Honesty and ethical behavior' },
]
</script>

<template>
  <div class="bg-clean min-h-screen">
    <UContainer class="py-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Psychological Assessment</h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Complete guide to the psychological evaluation phase conducted at ISSB (Inter-Services Selection Board)
        </p>

        <!-- Overview -->
        <div class="bg-accent/10 rounded-xl p-6 mb-8">
          <h2 class="text-xl font-semibold mb-3">What Is This Phase?</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            After clearing the written exam and before the interview, candidates undergo a <strong>3-4 day psychological evaluation</strong> 
            at ISSB centers in Kohat, Gujranwala, or Malir (Karachi). This phase assesses your personality traits, leadership potential, 
            and suitability for civil service through a battery of tests and group activities.
          </p>
          <div class="grid sm:grid-cols-3 gap-4 text-center">
            <div class="bg-white dark:bg-gray-800 rounded-lg p-3">
              <div class="text-2xl font-bold text-accent">3-4</div>
              <div class="text-sm text-gray-500">Days Duration</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-3">
              <div class="text-2xl font-bold text-accent">4+</div>
              <div class="text-sm text-gray-500">Written Tests</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-3">
              <div class="text-2xl font-bold text-accent">4+</div>
              <div class="text-sm text-gray-500">Group Activities</div>
            </div>
          </div>
        </div>

        <!-- Important Note -->
        <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4 mb-8">
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-alert-triangle" class="text-yellow-600 dark:text-yellow-400 mt-1 flex-shrink-0" />
            <div>
              <p class="font-medium text-yellow-800 dark:text-yellow-200">Can You "Prepare" for This?</p>
              <p class="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                Psychological tests are designed to reveal your <em>authentic</em> personality. Excessive coaching or "fake" responses 
                often backfire — trained psychologists can detect inconsistencies. The best preparation is understanding the format 
                and developing genuine leadership qualities over time.
              </p>
            </div>
          </div>
        </div>

        <!-- Individual Tests -->
        <h2 class="text-2xl font-semibold mb-6">Individual Psychological Tests</h2>
        
        <div class="space-y-6 mb-12">
          <div 
            v-for="test in tests" 
            :key="test.name"
            class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6"
          >
            <div class="flex items-start gap-4 mb-4">
              <div :class="`p-3 rounded-lg bg-${test.color}-100 dark:bg-${test.color}-900/30`">
                <UIcon :name="test.icon" :class="`text-${test.color}-600 dark:text-${test.color}-400 text-xl`" />
              </div>
              <div>
                <h3 class="text-xl font-semibold">{{ test.name }}</h3>
                <p class="text-sm text-gray-500">Duration: {{ test.duration }}</p>
              </div>
            </div>
            
            <p class="text-gray-600 dark:text-gray-400 mb-4">{{ test.description }}</p>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
              <h4 class="font-medium mb-2">Tips for Success</h4>
              <ul class="space-y-2">
                <li v-for="tip in test.tips" :key="tip" class="flex items-start gap-2 text-sm">
                  <UIcon name="i-lucide-check" class="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{{ tip }}</span>
                </li>
              </ul>
            </div>

            <div v-if="test.example" class="grid md:grid-cols-2 gap-4">
              <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                <div class="text-xs font-medium text-green-600 dark:text-green-400 mb-1">✓ Good Response</div>
                <p class="text-sm italic">"{{ test.example.good }}"</p>
              </div>
              <div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
                <div class="text-xs font-medium text-red-600 dark:text-red-400 mb-1">✗ Avoid</div>
                <p class="text-sm italic">"{{ test.example.bad }}"</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Group Tasks -->
        <h2 class="text-2xl font-semibold mb-6">Group Outdoor Tasks (GTO)</h2>
        
        <div class="grid md:grid-cols-2 gap-4 mb-12">
          <div 
            v-for="task in groupTasks" 
            :key="task.name"
            class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5"
          >
            <div class="flex items-center gap-3 mb-3">
              <UIcon :name="task.icon" class="text-accent text-xl" />
              <h3 class="font-semibold">{{ task.name }}</h3>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ task.description }}</p>
            <ul class="space-y-1">
              <li v-for="behavior in task.keyBehaviors" :key="behavior" class="text-xs flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-accent rounded-full"></span>
                <span>{{ behavior }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- What They're Assessing -->
        <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">What Assessors Are Looking For</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Every test and task is designed to evaluate these Officer-Like Qualities (OLQs):
          </p>
          <div class="grid sm:grid-cols-2 gap-3">
            <div 
              v-for="criteria in assessmentCriteria" 
              :key="criteria.trait"
              class="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <UIcon name="i-lucide-star" class="text-accent mt-0.5 flex-shrink-0" />
              <div>
                <div class="font-medium text-sm">{{ criteria.trait }}</div>
                <div class="text-xs text-gray-500">{{ criteria.description }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Final Advice -->
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
          <h2 class="text-xl font-semibold mb-3">Final Advice</h2>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="text-blue-500 mt-1 flex-shrink-0" />
              <span><strong>Be yourself, but the best version.</strong> Fake personas are spotted quickly.</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="text-blue-500 mt-1 flex-shrink-0" />
              <span><strong>Stay consistent.</strong> Your WAT, TAT, self-description, and interview should align.</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="text-blue-500 mt-1 flex-shrink-0" />
              <span><strong>Physical fitness matters.</strong> GTO tasks require stamina and agility.</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="text-blue-500 mt-1 flex-shrink-0" />
              <span><strong>Support others.</strong> Civil service is about teamwork, not just individual brilliance.</span>
            </li>
          </ul>
        </div>

        <div class="flex gap-4">
          <UButton to="/exam/interview" variant="outline" icon="i-lucide-arrow-left">
            Interview Guide
          </UButton>
          <UButton to="/exam" icon="i-lucide-arrow-right" trailing>
            Back to Exam Overview
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>
