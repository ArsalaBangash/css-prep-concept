import { describe, it, expect } from 'vitest'
import { existsSync } from 'fs'
import { join } from 'path'

const pagesDir = join(__dirname, '../pages')

// All routes that should exist based on navigation links
const requiredRoutes = [
  // Main pages
  { route: '/', file: 'index.vue' },
  
  // Exam section
  { route: '/exam', file: 'exam/index.vue' },
  { route: '/exam/eligibility', file: 'exam/eligibility.vue' },
  { route: '/exam/mpt', file: 'exam/mpt.vue' },
  { route: '/exam/written', file: 'exam/written.vue' },
  { route: '/exam/interview', file: 'exam/interview.vue' },
  { route: '/exam/dates', file: 'exam/dates.vue' },
  
  // Syllabus section
  { route: '/syllabus', file: 'syllabus/index.vue' },
  { route: '/syllabus/compulsory', file: 'syllabus/compulsory.vue' },
  { route: '/syllabus/optional', file: 'syllabus/optional.vue' },
  { route: '/syllabus/selection', file: 'syllabus/selection.vue' },
  { route: '/syllabus/trends', file: 'syllabus/trends.vue' },
  
  // Resources section
  { route: '/resources', file: 'resources/index.vue' },
  { route: '/resources/past-papers', file: 'resources/past-papers.vue' },
  { route: '/resources/academies', file: 'resources/academies.vue' },
  
  // Preparation section
  { route: '/roadmap', file: 'roadmap/index.vue' },
  { route: '/prep/essay', file: 'prep/essay.vue' },
  { route: '/prep/answer-writing', file: 'prep/answer-writing.vue' },
  { route: '/prep/mock-tests', file: 'prep/mock-tests.vue' },
  
  // Current Affairs
  { route: '/current-affairs', file: 'current-affairs/index.vue' },
  
  // Community
  { route: '/community', file: 'community/index.vue' },
  
  // Footer pages
  { route: '/about', file: 'about.vue' },
  { route: '/contact', file: 'contact.vue' },
  { route: '/privacy', file: 'privacy.vue' },
]

describe('Page Routes', () => {
  requiredRoutes.forEach(({ route, file }) => {
    it(`should have page file for route: ${route}`, () => {
      const filePath = join(pagesDir, file)
      const exists = existsSync(filePath)
      expect(exists, `Missing page file: ${file} for route: ${route}`).toBe(true)
    })
  })
})

// Summary test to show all missing pages at once
describe('Missing Pages Summary', () => {
  it('should list all missing pages', () => {
    const missingPages = requiredRoutes.filter(({ file }) => {
      const filePath = join(pagesDir, file)
      return !existsSync(filePath)
    })
    
    if (missingPages.length > 0) {
      console.log('\n📋 Missing Pages:')
      missingPages.forEach(({ route, file }) => {
        console.log(`  ❌ ${route} -> pages/${file}`)
      })
      console.log(`\nTotal missing: ${missingPages.length} pages\n`)
    } else {
      console.log('\n✅ All required pages exist!\n')
    }
    
    // This test passes but logs the missing pages
    expect(true).toBe(true)
  })
})