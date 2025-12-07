<template>
  <div class="bg-clean min-h-screen">
    <!-- Header -->
    <div class="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <UContainer class="py-12">
        <h1 class="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
          CSS Essay Writing Masterclass
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mb-6">
          The English Essay paper is the most lethal component of CSS with failure rates exceeding 90%. 
          Master the techniques that separate toppers from the rest.
        </p>
        
        <!-- Quick Stats -->
        <div class="flex flex-wrap gap-6 text-sm">
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-file-text" class="w-5 h-5 text-accent" />
            <span class="text-gray-600 dark:text-gray-400">100 Marks</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-clock" class="w-5 h-5 text-accent" />
            <span class="text-gray-600 dark:text-gray-400">3 Hours Duration</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-alert-triangle" class="w-5 h-5 text-red-500" />
            <span class="text-gray-600 dark:text-gray-400">~90% Failure Rate</span>
          </div>
        </div>
      </UContainer>
    </div>

    <UContainer class="py-8">
      <!-- Critical Warning -->
      <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-8">
        <div class="flex items-start gap-3">
          <UIcon name="i-lucide-alert-triangle" class="text-red-600 dark:text-red-400 text-xl flex-shrink-0 mt-1" />
          <div>
            <h3 class="font-semibold text-red-800 dark:text-red-200 mb-2">Why Most Candidates Fail</h3>
            <p class="text-red-700 dark:text-red-300 text-sm mb-3">
              The Essay paper is not merely a test of English proficiency but of <strong>intellectual depth, 
              coherent structuring, and critical analysis</strong>. Most candidates fail because they:
            </p>
            <ul class="text-red-700 dark:text-red-300 text-sm space-y-1">
              <li>• Write without a clear thesis statement</li>
              <li>• Lack logical structure and transitions</li>
              <li>• Present one-sided arguments without balance</li>
              <li>• Use generic content without specific examples/data</li>
              <li>• Don't practice under timed conditions</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Essay Requirements -->
      <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4">FPSC Essay Requirements</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="font-semibold mb-3">Format</h3>
            <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="text-green-500 mt-0.5 flex-shrink-0" />
                <span>Write ONE essay from 10 given topics</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="text-green-500 mt-0.5 flex-shrink-0" />
                <span>Length: 2500-3000 words (minimum)</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="text-green-500 mt-0.5 flex-shrink-0" />
                <span>Time: 3 hours (including planning)</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="text-green-500 mt-0.5 flex-shrink-0" />
                <span>Passing marks: 40/100</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-3">Evaluation Criteria</h3>
            <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-star" class="text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Thesis clarity and argumentation</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-star" class="text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Logical structure and coherence</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-star" class="text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Use of evidence and examples</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-star" class="text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Language proficiency and vocabulary</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Essay Structure -->
      <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-6">The Perfect Essay Structure</h2>
        
        <!-- Introduction -->
        <div class="mb-6 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</span>
            <h3 class="text-lg font-semibold text-blue-800 dark:text-blue-200">Introduction (10-15%)</h3>
          </div>
          <div class="ml-11">
            <p class="text-blue-700 dark:text-blue-300 text-sm mb-3">
              Your introduction must accomplish four things in this exact order:
            </p>
            <ol class="space-y-2 text-sm text-blue-700 dark:text-blue-300">
              <li><strong>1. Hook:</strong> Start with a compelling quote, statistic, or thought-provoking statement</li>
              <li><strong>2. Context:</strong> Provide background and define key terms</li>
              <li><strong>3. Significance:</strong> Explain why this topic matters</li>
              <li><strong>4. Thesis Statement:</strong> Your central argument in ONE clear sentence</li>
            </ol>
            <div class="mt-4 p-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
              <p class="text-xs text-blue-800 dark:text-blue-200">
                <strong>Example Thesis:</strong> "While artificial intelligence presents unprecedented opportunities 
                for economic growth and efficiency, its unchecked proliferation poses existential risks to employment, 
                privacy, and human autonomy that demand immediate regulatory intervention."
              </p>
            </div>
          </div>
        </div>

        <!-- Body -->
        <div class="mb-6 p-5 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">2</span>
            <h3 class="text-lg font-semibold text-purple-800 dark:text-purple-200">Body Paragraphs (70-75%)</h3>
          </div>
          <div class="ml-11">
            <p class="text-purple-700 dark:text-purple-300 text-sm mb-3">
              Write 5-7 well-developed paragraphs. Each paragraph must follow this structure:
            </p>
            <div class="grid md:grid-cols-2 gap-4 text-sm">
              <div class="p-3 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                <h4 class="font-semibold text-purple-800 dark:text-purple-200 mb-2">Paragraph Structure (PEEL)</h4>
                <ul class="space-y-1 text-purple-700 dark:text-purple-300">
                  <li><strong>P</strong>oint - Topic sentence</li>
                  <li><strong>E</strong>vidence - Facts, data, quotes</li>
                  <li><strong>E</strong>xplanation - Analysis</li>
                  <li><strong>L</strong>ink - Connect to thesis</li>
                </ul>
              </div>
              <div class="p-3 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                <h4 class="font-semibold text-purple-800 dark:text-purple-200 mb-2">Suggested Flow</h4>
                <ul class="space-y-1 text-purple-700 dark:text-purple-300">
                  <li>• Para 1-2: Arguments FOR</li>
                  <li>• Para 3-4: Arguments AGAINST</li>
                  <li>• Para 5: Pakistan context</li>
                  <li>• Para 6-7: Solutions/Way forward</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Conclusion -->
        <div class="p-5 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">3</span>
            <h3 class="text-lg font-semibold text-green-800 dark:text-green-200">Conclusion (10-15%)</h3>
          </div>
          <div class="ml-11">
            <p class="text-green-700 dark:text-green-300 text-sm mb-3">
              Never end on a negative note. Your conclusion must:
            </p>
            <ul class="space-y-2 text-sm text-green-700 dark:text-green-300">
              <li>• Summarize key arguments (not repeat them)</li>
              <li>• Restate thesis in different words</li>
              <li>• Provide a forward-looking, optimistic closing</li>
              <li>• End with a memorable quote or call to action</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Recurring Themes -->
      <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4">Recurring Essay Themes (2020-2025)</h2>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
          Analysis of past papers reveals these distinct thematic clusters. Prepare outlines for each:
        </p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 class="font-semibold text-sm mb-2 flex items-center gap-2">
              <UIcon name="i-lucide-trending-up" class="text-blue-500" />
              Socio-Economic
            </h3>
            <ul class="text-xs text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Economic Sovereignty</li>
              <li>• IMF Programs</li>
              <li>• Poverty Alleviation</li>
              <li>• Youth Unemployment</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 class="font-semibold text-sm mb-2 flex items-center gap-2">
              <UIcon name="i-lucide-cloud" class="text-green-500" />
              Climate & Environment
            </h3>
            <ul class="text-xs text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Climate Change</li>
              <li>• Water Scarcity</li>
              <li>• Food Security</li>
              <li>• Sustainable Development</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 class="font-semibold text-sm mb-2 flex items-center gap-2">
              <UIcon name="i-lucide-landmark" class="text-purple-500" />
              Governance & Democracy
            </h3>
            <ul class="text-xs text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Future of Democracy</li>
              <li>• Role of Media</li>
              <li>• Digital Polarization</li>
              <li>• Civil-Military Relations</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 class="font-semibold text-sm mb-2 flex items-center gap-2">
              <UIcon name="i-lucide-globe" class="text-orange-500" />
              International Affairs
            </h3>
            <ul class="text-xs text-gray-600 dark:text-gray-400 space-y-1">
              <li>• US-China Rivalry</li>
              <li>• Middle East Crisis</li>
              <li>• Globalization</li>
              <li>• Regional Cooperation</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 class="font-semibold text-sm mb-2 flex items-center gap-2">
              <UIcon name="i-lucide-cpu" class="text-red-500" />
              Technology & Society
            </h3>
            <ul class="text-xs text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Artificial Intelligence</li>
              <li>• Social Media Impact</li>
              <li>• Digital Divide</li>
              <li>• Cyber Security</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 class="font-semibold text-sm mb-2 flex items-center gap-2">
              <UIcon name="i-lucide-book-open" class="text-yellow-500" />
              Philosophical/Literary
            </h3>
            <ul class="text-xs text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Humanism</li>
              <li>• Fear vs Love (Machiavelli)</li>
              <li>• Knowledge vs Wisdom</li>
              <li>• Individual vs Society</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Past Paper Topics Analysis -->
      <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4">Past Paper Topics (2022-2024)</h2>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
          Recent FPSC essay topics with difficulty and category analysis:
        </p>
        
        <div class="space-y-4">
          <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 class="font-semibold text-accent mb-2">CSS 2024</h3>
            <div class="grid md:grid-cols-2 gap-2 text-sm">
              <div class="flex items-start gap-2">
                <span class="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">Economic</span>
                <span class="text-gray-600 dark:text-gray-400">Pakistan's Economic Crisis: Causes & Solutions</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs">Environment</span>
                <span class="text-gray-600 dark:text-gray-400">Climate Change: A Global Emergency</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs">Governance</span>
                <span class="text-gray-600 dark:text-gray-400">Judicial Activism vs Judicial Restraint</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded text-xs">Tech</span>
                <span class="text-gray-600 dark:text-gray-400">AI: Opportunity or Existential Threat?</span>
              </div>
            </div>
          </div>
          
          <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 class="font-semibold text-accent mb-2">CSS 2023</h3>
            <div class="grid md:grid-cols-2 gap-2 text-sm">
              <div class="flex items-start gap-2">
                <span class="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-xs">International</span>
                <span class="text-gray-600 dark:text-gray-400">Deglobalization: Myth or Reality?</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">Social</span>
                <span class="text-gray-600 dark:text-gray-400">Mental Health Crisis in Modern Society</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded text-xs">Philosophy</span>
                <span class="text-gray-600 dark:text-gray-400">"It is better to be feared than loved" - Machiavelli</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs">Environment</span>
                <span class="text-gray-600 dark:text-gray-400">Water Wars: The Next Global Conflict?</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="font-semibold text-accent mb-2">CSS 2022</h3>
            <div class="grid md:grid-cols-2 gap-2 text-sm">
              <div class="flex items-start gap-2">
                <span class="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs">Governance</span>
                <span class="text-gray-600 dark:text-gray-400">The Future of Democracy in Pakistan</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded text-xs">Tech</span>
                <span class="text-gray-600 dark:text-gray-400">Social Media: Tool for Change or Division?</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">Economic</span>
                <span class="text-gray-600 dark:text-gray-400">CPEC: Opportunities and Challenges</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded text-xs">Philosophy</span>
                <span class="text-gray-600 dark:text-gray-400">Knowledge vs. Wisdom in the Modern Age</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sample Essay Outline Template -->
      <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4">Sample Essay Outline Template</h2>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
          Use this framework for any topic. Spend 15-20 minutes planning before writing.
        </p>
        
        <div class="bg-white dark:bg-gray-900 rounded-lg p-4 font-mono text-sm">
          <p class="text-gray-500 mb-2"># Topic: "Artificial Intelligence: Opportunity or Threat?"</p>
          <div class="space-y-3 text-gray-700 dark:text-gray-300">
            <div>
              <p class="font-bold">INTRODUCTION</p>
              <p class="ml-4">- Hook: "By 2030, AI will contribute $15.7 trillion to global GDP" (PwC)</p>
              <p class="ml-4">- Context: Define AI, brief history</p>
              <p class="ml-4">- Thesis: "While AI presents risks, strategic adoption can revolutionize Pakistan's economy"</p>
            </div>
            <div>
              <p class="font-bold">BODY PARA 1: Economic Opportunities</p>
              <p class="ml-4">- Healthcare: AI diagnostics (IBM Watson example)</p>
              <p class="ml-4">- Agriculture: Precision farming (30% yield increase)</p>
              <p class="ml-4">- Data: McKinsey projections</p>
            </div>
            <div>
              <p class="font-bold">BODY PARA 2: Employment Risks</p>
              <p class="ml-4">- WEF: 85 million jobs displaced by 2025</p>
              <p class="ml-4">- But: 97 million new jobs created</p>
              <p class="ml-4">- Pakistan context: IT sector growth</p>
            </div>
            <div>
              <p class="font-bold">BODY PARA 3: Ethical Concerns</p>
              <p class="ml-4">- Bias in algorithms (COMPAS example)</p>
              <p class="ml-4">- Privacy issues (facial recognition)</p>
              <p class="ml-4">- Deepfakes and misinformation</p>
            </div>
            <div>
              <p class="font-bold">BODY PARA 4: Pakistan's Position</p>
              <p class="ml-4">- Current AI policy (2023)</p>
              <p class="ml-4">- NESCOM, NUST initiatives</p>
              <p class="ml-4">- Challenges: infrastructure, talent</p>
            </div>
            <div>
              <p class="font-bold">BODY PARA 5: Way Forward</p>
              <p class="ml-4">- Regulatory framework</p>
              <p class="ml-4">- Education reform</p>
              <p class="ml-4">- Public-private partnerships</p>
            </div>
            <div>
              <p class="font-bold">CONCLUSION</p>
              <p class="ml-4">- Summary of key points</p>
              <p class="ml-4">- Restate thesis differently</p>
              <p class="ml-4">- Quote: "AI is not about replacing humans; it's about augmenting humanity" - Satya Nadella</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Quotations Bank -->
      <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4">Essential Quotations Bank</h2>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
          Memorize 50-100 quotations. Here are some universally applicable ones:
        </p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p class="text-sm italic text-gray-700 dark:text-gray-300 mb-2">
              "The measure of a society is found in how it treats its weakest and most helpless citizens."
            </p>
            <p class="text-xs text-gray-500">— Jimmy Carter (Social Issues)</p>
          </div>
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p class="text-sm italic text-gray-700 dark:text-gray-300 mb-2">
              "Education is the most powerful weapon which you can use to change the world."
            </p>
            <p class="text-xs text-gray-500">— Nelson Mandela (Education)</p>
          </div>
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p class="text-sm italic text-gray-700 dark:text-gray-300 mb-2">
              "We do not inherit the earth from our ancestors; we borrow it from our children."
            </p>
            <p class="text-xs text-gray-500">— Native American Proverb (Environment)</p>
          </div>
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p class="text-sm italic text-gray-700 dark:text-gray-300 mb-2">
              "The price of freedom is eternal vigilance."
            </p>
            <p class="text-xs text-gray-500">— Thomas Jefferson (Democracy)</p>
          </div>
        </div>
      </div>

      <!-- Writing Tips -->
      <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4">Pro Writing Tips</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="font-semibold mb-3 text-green-600 dark:text-green-400">✓ Do This</h3>
            <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-check-circle" class="text-green-500 mt-0.5 flex-shrink-0" />
                <span>Use transition words: "Furthermore," "However," "Consequently"</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-check-circle" class="text-green-500 mt-0.5 flex-shrink-0" />
                <span>Include specific statistics with sources (WB 2024, IMF 2023)</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-check-circle" class="text-green-500 mt-0.5 flex-shrink-0" />
                <span>Present balanced arguments - acknowledge counterpoints</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-check-circle" class="text-green-500 mt-0.5 flex-shrink-0" />
                <span>Use Pakistan-specific examples and case studies</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-check-circle" class="text-green-500 mt-0.5 flex-shrink-0" />
                <span>Write clear headings for each section</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-3 text-red-600 dark:text-red-400">✗ Avoid This</h3>
            <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-x-circle" class="text-red-500 mt-0.5 flex-shrink-0" />
                <span>One-sided rants without acknowledging other views</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-x-circle" class="text-red-500 mt-0.5 flex-shrink-0" />
                <span>Generic statements without evidence</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-x-circle" class="text-red-500 mt-0.5 flex-shrink-0" />
                <span>Emotional language or personal opinions</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-x-circle" class="text-red-500 mt-0.5 flex-shrink-0" />
                <span>Ending on a negative or pessimistic note</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-x-circle" class="text-red-500 mt-0.5 flex-shrink-0" />
                <span>Copying memorized essays (examiners recognize this)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Recommended Resources -->
      <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4">Recommended Resources</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 class="font-semibold mb-2">Books</h3>
            <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Better Writing Now - Francine Galko</li>
              <li>• How to Write Good Essays - Lauren Starkey</li>
              <li>• High Scoring CSS Essays - Abrahim Shah</li>
              <li>• The Craft of Argument - Booth</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 class="font-semibold mb-2">Reading for Style</h3>
            <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Dawn Editorials (daily)</li>
              <li>• The Economist (weekly)</li>
              <li>• Foreign Affairs (quarterly)</li>
              <li>• Al Jazeera Opinions</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Practice Schedule -->
      <div class="bg-accent/10 rounded-xl p-6 mb-8">
        <h2 class="text-xl font-semibold mb-4">Weekly Practice Schedule</h2>
        <div class="grid md:grid-cols-3 gap-4 text-sm">
          <div class="p-4 bg-white dark:bg-gray-900 rounded-lg">
            <h3 class="font-semibold mb-2">Daily (30 mins)</h3>
            <p class="text-gray-600 dark:text-gray-400">Write one essay outline on a random topic</p>
          </div>
          <div class="p-4 bg-white dark:bg-gray-900 rounded-lg">
            <h3 class="font-semibold mb-2">Weekly (3 hours)</h3>
            <p class="text-gray-600 dark:text-gray-400">Write one full essay under timed conditions</p>
          </div>
          <div class="p-4 bg-white dark:bg-gray-900 rounded-lg">
            <h3 class="font-semibold mb-2">Monthly</h3>
            <p class="text-gray-600 dark:text-gray-400">Get 4 essays evaluated by a mentor</p>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex flex-wrap gap-4">
        <UButton to="/roadmap" variant="outline" icon="i-lucide-arrow-left">
          Preparation Roadmap
        </UButton>
        <UButton to="/prep/mock-tests" icon="i-lucide-arrow-right" trailing>
          Mock Tests
        </UButton>
        <UButton to="/resources" variant="outline">
          Browse Resources
        </UButton>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'CSS Essay Writing Masterclass - Complete Guide',
  description: 'Master CSS essay writing with proven techniques. Learn essay structure, thesis statements, quotations, and practice strategies from CSS toppers.',
})
</script>