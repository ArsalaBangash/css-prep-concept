# Project Roadmap

## Vision Statement

Transform CSS Prep Pakistan into the **definitive online resource** for CSS examination preparation—the first place aspirants go and the source other sites reference.

---

## Phase Overview

| Phase | Focus | Duration | Priority |
|-------|-------|----------|----------|
| **Phase 1** | Quick Wins & Foundation | Week 1 | 🔴 Critical |
| **Phase 2** | SEO Content Expansion | Weeks 2-3 | 🔴 Critical |
| **Phase 3** | Authority Content | Week 4 | 🟡 High |
| **Phase 4** | Polish & Optimization | Week 5 | 🟢 Medium |

---

## Phase 1: Quick Wins & Foundation (Week 1) ✅ COMPLETE

**Goal**: Immediately improve existing pages with high-value data from research.

### Deliverables

1. **MPT Page Enhancement** ✅
   - ✅ Add all 19 exam centers with cities/provinces
   - ✅ Add fee structure (Rs. 250 treasury details)
   - ✅ Add negative marking rules (-0.25 per wrong)
   - ✅ Link to FPSC official notice

2. **Resources Page Expansion** ✅
   - ✅ Add YouTube channel recommendations (Study River, CSS Club, Faisal Warraich)
   - ✅ Add think tank resources (PIDE, IPRI, ISSI, IPS)
   - ✅ Add Economic Survey of Pakistan as key resource
   - ✅ Add FPSC official links (syllabus PDF, past papers)

3. **Roadmap Page Enhancement** ✅
   - ✅ Add "7 Common Mistakes" section from research
   - ✅ Add phase-wise book checklist
   - ✅ Refine daily routine with research-backed timings

4. **Eligibility/FAQ Enhancement** ✅
   - ✅ Add age calculation clarification (Dec 31 of preceding year)
   - ✅ Add dual nationality rules
   - ✅ Add attempt counting rules with examples

5. **Syllabus Trends Enhancement** ✅
   - ✅ Add "Targeting" phenomenon explanation
   - ✅ Add scoring volatility data
   - ✅ Add regional language "hidden gems" insight

6. **Psychological Assessment Page** ✅ (NEW)
   - ✅ Created `/pages/exam/psychological.vue`
   - ✅ WAT, TAT, Raven's Matrices, Group Tasks
   - ✅ OLQs (Officer-Like Qualities) explained

---

## Phase 2: SEO Content Expansion (Weeks 2-3) 🔄 IN PROGRESS

**Goal**: Create dedicated pages for high-search-volume topics.

### Deliverables

1. **Optional Subject Pages** (Priority order based on search volume)
   - ✅ International Relations (IR) - `/pages/subjects/international-relations.vue`
   - ✅ Political Science - `/pages/subjects/political-science.vue`
   - ✅ Criminology - `/pages/subjects/criminology.vue`
   - ✅ Environmental Science - `/pages/subjects/environmental-science.vue`
   - ❌ Sociology - HIGH PRIORITY (mother of social sciences, essay support)
   - ❌ European History - HIGH PRIORITY (trending, replacing USA History)
   - ❌ History of USA - MEDIUM (include "targeting" warning)
   - ❌ Public Administration - MEDIUM (popular, relevant to job)
   - ❌ Psychology - LOWER
   - ❌ Economics - LOWER (include low-scoring warning)

2. **Compulsory Subject Deep-Dives**
   - ✅ English Essay expanded guide (past papers 2020-2024, outline template added)
   - ❌ English Precis & Composition detailed guide
   - ❌ Pakistan Affairs comprehensive guide
   - ❌ Current Affairs methodology guide
   - ❌ GSA subject breakdown (Shafiq vs Kashmiri debate)
   - ❌ Islamic Studies guide

3. **Exam Stage Pages**
   - ✅ Interview preparation comprehensive guide (enhanced with psych link)
   - ✅ Psychological Assessment detailed guide (NEW PAGE CREATED)
   - ❌ Medical examination requirements

4. **Navigation Integration** ✅
   - ✅ Added Subjects dropdown to AppHeader (desktop + mobile)
   - ✅ Created `/pages/subjects/index.vue` hub page
   - ✅ Cross-linked from exam/syllabus pages

---

## Phase 3: Authority Content (Week 4)

**Goal**: Add insider knowledge and strategic depth that competitors don't have.

### Deliverables

1. **Strategic Insights Section**
   - "Targeting" phenomenon explained (FPSC marking patterns)
   - Year-over-year scoring volatility analysis
   - Subject combination strategy guide
   - Risk assessment framework for optionals

2. **Success Framework Content**
   - Answer writing masterclass expansion
   - Note-making methodology
   - Time management during exam
   - Revision strategies

3. **Credibility Content**
   - Source all claims to research/FPSC
   - Add data visualizations for scoring trends
   - Include topper quotes and strategies

---

## Phase 4: Polish & Optimization (Week 5)

**Goal**: Ensure all content is interconnected and optimized.

### Deliverables

1. **Internal Linking Audit**
   - Every page links to 3-5 related pages
   - Breadcrumb navigation consistency
   - Related content suggestions

2. **SEO Optimization**
   - Meta descriptions for all pages
   - Heading hierarchy audit
   - Image alt text (if any)
   - Schema markup for FAQ sections

3. **User Experience**
   - Mobile responsiveness check
   - Page load optimization
   - Navigation refinement
   - Search functionality consideration

---

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Pages | 50+ indexed pages | Google Search Console |
| Keywords | Rank for 100+ CSS-related terms | SEO tools |
| Authority | Referenced by other CSS sites | Backlink monitoring |
| Completeness | Cover 100% of FPSC syllabus topics | Content audit |

---

## Parallel Workstreams

The following can be executed simultaneously by different agents:

| Stream | Pages | Status | Dependencies |
|--------|-------|--------|--------------|
| **Stream A** | Optional subjects: Sociology, European History | ❌ READY | None - can start |
| **Stream B** | Optional subjects: USA History, Public Admin | ❌ READY | None - can start |
| **Stream C** | Compulsory deep-dives: Precis, Pakistan Affairs | ❌ READY | None - can start |
| **Stream D** | Compulsory deep-dives: Current Affairs, GSA, Islamic Studies | ❌ READY | None - can start |
| **Stream E** | Quick wins on existing pages | ✅ COMPLETE | - |

### Agent Task Assignments

**Agent Task 1: Sociology Page**
- Create `/pages/subjects/sociology.vue`
- Use existing subject pages as template (see `/pages/subjects/international-relations.vue`)
- Include: syllabus breakdown, books (Giddens, Haralambos), scoring trends, essay support angle
- Research: "Mother of social sciences", consistent scoring, overlaps with Essay/Current Affairs

**Agent Task 2: European History Page**
- Create `/pages/subjects/european-history.vue`
- Include: syllabus (French Revolution → World Wars), books, scoring trends
- Research: "Trending" subject, logical flow makes it easier, replacing USA History as safer choice

**Agent Task 3: History of USA Page**
- Create `/pages/subjects/history-of-usa.vue`
- Include: syllabus, books, **prominent "targeting" warning**
- Research: Traditionally popular but heavily targeted recently with low scores

**Agent Task 4: Public Administration Page**
- Create `/pages/subjects/public-administration.vue`
- Include: syllabus, books, relevance to actual CSS job
- Research: Popular, overlaps with Governance, average scoring

**Agent Task 5: English Precis & Composition Guide**
- Create `/pages/prep/precis.vue`
- Include: technique rules, daily practice schedule, books (Wren & Martin)
- Research: Technical filter, GRE/SAT level vocabulary

**Agent Task 6: GSA Deep-Dive Guide**
- Enhance `/pages/syllabus/compulsory.vue` OR create `/pages/prep/gsa.vue`
- Include: Shafiq vs Kashmiri book debate, section weights, math tips
- Research: Only compulsory subject with "mathematical certainty" in scoring

---

*See `content-specs.md` for detailed page specifications.*
