# Information Architecture

## Current Site Structure

```
/
├── index.vue (Homepage)
├── about.vue
├── contact.vue
├── privacy.vue
│
├── exam/
│   ├── index.vue (Overview)
│   ├── dates.vue
│   ├── eligibility.vue
│   ├── mpt.vue
│   ├── written.vue
│   └── interview.vue
│
├── syllabus/
│   ├── index.vue
│   ├── compulsory.vue
│   ├── optional.vue
│   ├── selection.vue
│   └── trends.vue
│
├── resources/
│   ├── index.vue
│   ├── academies.vue
│   └── past-papers.vue
│
├── roadmap/
│   └── index.vue
│
├── prep/
│   ├── index.vue
│   ├── answer-writing.vue
│   ├── essay.vue
│   └── mock-tests.vue
│
├── current-affairs/
│   └── index.vue
│
└── community/
    └── index.vue
```

---

## Target Site Structure

```
/
├── index.vue (Homepage)
├── about.vue
├── contact.vue
├── privacy.vue
│
├── exam/
│   ├── index.vue (Overview)
│   ├── dates.vue
│   ├── eligibility.vue
│   ├── mpt.vue
│   ├── written.vue
│   ├── interview.vue
│   ├── psychological.vue ← NEW
│   └── medical.vue ← NEW
│
├── syllabus/
│   ├── index.vue
│   ├── compulsory.vue
│   ├── optional.vue
│   ├── selection.vue
│   └── trends.vue
│
├── subjects/ ← NEW SECTION
│   ├── index.vue (Hub page)
│   │
│   ├── [Compulsory]
│   ├── english-essay.vue
│   ├── english-precis.vue
│   ├── pakistan-affairs.vue
│   ├── current-affairs.vue
│   ├── gsa.vue
│   ├── islamic-studies.vue
│   │
│   ├── [Optional - Group I]
│   ├── international-relations.vue
│   ├── political-science.vue
│   ├── economics.vue
│   │
│   ├── [Optional - Group II]
│   ├── public-administration.vue
│   ├── computer-science.vue
│   │
│   ├── [Optional - Group IV]
│   ├── european-history.vue
│   ├── usa-history.vue
│   ├── islamic-history.vue
│   │
│   ├── [Optional - Group V]
│   ├── environmental-science.vue
│   ├── gender-studies.vue
│   │
│   ├── [Optional - Group VI]
│   ├── criminology.vue
│   ├── sociology.vue
│   ├── psychology.vue
│   ├── journalism.vue
│   └── constitutional-law.vue
│
├── resources/
│   ├── index.vue
│   ├── academies.vue
│   ├── past-papers.vue
│   ├── books.vue ← NEW (or enhance index)
│   ├── youtube.vue ← NEW
│   ├── websites.vue ← NEW
│   └── think-tanks.vue ← NEW
│
├── roadmap/
│   └── index.vue
│
├── prep/
│   ├── index.vue
│   ├── answer-writing.vue
│   ├── essay.vue
│   ├── mock-tests.vue
│   └── note-making.vue ← NEW
│
├── current-affairs/
│   └── index.vue
│
└── community/
    └── index.vue
```

---

## Navigation Structure

### Primary Navigation (Header)

```
Home | Exam ▼ | Syllabus ▼ | Subjects ▼ | Resources ▼ | Roadmap | Prep ▼
```

**Exam Dropdown:**
- Overview
- Eligibility
- Key Dates
- MPT
- Written Exam
- Interview
- Psychological Assessment
- Medical

**Syllabus Dropdown:**
- Overview
- Compulsory Subjects
- Optional Subjects
- Subject Selection Guide
- Scoring Trends

**Subjects Dropdown:**
- All Subjects (Hub)
- --- Compulsory ---
- English Essay
- English Precis
- Pakistan Affairs
- Current Affairs
- GSA
- Islamic Studies
- --- Popular Optionals ---
- International Relations
- Political Science
- Criminology
- Sociology
- Environmental Science

**Resources Dropdown:**
- All Resources
- Books
- Past Papers
- YouTube Channels
- Websites & Tools
- Think Tanks
- Academies

**Prep Dropdown:**
- Preparation Hub
- Essay Writing Guide
- Answer Writing Techniques
- Note-Making System
- Mock Tests

---

## Internal Linking Strategy

### Hub-and-Spoke Model

Each hub page links to all its spokes, and each spoke links back to hub + related spokes.

**Example: Subjects Hub → Subject Pages**

```
/subjects/index.vue links to:
├── All individual subject pages
├── /syllabus/selection (how to choose)
└── /syllabus/trends (scoring data)

/subjects/international-relations.vue links to:
├── /subjects (back to hub)
├── /subjects/political-science (related)
├── /subjects/current-affairs (overlap)
├── /resources (books for IR)
└── /syllabus/trends (scoring)
```

### Cross-Section Links

| From | To | Rationale |
|------|----|-----------|
| Subject page | Resources page | "Get the books" |
| Subject page | Trends page | "See scoring data" |
| Essay guide | Answer writing | Complementary skills |
| Roadmap | Subject pages | "What to study" |
| MPT page | Subject pages | Content overlap |
| Interview page | Subject pages | "Know your optionals" |

### Contextual Link Placement

1. **In-content links**: Natural references within text
2. **Related Pages section**: Bottom of each page
3. **Call-to-action boxes**: "Next: Choose your optionals →"
4. **Breadcrumbs**: Full path visibility

---

## Breadcrumb Structure

```
Home > Exam > MPT
Home > Subjects > International Relations
Home > Resources > YouTube Channels
Home > Prep > Essay Writing Guide
```

---

## URL Guidelines

- Lowercase, hyphenated
- No dates in URL (content should be evergreen)
- Short but descriptive
- Examples:
  - ✅ `/subjects/international-relations`
  - ✅ `/exam/psychological`
  - ❌ `/subjects/ir` (too short)
  - ❌ `/subjects/international_relations` (underscore)

---

## Page Templates Needed

1. **Subject Page Template**: Standardized layout for all subject pages
2. **Resource Category Template**: For books, YouTube, think tanks pages
3. **Exam Stage Template**: Consistent layout for exam stage pages

---

## Mobile Navigation Considerations

- Collapsible mega-menu on mobile
- Sticky header with hamburger menu
- Quick links at bottom of homepage for mobile users
- Breadcrumbs should wrap gracefully

---

## Search Considerations (Future)

When search is added:
- Index all subject pages
- Weight subject names and keywords heavily
- Include book titles and author names in search
- Tag pages with relevant CSS terminology

---

*This architecture supports the content strategy in `content-strategy.md` and enables the parallel workstreams outlined in `roadmap.md`.*
