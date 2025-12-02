<template>
  <div class="bg-clean min-h-screen">
    <!-- Header -->
    <div class="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <UContainer class="py-12">
        <h1 class="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
          CSS Answer Writing Techniques
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mb-6">
          Knowledge accounts for 50% of your marks; presentation accounts for the other 50%. 
          Master these techniques to maximize your scores.
        </p>
        
        <!-- Quick Stats -->
        <div class="flex flex-wrap gap-6 text-sm">
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-pen-tool" class="w-5 h-5 text-accent" />
            <span class="text-gray-600 dark:text-gray-400">Structure is King</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-layout" class="w-5 h-5 text-accent" />
            <span class="text-gray-600 dark:text-gray-400">Every Paragraph Needs a Heading</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-bar-chart" class="w-5 h-5 text-accent" />
            <span class="text-gray-600 dark:text-gray-400">Data Differentiates</span>
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
            <h3 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">The Secret Toppers Know</h3>
            <p class="text-yellow-700 dark:text-yellow-300 text-sm">
              Two candidates with the same knowledge can score 40 marks apart based purely on 
              <strong>how they present their answers</strong>. Examiners check hundreds of papers - 
              make yours easy to read and grade.
            </p>
          </div>
        </div>
      </div>

      <!-- The Perfect Answer Structure -->
      <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-6">The Perfect Answer Structure</h2>
        
        <div class="space-y-6">
          <!-- Introduction -->
          <div class="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">10%</span>
              <h3 class="text-lg font-semibold text-blue-800 dark:text-blue-200">Introduction</h3>
            </div>
            <div class="ml-13">
              <p class="text-blue-700 dark:text-blue-300 text-sm mb-3">
                Start with a "Hook" - a quote, statistic, or sharp statement. End with a thesis statement 
                outlining your answer.
              </p>
              <div class="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                <p class="text-xs text-blue-800 dark:text-blue-200">
                  <strong>Example:</strong> "As Aristotle noted, 'Democracy is when the indigent, and not the 
                  men of property, are the rulers.' Pakistan's democratic journey, marked by four military 
                  interventions and persistent institutional weakness, exemplifies the challenges developing 
                  nations face in consolidating democratic governance."
                </p>
              </div>
            </div>
          </div>

          <!-- Body -->
          <div class="p-5 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">80%</span>
              <h3 class="text-lg font-semibold text-purple-800 dark:text-purple-200">Body Paragraphs</h3>
            </div>
            <div class="ml-13">
              <p class="text-purple-700 dark:text-purple-300 text-sm mb-3">
                Use short paragraphs. <strong>Every paragraph MUST have a heading.</strong> This is non-negotiable.
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="p-3 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                  <h4 class="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-2">Paragraph Structure</h4>
                  <ul class="text-xs text-purple-700 dark:text-purple-300 space-y-1">
                    <li><strong>Heading:</strong> Bold, underlined</li>
                    <li><strong>Topic Sentence:</strong> Main point</li>
                    <li><strong>Evidence:</strong> Data, quotes, examples</li>
                    <li><strong>Analysis:</strong> Your interpretation</li>
                    <li><strong>Link:</strong> Connect to question</li>
                  </ul>
                </div>
                <div class="p-3 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                  <h4 class="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-2">Sample Headings</h4>
                  <ul class="text-xs text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• Historical Background</li>
                    <li>• Current Challenges</li>
                    <li>• Root Causes</li>
                    <li>• Socio-Economic Impact</li>
                    <li>• Way Forward</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Conclusion -->
          <div class="p-5 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">10%</span>
              <h3 class="text-lg font-semibold text-green-800 dark:text-green-200">Conclusion</h3>
            </div>
            <div class="ml-13">
              <p class="text-green-700 dark:text-green-300 text-sm mb-3">
                Summarize key points and offer a forward-looking, optimistic closing. 
                <strong>Never end on a negative note.</strong>
              </p>
              <div class="p-3 bg-green-100 dark:bg-green-900/40 rounded-lg">
                <p class="text-xs text-green-800 dark:text-green-200">
                  <strong>Example:</strong> "In conclusion, while Pakistan's democratic institutions face 
                  significant challenges, the growing civil society activism, judicial independence, and 
                  media freedom provide grounds for cautious optimism. As the nation approaches its centenary, 
                  sustained commitment to constitutional governance remains the surest path to stability and prosperity."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Visual Elements -->
      <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4">Visual Elements That Score Extra Marks</h2>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-6">
          Examiners appreciate visual aids. They break monotony and demonstrate deeper understanding.
        </p>
        
        <div class="grid md:grid-cols-3 gap-4">
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <UIcon name="i-lucide-map" class="text-2xl text-accent mb-2" />
            <h3 class="font-semibold mb-2">Rough Maps</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Draw for Pakistan Affairs and Current Affairs (CPEC route, South China Sea, Middle East)
            </p>
          </div>
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <UIcon name="i-lucide-git-branch" class="text-2xl text-accent mb-2" />
            <h3 class="font-semibold mb-2">Flowcharts</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Use for GSA processes, cause-effect relationships, policy implementation
            </p>
          </div>
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <UIcon name="i-lucide-table" class="text-2xl text-accent mb-2" />
            <h3 class="font-semibold mb-2">Comparison Tables</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Compare systems, policies, or historical periods side by side
            </p>
          </div>
        </div>
      </div>

      <!-- Data Differentiation -->
      <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4">Data Differentiation Strategy</h2>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-6">
          Quoting specific data sets you apart from candidates using generic statements.
        </p>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <h3 class="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Generic (Low Marks)</h3>
            <p class="text-sm text-red-700 dark:text-red-300">
              "Pakistan's GDP growth has been low in recent years."
            </p>
          </div>
          <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h3 class="font-semibold text-green-800 dark:text-green-200 mb-2">✓ Specific (High Marks)</h3>
            <p class="text-sm text-green-700 dark:text-green-300">
              "According to the Economic Survey 2024, Pakistan's GDP growth was 2.38%, significantly below 
              the 5% target, with inflation averaging 28.3%."
            </p>
          </div>
        </div>

        <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h3 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">Essential Data Sources</h3>
          <div class="grid md:grid-cols-2 gap-2 text-sm text-blue-700 dark:text-blue-300">
            <div>• Economic Survey of Pakistan (annual)</div>
            <div>• World Bank Reports</div>
            <div>• IMF Country Reports</div>
            <div>• UNDP Human Development Index</div>
            <div>• Pakistan Bureau of Statistics</div>
            <div>• State Bank of Pakistan Reports</div>
          </div>
        </div>
      </div>

      <!-- Time Management -->
      <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4">Time Management in Exam</h2>
        
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b dark:border-gray-700">
                <th class="text-left py-3 px-4">Question Type</th>
                <th class="text-left py-3 px-4">Marks</th>
                <th class="text-left py-3 px-4">Time</th>
                <th class="text-left py-3 px-4">Word Count</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b dark:border-gray-700">
                <td class="py-3 px-4">Short Question</td>
                <td class="py-3 px-4">10 marks</td>
                <td class="py-3 px-4">15-18 mins</td>
                <td class="py-3 px-4">200-250 words</td>
              </tr>
              <tr class="border-b dark:border-gray-700">
                <td class="py-3 px-4">Medium Question</td>
                <td class="py-3 px-4">15 marks</td>
                <td class="py-3 px-4">22-25 mins</td>
                <td class="py-3 px-4">350-400 words</td>
              </tr>
              <tr class="border-b dark:border-gray-700">
                <td class="py-3 px-4">Long Question</td>
                <td class="py-3 px-4">20 marks</td>
                <td class="py-3 px-4">30-35 mins</td>
                <td class="py-3 px-4">500-600 words</td>
              </tr>
              <tr>
                <td class="py-3 px-4">Essay</td>
                <td class="py-3 px-4">100 marks</td>
                <td class="py-3 px-4">3 hours</td>
                <td class="py-3 px-4">2500-3000 words</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <p class="text-sm text-yellow-700 dark:text-yellow-300">
            <strong>Pro Tip:</strong> Spend first 5 minutes of each paper reading all questions and 
            planning which ones to attempt. Never leave a question incomplete - partial marks are better than zero.
          </p>
        </div>
      </div>

      <!-- Common Mistakes -->
      <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-8">
        <h2 class="text-xl font-semibold text-red-800 dark:text-red-200 mb-4">Common Mistakes to Avoid</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
            <UIcon name="i-lucide-x-circle" class="flex-shrink-0 mt-0.5" />
            <span>Writing without headings (wall of text)</span>
          </div>
          <div class="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
            <UIcon name="i-lucide-x-circle" class="flex-shrink-0 mt-0.5" />
            <span>Not answering the specific question asked</span>
          </div>
          <div class="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
            <UIcon name="i-lucide-x-circle" class="flex-shrink-0 mt-0.5" />
            <span>Using emotional language instead of analysis</span>
          </div>
          <div class="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
            <UIcon name="i-lucide-x-circle" class="flex-shrink-0 mt-0.5" />
            <span>Presenting one-sided arguments</span>
          </div>
          <div class="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
            <UIcon name="i-lucide-x-circle" class="flex-shrink-0 mt-0.5" />
            <span>Poor handwriting and presentation</span>
          </div>
          <div class="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
            <UIcon name="i-lucide-x-circle" class="flex-shrink-0 mt-0.5" />
            <span>Running out of time on last questions</span>
          </div>
        </div>
      </div>

      <!-- Practice Checklist -->
      <div class="bg-accent/10 rounded-xl p-6 mb-8">
        <h2 class="text-xl font-semibold mb-4">Daily Practice Checklist</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="flex items-center gap-3">
            <input type="checkbox" class="w-5 h-5 rounded border-gray-300" />
            <span class="text-sm">Write 2-3 past paper answers</span>
          </div>
          <div class="flex items-center gap-3">
            <input type="checkbox" class="w-5 h-5 rounded border-gray-300" />
            <span class="text-sm">Practice one essay outline</span>
          </div>
          <div class="flex items-center gap-3">
            <input type="checkbox" class="w-5 h-5 rounded border-gray-300" />
            <span class="text-sm">Time yourself strictly</span>
          </div>
          <div class="flex items-center gap-3">
            <input type="checkbox" class="w-5 h-5 rounded border-gray-300" />
            <span class="text-sm">Review and improve previous answers</span>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex flex-wrap gap-4">
        <UButton to="/prep/essay" variant="outline" icon="i-lucide-arrow-left">
          Essay Writing Guide
        </UButton>
        <UButton to="/prep/mock-tests" icon="i-lucide-arrow-right" trailing>
          Mock Tests
        </UButton>
        <UButton to="/resources/past-papers" variant="outline">
          Past Papers
        </UButton>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'CSS Answer Writing Techniques - Score Maximum Marks',
  description: 'Master CSS answer writing techniques. Learn structure, time management, visual elements, and data differentiation strategies used by CSS toppers.',
})
</script>